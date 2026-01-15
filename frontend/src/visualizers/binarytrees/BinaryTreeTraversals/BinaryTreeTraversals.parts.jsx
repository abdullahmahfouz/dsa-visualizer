import React from 'react';
import { AlertTriangle, HelpCircle, Info, Lightbulb } from 'lucide-react';

export const MAX_TREE_SIZE = 7;

// Traversal metadata
export const traversalDescriptions = {
  inorder: {
    name: 'Inorder Traversal',
    order: 'Left → Root → Right',
    description: 'Visit left subtree, process root, then visit right subtree. For BST, this produces sorted order.',
    useCase: ['Get sorted elements', 'Validate BST', 'Create mirror image'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  preorder: {
    name: 'Preorder Traversal',
    order: 'Root → Left → Right',
    description: 'Process root first, then recursively visit left and right subtrees. Useful for copying trees.',
    useCase: ['Copy tree structure', 'Serialize/deserialize', 'Prefix expressions'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  postorder: {
    name: 'Postorder Traversal',
    order: 'Left → Right → Root',
    description: 'Visit left subtree, right subtree, then process root. Essential for deleting nodes safely.',
    useCase: ['Delete nodes safely', 'Calculate folder sizes', 'Postfix expressions'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  levelorder: {
    name: 'Level Order Traversal',
    order: 'Level by Level (BFS)',
    description: 'Visit nodes level by level using a queue. Perfect for finding shortest paths.',
    useCase: ['Shortest path', 'Level-wise printing', 'Nodes at distance K'],
    complexity: { time: 'O(n)', space: 'O(w)' }
  }
};

// Traversal algorithms
export const inorderTraversal = (node, result = []) => {
  if (!node) return result;
  inorderTraversal(node.left, result);
  result.push(node.data);
  inorderTraversal(node.right, result);
  return result;
};

export const preorderTraversal = (node, result = []) => {
  if (!node) return result;
  result.push(node.data);
  preorderTraversal(node.left, result);
  preorderTraversal(node.right, result);
  return result;
};

export const postorderTraversal = (node, result = []) => {
  if (!node) return result;
  postorderTraversal(node.left, result);
  postorderTraversal(node.right, result);
  result.push(node.data);
  return result;
};

export const levelOrderTraversal = (root) => {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

export const calculateMaxLevel = (node, level = 0) => {
  if (!node) return level - 1;
  return Math.max(
    calculateMaxLevel(node.left, level + 1),
    calculateMaxLevel(node.right, level + 1)
  );
};

// Concept Boxes Component
export function ConceptBoxes() {
  return (
    <div className="intro-left">
      <div className="concept-box">
        <div className="concept-header">
          <HelpCircle className="icon-sm" />
          <span>What is a Binary Tree?</span>
        </div>
        <div className="concept-content">
          <p>
            A <strong>Binary Tree</strong> is a hierarchical data structure where each
            node has at most <strong>two children</strong>: left and right.
          </p>
          <div className="concept-analogy">
            <Lightbulb />
            <span>Think of a <strong>family tree</strong> – each person can have up to two children!</span>
          </div>
          <div className="concept-key-terms">
            <h4>Key Terms:</h4>
            <ul>
              <li><strong>Node:</strong> Contains data and links to children</li>
              <li><strong>Root:</strong> The topmost node (no parent)</li>
              <li><strong>Leaf:</strong> A node with no children</li>
              <li><strong>Height:</strong> Longest path from root to leaf</li>
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
          <p>
            <strong>Tree Traversal</strong> is visiting each node <strong>exactly once</strong> in a specific order.
          </p>
          <div className="concept-why-traverse">
            <h4>Why Traverse?</h4>
            <ul>
              <li><strong>Search:</strong> Find specific data</li>
              <li><strong>Copy:</strong> Duplicate the tree</li>
              <li><strong>Evaluate:</strong> Calculate expressions</li>
              <li><strong>Delete:</strong> Remove nodes properly</li>
            </ul>
          </div>
          <div className="concept-analogy" style={{ marginTop: '0.75rem' }}>
            <Lightbulb />
            <span>Like reading a book – you can read in different orders based on your needs!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Control Panel Component
export function ControlPanel({
  insertValue, deleteValue, size, height, message, tree, isAnimating, visitedNodes,
  onInsertValueChange, onDeleteValueChange, onInsert, onDelete, onTraversal, onClear, onResetTraversal
}) {
  const handleInput = (e, setter) => {
    const v = e.target.value;
    if (v === '' || v === '-' || /^-?\d*\.?\d*$/.test(v)) setter(v);
  };

  return (
    <div className="control-panel">
      <h2>Binary Tree Traversals</h2>

      <div className="operation-group">
        <label htmlFor="insertValue">Insert Node</label>
        <div className="input-group">
          <input
            type="number"
            id="insertValue"
            value={insertValue}
            onChange={(e) => handleInput(e, onInsertValueChange)}
            onKeyPress={(e) => e.key === 'Enter' && onInsert()}
            placeholder="Enter a number"
          />
          <button onClick={onInsert} className="btn btn-insert">Insert</button>
        </div>
      </div>

      <div className="operation-group">
        <label htmlFor="deleteValue">Delete Node</label>
        <div className="input-group">
          <input
            type="number"
            id="deleteValue"
            value={deleteValue}
            onChange={(e) => handleInput(e, onDeleteValueChange)}
            onKeyPress={(e) => e.key === 'Enter' && onDelete()}
            placeholder="Enter a number"
          />
          <button onClick={onDelete} className="btn btn-delete">Delete</button>
        </div>
      </div>

      <div className="operation-group">
        <label>Traversals</label>
        <div className="btn-group">
          {['inorder', 'preorder', 'postorder', 'levelorder'].map(type => (
            <button
              key={type}
              onClick={() => onTraversal(type)}
              className="btn btn-traversal"
              disabled={isAnimating || !tree}
            >
              {type === 'levelorder' ? 'Level Order' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        {visitedNodes.length > 0 && !isAnimating && (
          <button onClick={onResetTraversal} className="btn btn-secondary" style={{ marginTop: '0.5rem', width: '100%' }}>
            Reset Colors
          </button>
        )}
      </div>

      <div className="traversal-legend">
        <div className="legend-item"><span className="legend-dot legend-dot--default" /><span>Not visited</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--visiting" /><span>Visiting</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--visited" /><span>Visited</span></div>
      </div>

      <div className="info-panel">
        <div className="info-item"><span className="info-label">Size:</span><span className="info-value">{size}</span></div>
        <div className="info-item"><span className="info-label">Height:</span><span className="info-value">{height}</span></div>
        <div className="info-item"><span className="info-label">Max Size:</span><span className="info-value">{MAX_TREE_SIZE}</span></div>
      </div>

      {size >= MAX_TREE_SIZE * 0.8 && size < MAX_TREE_SIZE && (
        <div className="warning-box">
          <AlertTriangle size={18} />
          <div><strong>Tree is filling up!</strong> You're at {size}/{MAX_TREE_SIZE} nodes.</div>
        </div>
      )}

      <div className="operation-group">
        <button onClick={onClear} className="btn btn-clear">Clear Tree</button>
      </div>

      {message && (
        <div className={`message message-${
          message.includes('Error') || message.includes('error') ? 'error' :
          /success|complete|Inserted|Deleted|cleared/i.test(message) ? 'success' :
          message.includes('full') ? 'warning' : 'info'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}

// Tree Renderer Component
export function TreeRenderer({ tree, currentNode, visitedNodes }) {
  const getNodeStyle = (data) => {
    const isCurrent = currentNode === data;
    const isVisited = visitedNodes.includes(data);
    return {
      color: isCurrent ? '#f59e0b' : isVisited ? '#10b981' : '#6366f1',
      glow: isCurrent ? 'drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)' : 
            isVisited ? 'drop-shadow(0 0 6px #10b981)' : 'none',
      radius: isCurrent ? 30 : 25,
      stroke: isCurrent ? 3 : 2,
      fontSize: isCurrent ? 16 : 14,
      fontWeight: isCurrent ? 'bold' : 'normal'
    };
  };

  const renderTree = (node, x, y, level, maxLevel) => {
    if (!node) return [];
    const spacing = Math.pow(2, maxLevel - level) * 50;
    const style = getNodeStyle(node.data);
    const elements = [];

    // Draw lines to children
    if (node.left) {
      elements.push(<line key={`l-${node.data}-l`} x1={x} y1={y} x2={x - spacing} y2={y + 100} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />);
      elements.push(...renderTree(node.left, x - spacing, y + 100, level + 1, maxLevel));
    }
    if (node.right) {
      elements.push(<line key={`l-${node.data}-r`} x1={x} y1={y} x2={x + spacing} y2={y + 100} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />);
      elements.push(...renderTree(node.right, x + spacing, y + 100, level + 1, maxLevel));
    }

    // Draw node
    elements.push(
      <g key={`n-${node.data}-${x}`} style={{ filter: style.glow, transition: 'all 0.3s ease' }}>
        <circle cx={x} cy={y} r={style.radius} fill={style.color} stroke="white" strokeWidth={style.stroke} style={{ transition: 'all 0.3s ease' }} />
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={style.fontSize} fontWeight={style.fontWeight}>
          {node.data}
        </text>
      </g>
    );
    return elements;
  };

  if (!tree) return <div className="tree-empty">Tree is empty. Insert some nodes!</div>;

  const maxLevel = calculateMaxLevel(tree);
  const svgHeight = (maxLevel + 1) * 100 + 50;
  const svgWidth = Math.max(800, Math.pow(2, Math.max(maxLevel, 1)) * 80);

  return (
    <svg width={svgWidth} height={svgHeight} className="tree-svg">
      {renderTree(tree, svgWidth / 2, 50, 0, maxLevel)}
    </svg>
  );
}

// Traversal Output Component
export function TraversalOutput({ traversalType, traversalResult, isAnimating, traversalComplete }) {
  if (!traversalType || (traversalResult.length === 0 && !isAnimating)) return null;

  const desc = traversalDescriptions[traversalType];

  return (
    <div className="traversal-output-panel">
      <div style={{ marginBottom: '1rem' }}>
        <h3 className="traversal-title">
          {desc?.name}
          {isAnimating && <span className="traversal-badge traversal-badge--running">Running...</span>}
          {traversalComplete && <span className="traversal-badge traversal-badge--complete">Complete</span>}
        </h3>
        <p className="traversal-order"><strong>Order:</strong> {desc?.order}</p>
        <p className="traversal-description">{desc?.description}</p>
      </div>

      <div className="traversal-output-box">
        <div className="traversal-output-label">Output Sequence:</div>
        <div className="traversal-sequence-container">
          {traversalResult.length === 0 && isAnimating ? (
            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Traversing...</span>
          ) : (
            traversalResult.map((val, idx) => (
              <span key={idx} className={`traversal-node ${idx === traversalResult.length - 1 && !traversalComplete ? 'traversal-node--current' : 'traversal-node--complete'}`}>
                {val}
              </span>
            ))
          )}
        </div>
      </div>

      {traversalComplete && traversalResult.length > 0 && (
        <div className="traversal-array-section">
          <div className="traversal-array-label">Array Output:</div>
          <code className="traversal-array-output">[{traversalResult.join(', ')}]</code>
          <p className="traversal-use-case">Use case: {desc?.useCase.join(' • ')}</p>
          <div className="traversal-complexity">
            <strong>Time:</strong> <code className="complexity-value">{desc?.complexity.time}</code> (visits each node once)<br />
            <strong>Space:</strong> <code className="complexity-value">{desc?.complexity.space}</code> (recursion stack/queue)
          </div>
        </div>
      )}
    </div>
  );
}
