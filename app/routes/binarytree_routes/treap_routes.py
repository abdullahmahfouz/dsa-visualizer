"""
Treap API Routes
================
All routes related to the Treap data structure.

Treap operations:
- insert: Add a node with random priority, rotate to maintain heap property
- delete: Remove a node, rotating it down first
- search: Check if a value exists (BST search)
- Traversals: inorder, preorder, postorder, level-order
"""

from flask import Blueprint, jsonify, request
from ...models.binarytrees.treap import Treap

# Create Blueprint with /api/treap prefix
treap_bp = Blueprint('treap', __name__, url_prefix='/api/treap')

# Create Treap instance
treap_tree = Treap()

MAX_TREE_SIZE = 15


@treap_bp.route("", methods=["GET"])
def get_treap():
    """
    GET /api/treap
    Returns the current Treap state.
    """
    return jsonify({
        "tree": treap_tree.to_dict(),
        "tree_list": treap_tree.to_list(),
        "size": treap_tree.size(),
        "height": treap_tree.height(),
        "is_empty": treap_tree.is_empty()
    })


@treap_bp.route("/insert", methods=["POST"])
def insert_node():
    """
    POST /api/treap/insert
    Insert a node into the Treap.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if treap_tree.size() >= MAX_TREE_SIZE:
        return jsonify({"error": f"Tree is full! Maximum size is {MAX_TREE_SIZE}"}), 400

    # Check for duplicates
    if treap_tree.search(value):
        return jsonify({"error": f"Value {value} already exists in treap"}), 400

    treap_tree.insert(value)

    return jsonify({
        "message": f"Inserted {value}",
        "tree": treap_tree.to_dict(),
        "tree_list": treap_tree.to_list(),
        "size": treap_tree.size(),
        "height": treap_tree.height()
    })


@treap_bp.route("/delete", methods=["POST"])
def delete_node():
    """
    POST /api/treap/delete
    Delete a node from the Treap.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if treap_tree.is_empty():
        return jsonify({"error": "Tree is empty!"}), 400

    if not treap_tree.search(value):
        return jsonify({"error": f"Value {value} not found in treap"}), 404

    treap_tree.delete(value)

    return jsonify({
        "message": f"Deleted {value}",
        "tree": treap_tree.to_dict(),
        "tree_list": treap_tree.to_list(),
        "size": treap_tree.size(),
        "height": treap_tree.height()
    })


@treap_bp.route("/search", methods=["GET"])
def search_node():
    """
    GET /api/treap/search?value=42
    Search for a value in the Treap.
    """
    value = request.args.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    try:
        if value.isdigit() or (value.startswith('-') and value[1:].isdigit()):
            value = int(value)
        elif '.' in value and value.replace('.', '').replace('-', '').isdigit():
            value = float(value)
    except:
        pass

    found = treap_tree.search(value) is not None

    return jsonify({
        "found": found,
        "value": value,
        "message": f"Value {value} {'found' if found else 'not found'} in treap"
    })


@treap_bp.route("/inorder", methods=["GET"])
def inorder_traversal():
    """GET /api/treap/inorder"""
    traversal = treap_tree.inorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Root, Right",
        "description": "Inorder traversal (sorted order)"
    })


@treap_bp.route("/preorder", methods=["GET"])
def preorder_traversal():
    """GET /api/treap/preorder"""
    traversal = treap_tree.preorder()
    return jsonify({
        "traversal": traversal,
        "order": "Root, Left, Right",
        "description": "Preorder traversal"
    })


@treap_bp.route("/postorder", methods=["GET"])
def postorder_traversal():
    """GET /api/treap/postorder"""
    traversal = treap_tree.postorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Right, Root",
        "description": "Postorder traversal"
    })


@treap_bp.route("/levelorder", methods=["GET"])
def levelorder_traversal():
    """GET /api/treap/levelorder"""
    traversal = treap_tree.level_order()
    return jsonify({
        "traversal": traversal,
        "order": "Level by level (BFS)",
        "description": "Level-order traversal"
    })


@treap_bp.route("/clear", methods=["POST"])
def clear_tree():
    """POST /api/treap/clear"""
    treap_tree.clear()
    return jsonify({
        "message": "Treap cleared",
        "tree": None,
        "tree_list": [],
        "size": 0,
        "height": -1
    })
