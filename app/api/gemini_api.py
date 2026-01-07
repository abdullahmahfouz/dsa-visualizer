
import os
from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
import google.genai as genai
import traceback

# Load environment variables
load_dotenv()

# Create blueprint
api_bp = Blueprint('api', __name__)

# Configure Gemini API
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


@api_bp.route('/api/ask-ai', methods=['POST'])
def ask_ai():
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
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )
        return jsonify({'answer': response.text})

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


