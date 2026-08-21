# DSA Visualizer

An interactive, open-source learning tool that brings Data Structures & Algorithms to life through real-time visualizations, side-by-side comparisons, AI-powered assistance, and a built-in coding sandbox. Built with React + Vite on the frontend and Flask on the backend.

**[Live Demo →](https://dsa-visualizer-ksnl.onrender.com/)**

---

## Features

- **30+ interactive visualizers:** step through insertions, deletions, traversals, and searches with live animations
- **Algorithm Comparison Engine:** run Bubble / Insertion / Merge / Quick Sort simultaneously on the same array; compare Linear vs Binary Search; benchmark Linear Probing vs Quadratic Probing vs Separate Chaining side by side with live metrics
- **Time-travel scrubber:** BFS and DFS visualizers include a playback scrubber, an execution trace, and a complexity readout so you can step forward and backward through the algorithm at your own pace
- **BST Interactive Challenges:** AI-generated click-to-solve challenges (search paths, leaf identification, inorder sequences) scored against a generated answer key
- **AI Study Assistant:** context-aware chat powered by Google Gemini; asks and answers questions about whichever data structure you're currently viewing
- **Coding Practice:** Monaco-based code editor with 29 curated DSA problems, AI code review (time complexity, logic score, line-by-line suggestions), and multi-language support (Python, JavaScript, Java, C++, C#, C)
- **Code Visualizer Sandbox:** write Python data structure code (Stack, Queue, LinkedList) and watch it animate step by step in real time
- **Code tabs:** every visualizer includes copy-ready implementations in six languages
- **Fully responsive:** works on phones, tablets, and desktops

---

## Visualizers

### Linear Structures
| Visualizer | Route |
|---|---|
| Stack | `/stack` |
| Queue | `/queue` |
| Linked List | `/linkedlist` |
| Skip List | `/skiplist` |

### Hash Tables
| Visualizer | Route |
|---|---|
| Linear Probing | `/hashtable_linear` |
| Quadratic Probing | `/hashtable_quadratic` |
| Separate Chaining | `/hashtable_chaining` |

### Trees
| Visualizer | Route |
|---|---|
| Binary Tree Traversals | `/binarytree` |
| Binary Search Tree (BST) | `/bst` |
| AVL Tree | `/avl` |
| Splay Tree | `/splay` |
| Treap | `/treap` |

### Heaps
| Visualizer | Route |
|---|---|
| Min Heap | `/minheap` |
| Max Heap | `/maxheap` |

### Graphs
| Visualizer | Route |
|---|---|
| Adjacency List | `/adjacency-list` |
| Adjacency Matrix | `/adjacency-matrix` |
| BFS (with time-travel) | `/bfs` |
| DFS (with time-travel) | `/dfs` |
| Dijkstra's Algorithm | `/dijkstra` |
| Bellman-Ford | `/bellman-ford` |
| Prim's MST | `/prim-mst` |
| Kruskal's MST | `/kruskal-mst` |
| Topological Sort | `/topological-sort` |

### Tools & AI
| Page | Route |
|---|---|
| Algorithm Comparison (Sorting, Searching, Hashing) | `/compare` |
| Hash Table Comparison | `/compare-hash` |
| Coding Practice + AI Code Review | `/practice` |
| Code Visualizer Sandbox (Python) | `/sandbox` |

---

## Installation

**Prerequisites:** Python 3.9+, Node.js 18+

```bash
# Backend
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

```bash
# Frontend
cd frontend
npm install
```

## Usage

### Development (recommended)

```bash
# 1. Backend
source .venv/bin/activate
python app.py
# Flask runs at http://127.0.0.1:5001
```

```bash
# 2. Frontend (separate terminal)
cd frontend
npm run dev
# Vite dev server at http://localhost:3000
# API calls are proxied to Flask automatically
```

### Production build

```bash
cd frontend && npm run build
# Vite outputs to app/static/react-build/
cd .. && source .venv/bin/activate && python app.py
# Visit http://127.0.0.1:5001
```

> If you update the frontend and don't see changes, run `npm run build` and hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`).

---

## AI Features Setup

AI features (Study Assistant, BST Challenges, Code Review) require a Google Gemini API key. Create a `.env` file in the project root:

```
GEMINI_API_KEY=your_api_key_here

# Optional, defaults to gemini-2.5-flash
GEMINI_MODEL=gemini-2.5-flash
```

Flask reads these via `python-dotenv`. Without an API key the rest of the app works normally: AI endpoints return a 503 with a helpful message.

---

## Project Structure

```
dsa-visualizer/
├── app/                        # Flask backend
│   ├── routes/                 # Data structure API endpoints
│   │   ├── pages.py            # SPA shell, server-rendered SEO meta, robots.txt, sitemap.xml
│   │   ├── seo_meta.py         # Per-route title/description table (mirrors frontend/src/data/routeMeta.js)
│   │   └── sandbox_routes.py   # Python sandbox execution engine
│   ├── api/
│   │   └── gemini_api.py       # AI routes (ask-ai, code-review, generate-challenge)
│   └── static/react-build/     # Vite production output (git-ignored)
├── frontend/                   # React + Vite
│   └── src/
│       ├── pages/              # Top-level pages (Home, CodeVisualizerSandbox, …)
│       ├── visualizers/        # One folder per data structure category
│       ├── practice/           # Coding practice page + problems
│       ├── components/         # Shared components (AIAssistant, Sidebar, TopAppBar, TimeTravelScrubber, ExecutionTrace, …)
│       ├── hooks/               # useAlgorithmHistory (time-travel playback state machine)
│       ├── utils/               # snapshotBuilder (immutable step snapshots), codeRunner
│       ├── data/                # routeMeta (per-route SEO metadata)
│       └── styles/              # CSS design tokens, base styles, page/visualizer styles
├── requirements.txt
└── app.py                      # Flask entry point
```

---

## API Overview

The Flask backend exposes REST endpoints consumed by the visualizers and AI tools:

```
# Data structures (same pattern for stack, queue, hashtable, etc.)
GET  /api/bst                       Fetch current BST state
POST /api/bst/insert                Insert a value
POST /api/bst/delete                Delete a value
GET  /api/bst/search?value=X        Search for a value

# AI
POST /api/ask-ai                    AI study assistant (context-aware chat)
POST /api/code-review               AI code review with scoring
POST /api/generate-challenge        AI-generated BST challenge

# Sandbox
POST /api/sandbox/run               Execute Python snippet, return step-by-step trace
POST /api/sandbox/scripts           Save a sandbox script
GET  /api/sandbox/scripts/<id>      Load a saved script
```

---

## Useful Commands

```bash
# Frontend
cd frontend && npm run dev        # Start dev server with HMR
cd frontend && npm run build      # Build for production

# Backend
source .venv/bin/activate
python app.py                     # Start Flask (default: port 5001)
```

---

## Contributing

Fork the repo, create a feature branch, implement your change, and open a PR. Small, focused PRs are easiest to review. If you're adding a new visualizer, follow the pattern in an existing one (e.g. `BSTVisualizer.jsx`) and add a matching Flask route in `app/routes/`.

## License

Open-source, free for educational use.

---

Created by [Abdullah Mahfouz](https://github.com/abdullahmahfouz)
