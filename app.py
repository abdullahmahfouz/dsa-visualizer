"""
Flask Application for DSA Visualizer
=====================================
This is the main app file - it just registers blueprints.
All the actual routes are in the routes/ folder.

Blueprint = A way to organize routes in separate files
register_blueprint() = Connect a blueprint to the main app
"""

from flask import Flask
from flask_cors import CORS

# Import blueprints from routes folder
from routes.stack_routes import stack_bp
from routes.queue_routes import queue_bp

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Register blueprints - this connects all the routes to the app
app.register_blueprint(stack_bp)       # API routes: /api/stack/*
app.register_blueprint(queue_bp)       # API routes: /api/queue/*


if __name__ == "__main__":
    app.run(debug=True)

