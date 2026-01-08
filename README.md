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
- **Custom Logo & Branding**: Professional design with custom SVG logo representing data structures and algorithms.

##  Implemented Data Structures

###  Currently Available

#### Linear Data Structures
- **Stack** - LIFO operations with visual stack building
- **Queue** - FIFO operations with horizontal flow visualization
- **Linked List** - Singly linked list with insert, delete, and search operations

#### Hash-Based Structures
- **Hash Table** - Linear probing with collision detection, visual highlighting, and load factor tracking

#### Tree Structures
- **Binary Tree Traversals** - Complete implementation with:
  - Inorder Traversal (Left → Root → Right)
  - Preorder Traversal (Root → Left → Right)
  - Postorder Traversal (Left → Right → Root)
  - Level Order Traversal (BFS)
  - Animated node highlighting during traversal
  - Real-time sequence output
  - Complexity analysis

###  Coming Soon
- Channing for hashtables
- Binary Search Tree (BST)
- AVL Tree (Self-balancing)
- Splay Tree
- Min Heap & Max Heap
- Graph Algorithms (BFS, DFS)
- Sorting Algorithms Visualizer

## Tech Stack

### Frontend
- **Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **Styling**: Modular CSS with responsive design
- **Icons**: Lucide React
- **Build Tool**: Vite (fast HMR and optimized builds)

### Backend
- **Framework**: Flask (Python 3.8+)
- **API**: RESTful endpoints with Flask blueprints
- **CORS**: Flask-CORS for cross-origin requests
- **AI Integration**: Google Gemini API via `google-generativeai`

### Development & Deployment
- **Package Manager**: npm (frontend), pip (backend)
- **Environment**: python-dotenv for configuration
- **Server**: Compatible with Gunicorn for production
- **Version Control**: Git with comprehensive .gitignore

##  Project Structure

```
dsa-visualizer/
├── frontend/                          # React frontend
│   ├── public/
│   │   ├── logo.svg                   # Main logo
│   │   ├── logo-full.svg              # Full logo with text
│   │   └── favicon.svg                # Browser icon
│   ├── src/
│   │   ├── components/                # Reusable React components
│   │   │   ├── Sidebar.jsx            # Navigation sidebar
│   │   │   ├── Footer.jsx             # Footer component
│   │   │   ├── AIAssistant.jsx        # AI chat component
│   │   │   └── CodeTabs.jsx           # Code example tabs
│   │   ├── pages/                     # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Algorithms.jsx         # Categorized algorithms page
│   │   │   ├── Contact.jsx
│   │   │   └── Contributions.jsx
│   │   ├── visualizers/               # Data structure visualizers
│   │   │   ├── linear/                # Linear data structures
│   │   │   │   ├── StackVisualizer.jsx
│   │   │   │   ├── QueueVisualizer.jsx
│   │   │   │   └── LinkedListVisualizer.jsx
│   │   │   ├── hash/                  # Hash-based structures
│   │   │   │   └── HashTableVisualizer.jsx
│   │   │   └── binarytrees/           # Tree structures
│   │   │       └── BinaryTreeTarversals.jsx
│   │   ├── styles/                    # Modular CSS
│   │   │   ├── base/                  # Base styles
│   │   │   │   ├── variables.css
│   │   │   │   ├── base.css
│   │   │   │   ├── layout.css
│   │   │   │   └── responsive.css     # Mobile responsive
│   │   │   ├── components/            # Component styles
│   │   │   ├── pages/                 # Page styles
│   │   │   ├── visualizers/           # Visualizer styles
│   │   │   └── main.css               # Main CSS entry
│   │   ├── App.jsx                    # Main app component
│   │   └── main.jsx                   # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js                 # Vite configuration
│
├── app/                               # Flask backend
│   ├── __init__.py                    # Flask app initialization
│   ├── api/
│   │   └── gemini_api.py              # Gemini AI integration
│   ├── models/                        # Data structure implementations
│   │   ├── stack.py
│   │   ├── queue.py
│   │   ├── singly_linkedlist.py
│   │   ├── hashtable_linear.py
│   │   └── binary_tree.py             # Binary tree with traversals
│   ├── routes/                        # API endpoints
│   │   ├── pages.py                   # Serves React app
│   │   ├── stack_routes.py
│   │   ├── queue_routes.py
│   │   ├── singly_linkedlist_routes.py
│   │   ├── hashtable_routes.py
│   │   └── binary_tree_routes.py
│   └── static/
│       └── react-build/               # React production build
│
├── app.py                             # Application entry point
├── requirements.txt                   # Python dependencies
└── README.md                          # This file
```

