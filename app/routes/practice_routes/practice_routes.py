"""
Practice Routes - Code Execution via Piston API
================================================
Proxies code execution requests to the Piston API for multi-language support.

Supported languages: Python, JavaScript, C++, Java, Go, Rust, and 50+ more
"""

from flask import Blueprint, request, jsonify
import requests

practice_bp = Blueprint('practice', __name__, url_prefix='/api/practice')

PISTON_URL = "https://emkc.org/api/v2/piston/execute"

# Language mapping and version info
LANGUAGES = {
    'python': {'name': 'python', 'version': '3.10.0', 'extension': '.py'},
    'javascript': {'name': 'javascript', 'version': '18.15.0', 'extension': '.js'},
    'cpp': {'name': 'c++', 'version': '10.2.0', 'extension': '.cpp'},
    'c': {'name': 'c', 'version': '10.2.0', 'extension': '.c'},
    'java': {'name': 'java', 'version': '15.0.2', 'extension': '.java'},
    'go': {'name': 'go', 'version': '1.16.2', 'extension': '.go'},
    'rust': {'name': 'rust', 'version': '1.68.2', 'extension': '.rs'},
    'typescript': {'name': 'typescript', 'version': '5.0.3', 'extension': '.ts'},
    'ruby': {'name': 'ruby', 'version': '3.0.1', 'extension': '.rb'},
    'csharp': {'name': 'csharp', 'version': '6.12.0', 'extension': '.cs'},
}


@practice_bp.route('/languages', methods=['GET'])
def get_languages():
    """
    GET /api/practice/languages
    Returns list of supported languages.
    """
    return jsonify({
        'languages': [
            {'id': key, 'name': key.capitalize(), 'version': val['version']}
            for key, val in LANGUAGES.items()
        ]
    })


@practice_bp.route('/execute', methods=['POST'])
def execute_code():
    """
    POST /api/practice/execute
    Execute code using Piston API.

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
        "exitCode": 0,
        "executionTime": "0.012s"
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

    payload = {
        "language": lang_info['name'],
        "version": lang_info['version'],
        "files": [
            {
                "name": f"main{lang_info['extension']}",
                "content": code
            }
        ],
        "stdin": stdin,
        "run_timeout": 10000,  # 10 seconds max
        "compile_timeout": 10000
    }

    try:
        response = requests.post(
            PISTON_URL,
            json=payload,
            timeout=15,
            headers={'Content-Type': 'application/json'}
        )

        if response.status_code != 200:
            return jsonify({
                'success': False,
                'error': f'Piston API error: {response.status_code}'
            }), 500

        result = response.json()
        run_result = result.get('run', {})
        compile_result = result.get('compile', {})

        # Check for compilation errors (for compiled languages)
        if compile_result.get('stderr'):
            return jsonify({
                'success': False,
                'output': '',
                'error': compile_result.get('stderr', ''),
                'exitCode': compile_result.get('code', 1),
                'phase': 'compile'
            })

        return jsonify({
            'success': run_result.get('code', 0) == 0,
            'output': run_result.get('stdout', ''),
            'error': run_result.get('stderr', ''),
            'exitCode': run_result.get('code', 0),
            'phase': 'run'
        })

    except requests.exceptions.Timeout:
        return jsonify({
            'success': False,
            'error': 'Code execution timed out (10s limit)'
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

    if not test_cases:
        return jsonify({'success': False, 'error': 'No test cases provided'}), 400

    results = []
    all_passed = True

    for i, test in enumerate(test_cases):
        test_input = test.get('input', '')
        expected = test.get('expected', '')

        # Build test runner code based on language
        if language == 'python':
            full_code = f"""{code}

# Test case {i + 1}
result = {function_name}({test_input})
print(result)
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
        payload = {
            "language": lang_info['name'],
            "version": lang_info['version'],
            "files": [{"name": f"main{lang_info['extension']}", "content": full_code}],
            "stdin": "",
            "run_timeout": 5000
        }

        try:
            response = requests.post(PISTON_URL, json=payload, timeout=10)
            result = response.json()
            run_result = result.get('run', {})

            actual_output = run_result.get('stdout', '').strip()
            error_output = run_result.get('stderr', '')

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
