"""
Queue API Routes
================
All routes related to the Queue data structure.

Queue = FIFO (First In, First Out)
- enqueue = add to back
- dequeue = remove from front
"""

from flask import Blueprint, jsonify, request
from data_structures.queues import Queue

# Create Blueprint with /api/queue prefix
queue_bp = Blueprint('queue', __name__, url_prefix='/api/queue')

# Create queue instance
queue = Queue()


@queue_bp.route("", methods=["GET"])
def get_queue():
    """
    GET /api/queue
    Returns the current queue state.
    """
    return jsonify({
        "items": queue.to_list(),
        "size": queue.size(),
        "front": queue.peek() if not queue.is_empty() else None
    })


@queue_bp.route("/enqueue", methods=["POST"])
def enqueue_item():
    """
    POST /api/queue/enqueue
    Add item to the back of the queue.
    Expects: {"value": 42}
    """
    data = request.json
    value = data.get("value")
    
    if value is None:
        return jsonify({"error": "No value provided"}), 400
    
    queue.enqueue(value)
    return jsonify({
        "message": f"Enqueued {value}",
        "items": queue.to_list(),
        "size": queue.size()
    })


@queue_bp.route("/dequeue", methods=["POST"])
def dequeue_item():
    """
    POST /api/queue/dequeue
    Remove and return the front item.
    """
    if queue.is_empty():
        return jsonify({"error": "Queue is empty!"}), 400
    
    removed = queue.dequeue()
    return jsonify({
        "message": f"Dequeued {removed}",
        "dequeued": removed,
        "items": queue.to_list(),
        "size": queue.size()
    })


@queue_bp.route("/peek", methods=["GET"])
def peek_queue():
    """
    GET /api/queue/peek
    View front item without removing.
    """
    if queue.is_empty():
        return jsonify({"front": None, "message": "Queue is empty"})
    
    front = queue.peek()
    return jsonify({
        "front": front,
        "message": f"Front element is {front}"
    })


@queue_bp.route("/clear", methods=["POST"])
def clear_queue():
    """
    POST /api/queue/clear
    Remove all items from queue.
    """
    queue.clear()
    return jsonify({
        "message": "Queue cleared",
        "items": [],
        "size": 0
    })
