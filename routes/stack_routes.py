"""
Stack API Routes
================
All routes related to the Stack data structure.

Blueprint = A way to organize routes in separate files
url_prefix = All routes here start with /api/stack
"""

from flask import Blueprint, jsonify, request
from data_structures.stack import Stack

# Create a Blueprint - like a mini Flask app
# 'stack' = name of blueprint
# __name__ = current module name
# url_prefix = all routes here will start with /api/stack
stack_bp = Blueprint('stack', __name__, url_prefix='/api/stack')

# Create stack instance for this blueprint
stack = Stack()


@stack_bp.route("", methods=["GET"])
def get_stack():
    """
    GET /api/stack
    Returns the current stack state.
    """
    return jsonify({
        "items": stack.to_list(),
        "size": stack.size(),
        "top": stack.peek()
    })


@stack_bp.route("/push", methods=["POST"])
def push_to_stack():
    """
    POST /api/stack/push
    Add an item to the stack.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    stack.push(value)
    return jsonify({
        "message": f"Pushed {value}",
        "items": stack.to_list(),
        "size": stack.size()
    })


@stack_bp.route("/pop", methods=["POST"])
def pop_from_stack():
    """
    POST /api/stack/pop
    Remove and return the top item.
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


@stack_bp.route("/peek", methods=["GET"])
def peek_stack():
    """
    GET /api/stack/peek
    View top item without removing.
    """
    top = stack.peek()
    return jsonify({
        "top": top,
        "message": "Stack is empty" if top is None else f"Top element is {top}"
    })


@stack_bp.route("/clear", methods=["POST"])
def clear_stack():
    """
    POST /api/stack/clear
    Remove all items from stack.
    """
    stack.clear()
    return jsonify({
        "message": "Stack cleared",
        "items": [],
        "size": 0
    })
