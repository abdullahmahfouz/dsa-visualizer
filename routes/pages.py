"""
Page Routes
===========
Routes that serve HTML pages (not API endpoints).
These return actual web pages that users see.
"""

from flask import Blueprint, render_template

# No url_prefix - these are the main pages
pages_bp = Blueprint('pages', __name__)


@pages_bp.route("/")
def index():
    """Home page - shows all available visualizers."""
    return render_template("index.html")


@pages_bp.route("/stack")
def stack_page():
    """Stack visualizer page."""
    return render_template("stack.html")


@pages_bp.route("/queue")
def queue_page():
    """Queue visualizer page."""
    return render_template("queue.html")


@pages_bp.route("/linkedlist")
def linkedlist_page():
    """Singly Linked List visualizer page."""
    return render_template("linkedlist.html")
