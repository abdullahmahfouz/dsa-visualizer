
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

