"""
Splay Tree API Routes
=====================
All routes related to the Splay Tree data structure.
Self-adjusting BST where accessed elements are moved to root.

Splay Tree operations:
- insert: Add a node (new node becomes root)
- delete: Remove a node from the tree
- search: Find a value (splays it to root if found)
- Traversals: inorder, preorder, postorder, level-order
"""

from flask import Blueprint, jsonify, request
from ...models.binarytrees.splay import SplayTree

# Create Blueprint with /api/splay prefix
splay_bp = Blueprint('splay', __name__, url_prefix='/api/splay')

# Create Splay Tree instance
splay_tree = SplayTree()


@splay_bp.route("", methods=["GET"])
def get_splay():
    """
    GET /api/splay
    Returns the current Splay tree state.
    """
    return jsonify({
        "tree": splay_tree.to_dict(),
        "tree_list": splay_tree.to_list(),
        "size": splay_tree.size(),
        "height": splay_tree.height(),
        "is_empty": splay_tree.is_empty()
    })


@splay_bp.route("/insert", methods=["POST"])
def insert_node():
    """
    POST /api/splay/insert
    Insert a node into the Splay tree (becomes root).
    Expects: {"value": 42}
    """
    MAX_TREE_SIZE = 20

    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if splay_tree.size() >= MAX_TREE_SIZE:
        return jsonify({"error": f"Tree is full! Maximum size is {MAX_TREE_SIZE}"}), 400

    # Check if value already exists (without splaying)
    if splay_tree.find(value):
        return jsonify({"error": f"Value {value} already exists in tree"}), 400

    splay_tree.insert(value)

    return jsonify({
        "message": f"Inserted {value} (now at root)",
        "tree": splay_tree.to_dict(),
        "tree_list": splay_tree.to_list(),
        "size": splay_tree.size(),
        "height": splay_tree.height()
    })


@splay_bp.route("/delete", methods=["POST"])
def delete_node():
    """
    POST /api/splay/delete
    Delete a node from the Splay tree.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if splay_tree.is_empty():
        return jsonify({"error": "Tree is empty!"}), 400

    # Check if value exists (without splaying)
    if not splay_tree.find(value):
        return jsonify({"error": f"Value {value} not found in tree"}), 404

    splay_tree.delete(value)

    return jsonify({
        "message": f"Deleted {value}",
        "tree": splay_tree.to_dict(),
        "tree_list": splay_tree.to_list(),
        "size": splay_tree.size(),
        "height": splay_tree.height()
    })


@splay_bp.route("/search", methods=["GET"])
def search_node():
    """
    GET /api/splay/search?value=42
    Search for a value (splays to root if found).
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

    # Use search which splays the node to root
    found = splay_tree.search(value) is not None

    return jsonify({
        "found": found,
        "value": value,
        "message": f"Value {value} {'found and splayed to root' if found else 'not found'} in tree",
        "tree": splay_tree.to_dict()  # Return updated tree since search modifies it
    })


@splay_bp.route("/inorder", methods=["GET"])
def inorder_traversal():
    """
    GET /api/splay/inorder
    Get inorder traversal (Left, Root, Right).
    """
    traversal = splay_tree.inorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Root, Right",
        "description": "Inorder traversal (sorted order)"
    })


@splay_bp.route("/preorder", methods=["GET"])
def preorder_traversal():
    """
    GET /api/splay/preorder
    Get preorder traversal (Root, Left, Right).
    """
    traversal = splay_tree.preorder()
    return jsonify({
        "traversal": traversal,
        "order": "Root, Left, Right",
        "description": "Preorder traversal"
    })


@splay_bp.route("/postorder", methods=["GET"])
def postorder_traversal():
    """
    GET /api/splay/postorder
    Get postorder traversal (Left, Right, Root).
    """
    traversal = splay_tree.postorder()
    return jsonify({
        "traversal": traversal,
        "order": "Left, Right, Root",
        "description": "Postorder traversal"
    })


@splay_bp.route("/levelorder", methods=["GET"])
def levelorder_traversal():
    """
    GET /api/splay/levelorder
    Get level-order traversal (BFS).
    """
    traversal = splay_tree.level_order()
    return jsonify({
        "traversal": traversal,
        "order": "Level by level (BFS)",
        "description": "Level-order traversal"
    })


@splay_bp.route("/clear", methods=["POST"])
def clear_tree():
    """
    POST /api/splay/clear
    Remove all nodes from the Splay tree.
    """
    splay_tree.clear()
    return jsonify({
        "message": "Tree cleared",
        "tree": None,
        "tree_list": [],
        "size": 0,
        "height": -1
    })
