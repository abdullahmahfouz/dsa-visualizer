import React from 'react';
import { AlertTriangle, ArrowDown } from 'lucide-react';

export const MAX_HEAP_SIZE = 7;

// Control Panel Component
export function ControlPanel({
  insertValue, buildArray, size, height, min, message, heap, isAnimating,
  onInsertValueChange, onBuildArrayChange,
  onInsert, onExtract, onPeek, onBuild, onClear
}) {
  const handleInput = (e, setter) => {
    const v = e.target.value;
    if (v === '' || v === '-' || /^-?\d*\.?\d*$/.test(v)) setter(v);
  };

  return (
    <div className="control-panel">
      <h2>Min Heap</h2>

      <div className="heap-info-box">
        <strong>Priority Queue:</strong> Minimum always at root!
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
        <label>Heap Operations</label>
        <div className="btn-group-vertical">
          <button onClick={onExtract} className="btn btn-extract" disabled={isAnimating || heap.length === 0}>
            <ArrowDown size={16} /> Extract Min
          </button>
          <button onClick={onPeek} className="btn btn-peek" disabled={isAnimating || heap.length === 0}>
            Peek Min
          </button>
        </div>
      </div>

      <div className="operation-group">
        <label htmlFor="buildArray">Build from Array</label>
        <div className="input-group">
          <input
            type="text"
            id="buildArray"
            value={buildArray}
            onChange={(e) => onBuildArrayChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onBuild()}
            placeholder="e.g., 5, 3, 8, 1, 2"
            disabled={isAnimating}
          />
          <button onClick={onBuild} className="btn btn-build" disabled={isAnimating}>Build</button>
        </div>
      </div>

      <div className="traversal-legend">
        <div className="legend-item"><span className="legend-dot" style={{ background: '#10b981' }} /><span>Root (Min)</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#6366f1' }} /><span>Internal</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#8b5cf6' }} /><span>Leaf</span></div>
        <div className="legend-item"><span className="legend-dot" style={{ background: '#f59e0b' }} /><span>Highlighted</span></div>
      </div>

      <div className="info-panel">
        <div className="info-item"><span className="info-label">Size:</span><span className="info-value">{size}</span></div>
        <div className="info-item"><span className="info-label">Height:</span><span className="info-value">{height}</span></div>
        <div className="info-item"><span className="info-label">Min:</span><span className="info-value">{min ?? '-'}</span></div>
      </div>

      {size >= MAX_HEAP_SIZE * 0.8 && size < MAX_HEAP_SIZE && (
        <div className="warning-box">
          <AlertTriangle size={18} />
          <div><strong>Heap filling up!</strong> {size}/{MAX_HEAP_SIZE} elements.</div>
        </div>
      )}

      <div className="operation-group">
        <button onClick={onClear} className="btn btn-clear" disabled={isAnimating}>Clear Heap</button>
      </div>

      {message && (
        <div className={`message message-${
          message.includes('Error') || message.includes('error') ? 'error' :
          /success|complete|Inserted|Extracted|cleared|Built/i.test(message) ? 'success' :
          message.includes('full') || message.includes('empty') ? 'warning' : 'info'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}

// Heap Tree Renderer
export function HeapTreeRenderer({ tree, heap, highlightedIndex, swappingIndices }) {
  const getNodeStyle = (index) => {
    const isHighlighted = highlightedIndex === index;
    const isSwapping = swappingIndices.includes(index);
    const isRoot = index === 0;

    let color = '#6366f1'; // purple for internal
    let glow = 'none';

    if (isHighlighted || isSwapping) {
      color = '#f59e0b';
      glow = 'drop-shadow(0 0 12px #f59e0b)';
    } else if (isRoot) {
      color = '#10b981'; // green for min/root
      glow = 'drop-shadow(0 0 8px #10b981)';
    }

    return { color, glow, radius: isHighlighted || isRoot ? 28 : 25 };
  };

  const calculateMaxLevel = (node, level = 0) => {
    if (!node) return level - 1;
    return Math.max(
      calculateMaxLevel(node.left, level + 1),
      calculateMaxLevel(node.right, level + 1)
    );
  };

  const renderTree = (node, x, y, level, maxLevel) => {
    if (!node) return [];
    const spacing = Math.pow(2, maxLevel - level) * 50;
    const style = getNodeStyle(node.index);
    const elements = [];

    // Draw lines to children
    if (node.left) {
      elements.push(
        <line key={`l-${node.index}-l`} x1={x} y1={y} x2={x - spacing} y2={y + 100}
          stroke='rgba(255,255,255,0.3)' strokeWidth={2} />
      );
      elements.push(...renderTree(node.left, x - spacing, y + 100, level + 1, maxLevel));
    }
    if (node.right) {
      elements.push(
        <line key={`l-${node.index}-r`} x1={x} y1={y} x2={x + spacing} y2={y + 100}
          stroke='rgba(255,255,255,0.3)' strokeWidth={2} />
      );
      elements.push(...renderTree(node.right, x + spacing, y + 100, level + 1, maxLevel));
    }

    // Draw node
    elements.push(
      <g key={`n-${node.index}`} style={{ filter: style.glow, transition: 'all 0.3s ease' }}>
        <circle cx={x} cy={y} r={style.radius} fill={style.color} stroke="white" strokeWidth={2} />
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={14} fontWeight="bold">
          {node.value}
        </text>
        <text x={x} y={y + style.radius + 12} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize={10}>
          [{node.index}]
        </text>
      </g>
    );
    return elements;
  };

  if (!tree || heap.length === 0) {
    return (
      <div className="tree-empty">
        <p>Min Heap is empty. Insert some values!</p>
        <p className="tree-empty-hint">Try: 5, 3, 8, 1, 2 or build from array</p>
      </div>
    );
  }

  const maxLevel = calculateMaxLevel(tree);
  const svgHeight = (maxLevel + 1) * 100 + 80;
  const svgWidth = Math.max(600, Math.pow(2, Math.max(maxLevel, 1)) * 70);

  return (
    <svg width={svgWidth} height={svgHeight} className="tree-svg">
      {renderTree(tree, svgWidth / 2, 50, 0, maxLevel)}
    </svg>
  );
}

// Heap Array Renderer
export function HeapArrayRenderer({ heap, highlightedIndex, swappingIndices }) {
  if (heap.length === 0) {
    return (
      <div className="heap-array-empty">
        <code>[ ]</code>
      </div>
    );
  }

  return (
    <div className="heap-array-container">
      <div className="heap-array">
        {heap.map((value, index) => {
          const isHighlighted = highlightedIndex === index;
          const isSwapping = swappingIndices.includes(index);
          const isRoot = index === 0;

          return (
            <div
              key={index}
              className={`heap-array-cell ${isHighlighted || isSwapping ? 'highlighted' : ''} ${isRoot ? 'root' : ''}`}
            >
              <span className="heap-array-index">{index}</span>
              <span className="heap-array-value">{value}</span>
            </div>
          );
        })}
      </div>

      <div className="heap-array-formulas">
        <div className="formula-item">
          <strong>Parent(i):</strong> <code>(i - 1) / 2</code>
        </div>
        <div className="formula-item">
          <strong>Left(i):</strong> <code>2*i + 1</code>
        </div>
        <div className="formula-item">
          <strong>Right(i):</strong> <code>2*i + 2</code>
        </div>
      </div>
    </div>
  );
}
