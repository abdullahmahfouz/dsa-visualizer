from flask import Blueprint, jsonify, request
from ...models.hashing.hashtable_chaining import HashTableChaining 

hs_bp = Blueprint('hashtable_chaining', __name__, url_prefix='/api/hashtable_chaining')

hs = HashTableChaining(initial_capacity=7)

@hs_bp.route("", methods=["GET"])
def get_hashtable_chaining():
    """
    GET /api/hashtable_chaining
    Returns the current hash table state.
    """
    return jsonify({
        "table": hs.to_list(),
        "size": hs.size,
        "capacity": hs.capacity,
        "load_factor": hs.size / hs.capacity if hs.capacity > 0 else 0,
        "collision_count": hs.get_collision_count()
    })

@hs_bp.route("/insert", methods=["POST"])
def insert_item():
    """
    POST /api/hashtable_chaining/insert
    Insert a key-value pair.
    Expects: {"key": "apple", "value": 10}
    """
    data = request.json
    key = data.get("key")
    value = data.get("value")

    if key is None or value is None:
        return jsonify({"error": "Both key and value required"}), 400

    # Calculate hash index
    index = hs._hash(key)

    # Check if this will be a collision (bucket not empty AND key doesn't exist)
    existing_value = hs.search(key)
    is_update = existing_value is not None
    collision = hs.table[index] is not None and not is_update

    # Insert or update the key-value pair
    hs.insert(key, value)

    return jsonify({
        "table": hs.to_list(),
        "size": hs.size,
        "capacity": hs.capacity,
        "load_factor": hs.size / hs.capacity if hs.capacity > 0 else 0,
        "collision_count": hs.get_collision_count(),
        "index": index,
        "collision": collision,
        "updated": is_update
    })


@hs_bp.route("/search", methods=["POST"])
def search_item():
    """
    POST /api/hashtable_chaining/search
    Search for a value by key.
    Expects: {"key": "apple"}
    """
    data = request.json
    key = data.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    value = hs.search(key)
    
    if value is None:
        return jsonify({"error": f"Key '{key}' not found"}), 404
    
    return jsonify({"key": key, "value": value})


@hs_bp.route("/delete", methods=["POST"])
def delete_item():
    """
    POST /api/hashtable_chaining/delete
    Delete a key-value pair.
    Expects: {"key": "apple"}
    """
    data = request.json
    key = data.get("key")
    
    if key is None:
        return jsonify({"error": "Key required"}), 400
    
    success = hs.delete(key)
    
    if not success:
        return jsonify({"error": f"Key '{key}' not found"}), 404
    
    return get_hashtable_chaining()


@hs_bp.route("/clear", methods=["POST"])
def clear_hashtable():
    """
    POST /api/hashtable_chaining/clear
    Clear all items from the hash table.
    """
    global hs
    hs = HashTableChaining(initial_capacity=7)
    return get_hashtable_chaining()


@hs_bp.route("/rehash", methods=["POST"])
def rehash_hashtable():
    """
    POST /api/hashtable_chaining/rehash
    Rehash the table to a new capacity.
    Optionally pass {"new_capacity": 14} to specify the new size.
    """
    data = request.json or {}
    new_capacity = data.get("new_capacity")

    if new_capacity is not None and (not isinstance(new_capacity, int) or new_capacity < 1):
        return jsonify({"error": "new_capacity must be a positive integer"}), 400

    result = hs.rehash(new_capacity)

    return jsonify({
        "table": hs.to_list(),
        "size": hs.size,
        "capacity": hs.capacity,
        "load_factor": hs.size / hs.capacity if hs.capacity > 0 else 0,
        "collision_count": hs.get_collision_count(),
        "rehash_info": result
    })


@hs_bp.route("/get", methods=["GET"])
def get_item():
    """
    GET /api/hashtable_chaining/get?key=apple
    Get a value by key.
    """
    key = request.args.get("key")

    if key is None:
        return jsonify({"error": "Key required"}), 400

    value = hs.search(key)

    if value is None:
        return jsonify({"found": False, "key": key})

    return jsonify({"found": True, "key": key, "value": value})
