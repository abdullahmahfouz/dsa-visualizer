"""
Min Heap API Routes
===================
All routes related to the Min Heap data structure.
Complete binary tree where parent is smaller than children.

Min Heap operations:
- insert: Add element with heapify up
- extract_min: Remove and return minimum element
- peek: View minimum without removing
- delete: Remove element at specific index
"""

from flask import Blueprint, jsonify, request
from ...models.heaps.min_heap import MinHeap

# Create Blueprint with /api/minheap prefix
minheap_bp = Blueprint('minheap', __name__, url_prefix='/api/minheap')

# Create Min Heap instance
min_heap = MinHeap(capacity=20)


@minheap_bp.route("", methods=["GET"])
def get_heap():
    """
    GET /api/minheap
    Returns the current Min Heap state.
    """
    return jsonify({
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "height": min_heap.height(),
        "is_empty": min_heap.is_empty(),
        "is_full": min_heap.is_full(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/insert", methods=["POST"])
def insert_element():
    """
    POST /api/minheap/insert
    Insert an element into the Min Heap.
    Expects: {"value": 42}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    value = data.get("value")

    if value is None:
        return jsonify({"error": "No value provided"}), 400

    if min_heap.is_full():
        return jsonify({"error": "Heap is full!"}), 400

    success = min_heap.insert(value)

    if not success:
        return jsonify({"error": "Failed to insert element"}), 400

    return jsonify({
        "message": f"Inserted {value}",
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "height": min_heap.height(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/extract", methods=["POST"])
def extract_min():
    """
    POST /api/minheap/extract
    Remove and return the minimum element.
    """
    if min_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    extracted = min_heap.extract_min()

    return jsonify({
        "message": f"Extracted minimum: {extracted}",
        "extracted": extracted,
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "height": min_heap.height(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/peek", methods=["GET"])
def peek_min():
    """
    GET /api/minheap/peek
    View the minimum element without removing it.
    """
    if min_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    minimum = min_heap.peek()

    return jsonify({
        "min": minimum,
        "message": f"Minimum element is {minimum}"
    })


@minheap_bp.route("/delete", methods=["POST"])
def delete_element():
    """
    POST /api/minheap/delete
    Delete element at a specific index.
    Expects: {"index": 2}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    index = data.get("index")

    if index is None:
        return jsonify({"error": "No index provided"}), 400

    if min_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    if index < 0 or index >= min_heap.size():
        return jsonify({"error": f"Invalid index: {index}"}), 400

    value = min_heap.to_list()[index]
    success = min_heap.delete(index)

    if not success:
        return jsonify({"error": "Failed to delete element"}), 400

    return jsonify({
        "message": f"Deleted element {value} at index {index}",
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "height": min_heap.height(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/decrease-key", methods=["POST"])
def decrease_key():
    """
    POST /api/minheap/decrease-key
    Decrease the value at a specific index.
    Expects: {"index": 2, "value": 5}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    index = data.get("index")
    new_value = data.get("value")

    if index is None or new_value is None:
        return jsonify({"error": "Index and value required"}), 400

    if min_heap.is_empty():
        return jsonify({"error": "Heap is empty!"}), 400

    if index < 0 or index >= min_heap.size():
        return jsonify({"error": f"Invalid index: {index}"}), 400

    old_value = min_heap.to_list()[index]
    success = min_heap.decrease_key(index, new_value)

    if not success:
        return jsonify({"error": f"New value must be smaller than {old_value}"}), 400

    return jsonify({
        "message": f"Decreased key at index {index} from {old_value} to {new_value}",
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/build", methods=["POST"])
def build_heap():
    """
    POST /api/minheap/build
    Build heap from an array.
    Expects: {"array": [5, 3, 8, 1, 2]}
    """
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    arr = data.get("array")

    if not arr or not isinstance(arr, list):
        return jsonify({"error": "Valid array required"}), 400

    min_heap.build_heap(arr)

    return jsonify({
        "message": f"Built heap from array",
        "heap": min_heap.to_list(),
        "tree": min_heap.to_dict(),
        "levels": min_heap.get_levels(),
        "size": min_heap.size(),
        "height": min_heap.height(),
        "min": min_heap.peek()
    })


@minheap_bp.route("/clear", methods=["POST"])
def clear_heap():
    """
    POST /api/minheap/clear
    Remove all elements from the heap.
    """
    min_heap.clear()
    return jsonify({
        "message": "Heap cleared",
        "heap": [],
        "tree": None,
        "levels": [],
        "size": 0,
        "height": -1,
        "min": None
    })
