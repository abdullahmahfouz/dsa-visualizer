"""
Page Routes
===========
Routes that serve HTML pages (not API endpoints).
These return actual web pages that users see.
"""

from flask import Blueprint, send_from_directory, send_file
import os

# No url_prefix - these are the main pages
pages_bp = Blueprint('pages', __name__)

# Path to React build directory
REACT_BUILD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'static', 'react-build')


@pages_bp.route("/")
def index():
    """Home page - serves React app."""
    index_path = os.path.join(REACT_BUILD_DIR, 'index.html')
    if os.path.exists(index_path):
        return send_file(index_path)
    # Fallback if React build doesn't exist yet
    return "React build not found. Please run 'npm run build' in the frontend directory.", 404


@pages_bp.route("/<path:path>")
def serve_react_app(path):
    """Serve React app for all routes (React Router handles routing)."""
    # Don't intercept API routes - they're handled by other blueprints
    if path.startswith('api/'):
        # Return 404 to let Flask know this route doesn't handle api paths
        from flask import abort
        abort(404)

    # Check if it's a static file request (assets, images, etc.)
    if path.startswith('assets/') or path.endswith(('.js', '.css', '.json', '.png', '.jpg', '.svg', '.ico', '.woff', '.woff2', '.ttf')):
        file_path = os.path.join(REACT_BUILD_DIR, path)
        if os.path.exists(file_path):
            response = send_from_directory(REACT_BUILD_DIR, path)
            # Cache static assets for 1 year (immutable)
            response.headers['Cache-Control'] = 'public, max-age=31536000, immutable'
            return response

    # For all other routes, serve index.html (React Router will handle routing)
    index_path = os.path.join(REACT_BUILD_DIR, 'index.html')
    if os.path.exists(index_path):
        response = send_file(index_path)
        # Don't cache index.html to ensure users always get the latest version
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        return response

    return "React build not found. Please run 'npm run build' in the frontend directory.", 404

