
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
            model='Gemini-2.5-flash',
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


@api_bp.route('/api/resume-upload', methods=['POST'])
def resume_upload():
    """
    POST /api/resume-upload  (multipart/form-data, field: "file")
    Accepts .pdf, .docx, .txt — returns { "text": "..." }
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    f = request.files['file']
    filename = f.filename or ''
    ext = filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''

    if ext not in ('pdf', 'docx', 'txt'):
        return jsonify({'error': 'Unsupported file type. Please upload a PDF, DOCX, or TXT file.'}), 400

    try:
        if ext == 'txt':
            text = f.read().decode('utf-8', errors='replace')

        elif ext == 'pdf':
            import io
            from PyPDF2 import PdfReader
            reader = PdfReader(io.BytesIO(f.read()))
            pages = [page.extract_text() or '' for page in reader.pages]
            text = '\n'.join(pages)

        elif ext == 'docx':
            import io
            from docx import Document
            doc = Document(io.BytesIO(f.read()))
            text = '\n'.join(p.text for p in doc.paragraphs)

        text = text.strip()
        if not text:
            return jsonify({'error': 'Could not extract text from the file. Try copying and pasting the text manually.'}), 422

        if len(text) > 20000:
            text = text[:20000]

        return jsonify({'text': text})

    except Exception as e:
        print(f"Resume Upload Error: {e}")
        traceback.print_exc()
        return jsonify({'error': f'Failed to parse file: {str(e)}'}), 500


@api_bp.route('/api/resume-review', methods=['POST'])
def resume_review():
    """
    POST /api/resume-review
    Body: { "resume": "...", "targetRole": "Software Engineer" }
    Returns: { overall_score, summary, strengths, improvements, missing_sections, actionable_feedback }
    """
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503

    import json as _json

    data = request.json or {}
    resume_text = data.get('resume', '').strip()
    target_role = data.get('targetRole', '').strip() or 'software engineering roles'

    if not resume_text:
        return jsonify({'error': 'No resume text provided'}), 400

    if len(resume_text) > 20000:
        return jsonify({'error': 'Resume text is too long (max 20,000 characters)'}), 400

    prompt = f"""You are an experienced technical recruiter and senior software engineer with 15+ years of hiring experience. You give brutally honest, specific, and actionable resume feedback. Do not sugarcoat — be direct about weaknesses.

The candidate is targeting: {target_role}

RESUME:
{resume_text}

Return ONLY valid JSON with this exact structure:
{{
  "overall_score": <integer 1-10>,
  "summary": "<one sentence honest overall assessment>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "improvements": ["<specific improvement 1>", "<specific improvement 2>", "<specific improvement 3>"],
  "missing_sections": ["<missing element 1>", "<missing element 2>"],
  "actionable_feedback": "<2-4 paragraphs of detailed, specific, actionable advice. Be direct. Reference specific parts of the resume. Explain what to change and why it matters to recruiters.>"
}}

Scoring guide:
1-3: Major issues, would likely be rejected immediately
4-5: Below average, needs significant work
6-7: Average, competitive but has clear gaps
8-9: Strong, stands out from most candidates
10: Exceptional, near-perfect

Be specific — avoid generic advice like "add more details". Tell them exactly what to fix."""

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-1.5-flash',
            contents=prompt,
            config=genai.types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        review_data = _json.loads(response.text)

        # Validate required keys
        required = ('overall_score', 'summary', 'strengths', 'improvements', 'missing_sections', 'actionable_feedback')
        for key in required:
            if key not in review_data:
                return jsonify({'error': f'AI response missing field: {key}'}), 500

        return jsonify(review_data)

    except Exception as e:
        print(f"Resume Review Error: {e}")
        traceback.print_exc()
        status_code = getattr(e, 'status_code', None) or getattr(e, 'status', None) or 500
        try:
            status_code = int(status_code)
        except Exception:
            status_code = 500
        return jsonify({'error': str(e)}), status_code


@api_bp.route('/api/resume-improve', methods=['POST'])
def resume_improve():
    """
    POST /api/resume-improve
    Body: { "resume": "...", "targetRole": "..." }
    Returns: { "improved_resume": "...", "changes_made": [...] }
    """
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503

    import json as _json

    data = request.json or {}
    resume_text = data.get('resume', '').strip()
    target_role = data.get('targetRole', '').strip() or 'software engineering roles'

    if not resume_text:
        return jsonify({'error': 'No resume text provided'}), 400
    if len(resume_text) > 20000:
        return jsonify({'error': 'Resume text is too long (max 20,000 characters)'}), 400

    prompt = f"""You are an elite resume writer who has helped thousands of candidates land offers at top companies. Your task is to rewrite the provided resume to be significantly stronger while preserving every real fact about the candidate (their actual companies, roles, dates, schools, and degrees must remain unchanged).

The candidate is targeting: {target_role}

ORIGINAL RESUME:
{resume_text}

