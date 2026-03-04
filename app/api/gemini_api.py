
import os
from flask import Blueprint, request, jsonify
import google.genai as genai
import traceback

# Create blueprint
api_bp = Blueprint('api', __name__)

# Get Gemini API key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("Warning: GEMINI_API_KEY not set. AI assistant will not work.")


@api_bp.route('/api/ask-ai', methods=['POST'])
def ask_ai():
    # Check if API key is configured
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503
    
    data = request.json
    user_question = data.get('question', '')
    code_context = data.get('code', '')

    if not user_question:
        return jsonify({'error': 'No question provided'}), 400

    # Create the prompt with context
    prompt = f"""
    You are a Data Structures and Algorithms tutor.
    The user is asking about: {code_context}

    Question: {user_question}

    Please provide a clear, concise, and helpful answer focused on data structures and algorithms concepts.
    """

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        # Extract text from response - response.text should work, but handle if it's different
        answer_text = response.text if hasattr(response, 'text') else str(response)
        return jsonify({'answer': answer_text})

    except Exception as e:
        # Log detailed traceback server-side
        print(f"Gemini API Error: {e}")
        traceback.print_exc()

        # If the client provides an HTTP-like status, use it, otherwise default to 500
        status_code = getattr(e, 'status_code', None) or getattr(e, 'status', None) or 500

        # Ensure we return a numeric HTTP status code
        try:
            status_code_int = int(status_code)
        except Exception:
            status_code_int = 500

        # Return the exception message so the frontend can show a helpful error (e.g., quota/billing info)
        return jsonify({'error': str(e)}), status_code_int


@api_bp.route('/api/generate-challenge', methods=['POST'])
def generate_challenge():
    """
    POST /api/generate-challenge
    Given the current BST state, generate an interactive challenge.
    Body: { "tree_values": [...], "root_value": 50, "tree_dict": {...} }
    Returns: { title, description, type, target, expected_steps, hint }
    """
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503

    import json as _json

    data = request.json or {}
    tree_values = data.get('tree_values', [])
    root_value  = data.get('root_value')
    tree_dict   = data.get('tree_dict')

    if not isinstance(tree_values, list) or len(tree_values) < 2:
        return jsonify({'error': 'Tree must have at least 2 nodes to generate a challenge'}), 400

    tree_dict_str = _json.dumps(tree_dict, indent=2) if tree_dict else 'null'
    sorted_values = sorted(tree_values)

    prompt = f"""You are a DSA tutor creating an interactive challenge for a Binary Search Tree (BST) visualizer.

Tree structure (nested JSON — left/right children, null = no child):
{tree_dict_str}

All values sorted (inorder): {sorted_values}
Root value: {root_value}

Generate EXACTLY ONE challenge from the three types below. Pick the most educational type for this tree.

TYPE A — "search"
  The user clicks each node along the BST search path to a chosen target.
  Rules: pick a NON-root target that requires ≥ 2 comparisons to reach.
  expected_steps = [root → intermediate nodes → target] in exact order.

TYPE B — "identify_leaves"
  The user clicks every leaf node (left=null AND right=null) in any order.
  expected_steps = all leaf values.
  Only use this type if there are between 2 and 4 leaves.

TYPE C — "inorder_start"
  The user clicks the first 3 nodes in inorder (sorted) order.
  expected_steps = first 3 values from {sorted_values}.

Return ONLY valid JSON — no markdown, no extra text:
{{
  "title": "short title, max 7 words",
  "description": "1-2 sentence instruction (do NOT reveal which node values to click — only describe the task)",
  "type": "search" | "identify_leaves" | "inorder_start",
  "target": <number or null>,
  "expected_steps": [<array of node values>],
  "hint": "one-sentence algorithm hint"
}}

Constraints:
- Every value in expected_steps MUST appear in {tree_values}
- For "search": expected_steps[0] must equal {root_value}
- For "identify_leaves": only include nodes where BOTH left and right children are null in the tree structure above
- For "inorder_start": expected_steps = {sorted_values[:3]}
"""

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=genai.types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        challenge = _json.loads(response.text)

        # Validate required keys
        for key in ('title', 'description', 'type', 'expected_steps', 'hint'):
            if key not in challenge:
                return jsonify({'error': f'AI response missing field: {key}'}), 500

        steps = challenge['expected_steps']
        if not isinstance(steps, list) or len(steps) == 0:
            return jsonify({'error': 'AI returned empty expected_steps'}), 500

        # All step values must exist in the tree
        invalid = [v for v in steps if v not in tree_values]
        if invalid:
            return jsonify({'error': f'AI returned unknown node values: {invalid}'}), 500

        return jsonify(challenge)

    except Exception as e:
        print(f"Generate Challenge Error: {e}")
        traceback.print_exc()
        status_code = getattr(e, 'status_code', None) or getattr(e, 'status', None) or 500
        try:
            status_code = int(status_code)
        except Exception:
            status_code = 500
        return jsonify({'error': str(e)}), status_code


@api_bp.route('/api/code-review', methods=['POST'])
def code_review():
    """
    Acts as a Senior Code Reviewer to analyze user code.
    Returns structured JSON with complexity, logic score, and line-by-line optimizations.
    """
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503
    
    data = request.json
    user_code = data.get('code', '')
    language = data.get('language', 'python')

    if not user_code:
        return jsonify({'error': 'No code provided for review'}), 400

    prompt = f"""
    Act as a Senior Software Engineer and Data Structures Expert. 
    Review the following {language} code.
    
    CODE TO REVIEW:
    ```
    {user_code}
    ```

    You must return a valid JSON object with the following structure:
    {{
      "timeComplexity": "string (e.g., O(n log n))",
      "spaceComplexity": "string (e.g., O(n))",
      "logicScore": number (1-10),
      "generalFeedback": "string",
      "optimizations": [
        {{
          "startLine": number (1-indexed),
          "endLine": number (1-indexed),
          "issue": "string",
          "suggestion": "string",
          "improvedCode": "string"
        }}
      ]
    }}

    Ensure startLine and endLine accurately point to the relevant lines in the provided code.
    Be rigorous with the logic score and complexity analysis.
    """

    try:
        client = genai.Client(api_key=api_key)
        # Use generate_content with JSON constraint
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=genai.types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        
        # Parse the JSON response text
        import json
        review_data = json.loads(response.text)
        return jsonify(review_data)

    except Exception as e:
        print(f"Code Review Error: {e}")
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

