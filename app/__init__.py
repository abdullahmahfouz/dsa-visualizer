"""
Flask Application for DSA Visualizer
=====================================
This is the main app file - it just registers blueprints.
All the actual routes are in the routes/ folder.

Blueprint = A way to organize routes in separate files
register_blueprint() = Connect a blueprint to the main app
"""

from dotenv import load_dotenv
load_dotenv()  # Load environment variables before anything else

from flask import Flask, send_from_directory
from flask_cors import CORS

# Import blueprints from routes folder
from .routes.pages import pages_bp
from .routes.stack_routes import stack_bp
from .routes.queue_routes import queue_bp
from .routes.singly_linkedlist_routes import linkedlist_bp
from .routes.hashtable_routes import hashtable_bp
from .routes.binary_tree_routes import binarytree_bp
from .api.gemini_api import api_bp


app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)  # Enable CORS for React frontend

# Serve static files from React build
@app.route('/favicon.svg')
def favicon():
    return send_from_directory(app.static_folder, 'favicon.svg')

# Register blueprints - this connects all the routes to the app
app.register_blueprint(pages_bp)       # Page routes: /, /stack, /queue, /linkedlist
app.register_blueprint(stack_bp)       # API routes: /api/stack/*
app.register_blueprint(queue_bp)       # API routes: /api/queue/*
app.register_blueprint(linkedlist_bp)  # API routes: /api/linkedlist/*
app.register_blueprint(hashtable_bp)   # API routes: /api/hashtable/*
app.register_blueprint(binarytree_bp)  # API routes: /api/binarytree/*
app.register_blueprint(api_bp)         # AI API routes: /api/ask-ai

