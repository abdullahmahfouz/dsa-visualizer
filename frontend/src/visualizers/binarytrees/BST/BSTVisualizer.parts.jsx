import React from 'react';
import { AlertTriangle, HelpCircle, Info, Lightbulb, Search, ArrowRight, Zap } from 'lucide-react';
import '../../../components/challenge.css';

export const MAX_TREE_SIZE = 7;

// Traversal metadata for display
export const traversalDescriptions = {
  inorder: {
    name: 'Inorder Traversal',
    order: 'Left -> Root -> Right',
    description: 'Returns elements in SORTED order for BST. This is the key property of BST!',
    useCase: ['Get sorted elements', 'Validate BST', 'Range queries'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  preorder: {
    name: 'Preorder Traversal',
    order: 'Root -> Left -> Right',
    description: 'Process root first. Useful for copying/serializing the BST structure.',
    useCase: ['Copy tree structure', 'Serialize BST', 'Prefix expressions'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  postorder: {
    name: 'Postorder Traversal',
    order: 'Left -> Right -> Root',
    description: 'Process children before root. Essential for safely deleting the tree.',
    useCase: ['Delete tree safely', 'Calculate subtree sizes', 'Postfix expressions'],
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  levelorder: {
    name: 'Level Order Traversal',
    order: 'Level by Level (BFS)',
    description: 'Visit nodes level by level using a queue. Shows tree structure clearly.',
    useCase: ['Level-wise printing', 'Find width', 'Serialize for reconstruction'],
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

// Get search path for visualization
export const getSearchPath = (root, target) => {
  const path = [];
  let current = root;
  while (current) {
    path.push(current.value);
    if (current.value === target) break;
    if (target < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return path;
};

// Concept Boxes Component
export function ConceptBoxes() {
  return (
    <div className="intro-left">
      <div className="concept-box">
        <div className="concept-header">
          <HelpCircle className="icon-sm" />
          <span>What is a Binary Search Tree?</span>
        </div>
        <div className="concept-content">
          <p>
            A <strong>Binary Search Tree (BST)</strong> is a binary tree with a special ordering property:
          </p>
          <div className="bst-property-box">
            <code>Left {'<'} Parent {'<'} Right</code>
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            All nodes in the left subtree are smaller, all nodes in the right subtree are larger.
          </p>
          <div className="concept-analogy">
            <Lightbulb />
            <span>Like a <strong>dictionary</strong> - words are sorted, so you can find any word quickly by comparing!</span>
          </div>
        </div>
      </div>

      <div className="concept-box" style={{ marginTop: '1rem' }}>
        <div className="concept-header">
          <Search className="icon-sm" />
          <span>Why BST is Fast</span>
        </div>
        <div className="concept-content">
          <p>
            Each comparison <strong>eliminates half</strong> the remaining nodes!
          </p>
          <div className="complexity-highlight">
            <div className="complexity-item">
              <span className="complexity-label">Average:</span>
              <code className="complexity-good">O(log n)</code>
            </div>
            <div className="complexity-item">
              <span className="complexity-label">Worst:</span>
              <code className="complexity-bad">O(n)</code>
              <span className="complexity-note">(unbalanced)</span>
            </div>
          </div>
          <div className="concept-analogy" style={{ marginTop: '0.75rem' }}>
            <Lightbulb />
            <span>Finding in 1 million nodes takes only ~20 comparisons on average!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Control Panel Component
export function ControlPanel({
  insertValue, deleteValue, searchValue, size, height, message, tree, isAnimating,
  visitedNodes, searchPath, searchResult,
  isChallengeMode, challengeStatus,
  onInsertValueChange, onDeleteValueChange, onSearchValueChange,
  onInsert, onDelete, onSearch, onTraversal, onClear, onResetTraversal,
  onStartChallenge,
}) {
  const handleInput = (e, setter) => {
    const v = e.target.value;
    if (v === '' || v === '-' || /^-?\d*\.?\d*$/.test(v)) setter(v);
  };

  const isLocked = isAnimating || isChallengeMode;

  return (
    <div className="control-panel">
      <h2>Binary Search Tree</h2>

      {/* Challenge mode toggle */}
      {isChallengeMode ? (
        <div className="challenge-mode-indicator">
          <div className="challenge-mode-dot" />
          Challenge Mode Active - click nodes in the tree
        </div>
      ) : (
        <div className="operation-group">
          <button
            className="btn btn-challenge"
            onClick={onStartChallenge}
            disabled={isAnimating || !tree || size < 2}
            title={size < 2 ? 'Insert at least 2 nodes first' : 'Start an AI-generated challenge'}
          >
            <Zap size={15} /> Start Challenge
          </button>
        </div>
      )}

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
            disabled={isLocked}
          />
          <button onClick={onInsert} className="btn btn-insert" disabled={isLocked}>Insert</button>
        </div>
      </div>

      <div className="operation-group">
        <label htmlFor="searchValue">Search Value</label>
        <div className="input-group">
          <input
            type="number"
            id="searchValue"
            value={searchValue}
            onChange={(e) => handleInput(e, onSearchValueChange)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Enter a number"
            disabled={isLocked}
          />
          <button onClick={onSearch} className="btn btn-search" disabled={isLocked || !tree}>
            <Search size={16} /> Search
          </button>
        </div>
        {searchPath.length > 0 && (
          <div className="search-path-display">
            <span className="search-path-label">Path:</span>
            <div className="search-path-nodes">
              {searchPath.map((val, idx) => (
                <React.Fragment key={idx}>
                  <span className={`search-path-node ${idx === searchPath.length - 1 ? (searchResult ? 'found' : 'not-found') : ''}`}>
                    {val}
                  </span>
                  {idx < searchPath.length - 1 && <ArrowRight size={14} className="search-path-arrow" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
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
            disabled={isLocked}
          />
          <button onClick={onDelete} className="btn btn-delete" disabled={isLocked}>Delete</button>
        </div>
      </div>

      <div className="operation-group">
        <label>Traversals</label>
        <div className="btn-group">
          {['inorder', 'preorder', 'postorder', 'levelorder'].map(type => (
            <button
              key={type}
              onClick={() => onTraversal(type)}
              className={`btn btn-traversal ${type === 'inorder' ? 'btn-traversal-primary' : ''}`}
              disabled={isLocked || !tree}
              title={type === 'inorder' ? 'Returns sorted order!' : ''}
            >
              {type === 'levelorder' ? 'Level Order' : type.charAt(0).toUpperCase() + type.slice(1)}
              {type === 'inorder' && <span className="sorted-badge">Sorted!</span>}
            </button>
          ))}
        </div>
        {visitedNodes.length > 0 && !isLocked && (
          <button onClick={onResetTraversal} className="btn btn-secondary" style={{ marginTop: '0.5rem', width: '100%' }}>
            Reset Colors
          </button>
        )}
      </div>

      <div className="traversal-legend">
        <div className="legend-item"><span className="legend-dot legend-dot--default" /><span>Not visited</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--visiting" /><span>Current</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--visited" /><span>Visited</span></div>
        <div className="legend-item"><span className="legend-dot legend-dot--search" /><span>Search path</span></div>
      </div>

      <div className="info-panel">
        <div className="info-item"><span className="info-label">Nodes:</span><span className="info-value">{size}</span></div>
        <div className="info-item"><span className="info-label">Height:</span><span className="info-value">{height}</span></div>
        <div className="info-item"><span className="info-label">Max:</span><span className="info-value">{MAX_TREE_SIZE}</span></div>
      </div>

      {size >= MAX_TREE_SIZE * 0.8 && size < MAX_TREE_SIZE && (
        <div className="warning-box">
          <AlertTriangle size={18} />
          <div><strong>Tree filling up!</strong> {size}/{MAX_TREE_SIZE} nodes.</div>
        </div>
      )}

      <div className="operation-group">
        <button onClick={onClear} className="btn btn-clear" disabled={isLocked}>Clear Tree</button>
      </div>

      {message && (
        <div className={`message message-${
          message.includes('Error') || message.includes('error') || message.includes('not found') ? 'error' :
          /success|complete|Inserted|Deleted|cleared|Found/i.test(message) ? 'success' :
          message.includes('full') ? 'warning' : 'info'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}

// Tree Renderer Component
export function TreeRenderer({
  tree, currentNode, visitedNodes, searchPath, searchResult,
  // Challenge props
  isChallengeMode = false,
  challengeClickedNodes = [],
  challengeWrongClick = null,
  onNodeClick = null,
}) {
  // Flat instrument-panel fills, no glow - state reads through color and
  // size alone (9.A bans decorative neon halos).
  const getChallengeModeNodeStyle = (value) => {
    if (value === challengeWrongClick) {
      return { color: 'var(--state-invalid)', radius: 28, stroke: 3, fontSize: 14, fontWeight: 'bold' };
    }
    if (challengeClickedNodes.includes(value)) {
      return { color: 'var(--state-visited)', radius: 28, stroke: 3, fontSize: 14, fontWeight: 'bold' };
    }
    return { color: 'var(--accent)', radius: 25, stroke: 2, fontSize: 14, fontWeight: 'normal' };
  };

  const getNormalModeNodeStyle = (value) => {
    const isCurrent      = currentNode === value;
    const isVisited      = visitedNodes.includes(value);
    const isInSearchPath = searchPath.includes(value);
    const isSearchTarget = searchPath.length > 0 && searchPath[searchPath.length - 1] === value;

    let color = 'var(--accent)';
    if (isCurrent) {
      color = 'var(--warning)';
    } else if (isSearchTarget) {
      color = searchResult ? 'var(--state-visited)' : 'var(--state-invalid)';
    } else if (isInSearchPath) {
      color = 'var(--state-frontier)';
    } else if (isVisited) {
      color = 'var(--state-visited)';
    }

    const emphasize = isCurrent || isSearchTarget;
    return {
      color,
      radius:     emphasize ? 30 : 25,
      stroke:     emphasize ? 3  : 2,
      fontSize:   emphasize ? 16 : 14,
      fontWeight: emphasize ? 'bold' : 'normal',
    };
  };

  // Challenge mode overrides all traversal/search coloring.
  const getNodeStyle = (value) =>
    isChallengeMode ? getChallengeModeNodeStyle(value) : getNormalModeNodeStyle(value);

  const renderEdge = (parent, child, x1, y1, x2, y2) => {
    const isPathLine = !isChallengeMode &&
      searchPath.includes(parent.value) && searchPath.includes(child.value);
    return (
      <line
        key={`l-${parent.value}-${child.value}`}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={isPathLine ? 'var(--state-frontier)' : 'var(--border-strong)'}
        strokeWidth={isPathLine ? 3 : 2}
      />
    );
  };

  // Flat fill, hairline ring cut from the panel background (not a literal
  // "white" that would vanish or clash depending on theme), no glow.
  const renderNode = (node, x, y) => {
    const style = getNodeStyle(node.value);
    return (
      <g
        key={`n-${node.value}-${x}`}
        style={{
          transition: 'all 0.3s ease',
          cursor:     isChallengeMode ? 'pointer' : 'default',
        }}
        onClick={isChallengeMode && onNodeClick ? () => onNodeClick(node.value) : undefined}
      >
        <circle
          cx={x} cy={y} r={style.radius}
          fill={style.color} stroke="var(--bg-raised)" strokeWidth={style.stroke}
          style={{ transition: 'all 0.3s ease' }}
        />
        <text
          x={x} y={y}
          textAnchor="middle" dominantBaseline="middle"
          fill="var(--ink-on-fill)" fontFamily="var(--font-mono)"
          fontSize={style.fontSize} fontWeight={style.fontWeight}
        >
          {node.value}
        </text>
      </g>
    );
  };

  const renderTree = (node, x, y, level, maxLevel) => {
    if (!node) return [];
    const spacing = Math.pow(2, maxLevel - level) * 50;
    const elements = [];

    if (node.left) {
      elements.push(renderEdge(node, node.left, x, y, x - spacing, y + 100));
      elements.push(...renderTree(node.left, x - spacing, y + 100, level + 1, maxLevel));
    }
    if (node.right) {
      elements.push(renderEdge(node, node.right, x, y, x + spacing, y + 100));
      elements.push(...renderTree(node.right, x + spacing, y + 100, level + 1, maxLevel));
    }

    elements.push(renderNode(node, x, y));
    return elements;
  };

  if (!tree) {
    return (
      <div className="tree-empty">
        <p>BST is empty. Insert some values!</p>
        <p className="tree-empty-hint">Try: 50, 30, 70, 20, 40, 60, 80</p>
      </div>
    );
  }

  const maxLevel = calculateMaxLevel(tree);
  const svgHeight = (maxLevel + 1) * 100 + 50;
  const svgWidth  = Math.max(800, Math.pow(2, Math.max(maxLevel, 1)) * 80);

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
          {traversalType === 'inorder' && <span className="sorted-indicator">Returns Sorted Order!</span>}
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
          {traversalType === 'inorder' && (
            <p className="traversal-sorted-note">Notice: The output is sorted! This is the BST property.</p>
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

// Delete Cases Info Component
export function DeleteCasesInfo() {
  return (
    <div className="delete-cases-info">
      <div className="concept-header">
        <Info className="icon-sm" />
        <span>BST Delete Cases</span>
      </div>
      <div className="delete-cases-list">
        <div className="delete-case">
          <span className="case-number">1</span>
          <div>
            <strong>Leaf Node</strong>
            <p>Simply remove it</p>
          </div>
        </div>
        <div className="delete-case">
          <span className="case-number">2</span>
          <div>
            <strong>One Child</strong>
            <p>Replace with child</p>
          </div>
        </div>
        <div className="delete-case">
          <span className="case-number">3</span>
          <div>
            <strong>Two Children</strong>
            <p>Replace with inorder successor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
