"""
Hash Table API Routes
=====================
All routes related to the Hash Table data structure.

Supports both Linear and Quadratic Probing
"""

from flask import Blueprint, jsonify, request
from ...models.hashing.hashtable_linear import HashTable

# Create Blueprint with /api/hashtable prefix
hashtable_bp = Blueprint('hashtable', __name__, url_prefix='/api/hashtable')

# Create hash table instance (start with linear)
hashtable = HashTable()


@hashtable_bp.route("", methods=["GET"])
def get_hashtable():
    """
    GET /api/hashtable
    Returns the current hash table state.
    """
    return jsonify({
        "items": hashtable.to_dict(),
        "table": hashtable.to_list(),
        "size": len(hashtable),
        "capacity": hashtable.capacity,
        "load_factor": hashtable._load_factor(),
        "collision_count": hashtable.collision_count
    })


@hashtable_bp.route("/insert", methods=["POST"])
def insert_item():
    """
    POST /api/hashtable/insert
    Insert or update a key-value pair.
    Expects: {"key": "apple", "value": 10}
    """
    data = request.json
    key = data.get("key")
    value = data.get("value")
    
    if key is None or value is None:
        return jsonify({"error": "Both key and value required"}), 400
    
    result = hashtable.insert(key, value)
    # insert now returns (start_index, final_index, rehash_needed) when using the visualizer
    if isinstance(result, tuple) and len(result) == 3:
        start_index, final_index, rehash_needed = result
    else:
        # fallback for safety
        start_index, final_index = result
        rehash_needed = False

    return jsonify({
        "message": f"Inserted {key}: {value}",
        "items": hashtable.to_dict(),
        "size": len(hashtable),
        "capacity": hashtable.capacity,
        "start_index": start_index,
        "final_index": final_index,
        "rehash_needed": rehash_needed
    })


@hashtable_bp.route("/get", methods=["POST"])
def get_item():
    """
    POST /api/hashtable/get
    Get value by key.
    Expects: {"key": "apple"}
    """
    data = request.json
    key = data.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    value = hashtable.get(key)
    if value is None:
        return jsonify({"error": f"Key '{key}' not found"}), 404
    
    return jsonify({
        "key": key,
        "value": value
    })


@hashtable_bp.route("/delete", methods=["POST"])
def delete_item():
    """
    POST /api/hashtable/delete
    Delete a key-value pair.
    Expects: {"key": "apple"}
    """
    data = request.json
    key = data.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    deleted = hashtable.delete(key)
    if not deleted:
        return jsonify({"error": f"Key '{key}' not found"}), 404
    
    return jsonify({
        "message": f"Deleted {key}",
        "items": hashtable.to_dict(),
        "size": len(hashtable)
    })


@hashtable_bp.route("/clear", methods=["POST"])
def clear_hashtable():
    """
    POST /api/hashtable/clear
    Remove all key-value pairs.
    """
    hashtable.clear()
    return jsonify({
        "message": "Hash table cleared",
        "items": {},
        "size": 0,
        "collision_count": 0
    })