"""
Skip List API Routes
====================
All routes related to the Skip List data structure.

Blueprint = A way to organize routes in separate files
url_prefix = All routes here start with /api/skiplist
"""

from flask import Blueprint, jsonify, request
from ...models.linear.skiplist import SkipList

# Create a Blueprint
skiplist_bp = Blueprint('skiplist', __name__, url_prefix='/api/skiplist')

# Create skip list instance
skiplist = SkipList()


@skiplist_bp.route("", methods=["GET"])
def get_skiplist():
    """
    GET /api/skiplist
    Returns the current skip list state with visualization data.
    """
    data = skiplist.to_visualization_data()
    return jsonify({
        "levels": data['levels'],
        "nodes": data['nodes'],
        "maxLevel": data['maxLevel'],
        "size": data['size'],
        "isEmpty": skiplist.is_empty()
    })


@skiplist_bp.route("/insert", methods=["POST"])
def insert():
    """
    POST /api/skiplist/insert
    Insert a new value into the skip list.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    try:
        value = int(value)
    except (ValueError, TypeError):
        return jsonify({"error": "Value must be an integer"}), 400

    new_level = skiplist.insert(value)

    if new_level == -1:
        return jsonify({"error": f"Value {value} already exists"}), 400

    vis_data = skiplist.to_visualization_data()
    return jsonify({
        "message": f"Inserted {value} at level {new_level}",
        "insertedLevel": new_level,
        "levels": vis_data['levels'],
        "nodes": vis_data['nodes'],
        "maxLevel": vis_data['maxLevel'],
        "size": vis_data['size']
    })


@skiplist_bp.route("/delete", methods=["POST"])
def delete():
    """
    POST /api/skiplist/delete
    Delete a value from the skip list.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    try:
        value = int(value)
    except (ValueError, TypeError):
        return jsonify({"error": "Value must be an integer"}), 400

    deleted = skiplist.delete(value)

    if not deleted:
        return jsonify({"error": f"Value {value} not found"}), 404

    vis_data = skiplist.to_visualization_data()
    return jsonify({
        "message": f"Deleted {value}",
        "deleted": value,
        "levels": vis_data['levels'],
        "nodes": vis_data['nodes'],
        "maxLevel": vis_data['maxLevel'],
        "size": vis_data['size']
    })


@skiplist_bp.route("/search", methods=["POST"])
def search():
    """
    POST /api/skiplist/search
    Search for a value in the skip list.
    Expects: {"value": 42}
    Returns search path for visualization.
    """
    data = request.json
    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    try:
        value = int(value)
    except (ValueError, TypeError):
        return jsonify({"error": "Value must be an integer"}), 400

    found, path = skiplist.search(value)

    vis_data = skiplist.to_visualization_data()
    return jsonify({
        "found": found,
        "value": value,
        "path": path,
        "message": f"Value {value} {'found' if found else 'not found'}",
        "levels": vis_data['levels'],
        "nodes": vis_data['nodes'],
        "maxLevel": vis_data['maxLevel'],
        "size": vis_data['size']
    })


@skiplist_bp.route("/clear", methods=["POST"])
def clear_skiplist():
    """
    POST /api/skiplist/clear
    Remove all elements from the skip list.
    """
    skiplist.clear()
    return jsonify({
        "message": "Skip list cleared",
        "levels": [],
        "nodes": [],
        "maxLevel": 0,
        "size": 0
    })
