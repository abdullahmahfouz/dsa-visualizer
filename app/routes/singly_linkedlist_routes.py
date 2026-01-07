"""
Singly Linked List API Routes
==============================
All routes related to the Singly Linked List data structure.

Blueprint = A way to organize routes in separate files
url_prefix = All routes here start with /api/linkedlist
"""

from flask import Blueprint, jsonify, request
from ..models.singly_linkedlist import SinglyLinkedList

# Create a Blueprint
linkedlist_bp = Blueprint('singly_linkedlist', __name__, url_prefix='/api/linkedlist')

# Create linked list instance
linkedlist = SinglyLinkedList()


@linkedlist_bp.route("", methods=["GET"])
def get_linkedlist():
    """
    GET /api/linkedlist
    Returns the current linked list state.
    """
    return jsonify({
        "items": linkedlist.to_list(),
        "size": linkedlist.size(),
        "isEmpty": linkedlist.is_empty()
    })


@linkedlist_bp.route("/insert/head", methods=["POST"])
def insert_at_head():
    """
    POST /api/linkedlist/insert/head
    Insert a new node at the beginning.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    linkedlist.insert_at_head(value)
    return jsonify({
        "message": f"Inserted {value} at head",
        "items": linkedlist.to_list(),
        "size": linkedlist.size()
    })


@linkedlist_bp.route("/insert/tail", methods=["POST"])
def insert_at_tail():
    """
    POST /api/linkedlist/insert/tail
    Insert a new node at the end.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    linkedlist.insert_at_tail(value)
    return jsonify({
        "message": f"Inserted {value} at tail",
        "items": linkedlist.to_list(),
        "size": linkedlist.size()
    })


@linkedlist_bp.route("/insert/index", methods=["POST"])
def insert_at_index():
    """
    POST /api/linkedlist/insert/index
    Insert a new node at specific index.
    Expects: {"value": 42, "index": 1}
    """
    data = request.json
    value = data.get("value")
    index = data.get("index")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    if index is None:
        return jsonify({"error": "No index provided"}), 400
    
    try:
        linkedlist.insert_at_index(index, value)
        return jsonify({
            "message": f"Inserted {value} at index {index}",
            "items": linkedlist.to_list(),
            "size": linkedlist.size()
        })
    except IndexError as e:
        return jsonify({"error": str(e)}), 400


@linkedlist_bp.route("/delete/head", methods=["POST"])
def delete_at_head():
    """
    POST /api/linkedlist/delete/head
    Remove and return the first node.
    """
    if linkedlist.is_empty():
        return jsonify({"error": "List is empty!"}), 400
    
    deleted = linkedlist.delete_at_head()
    return jsonify({
        "message": f"Deleted {deleted} from head",
        "deleted": deleted,
        "items": linkedlist.to_list(),
        "size": linkedlist.size()
    })


@linkedlist_bp.route("/delete/tail", methods=["POST"])
def delete_at_tail():
    """
    POST /api/linkedlist/delete/tail
    Remove and return the last node.
    """
    if linkedlist.is_empty():
        return jsonify({"error": "List is empty!"}), 400
    
    deleted = linkedlist.delete_at_tail()
    return jsonify({
        "message": f"Deleted {deleted} from tail",
        "deleted": deleted,
        "items": linkedlist.to_list(),
        "size": linkedlist.size()
    })


@linkedlist_bp.route("/delete/index", methods=["POST"])
def delete_at_index():
    """
    POST /api/linkedlist/delete/index
    Remove and return node at specific index.
    Expects: {"index": 1}
    """
    data = request.json
    index = data.get("index")
    
    if index is None:
        return jsonify({"error": "No index provided"}), 400
    
    try:
        deleted = linkedlist.delete_at_index(index)
        return jsonify({
            "message": f"Deleted {deleted} at index {index}",
            "deleted": deleted,
            "items": linkedlist.to_list(),
            "size": linkedlist.size()
        })
    except IndexError as e:
        return jsonify({"error": str(e)}), 400


@linkedlist_bp.route("/search", methods=["POST"])
def search():
    """
    POST /api/linkedlist/search
    Search for a value and return its index.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    index = linkedlist.search(value)
    if index == -1:
        return jsonify({
            "found": False,
            "message": f"Value {value} not found",
            "index": -1
        })
    return jsonify({
        "found": True,
        "message": f"Value {value} found at index {index}",
        "index": index
    })


@linkedlist_bp.route("/get/<int:index>", methods=["GET"])
def get_at_index(index):
    """
    GET /api/linkedlist/get/<index>
    Get the value at a specific index.
    """
    try:
        value = linkedlist.get(index)
        return jsonify({
            "value": value,
            "index": index,
            "message": f"Value at index {index} is {value}"
        })
    except IndexError as e:
        return jsonify({"error": str(e)}), 400


@linkedlist_bp.route("/clear", methods=["POST"])
def clear_linkedlist():
    """
    POST /api/linkedlist/clear
    Remove all nodes from the list.
    """
    linkedlist.clear()
    return jsonify({
        "message": "Linked list cleared",
        "items": [],
        "size": 0
    })