import os
from app import app

if __name__ == "__main__":
    # Allow configuring host/port via environment variables.
    # Default to 127.0.0.1:5001 to avoid macOS services that may use 5000.
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", "5001"))
    debug = os.getenv("FLASK_DEBUG", "False").lower() in ("1", "true", "yes")

    app.run(host=host, port=port, debug=debug)

