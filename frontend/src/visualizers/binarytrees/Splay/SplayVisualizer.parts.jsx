import React from 'react';
import { AlertTriangle, Search } from 'lucide-react';

export const MAX_TREE_SIZE = 7;

// Traversal metadata
export const traversalDescriptions = {
  inorder: {
    name: 'Inorder Traversal',
    order: 'Left -> Root -> Right',
    description: 'Returns elements in SORTED order.',
    useCase: ['Get sorted elements', 'Validate BST property'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  preorder: {
    name: 'Preorder Traversal',
    order: 'Root -> Left -> Right',
    description: 'Process root first. Root shows most recently accessed!',
    useCase: ['See access pattern', 'Serialize structure'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  postorder: {
    name: 'Postorder Traversal',
    order: 'Left -> Right -> Root',
    description: 'Process children before root.',
    useCase: ['Delete tree safely', 'Calculate subtree info'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  levelorder: {
    name: 'Level Order Traversal',
    order: 'Level by Level (BFS)',
    description: 'Visit nodes level by level.',
    useCase: ['Level-wise printing', 'Find width'],
    complexity: { time: 'O(n)', space: 'O(w)' }
  }
};

export const calculateMaxLevel = (node, level = 0) => {
  if (!node) return level - 1;
  return Math.max(
    calculateMaxLevel(node.left, level + 1),
    calculateMaxLevel(node.right, level + 1)
  );
};

// Control Panel Component
export function ControlPanel({
  insertValue, deleteValue, searchValue, size, height, message, tree, isAnimating,
  visitedNodes, lastSplayedValue,
  onInsertValueChange, onDeleteValueChange, onSearchValueChange,
  onInsert, onDelete, onSearch, onTraversal, onClear, onResetTraversal
}) {
  const handleInput = (e, setter) => {
    const v = e.target.value;
    if (v === '' || v === '-' || /^-?\d*\.?\d*$/.test(v)) setter(v);
  };

  return (
    <div className="control-panel">
      <h2>Splay Tree</h2>

      <div className="splay-info-box">
        <strong>Key Feature:</strong> Accessed nodes move to root!
      </div>

      <div className="operation-group">
        <label htmlFor="insertValue">Insert Value</label>
        <div className="input-group">
          <input
            type="number"
            id="insertValue"
            value={insertValue}
            onChange={(e) => handleInput(e, onInsertValueChange)}
            onKeyDown={(e) => e.key === 'Enter' && onInsert()}
            placeholder="Enter a number"
            disabled={isAnimating}
          />
          <button onClick={onInsert} className="btn btn-insert" disabled={isAnimating}>Insert</button>
        </div>
      </div>

      <div className="operation-group">
        <label htmlFor="searchValue">Search Value (Splays to Root!)</label>
        <div className="input-group">
          <input
            type="number"
            id="searchValue"
            value={searchValue}
            onChange={(e) => handleInput(e, onSearchValueChange)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Enter a number"
            disabled={isAnimating}
          />
          <button onClick={onSearch} className="btn btn-search" disabled={isAnimating || !tree}>
            <Search size={16} /> Search
          </button>
        </div>
      </div>

      <div className="operation-group">
        <label htmlFor="deleteValue">Delete Value</label>
        <div className="input-group">
          <input
            type="number"
            id="deleteValue"
            value={deleteValue}
            onChange={(e) => handleInput(e, onDeleteValueChange)}
            onKeyDown={(e) => e.key === 'Enter' && onDelete()}
            placeholder="Enter a number"
            disabled={isAnimating}
          />
          <button onClick={onDelete} className="btn btn-delete" disabled={isAnimating}>Delete</button>
        </div>
      </div>

      <div className="operation-group">
        <label>Traversals</label>
        <div className="btn-group">
          {['inorder', 'preorder', 'postorder', 'levelorder'].map(type => (
            <button
              key={type}
              onClick={() => onTraversal(type)}
              className={`btn btn-traversal`}
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
        <div className="legend-item"><span className="legend-dot legend-dot--visiting" /><span>Current</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--visited" /><span>Visited</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#ec4899' }} /><span>Root (Splayed)</span></div>
      </div>

      <div className="info-panel">
        <div className="info-item"><span className="info-label">Nodes:</span><span className="info-value">{size}</span></div>
        <div className="info-item"><span className="info-label">Height:</span><span className="info-value">{height}</span></div>
        <div className="info-item"><span className="info-label">Max:</span><span className="info-value">{MAX_TREE_SIZE}</span></div>
      </div>

      {lastSplayedValue !== null && (
        <div className="splay-result-box">
          <strong>Root:</strong> {lastSplayedValue} (most recently accessed)
        </div>
      )}

      {size >= MAX_TREE_SIZE * 0.8 && size < MAX_TREE_SIZE && (
        <div className="warning-box">
          <AlertTriangle size={18} />
          <div><strong>Tree filling up!</strong> {size}/{MAX_TREE_SIZE} nodes.</div>
        </div>
      )}

      <div className="operation-group">
        <button onClick={onClear} className="btn btn-clear" disabled={isAnimating}>Clear Tree</button>
      </div>

      {message && (
        <div className={`message message-${
          message.includes('Error') || message.includes('error') || message.includes('not found') ? 'error' :
          /success|complete|Inserted|Deleted|cleared|Found|root/i.test(message) ? 'success' :
          message.includes('full') ? 'warning' : 'info'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}

// Tree Renderer Component with Root Highlight
export function TreeRenderer({ tree, currentNode, visitedNodes, lastSplayedValue }) {
  const getNodeStyle = (value, isRoot) => {
    const isCurrent = currentNode === value;
    const isVisited = visitedNodes.includes(value);
    const isSplayedRoot = isRoot && lastSplayedValue === value;

    let color = '#06b6d4'; // cyan for splay
    let glow = 'none';

    if (isCurrent) {
      color = '#f59e0b';
      glow = 'drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 20px #f59e0b)';
    } else if (isSplayedRoot) {
      color = '#ec4899'; // pink for splayed root
      glow = 'drop-shadow(0 0 15px #ec4899) drop-shadow(0 0 25px #ec4899)';
    } else if (isRoot) {
      color = '#8b5cf6'; // purple for root
      glow = 'drop-shadow(0 0 8px #8b5cf6)';
    } else if (isVisited) {
      color = '#10b981';
      glow = 'drop-shadow(0 0 6px #10b981)';
    }

    return {
      color,
      glow,
      radius: isCurrent || isSplayedRoot ? 30 : (isRoot ? 28 : 25),
      stroke: isCurrent || isSplayedRoot ? 3 : 2,
      fontSize: isCurrent || isSplayedRoot ? 16 : 14,
      fontWeight: isCurrent || isSplayedRoot || isRoot ? 'bold' : 'normal'
    };
  };

  const renderTree = (node, x, y, level, maxLevel, isRoot = false) => {
    if (!node) return [];
    const spacing = Math.pow(2, maxLevel - level) * 50;
    const style = getNodeStyle(node.value, isRoot);
    const elements = [];

    // Draw lines to children
    if (node.left) {
      elements.push(
        <line
          key={`l-${node.value}-l`}
          x1={x} y1={y} x2={x - spacing} y2={y + 100}
          stroke='rgba(255,255,255,0.3)'
          strokeWidth={2}
        />
      );
      elements.push(...renderTree(node.left, x - spacing, y + 100, level + 1, maxLevel, false));
    }
    if (node.right) {
      elements.push(
        <line
          key={`l-${node.value}-r`}
          x1={x} y1={y} x2={x + spacing} y2={y + 100}
          stroke='rgba(255,255,255,0.3)'
          strokeWidth={2}
        />
      );
      elements.push(...renderTree(node.right, x + spacing, y + 100, level + 1, maxLevel, false));
    }

    // Draw node
    elements.push(
      <g key={`n-${node.value}-${x}`} style={{ filter: style.glow, transition: 'all 0.3s ease' }}>
        <circle cx={x} cy={y} r={style.radius} fill={style.color} stroke="white" strokeWidth={style.stroke} style={{ transition: 'all 0.3s ease' }} />
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={style.fontSize} fontWeight={style.fontWeight}>
          {node.value}
        </text>
        {isRoot && (
          <text x={x} y={y + style.radius + 15} textAnchor="middle" fill="#ec4899" fontSize={10} fontWeight="bold">
            ROOT
          </text>
        )}
      </g>
    );
    return elements;
  };

  if (!tree) {
    return (
      <div className="tree-empty">
        <p>Splay Tree is empty. Insert some values!</p>
        <p className="tree-empty-hint">Try inserting: 50, 30, 70, then search for 30!</p>
      </div>
    );
  }

  const maxLevel = calculateMaxLevel(tree);
  const svgHeight = (maxLevel + 1) * 100 + 70;
  const svgWidth = Math.max(800, Math.pow(2, Math.max(maxLevel, 1)) * 80);

  return (
    <svg width={svgWidth} height={svgHeight} className="tree-svg">
      {renderTree(tree, svgWidth / 2, 50, 0, maxLevel, true)}
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
          {traversalType === 'preorder' && (
            <p className="traversal-sorted-note">Note: First element is the root (most recently accessed)!</p>
          )}
          <p className="traversal-use-case">Use case: {desc?.useCase.join(' | ')}</p>
          <div className="traversal-complexity">
            <strong>Time:</strong> <code className="complexity-value">{desc?.complexity.time}</code><br />
            <strong>Space:</strong> <code className="complexity-value">{desc?.complexity.space}</code>
          </div>
        </div>
      )}
    </div>
  );
}