Rewrite the resume with these improvements applied:
1. Replace weak/passive verbs with powerful action verbs (Led, Architected, Engineered, Drove, Spearheaded, Reduced, Increased, etc.)
2. Add quantified impact to every bullet where plausible (use realistic estimates if exact numbers aren't given — e.g. "improved load time by ~40%", "served 10K+ daily users")
3. Rewrite the professional summary/objective to be punchy, specific, and targeted to {target_role}
4. Remove filler phrases ("responsible for", "helped with", "worked on", "assisted in") — replace with direct ownership language
5. Reorganize skills section: group by category (Languages, Frameworks, Tools, Cloud, etc.) and put most relevant to {target_role} first
6. Tighten all bullets to under 2 lines — cut fluff, keep impact
7. Ensure consistent formatting throughout

Return ONLY valid JSON:
{{
  "improved_resume": "<the complete, fully rewritten resume as a plain text string — preserve all section headings, use the same overall structure, newlines for formatting>",
  "changes_made": [
    "<specific change 1 — reference actual content, e.g. 'Rewrote summary from generic to targeting {target_role} with 3 differentiators'>",
    "<specific change 2>",
    ...
  ]
}}

Rules:
- NEVER invent companies, schools, or job titles the candidate didn't have
- DO add realistic quantified metrics if the candidate's bullets lack them
- changes_made should be 5-10 specific, concrete items describing what you changed and why
- The improved_resume must be complete — do not truncate or summarize sections
- Keep all contact info, dates, and proper nouns exactly as given"""

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-1.5-flash',
            contents=prompt,
            config=genai.types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        improve_data = _json.loads(response.text)

        for key in ('improved_resume', 'changes_made'):
            if key not in improve_data:
                return jsonify({'error': f'AI response missing field: {key}'}), 500

        if not improve_data['improved_resume'].strip():
            return jsonify({'error': 'AI returned an empty resume'}), 500

        return jsonify(improve_data)

    except Exception as e:
        print(f"Resume Improve Error: {e}")
        traceback.print_exc()
        status_code = getattr(e, 'status_code', None) or getattr(e, 'status', None) or 500
        try:
            status_code = int(status_code)
        except Exception:
            status_code = 500
        return jsonify({'error': str(e)}), status_code


@api_bp.route('/api/resume-tailor', methods=['POST'])
def resume_tailor():
    """
    POST /api/resume-tailor
    Body: { "resume": "...", "jobDescription": "...", "targetRole": "..." }
    Returns ATS score, keyword gaps, bullet rewrites, summary rewrite, tailoring tips.
    """
    if not api_key:
        return jsonify({'error': 'AI assistant is not configured. Please set GEMINI_API_KEY.'}), 503

    import json as _json

    data = request.json or {}
    resume_text = data.get('resume', '').strip()
    job_description = data.get('jobDescription', '').strip()
    target_role = data.get('targetRole', '').strip() or 'the target role'

    if not resume_text:
        return jsonify({'error': 'No resume text provided'}), 400
    if not job_description:
        return jsonify({'error': 'No job description provided'}), 400
    if len(resume_text) > 20000:
        return jsonify({'error': 'Resume text is too long (max 20,000 characters)'}), 400
    if len(job_description) > 10000:
        return jsonify({'error': 'Job description is too long (max 10,000 characters)'}), 400

    prompt = f"""You are an expert resume tailoring specialist and ATS optimization consultant with 15+ years helping candidates land interviews at FAANG and top-tier companies. You have deep knowledge of Applicant Tracking Systems, recruiter psychology, and how to align resume language with job descriptions.

TARGET ROLE: {target_role}

RESUME:
{resume_text}

JOB DESCRIPTION:
{job_description}

Analyze the resume against the job description and return ONLY valid JSON with this exact structure:
{{
  "ats_score": <integer 0-100, reflecting how well the resume matches the JD for ATS purposes>,
  "ats_summary": "<one honest sentence on the overall match quality and what's holding the score back>",
  "keywords_present": ["<important JD keyword already in resume>", ...],
  "keyword_gaps": ["<important JD keyword MISSING from resume>", ...],
  "bullet_rewrites": [
    {{
      "section": "<section name, e.g., Experience, Projects>",
      "original": "<exact or close paraphrase of bullet from resume>",
      "rewritten": "<improved, JD-aligned version — use strong action verbs, quantify impact, mirror JD language>",
      "reason": "<specific reason why this rewrite improves ATS match and recruiter appeal>"
    }}
  ],
  "skills_to_highlight": ["<skill1>", ...],
  "summary_rewrite": "<a powerful, tailored 2-3 sentence professional summary written specifically for this JD — open with strongest differentiator, include key JD keywords naturally>",
  "tailoring_tips": ["<specific, actionable tip targeting this exact JD>", ...]
}}

Rules:
- keywords_present: 5-8 of the most important JD keywords you found in the resume
- keyword_gaps: 6-12 important keywords/phrases from the JD not in the resume (prioritize technical skills, methodologies, tools)
- bullet_rewrites: exactly 4-5 rewrites targeting the WEAKEST or most improvable bullets — make them dramatically better
- skills_to_highlight: 6-10 skills from the JD that the candidate should prominently feature or add
- summary_rewrite: write as if you are the candidate — use first-person-adjacent professional tone, no "I"
- tailoring_tips: exactly 5-6 tips that are SPECIFIC to this JD, not generic advice — reference actual requirements from the JD
- Be brutally specific — reference actual lines from the JD and actual bullets from the resume
"""

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-1.5-flash',
            contents=prompt,
            config=genai.types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )
        tailor_data = _json.loads(response.text)

        required = ('ats_score', 'ats_summary', 'keywords_present', 'keyword_gaps',
                    'bullet_rewrites', 'skills_to_highlight', 'summary_rewrite', 'tailoring_tips')
        for key in required:
            if key not in tailor_data:
                return jsonify({'error': f'AI response missing field: {key}'}), 500

        return jsonify(tailor_data)

    except Exception as e:
        print(f"Resume Tailor Error: {e}")
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
            model='gemini-1.5-flash',
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

