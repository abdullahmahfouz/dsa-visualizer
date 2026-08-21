/**
 * routeMeta.js
 *
 * Single source of truth for per-route SEO metadata (title, description, h1).
 * The SPA has one static index.html, so every route renders the same
 * <title>/<meta description> unless something sets them per route. This
 * table drives two things:
 *
 *   1. Client-side: PageMeta.jsx reads it on every route change to update
 *      document.title, the live <meta name="description">, the canonical
 *      link, and to render a visually-hidden <h1> naming the page's real
 *      topic (the visualizer pages' visible "heading" is styled as a
 *      sub-section label, not a semantic h1 - see concept-header markup).
 *   2. Server-side: app/routes/pages.py mirrors this table in Python so
 *      crawlers and social-preview bots that don't execute JS still see a
 *      unique title/description/canonical in the HTML Flask serves.
 *
 * Keep the two tables in sync when adding a route - see the comment at the
 * top of ROUTE_META in pages.py.
 */

export const SITE_NAME = 'DSA Visualizer';
export const SITE_URL = 'https://dsa-visualizer-ksnl.onrender.com';

export const DEFAULT_META = {
  title: 'DSA Visualizer - Free Learning Tool for Students | Data Structures & Algorithms',
  description: 'Free interactive DSA learning tool for students. Visualize and understand data structures like Stack, Queue, Linked List, and Hash Tables with step-by-step explanations.',
  h1: null, // pages without an entry are assumed to already render their own <h1>
};

