"""
Practice Routes - Code Execution via JDoodle API
=================================================
Proxies code execution requests to the JDoodle Compiler API for multi-language
support. Free tier: 200 execution credits/day, no card required.
Sign up: https://www.jdoodle.com/compiler-api

Supported languages: Python, JavaScript, C++, Java, Go, Rust, and more
"""

import os
import re

from flask import Blueprint, request, jsonify
import requests

practice_bp = Blueprint('practice', __name__, url_prefix='/api/practice')

# Pasted `code` almost always ends with its own hardcoded demo/"# Test" section
# (every starterCode and solutions[].code snippet in the problems data does).
# That demo runs and prints before our generated driver does, so we mark where
# the driver's own output begins and discard everything printed before it.
TEST_DRIVER_SENTINEL = '__DSA_TEST_DRIVER_START__'

JDOODLE_URL = "https://api.jdoodle.com/v1/execute"
JDOODLE_CLIENT_ID = os.getenv("JDOODLE_CLIENT_ID")
JDOODLE_CLIENT_SECRET = os.getenv("JDOODLE_CLIENT_SECRET")

# Language mapping - "name" is the JDoodle language code, "versionIndex" per
# https://www.jdoodle.com/docs/compiler-apis/jdoodle-api-quickstart/rest-apis/
LANGUAGES = {
    'python': {'name': 'python3', 'versionIndex': '0'},
    'javascript': {'name': 'nodejs', 'versionIndex': '0'},
    'cpp': {'name': 'cpp17', 'versionIndex': '0'},
    'c': {'name': 'c', 'versionIndex': '0'},
    'java': {'name': 'java', 'versionIndex': '0'},
    'go': {'name': 'go', 'versionIndex': '0'},
    'rust': {'name': 'rust', 'versionIndex': '0'},
    'typescript': {'name': 'typescript', 'versionIndex': '0'},
    'ruby': {'name': 'ruby', 'versionIndex': '0'},
    'csharp': {'name': 'csharp', 'versionIndex': '0'},
}


def _split_top_level_args(raw):
    """Split a comma-separated argument string on top-level commas only,
    ignoring commas nested inside [], {}, () so e.g. '[1,2], [1,null,2]'
    splits into ['[1,2]', '[1,null,2]']."""
    args = []
    depth = 0
    current = ''
    for ch in raw:
        if ch in '[{(':
            depth += 1
            current += ch
        elif ch in ']})':
            depth -= 1
            current += ch
        elif ch == ',' and depth == 0:
            args.append(current.strip())
            current = ''
        else:
            current += ch
    if current.strip():
        args.append(current.strip())
    return args


def _run_via_jdoodle(language_code, version_index, code, stdin='', timeout=15):
    """
    Submit code to JDoodle and wait for the result.
    Returns (result_dict, error_response) - error_response is None on success,
    otherwise a (jsonify(...), status_code) tuple to return directly.
    """
    if not JDOODLE_CLIENT_ID or not JDOODLE_CLIENT_SECRET:
        return None, (jsonify({
            'success': False,
            'error': 'Code execution is not configured. Set JDOODLE_CLIENT_ID and JDOODLE_CLIENT_SECRET in .env.'
        }), 503)

    payload = {
        "clientId": JDOODLE_CLIENT_ID,
        "clientSecret": JDOODLE_CLIENT_SECRET,
        "script": code,
        "language": language_code,
        "versionIndex": version_index,
        "stdin": stdin,
    }

    response = requests.post(
        JDOODLE_URL,
        json=payload,
        timeout=timeout,
        headers={'Content-Type': 'application/json'}
    )

    if response.status_code != 200:
        # JDoodle returns a JSON body with an "error" field for auth/quota
        # failures (e.g. 403 {"error":"Unauthorized Request"}) - surface it.
        try:
            detail = response.json().get('error')
        except ValueError:
            detail = None
        return None, (jsonify({
            'success': False,
            'error': f"JDoodle API error: {response.status_code}" + (f" - {detail}" if detail else "")
        }), 500)

    raw = response.json()

    # JDoodle can also embed auth/quota failures in a 200 body with a non-200 statusCode
    body_status = raw.get('statusCode')
    if body_status is not None and body_status != 200:
        return None, (jsonify({
            'success': False,
            'error': f"JDoodle API error: {body_status} - {raw.get('error') or raw.get('output') or 'request failed'}"
        }), 500)

    result = {
        'output': raw.get('output') or '',
        'error': raw.get('error') or '',
        'compilationStatus': raw.get('compilationStatus') or '',
        'isCompiled': raw.get('isCompiled', True),
        'isExecutionSuccess': raw.get('isExecutionSuccess', True),
    }
    return result, None


