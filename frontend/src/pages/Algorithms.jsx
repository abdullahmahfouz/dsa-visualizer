import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import {
  StackIcon, QueueIcon, LinkedListIcon, SkipListIcon,
  HashTableIcon, HashChainingIcon, HashProbeIcon,
  BinaryTreeIcon, BSTIcon, AVLIcon, SplayIcon, TreapIcon,
  MinHeapIcon, MaxHeapIcon,
  GraphIcon, AdjMatrixIcon, AdjListIcon, BFSIcon, DFSIcon,
  LinearIcon, TreeCategoryIcon, HeapCategoryIcon,
} from '../components/DSAIcons';

function Algorithms() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categories = [
    {
      id: 'linear',
      name: 'Linear Data Structures',
      icon: LinearIcon,
      description: 'Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science - simple to implement yet powerful enough to solve complex problems.',
      items: [
        {
          to: '/stack',
          icon: StackIcon,
          title: 'Stack',
          description: 'LIFO (Last In, First Out) - imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.',
          available: true
        },
        {
          to: '/queue',
          icon: QueueIcon,
          title: 'Queue',
          description: 'FIFO (First In, First Out) - like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.',
          available: true
        },
        {
          to: '/linkedlist',
          icon: LinkedListIcon,
          title: 'Linked List',
          description: 'A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn\'t need to be contiguous - nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.',
          available: true
        },
        {
          to: '/skiplist',
          icon: SkipListIcon,
          title: 'Skip List',
          description: 'A probabilistic data structure that uses multiple layers of linked lists with decreasing density. Express lanes skip over elements like a train system - higher levels let you "skip" to your destination faster. Achieves O(log n) average for search, insert, and delete. Used in Redis for sorted sets, LevelDB for in-memory indexing, and concurrent data structures where lock-free operation is critical.',
          available: true
        },
      ]
    },
      
    {
      id: 'hash',
      name: 'Hash-Tables',
      icon: HashTableIcon,
      description: 'Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.',
      items: [
        {
          to: '/hashtable_linear',
          icon: HashProbeIcon,
          title: 'Linear Probing',
          description: 'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.',
          available: true
        },
        {
          to: '/hashtable_quadratic',
          icon: HashProbeIcon,
          title: 'Quadratic Probing',
          description: 'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.',
          available: true
        },
        {
          to: '/hashtable_chaining',
          icon: HashChainingIcon,
          title: 'Separate Chaining',
          description: 'Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored - just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java\'s HashMap, Python\'s dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.',
          available: true
        },
      ]
    },
    {
      id: 'heaps',
      name: 'Priority Queues & Heaps',
      icon: HeapCategoryIcon,
      description: 'Complete binary trees satisfying the heap property - either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.',
      items: [
        {
          to: '/minheap',
          icon: MinHeapIcon,
          title: 'Min Heap',
          description: 'Every parent node is smaller than or equal to its children, so the minimum element is always at the root - accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra\'s shortest path algorithm, Prim\'s minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.',
          available: true
        },
        {
          to: '/maxheap',
          icon: MaxHeapIcon,
          title: 'Max Heap',
          description: 'The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.',
          available: true
        },
      ]
    },
    {
      id: 'trees',
      name: 'Binary Trees',
      icon: TreeCategoryIcon,
      description: 'Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.',
      items: [
        {
          to: '/binarytree',
          icon: BinaryTreeIcon,
          title: 'Binary Tree Traversals',
          description: 'Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.',
          available: true
        },
        {
          to: '/bst',
          icon: BSTIcon,
          title: 'Binary Search Tree',
          description: 'The fundamental ordered tree: every node\'s left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step - like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.',
          available: true
        },
        {
          to: '/avl',
          icon: AVLIcon,
          title: 'AVL Tree',
          description: 'The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.',
          available: true
        },
        {
          to: '/splay',
          icon: SplayIcon,
          title: 'Splay Tree',
          description: 'A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root - perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT\'s virtual memory management, GCC\'s implementation of certain data structures, and network routers.',
          available: true
        },
        {
          to: '/treap',
          icon: TreapIcon,
          title: 'Treap',
          description: 'A randomized BST that combines tree and heap properties. Each node has a key (BST-ordered) and a random priority (max-heap-ordered). Rotations restore heap order after insertion, giving O(log n) expected time for all operations without complex rebalancing logic. Supports efficient split and merge. Widely used in competitive programming and as a simpler alternative to AVL/Red-Black trees.',
          available: true
        },
      ]
    },

    {
      id: 'Graphs',
      name: 'Graphs',
      icon: GraphIcon,
      description: 'Graphs model relationships between objects using vertices (nodes) and edges (connections). They power social networks, GPS navigation, recommendation systems, and the internet itself. Understanding graphs unlocks solutions to complex real-world problems like finding shortest paths, detecting communities, and optimizing networks.',
      items: [
        {
          to: '/adjacency-matrix',
          icon: AdjMatrixIcon,
          title: 'Adjacency Matrix',
          description: 'A 2D array used to represent a finite graph. Each cell at (i, j) indicates if there is an edge from vertex i to vertex j. Simple and fast for dense graphs, but uses O(V^2) space. Not practical for large, sparse graphs.',
          available: true
        },
        {
          to: '/adjacency-list',
          icon: AdjListIcon,
          title: 'Adjacency List',
          description: 'A space-efficient way to represent a graph. Each vertex stores a list of adjacent vertices. Ideal for sparse graphs, supports efficient iteration over neighbors. Commonly used in network routing, social networks, and recommendation systems.',
          available: true
        },
        {
          to: '/bfs',
          icon: BFSIcon,
          title: 'Breadth-First Search (BFS)',
          description: 'A fundamental graph traversal algorithm that explores neighbors level by level. Used for finding shortest paths in unweighted graphs, peer-to-peer networks, and web crawlers.',
          available: true
        },
        {
          to: '/dfs',
          icon: DFSIcon,
          title: 'Depth-First Search (DFS)',
          description: 'A classic graph traversal technique that explores as far as possible along each branch before backtracking. Used for topological sorting, cycle detection, and solving puzzles like mazes.',
          available: true
        },
      ]
    },
      
   
  ];

  return (
    <section className="algorithms-section">
      <header className="page-head">
        <h1>Explore data structures</h1>
        <p>
          Pick a category. Every visualizer runs step by step, with the code
          and the structure side by side.
        </p>
      </header>

      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-wrapper${expandedCategory === category.id ? ' expanded-wrapper' : ''}`}
          >
            {/* Category Header */}
            <button
              className={`category-header ${expandedCategory === category.id ? 'expanded' : ''}`}
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-icon">
                <category.icon />
              </div>
              <div className="category-info">
                <h2>{category.name}</h2>
              </div>
              <div className="category-meta">
                <span className="item-count">{category.items.filter(i => i.available).length} visualizers</span>
                {expandedCategory === category.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>

            {/* Expanded Items */}
            <div className={`category-items ${expandedCategory === category.id ? 'expanded' : ''}`}>
              <div className="items-grid">
                {category.items.map((item, index) => (
                  item.available ? (
                    <Link to={item.to} key={index} className="algorithm-item">
                      <div className="item-icon">
                        <item.icon />
                      </div>
                      <div className="item-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      <ArrowRight className="item-arrow" />
                    </Link>
                  ) : (
                    <div key={index} className="algorithm-item coming-soon">
                      <div className="item-icon disabled">
                        <item.icon />
                      </div>
                      <div className="item-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      <span className="coming-soon-badge">Coming Soon</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Algorithms;