export const ROUTE_META = {
  '/': {
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    h1: null, // Home.jsx already renders a real <h1>
  },
  '/algorithms': {
    title: 'Browse All Algorithms & Data Structures | DSA Visualizer',
    description: 'Explore every interactive visualizer in one place: stacks, queues, trees, graphs, hash tables, heaps, and sorting/traversal algorithms, each with a step scrubber.',
    h1: null,
  },
  '/practice': {
    title: 'Practice Problems | 29 DSA Coding Challenges - DSA Visualizer',
    description: 'Solve 29 data structures and algorithms problems across arrays, trees, graphs, and dynamic programming with a built-in code editor and instant test feedback.',
    h1: null,
  },
  '/contact': {
    title: 'Contact - DSA Visualizer',
    description: 'Get in touch about DSA Visualizer: bug reports, feature requests, or general questions about the free interactive data structures and algorithms learning tool.',
    h1: null,
  },
  '/contributions': {
    title: 'Contributors - DSA Visualizer',
    description: 'Meet the contributors behind DSA Visualizer, a free and open source interactive tool for learning data structures and algorithms.',
    h1: null,
  },
  '/sandbox': {
    title: 'Code Sandbox | Visualize Your Own Python Code - DSA Visualizer',
    description: 'Write your own Python code using Stack, Queue, and Linked List operations and watch it execute step by step with a live visual trace.',
    h1: null,
  },
  '/compare-hash': {
    title: 'Hash Table Collision Strategy Comparison | DSA Visualizer',
    description: 'Compare linear probing, quadratic probing, and separate chaining side by side to see how each hash table collision strategy handles the same inserts.',
    h1: null,
  },
  '/compare': {
    title: 'Algorithm Complexity Comparison | DSA Visualizer',
    description: 'Compare the time and space complexity of data structures and algorithms side by side to understand real performance trade-offs.',
    h1: null,
  },

  // ---- Linear ----
  '/stack': {
    title: 'Stack Data Structure Visualizer | Push, Pop, Peek - DSA Visualizer',
    description: 'Interactive stack visualizer. Step through push, pop, and peek operations and see exactly how a LIFO stack works, with runnable code in five languages.',
    h1: 'Stack Data Structure Visualizer',
  },
  '/queue': {
    title: 'Queue Data Structure Visualizer | Enqueue, Dequeue - DSA Visualizer',
    description: 'Interactive queue visualizer. Step through enqueue and dequeue operations and see exactly how a FIFO queue works, with runnable code in five languages.',
    h1: 'Queue Data Structure Visualizer',
  },
  '/linkedlist': {
    title: 'Linked List Visualizer | Insert, Delete, Traverse - DSA Visualizer',
    description: 'Interactive singly linked list visualizer. Insert, delete, and traverse nodes one pointer at a time and see exactly how the list rewires itself.',
    h1: 'Linked List Visualizer',
  },
  '/skiplist': {
    title: 'Skip List Visualizer | Probabilistic O(log n) Search - DSA Visualizer',
    description: 'Interactive skip list visualizer. See how multiple linked-list levels let a skip list search, insert, and delete in expected O(log n) time.',
    h1: 'Skip List Visualizer',
  },

  // ---- Hashing ----
  '/hashtable_linear': {
    title: 'Hash Table Visualizer (Linear Probing) | DSA Visualizer',
    description: 'Interactive hash table visualizer using linear probing. Watch how collisions are resolved by scanning forward to the next open slot.',
    h1: 'Hash Table Visualizer: Linear Probing',
  },
  '/hashtable_quadratic': {
    title: 'Hash Table Visualizer (Quadratic Probing) | DSA Visualizer',
    description: 'Interactive hash table visualizer using quadratic probing. Watch how collisions are resolved by jumping in increasing quadratic steps.',
    h1: 'Hash Table Visualizer: Quadratic Probing',
  },
  '/hashtable_chaining': {
    title: 'Hash Table Visualizer (Separate Chaining) | DSA Visualizer',
    description: 'Interactive hash table visualizer using separate chaining. Watch how each bucket holds a linked list of entries to resolve collisions.',
    h1: 'Hash Table Visualizer: Separate Chaining',
  },

  // ---- Trees ----
  '/binarytree': {
    title: 'Binary Tree Traversal Visualizer | Inorder, Preorder, Postorder - DSA Visualizer',
    description: 'Interactive binary tree visualizer. Step through inorder, preorder, postorder, and level-order traversals and watch each node get visited in order.',
    h1: 'Binary Tree Traversal Visualizer',
  },
  '/bst': {
    title: 'Binary Search Tree (BST) Visualizer | Insert, Search, Delete - DSA Visualizer',
    description: 'Interactive binary search tree visualizer. Insert, search, and delete values and watch the O(log n) average-case ordering property in action.',
    h1: 'Binary Search Tree Visualizer',
  },
  '/avl': {
    title: 'AVL Tree Visualizer | Self-Balancing Binary Search Tree - DSA Visualizer',
    description: 'Interactive AVL tree visualizer. Watch rotations keep the tree height-balanced after every insert and delete, guaranteeing O(log n) operations.',
    h1: 'AVL Tree Visualizer',
  },
  '/splay': {
    title: 'Splay Tree Visualizer | Self-Adjusting Binary Search Tree - DSA Visualizer',
    description: 'Interactive splay tree visualizer. Watch recently accessed nodes splay to the root, giving frequently used values faster future lookups.',
    h1: 'Splay Tree Visualizer',
  },
  '/treap': {
    title: 'Treap Visualizer | Randomized Binary Search Tree - DSA Visualizer',
    description: 'Interactive treap visualizer. See how randomized priorities keep a binary search tree balanced in expectation without explicit rebalancing rules.',
    h1: 'Treap Visualizer',
  },

  // ---- Heaps ----
  '/minheap': {
    title: 'Min Heap Visualizer | Priority Queue Operations - DSA Visualizer',
    description: 'Interactive min heap visualizer. Insert and extract values and watch sift-up and sift-down keep the smallest element at the root.',
    h1: 'Min Heap Visualizer',
  },
  '/maxheap': {
    title: 'Max Heap Visualizer | Priority Queue Operations - DSA Visualizer',
    description: 'Interactive max heap visualizer. Insert and extract values and watch sift-up and sift-down keep the largest element at the root.',
    h1: 'Max Heap Visualizer',
  },

  // ---- Graphs ----
  '/adjacency-list': {
    title: 'Graph Visualizer (Adjacency List) | Build & Explore Graphs - DSA Visualizer',
    description: 'Build a graph and inspect it as an adjacency list. See exactly which vertices are stored as each node’s neighbor list.',
    h1: 'Graph Visualizer: Adjacency List',
  },
  '/adjacency-matrix': {
    title: 'Graph Visualizer (Adjacency Matrix) | Build & Explore Graphs - DSA Visualizer',
    description: 'Build a graph and inspect it as an adjacency matrix. See exactly how edges map onto a 2D grid of vertex connections.',
    h1: 'Graph Visualizer: Adjacency Matrix',
  },
  '/bfs': {
    title: 'Breadth-First Search (BFS) Visualizer | Graph Traversal - DSA Visualizer',
    description: 'Interactive BFS visualizer with a scrubbable execution trace. Watch a graph explored level by level using a queue, in O(V+E) time.',
    h1: 'Breadth-First Search (BFS) Visualizer',
  },
  '/dfs': {
    title: 'Depth-First Search (DFS) Visualizer | Graph Traversal - DSA Visualizer',
    description: 'Interactive DFS visualizer with a scrubbable execution trace. Watch a graph explored as deep as possible before backtracking, in O(V+E) time.',
    h1: 'Depth-First Search (DFS) Visualizer',
  },
  '/dijkstra': {
    title: "Dijkstra's Algorithm Visualizer | Shortest Path - DSA Visualizer",
    description: "Interactive visualizer for Dijkstra's algorithm. Watch shortest paths get computed one relaxed edge at a time on a weighted graph.",
    h1: "Dijkstra's Algorithm Visualizer",
  },
  '/bellman-ford': {
    title: 'Bellman-Ford Algorithm Visualizer | Shortest Path - DSA Visualizer',
    description: 'Interactive visualizer for the Bellman-Ford algorithm. Watch it find shortest paths on graphs with negative edge weights, one relaxation pass at a time.',
    h1: 'Bellman-Ford Algorithm Visualizer',
  },
  '/prim-mst': {
    title: "Prim's Algorithm Visualizer | Minimum Spanning Tree - DSA Visualizer",
    description: "Interactive visualizer for Prim's algorithm. Watch a minimum spanning tree grow one cheapest edge at a time from a starting vertex.",
    h1: "Prim's Algorithm Visualizer",
  },
  '/kruskal-mst': {
    title: "Kruskal's Algorithm Visualizer | Minimum Spanning Tree - DSA Visualizer",
    description: "Interactive visualizer for Kruskal's algorithm. Watch a minimum spanning tree assembled by sorting edges and union-find cycle detection.",
    h1: "Kruskal's Algorithm Visualizer",
  },
  '/topological-sort': {
    title: 'Topological Sort Visualizer | DAG Ordering - DSA Visualizer',
    description: 'Interactive topological sort visualizer. Watch a directed acyclic graph get ordered so every edge points forward in the sequence.',
    h1: 'Topological Sort Visualizer',
  },
};

/** Look up metadata for a pathname, falling back to the site default. */
export function getRouteMeta(pathname) {
  return ROUTE_META[pathname] || DEFAULT_META;
}
