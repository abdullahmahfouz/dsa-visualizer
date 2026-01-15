"""
Binary Search Tree API Routes
=============================
All routes related to the Binary Search Tree data structure.

BST operations:
- insert: Add a node maintaining BST property
- delete: Remove a node from the tree
- search: Check if a value exists
- Traversals: inorder, preorder, postorder, level-order
"""

from flask import Blueprint, jsonify, request
from ...models.binarytrees.bst import BST

# Create Blueprint with /api/bst prefix
bst_bp = Blueprint('bst', __name__, url_prefix='/api/bst')

# Create BST instance
bst_tree = BST()


@bst_bp.route("", methods=["GET"])
def get_bst():
    """
    GET /api/bst
    Returns the current BST state.
    """
    return jsonify({
        "tree": bst_tree.to_dict(),
        "tree_list": bst_tree.to_list(),
        "size": bst_tree.size(),
        "height": bst_tree.height(),
        "is_empty": bst_tree.is_empty()
    })


@bst_bp.route("/insert", methods=["POST"])
def insert_node():
    """
    POST /api/bst/insert
    Insert a node into the BST.
    Expects: {"value": 42}
    """
    MAX_TREE_SIZE = 7

    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if bst_tree.size() >= MAX_TREE_SIZE:
        return jsonify({"error": f"Tree is full! Maximum size is {MAX_TREE_SIZE}"}), 400

    bst_tree.insert(value)

    return jsonify({
        "message": f"Inserted {value}",
        "tree": bst_tree.to_dict(),
        "tree_list": bst_tree.to_list(),
        "size": bst_tree.size(),
        "height": bst_tree.height()
    })


@bst_bp.route("/delete", methods=["POST"])
def delete_node():
    """
    POST /api/bst/delete
    Delete a node from the BST.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if bst_tree.is_empty():
        return jsonify({"error": "Tree is empty!"}), 400

    # Check if value exists before deleting
    if not bst_tree.search(value):
        return jsonify({"error": f"Value {value} not found in tree"}), 404

    bst_tree.delete(value)

    return jsonify({
        "message": f"Deleted {value}",
        "tree": bst_tree.to_dict(),
        "tree_list": bst_tree.to_list(),
        "size": bst_tree.size(),
        "height": bst_tree.height()
    })


@bst_bp.route("/search", methods=["GET"])
def search_node():
    """
    GET /api/bst/search?value=42
    Search for a value in the BST.
    """
    value = request.args.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    # Convert value to appropriate type (number if numeric, otherwise string)
    try:
        if value.isdigit() or (value.startswith('-') and value[1:].isdigit()):
            value = int(value)
        elif '.' in value and value.replace('.', '').replace('-', '').isdigit():
            value = float(value)
    except:
        pass  # Keep as string if conversion fails

    found = bst_tree.search(value) is not None

    return jsonify({
        "found": found,
        "value": value,
        "message": f"Value {value} {'found' if found else 'not found'} in tree"
    })

@bst_bp.route("/inorder", methods=["GET"])
def inorder_traversal():
    """
    GET /api/bst/inorder
    Get inorder traversal (Left, Root, Right).
    For BST, this returns sorted order.
    """
    traversal = bst_tree.inorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Root, Right",
        "description": "Inorder traversal (sorted order for BST)"
    })


@bst_bp.route("/preorder", methods=["GET"])
def preorder_traversal():
    """
    GET /api/bst/preorder
    Get preorder traversal (Root, Left, Right).
    """
    traversal = bst_tree.preorder()
    return jsonify({
        "traversal": traversal,
        "order": "Root, Left, Right",
        "description": "Preorder traversal"
    })


@bst_bp.route("/postorder", methods=["GET"])
def postorder_traversal():
    """
    GET /api/bst/postorder
    Get postorder traversal (Left, Right, Root).
    """
    traversal = bst_tree.postorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Right, Root",
        "description": "Postorder traversal"
    })


@bst_bp.route("/levelorder", methods=["GET"])
def levelorder_traversal():
    """
    GET /api/bst/levelorder
    Get level-order traversal (BFS - Breadth-First Search).
    """
    traversal = bst_tree.level_order()
    return jsonify({
        "traversal": traversal,
        "order": "Level by level (BFS)",
        "description": "Level-order traversal"
    })


@bst_bp.route("/clear", methods=["POST"])
def clear_tree():
    """
    POST /api/bst/clear
    Remove all nodes from the BST.
    """
    bst_tree.clear()
    return jsonify({
        "message": "Tree cleared",
        "tree": None,
        "tree_list": [],
        "size": 0,
        "height": -1
    })
