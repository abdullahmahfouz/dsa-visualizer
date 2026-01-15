import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, ArrowRightLeft, Link as LinkIcon, Hash, GitBranch, 
  GitFork, Scale, MoveUp, ArrowDownNarrowWide, ArrowUpNarrowWide, 
  ArrowRight, ChevronDown, ChevronUp, ListOrdered, Database, TreeDeciduous, Pyramid
} from 'lucide-react';

function Algorithms() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categories = [
    {
      id: 'linear',
      name: 'Linear Data Structures',
      icon: ListOrdered,
      description: 'Elements stored sequentially where each element has a unique predecessor and successor. These are the building blocks of computer science — simple to implement yet powerful enough to solve complex problems.',
      color: '#6366f1',
      items: [
        { 
          to: '/stack', 
          icon: Layers, 
          title: 'Stack', 
          description: 'LIFO (Last In, First Out) — imagine a stack of plates where you can only add or remove from the top. The most recent item is always accessed first. Push adds to top, Pop removes from top. Both operations are O(1) constant time. Essential for: browser back button (page history), undo/redo in editors, function call management in recursion, parsing expressions like (a+b)*c, and depth-first search algorithms.', 
          available: true 
        },
        { 
          to: '/queue', 
          icon: ArrowRightLeft, 
          title: 'Queue', 
          description: 'FIFO (First In, First Out) — like waiting in line at a coffee shop. The first person to arrive gets served first. Enqueue adds to the back, Dequeue removes from front. Both O(1) operations. Used everywhere: print job scheduling, CPU task management, breadth-first search (BFS) in graphs, handling requests in web servers, and buffering data streams like video playback.', 
          available: true 
        },
        { 
          to: '/linkedlist', 
          icon: LinkIcon, 
          title: 'Linked List', 
          description: 'A chain of nodes where each node stores data and a pointer to the next node. Unlike arrays, memory doesn\'t need to be contiguous — nodes can be scattered in memory. Insertion/deletion at known positions is O(1), but finding a position is O(n). Perfect for: implementing stacks/queues, music playlists (next/previous song), browser history, memory allocation in operating systems, and polynomial arithmetic.', 
          available: true 
        },
      ]
    },
    {
      id: 'hash',
      name: 'Hash-Based Structures',
      icon: Database,
      description: 'Revolutionary data structures that use hash functions to map keys to array indices, enabling O(1) average-case lookup, insertion, and deletion. The backbone of databases, caches, and any system requiring fast key-value access.',
      color: '#10b981',
      items: [
        { 
          to: '/hashtable_linear', 
          icon: Hash, 
          title: 'Linear Probing', 
          description: 'Open addressing collision resolution: when a collision occurs (two keys hash to same index), simply check the next slot, then the next, until an empty slot is found. Pros: excellent cache performance since data is stored contiguously, simple implementation. Cons: can cause "primary clustering" where long runs of occupied slots form, degrading performance. Load factor should stay below 0.7 for efficiency.', 
          available: true 
        },
        { 
          to: '/hashtable_quadratic', 
          icon: Hash, 
          title: 'Quadratic Probing', 
          description: 'Instead of checking consecutive slots, probe at quadratic intervals: 1², 2², 3²... positions away from the original hash. This eliminates primary clustering but can cause "secondary clustering" where keys with the same hash follow the same probe sequence. Table size should be prime and load factor < 0.5 to guarantee finding an empty slot. Used when cache performance is less critical than even distribution.', 
          available: true 
        },
        { 
          to: '/hashtable_chaining', 
          icon: Hash, 
          title: 'Separate Chaining', 
          description: 'Each array slot holds a linked list (chain) of all entries that hash to that index. No limit on how many items can be stored — just grow the chains. Handles high load factors gracefully (even > 1.0). Simpler deletion than open addressing. Used in Java\'s HashMap, Python\'s dict (with optimization). Trade-off: extra memory for pointers, potentially poor cache performance with long chains.', 
          available: true
        },
      ]
    },
    {
      id: 'trees',
      name: 'Tree Structures',
      icon: TreeDeciduous,
      description: 'Hierarchical data structures where data flows from a root node down through children. Trees enable O(log n) operations on sorted data and model real-world hierarchies like file systems, organization charts, and decision trees in AI/ML.',
      color: '#f59e0b',
      items: [
        { 
          to: '/binarytree', 
          icon: GitBranch, 
          title: 'Binary Tree Traversals', 
          description: 'Master the four fundamental ways to visit every node in a binary tree: INORDER (Left→Root→Right) visits nodes in sorted order for BST, used for expression trees; PREORDER (Root→Left→Right) processes root first, perfect for copying trees or creating prefix expressions; POSTORDER (Left→Right→Root) processes children before parent, used for deleting trees or postfix notation; LEVEL-ORDER (BFS) visits level by level, used for finding shortest paths and printing tree structure.', 
          available: true 
        },
        { 
          to: '/bst', 
          icon: GitFork, 
          title: 'Binary Search Tree', 
          description: 'The fundamental ordered tree: every node\'s left subtree contains only smaller values, right subtree only larger values. This property enables O(log n) search by eliminating half the tree at each step — like binary search but in tree form. Supports efficient range queries. Caveat: can degrade to O(n) if insertions create an unbalanced "stick". Foundation for databases, symbol tables, and more advanced balanced trees.', 
          available: true 
        },
        { 
          to: '/avl', 
          icon: Scale, 
          title: 'AVL Tree', 
          description: 'The first self-balancing BST, invented in 1962. Maintains strict balance: height difference between left and right subtrees ≤ 1 at every node. When insertion/deletion violates this, the tree self-corrects using rotations (single or double). Guarantees O(log n) for all operations. More rigidly balanced than Red-Black trees, so faster lookups but slightly slower insertions. Used when reads far exceed writes.', 
          available: false 
        },
        { 
          to: '/splay', 
          icon: MoveUp, 
          title: 'Splay Tree', 
          description: 'A self-adjusting BST with a clever optimization: every accessed node is "splayed" (rotated) to the root. No explicit balance condition, yet achieves O(log n) amortized time. Recently accessed items stay near the root — perfect for caches where some items are accessed repeatedly (temporal locality). Used in Windows NT\'s virtual memory management, GCC\'s implementation of certain data structures, and network routers.', 
          available: false 
        },
      ]
    },
    {
      id: 'heaps',
      name: 'Heap Structures',
      icon: Pyramid,
      description: 'Complete binary trees satisfying the heap property — either every parent ≥ children (max-heap) or every parent ≤ children (min-heap). Heaps power priority queues, enabling O(1) access to the extreme element and O(log n) insertions and deletions.',
      color: '#ec4899',
      items: [
        { 
          to: '/minheap', 
          icon: ArrowDownNarrowWide, 
          title: 'Min Heap', 
          description: 'Every parent node is smaller than or equal to its children, so the minimum element is always at the root — accessible in O(1). Insert and extract-min are O(log n) as elements "bubble up" or "sink down" to maintain the heap property. Critical for: Dijkstra\'s shortest path algorithm, Prim\'s minimum spanning tree, job schedulers (process with smallest priority runs next), and efficiently finding the k largest elements in a stream.', 
          available: false 
        },
        { 
          to: '/maxheap', 
          icon: ArrowUpNarrowWide, 
          title: 'Max Heap', 
          description: 'The mirror of min-heap: every parent ≥ children, maximum at root. Extract-max in O(1), insert and delete in O(log n). Powers: Heapsort algorithm (in-place O(n log n) sorting), priority queues where highest priority goes first, finding k smallest elements, implementing a median-finding structure (use one min-heap + one max-heap), and bandwidth management in network routers.', 
          available: false 
        },
      ]
    },
  ];

  return (
    <section className="algorithms-section">
      <div className="section-header">
        <h1>Explore Data Structures</h1>
        <p>Choose a category to explore different data structures. Each visualizer includes step-by-step explanations and hands-on practice.</p>
      </div>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-wrapper">
            {/* Category Header */}
            <button 
              className={`category-header ${expandedCategory === category.id ? 'expanded' : ''}`}
              onClick={() => toggleCategory(category.id)}
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon" style={{ background: category.color }}>
                <category.icon />
              </div>
              <div className="category-info">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <div className="category-meta">
                <span className="item-count">{category.items.filter(i => i.available).length} available</span>
                {expandedCategory === category.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </button>

            {/* Expanded Items */}
            <div className={`category-items ${expandedCategory === category.id ? 'expanded' : ''}`}>
              <div className="items-grid">
                {category.items.map((item, index) => (
                  item.available ? (
                    <Link to={item.to} key={index} className="algorithm-item">
                      <div className="item-icon" style={{ background: category.color }}>
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