## Getting Started

Ready to dive in? Here's how to get it running on your machine.

### Prerequisites

You'll need:
- **Python 3.8 or higher** (check with `python3 --version`)
- **Node.js 16+ and npm** (check with `node --version` and `npm --version`)
- pip (usually comes with Python)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/abdullahmahfouz/dsa-visualizer.git
cd dsa-visualizer
```

2. **Set up the Backend (Flask)**:
```bash
# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
```

3. **Set up the Frontend (React)**:
```bash
cd frontend
npm install
cd ..
```

4. **Set up Gemini API (Optional - for AI Assistant)**:
   - Get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the project root:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

5. **Run the Application**:

   **Option 1: Development Mode (Recommended for development)**
   
   Open two terminals:
   
   Terminal 1 (Flask backend):
   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   python app.py
   # Runs on http://127.0.0.1:5001
   ```
   
   Terminal 2 (React frontend with hot reload):
   ```bash
   cd frontend
   npm run dev
   # Runs on http://localhost:3000
   ```
   
   Then open `http://localhost:3000` in your browser.

   **Option 2: Production Mode**
   
   Build and run:
   ```bash
   # Build the React app
   cd frontend
   npm run build
   cd ..
   
   # Run Flask (serves the built React app)
   source venv/bin/activate
   python app.py
   # Open http://127.0.0.1:5001
   ```

6. **You're all set!** The app should now be running with all visualizers available.

## How to Use

It's pretty straightforward:

1. **Start at the Home Page**: Get familiar with what the tool offers and what makes it helpful for learning DSA.
2. **Check out the Algorithms Page**: See all available visualizers and what's coming soon. Pick one that matches what you're studying.
3. **Dive into a Visualizer**: Once you click on a data structure (like Stack or Queue), you'll see:
   - A control panel where you can perform operations (push, pop, insert, delete, etc.)
   - A real-time visualization that updates as you interact
   - Step-by-step explanations that break down what's happening
   - Code examples in multiple languages (because your professor might use a different one)
   - An AI assistant panel if you get stuck and need help

The best way to learn? Actually use it. Try pushing and popping items, see how the visualization changes, and read the explanations. It'll click eventually.

## AI Assistant

Got a question? The AI assistant is there to help. It's powered by Google's Gemini API and can answer questions about DSA concepts, help you understand code, or explain how operations work.

Just type your question in the AI assistant panel on any visualizer page. It's like having a study buddy that never gets tired (though it does have a limit of 20 requests per day to keep things free for everyone).

