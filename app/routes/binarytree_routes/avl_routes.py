"""
AVL Tree API Routes
===================
All routes related to the AVL Tree data structure.
Self-balancing BST with height difference at most 1.

AVL Tree operations:
- insert: Add a node with automatic balancing
- delete: Remove a node with automatic balancing
- search: Check if a value exists
- Traversals: inorder, preorder, postorder, level-order
"""

from flask import Blueprint, jsonify, request
from ...models.binarytrees.avl import AVLTree

# Create Blueprint with /api/avl prefix
avl_bp = Blueprint('avl', __name__, url_prefix='/api/avl')

# Create AVL Tree instance
avl_tree = AVLTree()


@avl_bp.route("", methods=["GET"])
def get_avl():
    """
    GET /api/avl
    Returns the current AVL tree state.
    """
    return jsonify({
        "tree": avl_tree.to_dict(),
        "tree_list": avl_tree.to_list(),
        "size": avl_tree.size(),
        "height": avl_tree.height(),
        "is_empty": avl_tree.is_empty()
    })


@avl_bp.route("/insert", methods=["POST"])
def insert_node():
    """
    POST /api/avl/insert
    Insert a node into the AVL tree with automatic balancing.
    Expects: {"value": 42}
    """
    MAX_TREE_SIZE = 20

    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if avl_tree.size() >= MAX_TREE_SIZE:
        return jsonify({"error": f"Tree is full! Maximum size is {MAX_TREE_SIZE}"}), 400

    # Check if value already exists
    if avl_tree.search(value):
        return jsonify({"error": f"Value {value} already exists in tree"}), 400

    avl_tree.insert(value)

    return jsonify({
        "message": f"Inserted {value}",
        "tree": avl_tree.to_dict(),
        "tree_list": avl_tree.to_list(),
        "size": avl_tree.size(),
        "height": avl_tree.height()
    })


@avl_bp.route("/delete", methods=["POST"])
def delete_node():
    """
    POST /api/avl/delete
    Delete a node from the AVL tree with automatic balancing.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if avl_tree.is_empty():
        return jsonify({"error": "Tree is empty!"}), 400

    # Check if value exists before deleting
    if not avl_tree.search(value):
        return jsonify({"error": f"Value {value} not found in tree"}), 404

    avl_tree.delete(value)

    return jsonify({
        "message": f"Deleted {value}",
        "tree": avl_tree.to_dict(),
        "tree_list": avl_tree.to_list(),
        "size": avl_tree.size(),
        "height": avl_tree.height()
    })


@avl_bp.route("/search", methods=["GET"])
def search_node():
    """
    GET /api/avl/search?value=42
    Search for a value in the AVL tree.
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

    found = avl_tree.search(value) is not None

    return jsonify({
        "found": found,
        "value": value,
        "message": f"Value {value} {'found' if found else 'not found'} in tree"
    })


@avl_bp.route("/inorder", methods=["GET"])
def inorder_traversal():
    """
    GET /api/avl/inorder
    Get inorder traversal (Left, Root, Right).
    """
    traversal = avl_tree.inorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Root, Right",
        "description": "Inorder traversal (sorted order)"
    })


@avl_bp.route("/preorder", methods=["GET"])
def preorder_traversal():
    """
    GET /api/avl/preorder
    Get preorder traversal (Root, Left, Right).
    """
    traversal = avl_tree.preorder()
    return jsonify({
        "traversal": traversal,
        "order": "Root, Left, Right",
        "description": "Preorder traversal"
    })


@avl_bp.route("/postorder", methods=["GET"])
def postorder_traversal():
    """
    GET /api/avl/postorder
    Get postorder traversal (Left, Right, Root).
    """
    traversal = avl_tree.postorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Right, Root",
        "description": "Postorder traversal"
    })


@avl_bp.route("/levelorder", methods=["GET"])
def levelorder_traversal():
    """
    GET /api/avl/levelorder
    Get level-order traversal (BFS).
    """
    traversal = avl_tree.level_order()
    return jsonify({
        "traversal": traversal,
        "order": "Level by level (BFS)",
        "description": "Level-order traversal"
    })


@avl_bp.route("/clear", methods=["POST"])
def clear_tree():
    """
    POST /api/avl/clear
    Remove all nodes from the AVL tree.
    """
    avl_tree.clear()
    return jsonify({
        "message": "Tree cleared",
        "tree": None,
        "tree_list": [],
        "size": 0,
        "height": -1
    })
