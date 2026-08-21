"""
seo_meta.py
===========
Server-side mirror of frontend/src/data/routeMeta.js.

The SPA has one static index.html; Flask's catch-all route in pages.py
serves it for every path. Crawlers and social-preview bots that don't
execute JS (most of them, for the initial fetch) only ever see whatever
Flask sends on that first response - so per-route <title>/<meta
description>/canonical have to be injected server-side here, not just
client-side in React.

Keep this in sync with frontend/src/data/routeMeta.js when adding a route.
Only title/description are mirrored (h1 is a client-side rendering concern,
not a server response concern).
"""

SITE_NAME = "DSA Visualizer"
SITE_URL = "https://dsa-visualizer-ksnl.onrender.com"

DEFAULT_TITLE = "DSA Visualizer - Free Learning Tool for Students | Data Structures & Algorithms"
DEFAULT_DESCRIPTION = (
    "Free interactive DSA learning tool for students. Visualize and understand data "
    "structures like Stack, Queue, Linked List, and Hash Tables with step-by-step explanations."
)

ROUTE_META = {
    "/": (DEFAULT_TITLE, DEFAULT_DESCRIPTION),
    "/algorithms": (
        "Browse All Algorithms & Data Structures | DSA Visualizer",
        "Explore every interactive visualizer in one place: stacks, queues, trees, graphs, "
        "hash tables, heaps, and sorting/traversal algorithms, each with a step scrubber.",
    ),
    "/practice": (
        "Practice Problems | 29 DSA Coding Challenges - DSA Visualizer",
        "Solve 29 data structures and algorithms problems across arrays, trees, graphs, and "
        "dynamic programming with a built-in code editor and instant test feedback.",
    ),
    "/contact": (
        "Contact - DSA Visualizer",
        "Get in touch about DSA Visualizer: bug reports, feature requests, or general "
        "questions about the free interactive data structures and algorithms learning tool.",
    ),
    "/contributions": (
        "Contributors - DSA Visualizer",
        "Meet the contributors behind DSA Visualizer, a free and open source interactive "
        "tool for learning data structures and algorithms.",
    ),
    "/sandbox": (
        "Code Sandbox | Visualize Your Own Python Code - DSA Visualizer",
        "Write your own Python code using Stack, Queue, and Linked List operations and "
        "watch it execute step by step with a live visual trace.",
    ),
    "/compare-hash": (
        "Hash Table Collision Strategy Comparison | DSA Visualizer",
        "Compare linear probing, quadratic probing, and separate chaining side by side to "
        "see how each hash table collision strategy handles the same inserts.",
    ),
    "/compare": (
        "Algorithm Complexity Comparison | DSA Visualizer",
        "Compare the time and space complexity of data structures and algorithms side by "
        "side to understand real performance trade-offs.",
    ),
    "/stack": (
        "Stack Data Structure Visualizer | Push, Pop, Peek - DSA Visualizer",
        "Interactive stack visualizer. Step through push, pop, and peek operations and see "
        "exactly how a LIFO stack works, with runnable code in five languages.",
    ),
    "/queue": (
        "Queue Data Structure Visualizer | Enqueue, Dequeue - DSA Visualizer",
        "Interactive queue visualizer. Step through enqueue and dequeue operations and see "
        "exactly how a FIFO queue works, with runnable code in five languages.",
    ),
    "/linkedlist": (
        "Linked List Visualizer | Insert, Delete, Traverse - DSA Visualizer",
        "Interactive singly linked list visualizer. Insert, delete, and traverse nodes one "
        "pointer at a time and see exactly how the list rewires itself.",
    ),
    "/skiplist": (
        "Skip List Visualizer | Probabilistic O(log n) Search - DSA Visualizer",
        "Interactive skip list visualizer. See how multiple linked-list levels let a skip "
        "list search, insert, and delete in expected O(log n) time.",
    ),
    "/hashtable_linear": (
        "Hash Table Visualizer (Linear Probing) | DSA Visualizer",
        "Interactive hash table visualizer using linear probing. Watch how collisions are "
        "resolved by scanning forward to the next open slot.",
    ),
    "/hashtable_quadratic": (
        "Hash Table Visualizer (Quadratic Probing) | DSA Visualizer",
        "Interactive hash table visualizer using quadratic probing. Watch how collisions "
        "are resolved by jumping in increasing quadratic steps.",
    ),
    "/hashtable_chaining": (
        "Hash Table Visualizer (Separate Chaining) | DSA Visualizer",
        "Interactive hash table visualizer using separate chaining. Watch how each bucket "
        "holds a linked list of entries to resolve collisions.",
    ),
    "/binarytree": (
        "Binary Tree Traversal Visualizer | Inorder, Preorder, Postorder - DSA Visualizer",
        "Interactive binary tree visualizer. Step through inorder, preorder, postorder, and "
        "level-order traversals and watch each node get visited in order.",
    ),
    "/bst": (
        "Binary Search Tree (BST) Visualizer | Insert, Search, Delete - DSA Visualizer",
        "Interactive binary search tree visualizer. Insert, search, and delete values and "
        "watch the O(log n) average-case ordering property in action.",
    ),
    "/avl": (
        "AVL Tree Visualizer | Self-Balancing Binary Search Tree - DSA Visualizer",
        "Interactive AVL tree visualizer. Watch rotations keep the tree height-balanced "
        "after every insert and delete, guaranteeing O(log n) operations.",
    ),
    "/splay": (
        "Splay Tree Visualizer | Self-Adjusting Binary Search Tree - DSA Visualizer",
        "Interactive splay tree visualizer. Watch recently accessed nodes splay to the "
        "root, giving frequently used values faster future lookups.",
    ),
    "/treap": (
        "Treap Visualizer | Randomized Binary Search Tree - DSA Visualizer",
        "Interactive treap visualizer. See how randomized priorities keep a binary search "
        "tree balanced in expectation without explicit rebalancing rules.",
    ),
    "/minheap": (
        "Min Heap Visualizer | Priority Queue Operations - DSA Visualizer",
        "Interactive min heap visualizer. Insert and extract values and watch sift-up and "
        "sift-down keep the smallest element at the root.",
    ),
    "/maxheap": (
        "Max Heap Visualizer | Priority Queue Operations - DSA Visualizer",
        "Interactive max heap visualizer. Insert and extract values and watch sift-up and "
        "sift-down keep the largest element at the root.",
    ),
    "/adjacency-list": (
        "Graph Visualizer (Adjacency List) | Build & Explore Graphs - DSA Visualizer",
        "Build a graph and inspect it as an adjacency list. See exactly which vertices are "
        "stored as each node’s neighbor list.",
    ),
    "/adjacency-matrix": (
        "Graph Visualizer (Adjacency Matrix) | Build & Explore Graphs - DSA Visualizer",
        "Build a graph and inspect it as an adjacency matrix. See exactly how edges map "
        "onto a 2D grid of vertex connections.",
    ),
    "/bfs": (
        "Breadth-First Search (BFS) Visualizer | Graph Traversal - DSA Visualizer",
        "Interactive BFS visualizer with a scrubbable execution trace. Watch a graph "
        "explored level by level using a queue, in O(V+E) time.",
    ),
    "/dfs": (
        "Depth-First Search (DFS) Visualizer | Graph Traversal - DSA Visualizer",
        "Interactive DFS visualizer with a scrubbable execution trace. Watch a graph "
        "explored as deep as possible before backtracking, in O(V+E) time.",
    ),
    "/dijkstra": (
        "Dijkstra's Algorithm Visualizer | Shortest Path - DSA Visualizer",
        "Interactive visualizer for Dijkstra's algorithm. Watch shortest paths get "
        "computed one relaxed edge at a time on a weighted graph.",
    ),
    "/bellman-ford": (
        "Bellman-Ford Algorithm Visualizer | Shortest Path - DSA Visualizer",
        "Interactive visualizer for the Bellman-Ford algorithm. Watch it find shortest "
        "paths on graphs with negative edge weights, one relaxation pass at a time.",
    ),
    "/prim-mst": (
        "Prim's Algorithm Visualizer | Minimum Spanning Tree - DSA Visualizer",
        "Interactive visualizer for Prim's algorithm. Watch a minimum spanning tree grow "
        "one cheapest edge at a time from a starting vertex.",
    ),
    "/kruskal-mst": (
        "Kruskal's Algorithm Visualizer | Minimum Spanning Tree - DSA Visualizer",
        "Interactive visualizer for Kruskal's algorithm. Watch a minimum spanning tree "
        "assembled by sorting edges and union-find cycle detection.",
    ),
    "/topological-sort": (
        "Topological Sort Visualizer | DAG Ordering - DSA Visualizer",
        "Interactive topological sort visualizer. Watch a directed acyclic graph get "
        "ordered so every edge points forward in the sequence.",
    ),
}

# Static (non-parameterized) routes only - used to generate sitemap.xml.
# /practice/<problemId> is intentionally left out: it's a client-rendered
# detail view with no server-known slug list, and /practice already covers
# the practice section for crawl purposes.
SITEMAP_PRIORITY = {
    "/": "1.0",
    "/algorithms": "0.9",
    "/practice": "0.8",
}


def get_meta(path):
    """Return (title, description) for a path, falling back to the default."""
    return ROUTE_META.get(path, (DEFAULT_TITLE, DEFAULT_DESCRIPTION))


def sitemap_priority(path):
    return SITEMAP_PRIORITY.get(path, "0.7" if path != "/contact" and path != "/contributions" else "0.4")