@practice_bp.route('/languages', methods=['GET'])
def get_languages():
    """
    GET /api/practice/languages
    Returns list of supported languages.
    """
    return jsonify({
        'languages': [
            {'id': key, 'name': key.capitalize()}
            for key in LANGUAGES.keys()
        ]
    })


@practice_bp.route('/execute', methods=['POST'])
def execute_code():
    """
    POST /api/practice/execute
    Execute code using JDoodle API.

    Request body:
    {
        "language": "python",
        "code": "print('hello')",
        "stdin": ""  (optional)
    }

    Response:
    {
        "success": true,
        "output": "hello\n",
        "error": "",
        "exitCode": 0
    }
    """
    data = request.json

    if not data:
        return jsonify({'success': False, 'error': 'No data provided'}), 400

    language = data.get('language', 'python').lower()
    code = data.get('code', '')
    stdin = data.get('stdin', '')

    if not code.strip():
        return jsonify({'success': False, 'error': 'No code provided'}), 400

    if language not in LANGUAGES:
        return jsonify({
            'success': False,
            'error': f"Unsupported language: {language}. Supported: {list(LANGUAGES.keys())}"
        }), 400

    lang_info = LANGUAGES[language]

    try:
        result, error_response = _run_via_jdoodle(
            lang_info['name'], lang_info['versionIndex'], code, stdin, timeout=15
        )
        if error_response:
            return error_response

        if not result['isCompiled']:
            return jsonify({
                'success': False,
                'output': '',
                'error': result['compilationStatus'] or result['error'] or result['output'],
                'exitCode': 1,
                'phase': 'compile'
            })

        success = result['isExecutionSuccess']

        # JDoodle doesn't separate stdout/stderr - on failure the traceback/error
        # text lands in `output`, not `error`. Route it to the error field so
        # failures surface where the UI actually shows them.
        return jsonify({
            'success': success,
            'output': result['output'] if success else '',
            'error': '' if success else (result['error'] or result['output']),
            'exitCode': 0 if success else 1,
            'phase': 'run'
        })

    except requests.exceptions.Timeout:
        return jsonify({
            'success': False,
            'error': 'Code execution timed out (15s limit)'
        }), 408
    except requests.exceptions.RequestException as e:
        return jsonify({
            'success': False,
            'error': f'Failed to connect to execution server: {str(e)}'
        }), 503
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Unexpected error: {str(e)}'
        }), 500


