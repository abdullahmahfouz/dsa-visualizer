# DSA Visualizer

A free, interactive web-based learning tool designed to help students master Data Structures & Algorithms (DSA) concepts through hands-on visualizations. Built with Flask and modern web technologies, this project provides step-by-step visualizations to make DSA learning accessible and engaging.

## Project Overview

Let's be honest - learning data structures can be tough. You read about stacks and queues in textbooks, but actually seeing how they work? That's a different story. This tool was built to bridge that gap. It's a student-focused educational tool that helps you understand complex DSA concepts by visualizing how data structures actually work in real-time. Whether you're struggling with stacks, queues, or hash tables, this tool breaks down each operation with clear, interactive demonstrations that make the concepts click.

## Live Demo

Check out the live demo to see the visualizers in action:

**[View Live Demo](https://dsa-visualizer-ksnl.onrender.com/)**

The demo includes all currently available visualizers - Stack, Queue, Linked List, and Hash Table - each with interactive controls and step-by-step explanations. Or if you prefer to run it locally, follow the installation steps below.

## Features

Here's what makes this tool helpful for students:

- **Interactive Visualizations**: See data structures in action with real-time animations. No more guessing what happens when you push or pop - you'll see it happen right in front of you.
- **Step-by-Step Explanations**: Each operation comes with detailed explanations. We break down what's happening so you actually understand the "why" behind each action.
- **AI Study Assistant**: Stuck on a concept? Ask our AI assistant powered by Google Gemini API. It's like having a tutor available 24/7 (though with a limit of 20 requests per day to keep costs manageable).
- **Multiple Language Examples**: See implementations in Python, JavaScript, Java, C#, C++, and C. Because let's face it, different courses use different languages.
- **Responsive Design**: Works on your laptop, tablet, or phone. Study wherever you're comfortable.
- **Modern UI**: Clean, dark-themed interface that's easy on the eyes during those late-night study sessions.

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

Ready to dive in? Here's how to get it running on your machine.

### Prerequisites

You'll need:
- Python 3.8 or higher (check with `python3 --version`)
- pip (usually comes with Python)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/abdullahmahfouz/dsa-visualizer.git
cd dsa-visualizer
```

2. **Create and activate a virtual environment** (trust me, you'll want to do this):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**:
```bash
pip install -r requirements.txt
```

4. **Set up Gemini API (Optional - for AI Assistant)**:
   - If you want to use the AI assistant, get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the project root:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
   - The AI assistant has a limit of 20 requests per day (it's free, so we have to be reasonable with usage)

5. **Run the application**:
```bash
python app.py
```

6. **Open it up**:
   - Fire up your browser and go to `http://127.0.0.1:5001` (or whatever port it shows in the terminal)
   - You should see the homepage - you're all set!

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
