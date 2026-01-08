# Setting Up React Frontend

The frontend has been migrated to React! Here's how to set it up:

## Prerequisites

- Node.js (v16 or higher) and npm installed
- Python virtual environment with Flask dependencies installed

## Setup Steps

1. **Install React dependencies:**
```bash
cd frontend
npm install
```

2. **Build the React app:**
```bash
npm run build
```

This will create the production build in `app/static/react-build/` which Flask will serve.

3. **Start Flask server:**
```bash
# From project root
python app.py
```

The Flask server will now serve the React app at http://127.0.0.1:5001

## Development Mode

For development with hot reloading:

1. **Terminal 1 - Start Flask API server:**
```bash
python app.py
```

2. **Terminal 2 - Start React dev server:**
```bash
cd frontend
npm run dev
```

The React dev server will run on http://localhost:3000 and proxy API requests to Flask on port 5001.

## Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── AIAssistant.jsx
│   │   └── CodeTabs.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Algorithms.jsx
│   │   ├── Contact.jsx
│   │   └── Contributions.jsx
│   ├── visualizers/      # Visualizer components
│   │   ├── StackVisualizer.jsx
│   │   ├── QueueVisualizer.jsx
│   │   ├── LinkedListVisualizer.jsx
│   │   ├── HashTableVisualizer.jsx
│   │   └── BinaryTreeVisualizer.jsx
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── styles/
│       └── main.css      # CSS imports
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- All existing CSS files are imported in `frontend/src/styles/main.css`
- API routes remain unchanged (`/api/*`)
- React Router handles all client-side routing
- Flask serves the React build in production mode
- The old HTML templates are kept but not used (can be removed later)