@practice_bp.route('/run-tests', methods=['POST'])
def run_tests():
    """
    POST /api/practice/run-tests
    Run code against multiple test cases.

    Request body:
    {
        "language": "python",
        "code": "def solution(nums): return sorted(nums)",
        "testCases": [
            {"input": "[3,1,2]", "expected": "[1,2,3]"},
            {"input": "[5,4,3]", "expected": "[3,4,5]"}
        ],
        "functionName": "solution"
    }
    """
    data = request.json

    language = data.get('language', 'python').lower()
    code = data.get('code', '')
    test_cases = data.get('testCases', [])
    function_name = data.get('functionName', 'solution')
    test_harness = data.get('testHarness')

    if not test_cases:
        return jsonify({'success': False, 'error': 'No test cases provided'}), 400

    results = []
    all_passed = True

    for i, test in enumerate(test_cases):
        test_input = test.get('input', '')
        expected = test.get('expected', '')

        # Build test runner code based on language
        if language == 'python':
            # Check for class-based input (JSON with methods/args)
            import json
            is_class_test = False
            try:
                input_data = json.loads(test_input)
                if isinstance(input_data, dict) and 'methods' in input_data and 'args' in input_data:
                    is_class_test = True
            except:
                pass

            # testCases store JS-style literals (null/true/false); convert to the
            # Python equivalents before splicing into the executed script.
            python_input = re.sub(r'\bnull\b', 'None', test_input)
            python_input = re.sub(r'\btrue\b', 'True', python_input)
            python_input = re.sub(r'\bfalse\b', 'False', python_input)

            if is_class_test:
                # Generate class driver
                methods = input_data['methods']
                args = input_data['args']
                class_name = methods[0]

                full_code = f"""import json
{code}

print("{TEST_DRIVER_SENTINEL}")

# Test Driver
def run_test():
    methods = {json.dumps(methods)}
    args = {json.dumps(args)}

    obj = {class_name}(*args[0])
    outputs = []

    for i in range(1, len(methods)):
        method = methods[i]
        arg = args[i]

        if method == 'getMin':
            outputs.append(obj.getMin(*arg))
        elif method == 'top':
            outputs.append(obj.top(*arg))
        elif method == 'pop':
            obj.pop(*arg)
        elif method == 'push':
            obj.push(*arg)
        # Add more generic handling if needed, but for MinStack this covers it

    # Filter out None values or just print list of non-void returns?
    # The expected output is [-3, 0, -2], so we should print the list of collected returns.
    print(json.dumps(outputs))

run_test()
"""
            elif test_harness:
                # Problem-specific harness (e.g. linked-list/tree problems that need
                # to build ListNode/TreeNode objects via helpers already defined in
                # `code`, and/or unwrap the result back into a plain array before
                # comparing to `expected`). `test_harness` is a snippet template with
                # {0}, {1}, ... placeholders for each top-level test-case argument,
                # and must assign its final answer to a variable named `result`.
                harness_args = _split_top_level_args(python_input)
                filled = test_harness
                for idx, arg in enumerate(harness_args):
                    filled = filled.replace('{%d}' % idx, arg)
                indented = '\n'.join('    ' + line for line in filled.split('\n'))
                full_code = f"""{code}

print("{TEST_DRIVER_SENTINEL}")

# Test case {i + 1}
try:
{indented}
    print(result)
except Exception as e:
    import sys
    print(str(e), file=sys.stderr)
    raise e
"""
            else:
                # Standard runner (Function or Class Solution)
                full_code = f"""{code}

print("{TEST_DRIVER_SENTINEL}")

# Test case {i + 1}
use_class = False
try:
    if 'Solution' in locals() or 'Solution' in globals():
        use_class = True
except:
    pass

try:
    if use_class:
        s = Solution()
        result = s.{function_name}({python_input})
    else:
        result = {function_name}({python_input})
    print(result)
except Exception as e:
    # Print error so it's captured in stderr
    import sys
    print(str(e), file=sys.stderr)
    raise e
"""
        elif language == 'javascript':
            full_code = f"""{code}

// Test case {i + 1}
const result = {function_name}({test_input});
console.log(JSON.stringify(result));
"""
        elif language == 'cpp':
            full_code = code  # User must include main() with test
        elif language == 'java':
            full_code = code  # User must include main() with test
        else:
            full_code = code

        # Execute the code
        lang_info = LANGUAGES.get(language, LANGUAGES['python'])

        try:
            result, error_response = _run_via_jdoodle(
                lang_info['name'], lang_info['versionIndex'], full_code, '', timeout=10
            )
            if error_response:
                all_passed = False
                results.append({
                    'testCase': i + 1,
                    'input': test_input,
                    'expected': expected,
                    'actual': '',
                    'error': error_response[0].get_json().get('error', 'Execution failed'),
                    'passed': False
                })
                continue

            if not result['isCompiled']:
                all_passed = False
                results.append({
                    'testCase': i + 1,
                    'input': test_input,
                    'expected': expected,
                    'actual': '',
                    'error': result['compilationStatus'] or result['error'] or result['output'],
                    'passed': False
                })
                continue

            # Discard anything printed by the pasted code's own demo/"# Test"
            # section - only what our driver printed after the sentinel counts.
            output = result['output']
            if language == 'python' and TEST_DRIVER_SENTINEL in output:
                output = output.split(TEST_DRIVER_SENTINEL, 1)[1]

            # JDoodle doesn't separate stdout/stderr - on failure the traceback
            # lands in `output`, not `error`. Route it to error_output instead.
            if result['isExecutionSuccess']:
                actual_output = output.strip()
                error_output = ''
            else:
                actual_output = ''
                error_output = result['error'] or output

            # Normalize outputs for comparison
            actual_normalized = actual_output.replace(' ', '').replace("'", '"')
            expected_normalized = expected.replace(' ', '').replace("'", '"')

            passed = actual_normalized == expected_normalized and not error_output

            if not passed:
                all_passed = False

            results.append({
                'testCase': i + 1,
                'input': test_input,
                'expected': expected,
                'actual': actual_output,
                'error': error_output,
                'passed': passed
            })

        except Exception as e:
            all_passed = False
            results.append({
                'testCase': i + 1,
                'input': test_input,
                'expected': expected,
                'actual': '',
                'error': str(e),
                'passed': False
            })

    return jsonify({
        'success': True,
        'allPassed': all_passed,
        'results': results,
        'summary': {
            'total': len(results),
            'passed': sum(1 for r in results if r['passed']),
            'failed': sum(1 for r in results if not r['passed'])
        }
    })
