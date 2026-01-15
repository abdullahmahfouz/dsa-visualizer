"""
Max Heap API Routes
===================
All routes related to the Max Heap data structure.
Complete binary tree where parent is greater than children.

Max Heap operations:
- insert: Add element with heapify up
- extract_max: Remove and return maximum element
- peek: View maximum without removing
- delete: Remove element at specific index
"""

from flask import Blueprint, jsonify, request
from ...models.heaps.max_heap import MaxHeap

# Create Blueprint with /api/maxheap prefix
maxheap_bp = Blueprint('maxheap', __name__, url_prefix='/api/maxheap')

# Create Max Heap instance
max_heap = MaxHeap(capacity=20)


@maxheap_bp.route("", methods=["GET"])
def get_heap():
    """
    GET /api/maxheap
    Returns the current Max Heap state.
    """
    return jsonify({
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "height": max_heap.height(),
        "is_empty": max_heap.is_empty(),
        "is_full": max_heap.is_full(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/insert", methods=["POST"])
def insert_element():
    """
    POST /api/maxheap/insert
    Insert an element into the Max Heap.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if max_heap.is_full():
        return jsonify({"error": "Heap is full!"}), 400

    success = max_heap.insert(value)

    if not success:
        return jsonify({"error": "Failed to insert element"}), 400

    return jsonify({
        "message": f"Inserted {value}",
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "height": max_heap.height(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/extract", methods=["POST"])
def extract_max():
    """
    POST /api/maxheap/extract
    Remove and return the maximum element.
    """
    if max_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    extracted = max_heap.extract_max()

    return jsonify({
        "message": f"Extracted maximum: {extracted}",
        "extracted": extracted,
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "height": max_heap.height(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/peek", methods=["GET"])
def peek_max():
    """
    GET /api/maxheap/peek
    View the maximum element without removing it.
    """
    if max_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    maximum = max_heap.peek()

    return jsonify({
        "max": maximum,
        "message": f"Maximum element is {maximum}"
    })


@maxheap_bp.route("/delete", methods=["POST"])
def delete_element():
    """
    POST /api/maxheap/delete
    Delete element at a specific index.
    Expects: {"index": 2}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    index = data.get("index")

    if index is None:
        return jsonify({"error": "No index provided"}), 400

    if max_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    if index < 0 or index >= max_heap.size():
        return jsonify({"error": f"Invalid index: {index}"}), 400

    value = max_heap.to_list()[index]
    success = max_heap.delete(index)

    if not success:
        return jsonify({"error": "Failed to delete element"}), 400

    return jsonify({
        "message": f"Deleted element {value} at index {index}",
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "height": max_heap.height(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/increase-key", methods=["POST"])
def increase_key():
    """
    POST /api/maxheap/increase-key
    Increase the value at a specific index.
    Expects: {"index": 2, "value": 50}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    index = data.get("index")
    new_value = data.get("value")

    if index is None or new_value is None:
        return jsonify({"error": "Index and value required"}), 400

    if max_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    if index < 0 or index >= max_heap.size():
        return jsonify({"error": f"Invalid index: {index}"}), 400

    old_value = max_heap.to_list()[index]
    success = max_heap.increase_key(index, new_value)

    if not success:
        return jsonify({"error": f"New value must be greater than {old_value}"}), 400

    return jsonify({
        "message": f"Increased key at index {index} from {old_value} to {new_value}",
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/build", methods=["POST"])
def build_heap():
    """
    POST /api/maxheap/build
    Build heap from an array.
    Expects: {"array": [5, 3, 8, 1, 2]}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    arr = data.get("array")

    if not arr or not isinstance(arr, list):
        return jsonify({"error": "Valid array required"}), 400

    max_heap.build_heap(arr)

    return jsonify({
        "message": f"Built heap from array",
        "heap": max_heap.to_list(),
        "tree": max_heap.to_dict(),
        "levels": max_heap.get_levels(),
        "size": max_heap.size(),
        "height": max_heap.height(),
        "max": max_heap.peek()
    })


@maxheap_bp.route("/clear", methods=["POST"])
def clear_heap():
    """
    POST /api/maxheap/clear
    Remove all elements from the heap.
    """
    max_heap.clear()
    return jsonify({
        "message": "Heap cleared",
        "heap": [],
        "tree": None,
        "levels": [],
        "size": 0,
        "height": -1,
        "max": None
    })
