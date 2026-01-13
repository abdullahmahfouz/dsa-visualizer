#  DSA Visualizer

A free, interactive web-based learning tool designed to help students master Data Structures & Algorithms (DSA) concepts through hands-on visualizations. Built with React and Flask, this project provides step-by-step visualizations with in-depth explanations to make DSA learning accessible and engaging.

## Project Overview

Let's be honest - learning data structures can be tough. You read about stacks and queues in textbooks, but actually seeing how they work? That's a different story. This tool was built to bridge that gap. It's a student-focused educational tool that helps you understand complex DSA concepts by visualizing how data structures actually work in real-time. Whether you're struggling with stacks, queues, or hash tables, this tool breaks down each operation with clear, interactive demonstrations that make the concepts click.

## Live Demo

Check out the live demo to see the visualizers in action:

**[View Live Demo](https://dsa-visualizer-ksnl.onrender.com/)**

The demo includes all currently available visualizers - Stack, Queue, Linked List, and Hash Table - each with interactive controls and step-by-step explanations. Or if you prefer to run it locally, follow the installation steps below.

##  Features

Here's what makes this tool helpful for students:

- **Interactive Visualizations**: See data structures in action with real-time animations. Watch nodes change colors during traversals, see collision detection in hash tables, and observe data flow in real-time.
- **In-Depth Explanations**: Each data structure includes comprehensive explanations with key terminology, real-world analogies, complexity analysis, and use cases.
- **Animated Tree Traversals**: Binary tree traversals (Inorder, Preorder, Postorder, Level-order) with animated node highlighting and detailed step-by-step output.
- **Collision Detection**: Hash table visualization shows collision detection, linear probing, and load factor warnings in real-time.
- **AI Study Assistant**: Stuck on a concept? Ask our context-aware AI assistant powered by Google Gemini API. It provides relevant examples based on which page you're on.
- **Multiple Language Examples**: See implementations in Python, JavaScript, Java, C#, C++, and C. Because let's face it, different courses use different languages.
- **Fully Responsive**: Mobile-optimized design that works perfectly on phones, tablets, and desktops. Study wherever you're comfortable.
- **Modern React UI**: Fast, smooth interactions with a clean, dark-themed interface that's easy on the eyes during those late-night study sessions.
# DSA Visualizer

A lightweight, open-source learning tool that visualizes common data structures and algorithms. Frontend is built with React + Vite, and the backend is a Flask API that serves the production build and provides data-structure endpoints used by the visualizers.

## Quick start

Prerequisites:
- Python 3.8+ (recommended)
- Node.js 16+ and npm

Development (recommended):

1) Backend (Flask)
```bash
# from project root
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
# Default backend: http://127.0.0.1:5001 (can override with HOST/PORT env vars)
```

2) Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
# Frontend dev server: http://localhost:3000 (proxies /api -> http://127.0.0.1:5001)
```

Production build (serve from Flask):
```bash
cd frontend
npm run build
# Vite outputs to app/static/react-build by default
cd ..
source .venv/bin/activate
python app.py
# Visit http://127.0.0.1:5001 to see the built app
```

Tips:
- If you update the frontend and don't see changes, run `npm run build` again and hard-refresh the browser (Cmd+Shift+R).
- Vite dev server handles hot reload during development — useful for UI changes.

## Where files live
- Frontend: `frontend/` (React + Vite)
- Backend: `app/` (Flask app + API routes)
- Production frontend output: `app/static/react-build`

## Environment / AI assistant
- To enable AI assistant features, add `GEMINI_API_KEY` to a `.env` file in the project root (Flask reads via `python-dotenv`):

```
GEMINI_API_KEY=your_api_key_here
```

## Useful commands
- Frontend build: `cd frontend && npm run build`
- Frontend dev: `cd frontend && npm run dev`
- Run Flask: `source .venv/bin/activate && python app.py`

## API overview
The backend exposes simple REST endpoints used by the UI, for example:
- `GET /api/stack`, `POST /api/stack/push`
- `GET /api/queue`, `POST /api/queue/enqueue`
- `GET /api/hashtable_chaining`, `POST /api/hashtable_chaining/insert`

See the `app/routes/` folder for all endpoint implementations.

## Contributing
- Fork, branch, implement, test, and open a PR. Small, focused PRs are easiest to review.

## License
Open-source / educational use.

---

Created by Abdullah Mahfouz
