"""
Flask Application for DSA Visualizer
=====================================
Flask basics:
- @app.route() is a decorator that tells Flask which URL triggers which function
- render_template() loads HTML files from the templates/ folder
- jsonify() converts Python dicts/lists to JSON for API responses
- request.json gets JSON data sent from the frontend
"""

from flask import Flask, render_template, jsonify, request
from data_structures.stack import Stack

app = Flask(__name__)

# Create a global stack instance for our visualization
# (In a real app, you'd use sessions or a database)
stack = Stack()


# ============ Page Routes ============

@app.route("/")
def index():
    """Home page - shows navigation to all visualizers."""
    return render_template("index.html")


@app.route("/stack")
def stack_page():
    """Stack visualizer page."""
    return render_template("stack.html")


# ============ API Routes for Stack ============
# These return JSON data that JavaScript can use

@app.route("/api/stack", methods=["GET"])
def get_stack():
    """
    GET request - Retrieve current stack state.
    Returns JSON like: {"items": [1, 2, 3], "size": 3}
    """
    return jsonify({
        "items": stack.to_list(),
        "size": stack.size(),
        "top": stack.peek()
    })


@app.route("/api/stack/push", methods=["POST"])
def push_to_stack():
    """
    POST request - Add an item to the stack.
    Expects JSON body like: {"value": 42}
    """
    data = request.json  # Get JSON data from request
    value = data.get("value")  # .get() returns None if key doesn't exist
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400  # 400 = Bad Request
    
    stack.push(value)
    return jsonify({
        "message": f"Pushed {value}",
        "items": stack.to_list(),
        "size": stack.size()
    })


@app.route("/api/stack/pop", methods=["POST"])
def pop_from_stack():
    """
    POST request - Remove the top item from stack.
    Returns the popped value.
    """
    if stack.is_empty():
        return jsonify({"error": "Stack is empty!"}), 400
    
    popped = stack.pop()
    return jsonify({
        "message": f"Popped {popped}",
        "popped": popped,
        "items": stack.to_list(),
        "size": stack.size()
    })


@app.route("/api/stack/peek", methods=["GET"])
def peek_stack():
    """GET request - Look at top item without removing."""
    top = stack.peek()
    return jsonify({
        "top": top,
        "message": "Stack is empty" if top is None else f"Top element is {top}"
    })


@app.route("/api/stack/clear", methods=["POST"])
def clear_stack():
    """POST request - Clear all items from stack."""
    stack.clear()
    return jsonify({
        "message": "Stack cleared",
        "items": [],
        "size": 0
    })


if __name__ == "__main__":
    app.run(debug=True)
