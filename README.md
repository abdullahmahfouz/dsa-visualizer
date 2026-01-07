
# DSA Visualizer

A small web app to visualize common data structures and their operations. Built with Flask for the backend and plain HTML/CSS/JavaScript for the frontend, the app provides interactive, step-by-step visualizations to help learning and teaching.

## Project Status

This project is actively developed. Core visualizations for lists, stacks, and queues are implemented and interactive. The hash table visualization uses linear probing today; support for quadratic probing is the next feature and is currently being developed.

## Live Demo

The app is deployed and available at: https://dsa-visualizer-ksnl.onrender.com

## Features

- Interactive visualizations for basic data structures.
- Step-through operation animations and state inspection.
- Simple, readable implementations in `data_structures/` for reference.

## Implemented Data Structures

- Singly Linked List
- Stack
- Queue
- Hash Table (Linear Probing)

## Upcoming Work

- Hash Table (Quadratic Probing): implementation and frontend visualization are in progress. The implementation file to work on is `data_structures/hashtable_quadratic.py`, and the routes/templates to update are in `routes/` and `templates/` respectively.

## Tech Stack

- Backend: Flask (Python)
- Frontend: HTML, CSS, JavaScript

## Project Structure

```
app.py
requirements.txt
data_structures/
    hashtable_linear.py
    hashtable_quadratic.py    # quadratic probing (work in progress)
    queue.py
    singly_linkedlist.py
    stack.py
routes/
    hashtable_routes.py
    pages.py
    queue_routes.py
    singly_linkedlist_routes.py
    stack_routes.py
static/
    css/
    js/
templates/
    hashtable_linear.html
    index.html
    linkedlist.html
    queue.html
    stack.html
```

## How to Run Locally

1. Clone the repository and enter the directory:

```bash
git clone <repository-url>
cd dsa-visualizer
```

2. Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the app:

```bash
flask run
```

Open `http://127.0.0.1:5000` in your browser to explore the visualizations.

## Contributing

Contributions are welcome. If you'd like to help implement quadratic probing visualization, start by reviewing `data_structures/hashtable_quadratic.py` and the related route/template files.

-
