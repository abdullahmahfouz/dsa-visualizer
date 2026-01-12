from flask import Blueprint, jsonify, request
from ...models.hashing.hashtable_quadratic import QuadraticHashTable

quadratic_bp = Blueprint('hashtable_quadratic', __name__, url_prefix='/api/hashtable_quadratic')

# Create a global hash table instance
ht = QuadraticHashTable(initial_capacity=7)

@quadratic_bp.route("", methods=["GET"])
def get_hashtable():
    """
    GET /api/hashtable_quadratic
    Returns the current hash table state.
    """
    return jsonify({
        "table": ht.to_list(),
        "size": ht.size,
        "capacity": ht.capacity,
        "load_factor": ht.size / ht.capacity if ht.capacity > 0 else 0
    })

@quadratic_bp.route("/insert", methods=["POST"])
def insert_item():
    """
    POST /api/hashtable_quadratic/insert
    Insert a key-value pair.
    Expects: {"key": "apple", "value": 10}
    """
    data = request.json
    key = data.get("key")
    value = data.get("value")
    
    if key is None or value is None:
        return jsonify({"error": "Both key and value required"}), 400
    
    try:
        start_index, final_index, rehash_needed = ht.insert(key, value)
        return jsonify({
            "table": ht.to_list(),
            "size": ht.size,
            "capacity": ht.capacity,
            "load_factor": ht.size / ht.capacity if ht.capacity > 0 else 0,
            "start_index": start_index,
            "final_index": final_index,
            "rehash_needed": rehash_needed
        })
    except RuntimeError as e:
        return jsonify({"error": str(e)}), 400

@quadratic_bp.route("/get", methods=["GET"])
def get_item():
    """
    GET /api/hashtable_quadratic/get?key=apple
    Get a value by key.
    """
    key = request.args.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    value = ht.get(key)
    
    if value is None:
        return jsonify({"found": False, "error": f"Key '{key}' not found"})
    
    return jsonify({"found": True, "key": key, "value": value})

@quadratic_bp.route("/delete", methods=["POST"])
def delete_item():
    """
    POST /api/hashtable_quadratic/delete
    Delete a key-value pair.
    Expects: {"key": "apple"}
    """
    data = request.json
    key = data.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    success = ht.delete(key)
    
    if not success:
        return jsonify({"error": f"Key '{key}' not found"}), 404
    
    return jsonify({
        "table": ht.to_list(),
        "size": ht.size,
        "capacity": ht.capacity,
        "load_factor": ht.size / ht.capacity if ht.capacity > 0 else 0
    })

@quadratic_bp.route("/clear", methods=["POST"])
def clear_hashtable():
    """
    POST /api/hashtable_quadratic/clear
    Clear all items from the hash table.
    """
    ht.clear()
    return jsonify({
        "table": ht.to_list(),
        "size": ht.size,
        "capacity": ht.capacity,
        "load_factor": 0
    })
