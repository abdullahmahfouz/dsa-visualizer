# DSA Visualizer

An interactive educational tool for visualizing Data Structures and Algorithms using Python and Pygame.

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Pygame](https://img.shields.io/badge/Pygame-2.5+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🎯 Features

- **Interactive Visualizations** - See data structures come to life with animations
- **Educational Explanations** - Learn how each operation works with code examples
- **Hands-on Learning** - Enter your own values and see the results
- **Time Complexity Info** - Understand the efficiency of each operation

### Available Visualizations

| Data Structure | Status |
|---------------|--------|
| Stack | ✅ Available |
| Queue | 🔜 Coming Soon |
| Linked List | 🔜 Coming Soon |
| Binary Tree | 🔜 Coming Soon |
| Bubble Sort | 🔜 Coming Soon |
| Quick Sort | 🔜 Coming Soon |
| Binary Search | 🔜 Coming Soon |
| Graph BFS/DFS | 🔜 Coming Soon |

## 🚀 Getting Started

### Prerequisites

- Python 3.9 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dsa-visualizer.git
   cd dsa-visualizer
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On macOS/Linux
   # .venv\Scripts\activate   # On Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   cd src
   python app.py
   ```

## 📁 Project Structure

```
dsa-visualizer/
├── src/
│   ├── algorithms/          # Data structure implementations
│   │   └── stacks/
│   │       └── stack.py
│   ├── config/              # Configuration and constants
│   │   ├── __init__.py
│   │   └── settings.py
│   ├── screens/             # Application screens
│   │   ├── __init__.py
│   │   ├── main_menu.py
│   │   └── stack_screen.py
│   ├── ui/                  # Reusable UI components
│   │   ├── __init__.py
│   │   ├── button.py
│   │   ├── input_box.py
│   │   └── menu_card.py
│   ├── visualizers/         # Rendering classes
│   │   ├── __init__.py
│   │   └── stack_renderer.py
│   └── app.py               # Application entry point
├── tests/                   # Unit tests
├── .gitignore
├── pyproject.toml           # Project configuration
├── requirements.txt
└── README.md
```

## 🎮 Usage

### Stack Visualizer

1. Select "Stack" from the main menu
2. Enter a number in the input field
3. Click **PUSH** or press Enter to add it to the stack
4. Click **POP** to remove the top element
5. Click **PEEK** to view the top element without removing it
6. Watch the animations and read the explanations!

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Push value (when input is focused) |
| `ESC` | Go back / Quit |

## 🛠️ Development

### Running Tests

```bash
pytest
```

### Code Formatting

```bash
black src/
```

### Type Checking

```bash
mypy src/
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Pygame](https://www.pygame.org/)
- Inspired by the need for interactive DSA learning tools
