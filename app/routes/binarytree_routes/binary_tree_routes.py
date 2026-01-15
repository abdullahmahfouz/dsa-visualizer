"""
Binary Tree API Routes
======================
All routes related to the Binary Tree data structure.

Binary Tree operations:
- insert: Add a node to the tree
- delete: Remove a node from the tree
- search: Check if a value exists
- Traversals: inorder, preorder, postorder, level-order
"""

from flask import Blueprint, jsonify, request
from ...models.binarytrees.binary_tree import BinaryTree

# Create Blueprint with /api/binarytree prefix
binarytree_bp = Blueprint('binarytree', __name__, url_prefix='/api/binarytree')

# Create binary tree instance
tree = BinaryTree()


@binarytree_bp.route("", methods=["GET"])
def get_binarytree():
    """
    GET /api/binarytree
    Returns the current binary tree state.
    """
    return jsonify({
        "tree": tree.to_dict(),
        "tree_list": tree.to_list(),
        "size": tree.size(),
        "height": tree.height(),
        "is_empty": tree.is_empty()
    })


@binarytree_bp.route("/insert", methods=["POST"])
def insert_node():
    """
    POST /api/binarytree/insert
    Insert a node into the tree.
    Expects: {"value": 42}
    """
    # Maximum tree size to prevent crashes
    MAX_TREE_SIZE = 20
    
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    value = data.ged


@binarytree_bp.route("/delete", methods=["POST"])
def delete_node():
    """
    POST /api/binarytree/delete
    Delete a node from the tree.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    if tree.is_empty():
        return jsonify({"error": "Tree is empty!"}), 400
    
    deleted = tree.delete(value)
    
    if not deleted:
        return jsonify({"error": f"Value {value} not found in tree"}), 404
    
    return jsonify({
        "message": f"Deleted {value}",
        "tree": tree.to_dict(),
        "tree_list": tree.to_list(),
        "size": tree.size(),
        "height": tree.height()
    })


@binarytree_bp.route("/search", methods=["GET"])
def search_node():
    """
    GET /api/binarytree/search?value=42
    Search for a value in the tree.
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
    
    found = tree.search(value)
    
    return jsonify({
        "found": found,
        "value": value,
        "message": f"Value {value} {'found' if found else 'not found'} in tree"
    })


@binarytree_bp.route("/inorder", methods=["GET"])
def inorder_traversal():
    """
    GET /api/binarytree/inorder
    Get inorder traversal (Left, Root, Right).
    """
    traversal = tree.inorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Root, Right",
        "description": "Inorder traversal"
    })


@binarytree_bp.route("/preorder", methods=["GET"])
def preorder_traversal():
    """
    GET /api/binarytree/preorder
    Get preorder traversal (Root, Left, Right).
    """
    traversal = tree.preorder()
    return jsonify({
        "traversal": traversal,
        "order": "Root, Left, Right",
        "description": "Preorder traversal"
    })


@binarytree_bp.route("/postorder", methods=["GET"])
def postorder_traversal():
    """
    GET /api/binarytree/postorder
    Get postorder traversal (Left, Right, Root).
    """
    traversal = tree.postorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Right, Root",
        "description": "Postorder traversal"
    })


@binarytree_bp.route("/levelorder", methods=["GET"])
def levelorder_traversal():
    """
    GET /api/binarytree/levelorder
    Get level-order traversal (BFS - Breadth-First Search).
    """
    traversal = tree.level_order()
    return jsonify({
        "traversal": traversal,
        "order": "Level by level (BFS)",
        "description": "Level-order traversal"
    })


@binarytree_bp.route("/clear", methods=["POST"])
def clear_tree():
    """
    POST /api/binarytree/clear
    Remove all nodes from the tree.
    """
    tree.clear()
    return jsonify({
        "message": "Tree cleared",
        "tree": None,
        "tree_list": [],
        "size": 0,
        "height": -1
    })

