# DSA Visualizer

A web-based tool to visualize common data structures and algorithms. This project provides an interactive way to learn about data structures by seeing their operations in action.

## Project Status

This project is currently under active development. While the core features for the implemented data structures are functional, the hash table visualization is still being refined to improve its accuracy and visual feedback.

## Features

- Interactive visualizations of data structures.
- Step-by-step execution of common operations.
- Code implementations in multiple programming languages.

## Implemented Data Structures

- Singly Linked List
- Stack
- Queue
- Hash Table (with Linear Probing for collision resolution)

## Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript

## Project Structure

```
/
├───app.py                # Main Flask application
├───requirements.txt      # Python dependencies
├───data_structures/      # Data structure implementations
│   ├───hashtable_linear.py
│   ├───queue.py
│   ├───singly_linkedlist.py
│   └───stack.py
├───routes/               # Flask routes for the API and pages
│   ├───hashtable_routes.py
│   ├───pages.py
│   ├───queue_routes.py
│   ├───singly_linkedlist_routes.py
│   └───stack_routes.py
├───static/               # Frontend assets
│   ├───css/
│   └───js/
└───templates/            # HTML templates
    ├───hashtable_linear.html
    ├───index.html
    ├───linkedlist.html
    ├───queue.html
    └───stack.html
```

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd dsa-visualizer
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Flask application:**
    ```bash
    flask run
    ```