**A few things to know**:
- 20 requests per day limit (we're using the free tier, so we have to be reasonable)
- Answers come in real-time using Google's Gemini language model
- It can explain concepts, help with code, and answer DSA-related questions
- For DSA learning questions, use the AI assistant rather than emailing - it's faster and designed for that!

## 🔌 API Endpoints

### Stack APIs
- `GET /api/stack` - Get current stack state
- `POST /api/stack/push` - Push item to stack (body: `{value}`)
- `POST /api/stack/pop` - Pop item from stack
- `GET /api/stack/peek` - Peek at top item
- `POST /api/stack/clear` - Clear the stack

### Queue APIs
- `GET /api/queue` - Get current queue state
- `POST /api/queue/enqueue` - Add item to queue (body: `{value}`)
- `POST /api/queue/dequeue` - Remove item from queue
- `GET /api/queue/peek` - Peek at front item
- `POST /api/queue/clear` - Clear the queue

### Linked List APIs
- `GET /api/linkedlist` - Get current list state
- `POST /api/linkedlist/insert/head` - Insert at head (body: `{value}`)
- `POST /api/linkedlist/insert/tail` - Insert at tail (body: `{value}`)
- `POST /api/linkedlist/insert/index` - Insert at index (body: `{value, index}`)
- `POST /api/linkedlist/delete/head` - Delete from head
- `POST /api/linkedlist/delete/tail` - Delete from tail
- `POST /api/linkedlist/search` - Search for value (body: `{value}`)
- `POST /api/linkedlist/clear` - Clear the list

### Hash Table APIs
- `GET /api/hashtable` - Get current table state
- `POST /api/hashtable/insert` - Insert key-value pair (body: `{key, value}`)
- `POST /api/hashtable/delete` - Delete by key (body: `{key}`)
- `GET /api/hashtable/get` - Get value by key (query: `?key=`)
- `POST /api/hashtable/clear` - Clear the table

### Binary Tree APIs
- `GET /api/binarytree` - Get current tree state
- `POST /api/binarytree/insert` - Insert node (body: `{value}`)
- `POST /api/binarytree/delete` - Delete node (body: `{value}`)
- `POST /api/binarytree/search` - Search for node (body: `{value}`)
- `GET /api/binarytree/inorder` - Perform inorder traversal
- `GET /api/binarytree/preorder` - Perform preorder traversal
- `GET /api/binarytree/postorder` - Perform postorder traversal
- `GET /api/binarytree/levelorder` - Perform level-order traversal
- `POST /api/binarytree/clear` - Clear the tree

### AI API
- `POST /api/ask-ai` - Ask the AI assistant (body: `{question, code}`)

## Design Features

- **Modern Dark Theme**: Easy on the eyes for extended learning sessions
- **Fully Responsive**: Mobile-optimized with breakpoints for phones (480px), tablets (768px), and desktops
- **Touch-Friendly**: Larger tap targets (44px minimum) and iOS-optimized inputs
- **Smooth Animations**: 
  - Real-time node highlighting during tree traversals
  - Color transitions for visited/visiting/not-visited states
  - Collision detection animations in hash tables
  - Smooth data structure operations
- **Custom Branding**: Professional SVG logo combining stack and tree elements
- **Sidebar Navigation**: Collapsible menu with hamburger icon on mobile
- **Category Organization**: Algorithms grouped by type (Linear, Hash-Based, Trees, Heaps)
- **Modular CSS Architecture**: Organized by base, components, pages, and visualizers
- **Loading States**: Visual feedback during API calls and AI responses

## Contributing

This project is all about helping students learn, and contributions are always welcome! Whether you're fixing a bug, adding a new visualizer, or improving documentation, every bit helps.

### Ways to Contribute

1. **Code Contributions**: Implement new data structures (we have a "Coming Soon" list!) or improve existing ones
2. **Documentation**: Found a typo? Think something could be clearer? Documentation improvements are super helpful
3. **Bug Reports**: If something's broken, let us know! Open an issue and describe what you found
4. **Feature Requests**: Have an idea for a new feature or visualizer? We'd love to hear it

### Getting Started with Contributions

Standard open source workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

We'll review it and get it merged if it looks good!

## Contact

Want to get in touch? Here's where to find me:

- **Email**: abdullahmahfouz@trentu.ca (for professional inquiries and recruitment)
- **GitHub**: [@abdullahmahfouz](https://github.com/abdullahmahfouz)
- **LinkedIn**: [Abdullah Mahfouz](https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/)

**Quick note**: If you have DSA learning questions, the AI assistant in the visualizers is your best bet - it's designed for that and responds faster than email!

## License

This project is open source and available for educational purposes.

## Acknowledgments

Big thanks to:
- Lucide Icons for the clean, modern icons
- The open-source community for all the inspiration and amazing tools

---

**Created by Abdullah Mahfouz** | © 2026

*Helping students master Data Structures & Algorithms, one visualization at a time.*
