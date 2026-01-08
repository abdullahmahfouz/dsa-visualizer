import React, { useState, useEffect, useCallback } from 'react';
import { HelpCircle, Lightbulb, Info, AlertTriangle } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';

const MAX_TREE_SIZE = 20;

function BinaryTreeVisualizer() {
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);
  const [message, setMessage] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [traversalResult, setTraversalResult] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentNode, setCurrentNode] = useState(null); // Currently visiting
  const [visitedNodes, setVisitedNodes] = useState([]); // Already visited
  const [traversalType, setTraversalType] = useState(null); // Current traversal type
  const [traversalComplete, setTraversalComplete] = useState(false); // Is traversal done?

  useEffect(() => {
    loadTree();
  }, []);

  const loadTree = async () => {
    try {
      const response = await fetch('/api/binarytree');
      const data = await response.json();
      setTree(data.tree);
      setSize(data.size || 0);
      setHeight(data.height !== undefined ? data.height : -1);
    } catch (error) {
      console.error('Error loading tree:', error);
    }
  };

  const showMessage = (text, type = 'info') => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  // Validate number input
  const handleNumberInput = (value, setter) => {
    // Only allow numbers (including negative and decimals)
    if (value === '' || value === '-' || /^-?\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const insertNode = async () => {
    if (!insertValue.trim()) {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(insertValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    if (size >= MAX_TREE_SIZE) {
        showMessage(`Tree is full! Maximum size is ${MAX_TREE_SIZE} nodes.`, 'error');
        return;
    }

    try {
      const response = await fetch('/api/binarytree/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(`${result.error}`, 'error');
        return;
      }

      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      showMessage(`Inserted ${numValue}`, 'success');
      setInsertValue('');
    } catch (error) {
      showMessage('Error inserting node', 'error');
    }
  };

  const deleteNode = async () => {
    if (!deleteValue.trim()) {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(deleteValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    try {
      const response = await fetch('/api/binarytree/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(`${result.error}`, 'error');
        return;
      }

      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      showMessage(`Deleted ${numValue}`, 'success');
      setDeleteValue('');
    } catch (error) {
      showMessage('Error deleting node', 'error');
    }
  };

  const traversalDescriptions = {
    inorder: {
      name: 'Inorder Traversal',
      order: 'Left → Root → Right',
      description: 'Visit the left subtree first, then process the root node, then visit the right subtree. For Binary Search Trees (BST), this produces elements in sorted ascending order because smaller values are in the left subtree and larger values are in the right.',
      useCase: [
        'Get elements of a BST in sorted order',
        'Validate if a tree is a BST',
        'Create a mirror image of the tree'
      ],
      complexity: { time: 'O(n)', space: 'O(h)' }
    },
    preorder: {
      name: 'Preorder Traversal',
      order: 'Root → Left → Right',
      description: 'Process the root node first, then recursively visit the left subtree, and finally the right subtree. This order is useful when you need to process parent nodes before their children, such as creating a copy of the tree or serializing it.',
      useCase: [
        'Create a copy of the tree structure',
        'Serialize/deserialize a tree',
        'Prefix expression evaluation'
      ],
      complexity: { time: 'O(n)', space: 'O(h)' }
    },
    postorder: {
      name: 'Postorder Traversal',
      order: 'Left → Right → Root',
      description: 'Recursively visit the left subtree, then the right subtree, and finally process the root node. This order is essential when you need to process children before their parent, like deleting nodes or calculating directory sizes.',
      useCase: [
        'Delete all nodes in the tree safely',
        'Calculate folder sizes in a file system',
        'Postfix expression evaluation'
      ],
      complexity: { time: 'O(n)', space: 'O(h)' }
    },
    levelorder: {
      name: 'Level Order Traversal',
      order: 'Level by Level (BFS)',
      description: 'Visit nodes level by level, from left to right at each level, starting from the root. This Breadth-First Search (BFS) approach uses a queue to track nodes to visit next. Perfect for finding the shortest path or nearest neighbors.',
      useCase: [
        'Find shortest path in unweighted graphs',
        'Level-wise printing of tree',
        'Find all nodes at a given distance'
      ],
      complexity: { time: 'O(n)', space: 'O(w)' }
    }
  };

  // Traversal algorithms
  const inorderTraversal = (node, result = []) => {
    if (!node) return result;
    inorderTraversal(node.left, result);
    result.push(node.data);
    inorderTraversal(node.right, result);
    return result;
  };

  const preorderTraversal = (node, result = []) => {
    if (!node) return result;
    result.push(node.data);
    preorderTraversal(node.left, result);
    preorderTraversal(node.right, result);
    return result;
  };

  const postorderTraversal = (node, result = []) => {
    if (!node) return result;
    postorderTraversal(node.left, result);
    postorderTraversal(node.right, result);
    result.push(node.data);
    return result;
  };

  const levelOrderTraversal = (root) => {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  };

  const performTraversal = async (type) => {
    if (!tree) {
      showMessage('Tree is empty! Insert some nodes first.', 'error');
      return;
    }

    setIsAnimating(true);
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(type);
    setTraversalComplete(false);

    // Get traversal sequence locally
    let sequence = [];
    switch (type) {
      case 'inorder':
        sequence = inorderTraversal(tree);
        break;
      case 'preorder':
        sequence = preorderTraversal(tree);
        break;
      case 'postorder':
        sequence = postorderTraversal(tree);
        break;
      case 'levelorder':
        sequence = levelOrderTraversal(tree);
        break;
      default:
        sequence = [];
      }

    console.log('Traversal sequence:', sequence);
      
      if (sequence.length === 0) {
        showMessage('Tree is empty!', 'error');
        setIsAnimating(false);
        return;
      }
      
      // Animate traversal with node highlighting
      for (let i = 0; i < sequence.length; i++) {
        // Highlight current node
        setCurrentNode(sequence[i]);
        await new Promise(resolve => setTimeout(resolve, 600));
        
        // Move to visited and add to result
        setVisitedNodes(prev => [...prev, sequence[i]]);
        setTraversalResult(prev => [...prev, sequence[i]]);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // Clear current node highlight after completion
      setCurrentNode(null);
      setTraversalComplete(true);
      setIsAnimating(false);
      showMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} traversal complete!`, 'success');
  };

  const clearTree = async () => {
    try {
      await fetch('/api/binarytree/clear', { method: 'POST' });
      setTree(null);
      setSize(0);
      setHeight(-1);
      setTraversalResult([]);
      setCurrentNode(null);
      setVisitedNodes([]);
      setTraversalType(null);
      setTraversalComplete(false);
      showMessage('Tree cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing tree', 'error');
    }
  };

  // Reset traversal highlighting
  const resetTraversal = () => {
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(null);
    setTraversalComplete(false);
  };

  // Get node color based on traversal state
  const getNodeColor = (nodeData) => {
    if (currentNode === nodeData) {
      return '#f59e0b'; // Orange - currently visiting
    }
    if (visitedNodes.includes(nodeData)) {
      return '#10b981'; // Green - already visited
    }
    return '#6366f1'; // Purple - not visited yet (default)
  };

  const getNodeGlow = (nodeData) => {
    if (currentNode === nodeData) {
      return 'drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)';
    }
    if (visitedNodes.includes(nodeData)) {
      return 'drop-shadow(0 0 6px #10b981)';
    }
    return 'none';
  };

  const renderTree = (node, x = 400, y = 50, level = 0, maxLevel = 0) => {
    if (!node) return null;

    const spacing = Math.pow(2, maxLevel - level) * 50;
    const children = [];

    // Draw lines first (so they appear behind nodes)
    if (node.left) {
      children.push(
        <line
          key={`line-left-${node.data}-${x}-${y}`}
          x1={x}
          y1={y}
          x2={x - spacing}
          y2={y + 100}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
      );
    }
    if (node.right) {
      children.push(
        <line
          key={`line-right-${node.data}-${x}-${y}`}
          x1={x}
          y1={y}
          x2={x + spacing}
          y2={y + 100}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
      );
    }

    // Recursively render children first
    if (node.left) {
      children.push(...renderTree(node.left, x - spacing, y + 100, level + 1, maxLevel));
    }
    if (node.right) {
      children.push(...renderTree(node.right, x + spacing, y + 100, level + 1, maxLevel));
    }

    // Render current node last (so it appears on top)
    const nodeColor = getNodeColor(node.data);
    const nodeGlow = getNodeGlow(node.data);
    const isCurrentlyVisiting = currentNode === node.data;

    const nodeElement = (
      <g 
        key={`node-${node.data}-${x}-${y}`} 
        style={{ 
          filter: nodeGlow,
          transition: 'all 0.3s ease'
        }}
      >
        <circle 
          cx={x} 
          cy={y} 
          r={isCurrentlyVisiting ? 30 : 25} 
          fill={nodeColor} 
          stroke="white" 
          strokeWidth={isCurrentlyVisiting ? 3 : 2}
          style={{ transition: 'all 0.3s ease' }}
        />
        <text 
          x={x} 
          y={y} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fill="white" 
          fontSize={isCurrentlyVisiting ? 16 : 14}
          fontWeight={isCurrentlyVisiting ? 'bold' : 'normal'}
        >
          {node.data}
        </text>
      </g>
    );

    children.push(nodeElement);

    return children;
  };

  const calculateMaxLevel = (node, level = 0) => {
    if (!node) return level - 1;
    return Math.max(
      calculateMaxLevel(node.left, level + 1),
      calculateMaxLevel(node.right, level + 1)
    );
  };

  const svgHeight = tree ? (calculateMaxLevel(tree) + 1) * 100 + 50 : 100;
  const svgWidth = tree ? Math.max(800, Math.pow(2, Math.max(calculateMaxLevel(tree), 1)) * 80) : 800;

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="intro-left">
          <div className="concept-box">
            <div className="concept-header">
              <HelpCircle className="icon-sm" />
              <span>What is a Binary Tree?</span>
            </div>
            <div className="concept-content">
              <p>A <strong>Binary Tree</strong> is a hierarchical data structure where each node contains data and has at most <strong>two children</strong>: a left child and a right child.</p>
              <div className="concept-analogy">
                <Lightbulb />
                <span>Think of a <strong>family tree</strong> – each person can have up to two children, creating branches!</span>
              </div>
              
              <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Key Terms:</h4>
                <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginLeft: '1.25rem' }}>
                  <li><strong>Node:</strong> Contains data and links to left/right children</li>
                  <li><strong>Root:</strong> The topmost node (has no parent)</li>
                  <li><strong>Leaf:</strong> A node with no children</li>
                  <li><strong>Height:</strong> Longest path from root to a leaf</li>
                  <li><strong>Parent/Child:</strong> Direct connection between nodes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="concept-box" style={{ marginTop: '1rem' }}>
            <div className="concept-header">
              <Info className="icon-sm" />
              <span>What are Tree Traversals?</span>
            </div>
            <div className="concept-content">
              <p><strong>Tree Traversal</strong> is the process of visiting each node in a tree <strong>exactly once</strong> in a specific order. Different traversal methods serve different purposes.</p>
              
              <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Why Traverse?</h4>
                <ul style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginLeft: '1.25rem' }}>
                  <li><strong>Search:</strong> Find specific data in the tree</li>
                  <li><strong>Copy:</strong> Create a duplicate of the tree</li>
                  <li><strong>Evaluate:</strong> Calculate expressions stored in the tree</li>
                  <li><strong>Print:</strong> Display tree contents in different orders</li>
                  <li><strong>Delete:</strong> Remove nodes in proper sequence</li>
                </ul>
              </div>
              
              <div className="concept-analogy" style={{ marginTop: '0.75rem' }}>
                <Lightbulb />
                <span>Like reading a book – you can read left-to-right, top-to-bottom, or even <strong>skip around</strong> based on your needs!</span>
              </div>
            </div>
          </div>
        </div>

        <AIAssistant context="Binary Tree data structure and traversals" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Binary Tree Traversals</h2>
          <div className="operation-group">
            <label htmlFor="insertValue">Insert Node</label>
            <div className="input-group">
              <input
                type="number"
                id="insertValue"
                value={insertValue}
                onChange={(e) => handleNumberInput(e.target.value, setInsertValue)}
                onKeyPress={(e) => e.key === 'Enter' && insertNode()}
                placeholder="Enter a number"
              />
              <button onClick={insertNode} className="btn btn-insert">Insert</button>
            </div>
          </div>
          <div className="operation-group">
            <label htmlFor="deleteValue">Delete Node</label>
            <div className="input-group">
              <input
                type="number"
                id="deleteValue"
                value={deleteValue}
                onChange={(e) => handleNumberInput(e.target.value, setDeleteValue)}
                onKeyPress={(e) => e.key === 'Enter' && deleteNode()}
                placeholder="Enter a number"
              />
              <button onClick={deleteNode} className="btn btn-delete">Delete</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Traversals</label>
            <div className="btn-group">
              <button 
                onClick={() => performTraversal('inorder')} 
                className="btn btn-traversal"
                disabled={isAnimating || !tree}
              >
                Inorder
              </button>
              <button 
                onClick={() => performTraversal('preorder')} 
                className="btn btn-traversal"
                disabled={isAnimating || !tree}
              >
                Preorder
              </button>
              <button 
                onClick={() => performTraversal('postorder')} 
                className="btn btn-traversal"
                disabled={isAnimating || !tree}
              >
                Postorder
              </button>
              <button 
                onClick={() => performTraversal('levelorder')} 
                className="btn btn-traversal"
                disabled={isAnimating || !tree}
              >
                Level Order
              </button>
            </div>
            {visitedNodes.length > 0 && !isAnimating && (
              <button onClick={resetTraversal} className="btn btn-secondary" style={{ marginTop: '0.5rem', width: '100%' }}>
                Reset Colors
              </button>
            )}
          </div>
          
          {/* Color Legend */}
          <div className="traversal-legend" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '1rem',
            fontSize: '0.85rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: '#6366f1',
                display: 'inline-block'
              }}></span>
              <span>Not visited</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: '#f59e0b',
                display: 'inline-block',
                boxShadow: '0 0 8px #f59e0b'
              }}></span>
              <span>Visiting</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: '#10b981',
                display: 'inline-block'
              }}></span>
              <span>Visited</span>
            </div>
          </div>
          
          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Height:</span>
              <span className="info-value">{height}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Max Size:</span>
              <span className="info-value">{MAX_TREE_SIZE}</span>
            </div>
          </div>

          {size >= MAX_TREE_SIZE * 0.8 && size < MAX_TREE_SIZE && (
            <div className="warning-box">
              <AlertTriangle size={18} />
              <div>
                <strong>Tree is filling up!</strong> You're at {size}/{MAX_TREE_SIZE} nodes. Consider clearing or deleting nodes to maintain visualization clarity.
              </div>
            </div>
          )}

          <div className="operation-group">
            <button onClick={clearTree} className="btn btn-clear">Clear Tree</button>
          </div>

          {message && (
            <div className={`message message-${message.includes('Error') || message.includes('error') ? 'error' : message.includes('success') || message.includes('complete') || message.includes('Inserted') || message.includes('Deleted') || message.includes('cleared') ? 'success' : message.includes('full') || message.includes('Traversal') ? 'warning' : 'info'}`}>
              {message}
            </div>
          )}
        </div>

        <div className="visual-panel">
          <h2>Binary Tree Visualization</h2>
          <div className="tree-container">
            {!tree ? (
              <div className="tree-empty">Tree is empty. Insert some nodes!</div>
            ) : (
              <svg width={svgWidth} height={svgHeight} className="tree-svg">
                {renderTree(tree, svgWidth / 2, 50, 0, calculateMaxLevel(tree))}
              </svg>
            )}
          </div>
          
          {/* Traversal Output Panel */}
          {(traversalResult.length > 0 || isAnimating) && traversalType && (
            <div className="traversal-output-panel" style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                  color: 'var(--accent-primary)',
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {traversalDescriptions[traversalType]?.name}
                  {isAnimating && <span style={{
                    fontSize: '0.75rem',
                    background: '#f59e0b',
                    color: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>Running...</span>}
                  {traversalComplete && <span style={{
                    fontSize: '0.75rem',
                    background: '#10b981',
                    color: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>Complete</span>}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.25rem'
                }}>
                  <strong>Order:</strong> {traversalDescriptions[traversalType]?.order}
                </p>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5'
                }}>
                  {traversalDescriptions[traversalType]?.description}
                </p>
              </div>

              {/* Live Result */}
              <div style={{
                background: 'var(--bg-tertiary)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Output Sequence:
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  minHeight: '2rem',
                  alignItems: 'center'
                }}>
                  {traversalResult.length === 0 && isAnimating ? (
                    <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Traversing...
                    </span>
                  ) : (
                    traversalResult.map((val, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: idx === traversalResult.length - 1 && !traversalComplete
                            ? '#f59e0b'
                            : '#10b981',
                          color: 'white',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {val}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Final Output */}
              {traversalComplete && traversalResult.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem'
                  }}>
                    Array Output:
                  </div>
                  <code style={{
                    display: 'block',
                    background: 'var(--bg-secondary)',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: '#10b981',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    [{traversalResult.join(', ')}]
                  </code>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.75rem',
                    fontStyle: 'italic'
                  }}>
                    Use case: {traversalDescriptions[traversalType]?.useCase.join(' ')}
                  </p>
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <strong>Time Complexity:</strong> <code style={{ color: 'var(--accent-primary)', background: 'transparent', padding: '0' }}>{traversalDescriptions[traversalType]?.complexity.time}</code> (visits each node once)<br/>
                    <strong>Space Complexity:</strong> <code style={{ color: 'var(--accent-primary)', background: 'transparent', padding: '0' }}>{traversalDescriptions[traversalType]?.complexity.space}</code> (due to recursion stack or queue)
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <CodeTabs dataStructure="binarytree" />
    </div>
  );
}

export default BinaryTreeVisualizer;

