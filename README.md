# DSA Visualizer

A free, interactive web-based learning tool designed to help students master Data Structures & Algorithms (DSA) concepts through hands-on visualizations. Built with Flask and modern web technologies, this project provides step-by-step visualizations to make DSA learning accessible and engaging.

## Project Overview

This is a student-focused educational tool that helps learners understand complex DSA concepts by visualizing how data structures work in real-time. Whether you're struggling with stacks, queues, or hash tables, this tool breaks down each operation with clear, interactive demonstrations.

## Features

- **Interactive Visualizations**: See data structures in action with real-time animations
- **Step-by-Step Explanations**: Detailed explanations for each operation (push, pop, insert, delete, etc.)
- **AI Study Assistant**: Powered by Google Gemini API - ask questions and get instant help with DSA concepts
  - **Note**: AI assistant has a limit of 20 requests per day
- **Multiple Language Examples**: Code implementations in Python, JavaScript, Java, C#, C++, and C
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations

## Implemented Data Structures

### Currently Available
- **Stack** - Last In, First Out (LIFO) visualization
- **Queue** - First In, First Out (FIFO) visualization
- **Linked List** - Dynamic sequential data structure
- **Hash Table** - Linear probing collision resolution

### Coming Soon
- Binary Tree
- Binary Search Tree (BST)
- AVL Tree
- Splay Tree
- Min Heap
- Max Heap
- BFS (Breadth-First Search)
- DFS (Depth-First Search)

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI Integration**: Google Gemini API (via `google-generativeai`)
- **Icons**: Lucide Icons
- **Deployment**: Compatible with Gunicorn

## Project Structure

```
dsa-visualizer/
├── app/
│   ├── __init__.py              # Flask app initialization
│   ├── api/
│   │   ├── gemini_api.py        # Gemini AI API integration
│   │   └── gemini_models.py     # AI model configurations
│   ├── models/                  # Data structure implementations
│   │   ├── stack.py
│   │   ├── queue.py
│   │   ├── singly_linkedlist.py
│   │   ├── hashtable_linear.py
│   │   └── hashtable_quadratic.py
│   ├── routes/                  # Flask route handlers
│   │   ├── pages.py             # Page routes (/, /algorithms, /contact, etc.)
│   │   ├── stack_routes.py      # Stack API endpoints
│   │   ├── queue_routes.py      # Queue API endpoints
│   │   ├── singly_linkedlist_routes.py
│   │   └── hashtable_routes.py
│   ├── static/
│   │   ├── css/                 # Stylesheets
│   │   │   ├── style.css
│   │   │   ├── homepage.css
│   │   │   ├── layout.css
│   │   │   ├── cards.css
│   │   │   └── hashtable.css
│   │   └── js/                  # JavaScript files
│   │       ├── DSA_response/    # Visualizer scripts
│   │       │   ├── stack.js
│   │       │   ├── queue.js
│   │       │   ├── linkedlist.js
│   │       │   ├── hashtable_linear.js
│   │       │   └── code-tabs.js
│   │       └── ai_assistant/
│   │           └── ai-assistant.js
│   └── templates/               # HTML templates
│       ├── index.html           # Home page
│       ├── algorithms.html      # Algorithms listing page
│       ├── stack.html
│       ├── queue.html
│       ├── linkedlist.html
│       ├── hashtable_linear.html
│       ├── contact.html
│       └── contributions.html
├── app.py                       # Application entry point
├── requirements.txt              # Python dependencies
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/abdullahmahfouz/dsa-visualizer.git
cd dsa-visualizer
```

2. **Create and activate a virtual environment**:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**:
```bash
pip install -r requirements.txt
```

4. **Set up Gemini API (Optional - for AI Assistant)**:
   - Get a Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the project root:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
   - Note: The AI assistant has a rate limit of 20 requests per day

5. **Run the application**:
```bash
python app.py
```

6. **Access the application**:
   - Open your browser and navigate to `http://127.0.0.1:5001` (or the port shown in terminal)

## How to Use

1. **Home Page**: Start at the homepage to learn about the tool and its features
2. **Algorithms Page**: Browse all available and upcoming data structures
3. **Visualizers**: Click on any available data structure to start learning:
   - Use the control panel to perform operations (insert, delete, search, etc.)
   - Watch the visualization update in real-time
   - Read step-by-step explanations
   - View code examples in multiple languages
   - Ask the AI assistant if you need help

## AI Assistant

The AI assistant is powered by Google's Gemini API and provides instant help with DSA concepts. Simply type your question in the AI assistant panel on any visualizer page.

**Important Notes**:
- The AI assistant has a **limit of 20 requests per day** to manage API costs
- Questions are answered in real-time using Google Gemini's language model
- The assistant can explain concepts, help with code, and answer DSA-related questions

## API Endpoints

### Data Structure APIs
- `GET /api/stack` - Get current stack state
- `POST /api/stack/push` - Push item to stack
- `POST /api/stack/pop` - Pop item from stack
- Similar endpoints for Queue, Linked List, and Hash Table

### AI API
- `POST /api/ask-ai` - Ask the AI assistant a question (20 requests/day limit)

## Design Features

- **Modern Dark Theme**: Easy on the eyes for extended learning sessions
- **Responsive Layout**: Works on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Engaging visual feedback for all operations
- **Sidebar Navigation**: Easy access to all features
- **Category Organization**: Algorithms organized by type (Linear, Non-Linear, etc.)

## Contributing

Contributions are welcome! This project is designed to help students learn DSA, and your contributions can make it even better.

### Ways to Contribute

1. **Code Contributions**: Implement new data structures or improve existing ones
2. **Documentation**: Improve documentation, add examples, or fix typos
3. **Bug Reports**: Report issues you encounter
4. **Feature Requests**: Suggest new features or improvements

### Getting Started with Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Contact

For questions or suggestions:
- **Email**: abdullahmahfouz@trentu.ca
- **GitHub**: [@abdullahmahfouz](https://github.com/abdullahmahfouz)
- **LinkedIn**: [Abdullah Mahfouz](https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/)

**Note**: For DSA learning questions, please use the AI assistant in the visualizers rather than email.

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Google Gemini API for AI assistance capabilities
- Lucide Icons for beautiful iconography
- The open-source community for inspiration and tools

---

**Created by Abdullah Mahfouz** | © 2026

*Helping students master Data Structures & Algorithms, one visualization at a time.*
