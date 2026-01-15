import { useState, useEffect } from 'react';
import AIAssistant from '../../../components/AIAssistant';
import CodeTabs from '../../../components/CodeTabs';
import ConceptsPanel from '../../../components/ConceptsPanel';

import {
  ControlPanel,
  TreeRenderer,
  TraversalOutput,
  MAX_TREE_SIZE
} from './SplayVisualizer.parts';

function SplayVisualizer() {
  // Tree state
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);

  // Form state
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');

  // Search state - for splay tree, search modifies the tree!
  const [lastSplayedValue, setLastSplayedValue] = useState(null);

  // Traversal animation state
  const [traversalResult, setTraversalResult] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [traversalType, setTraversalType] = useState(null);
  const [traversalComplete, setTraversalComplete] = useState(false);

  // Load tree on mount
  useEffect(() => {
    loadTree();
  }, []);

  // Fetch tree state from Flask API
  const loadTree = async () => {
    try {
      const response = await fetch('/api/splay');
      const data = await response.json();
      setTree(data.tree);
      setSize(data.size || 0);
      setHeight(data.height !== undefined ? data.height : -1);
    } catch (error) {
      console.error('Error loading Splay Tree:', error);
    }
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  // Insert node via Flask API
  const insertNode = async () => {
    if (!insertValue.trim()) {
      showMessage('Please enter a number!');
      return;
    }

    const numValue = Number(insertValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!');
      return;
    }

    if (size >= MAX_TREE_SIZE) {
      showMessage(`Tree is full! Maximum size is ${MAX_TREE_SIZE} nodes.`);
      return;
    }

    resetTraversal();
    setLastSplayedValue(null);

    try {
      const response = await fetch('/api/splay/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(result.error);
        return;
      }

      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      setLastSplayedValue(numValue);
      showMessage(`Inserted ${numValue} (now at root!)`);
      setInsertValue('');
    } catch (error) {
      showMessage('Error inserting node');
    }
  };

  // Delete node via Flask API
  const deleteNode = async () => {
    if (!deleteValue.trim()) {
      showMessage('Please enter a number!');
      return;
    }

    const numValue = Number(deleteValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!');
      return;
    }

    resetTraversal();
    setLastSplayedValue(null);

    try {
      const response = await fetch('/api/splay/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(result.error);
        return;
      }

      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      showMessage(`Deleted ${numValue}`);
      setDeleteValue('');
    } catch (error) {
      showMessage('Error deleting node');
    }
  };

  // Search node via Flask API - this splays the found node to root!
  const searchNode = async () => {
    if (!searchValue.trim()) {
      showMessage('Please enter a number!');
      return;
    }

    const numValue = Number(searchValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!');
      return;
    }

    if (!tree) {
      showMessage('Tree is empty!');
      return;
    }

    resetTraversal();
    setIsAnimating(true);

    try {
      // Search operation in splay tree modifies the tree!
      const response = await fetch(`/api/splay/search?value=${numValue}`);
      const result = await response.json();

      // Update tree after splay
      if (result.tree) {
        setTree(result.tree);
      }

      if (result.found) {
        setLastSplayedValue(numValue);
        showMessage(`Found ${numValue}! (splayed to root)`);
      } else {
        setLastSplayedValue(null);
        showMessage(`${numValue} not found in Splay Tree`);
      }

      // Reload to get updated height
      await loadTree();
    } catch (error) {
      showMessage('Error searching');
    }

    setIsAnimating(false);
    setSearchValue('');
  };

  // Clear tree via Flask API
  const clearTree = async () => {
    try {
      await fetch('/api/splay/clear', { method: 'POST' });
      setTree(null);
      setSize(0);
      setHeight(-1);
      resetTraversal();
      setLastSplayedValue(null);
      showMessage('Splay Tree cleared!');
    } catch (error) {
      showMessage('Error clearing tree');
    }
  };

  // Traversal via Flask API
  const performTraversal = async (type) => {
    if (!tree) {
      showMessage('Tree is empty! Insert some nodes first.');
      return;
    }

    setLastSplayedValue(null);
    setIsAnimating(true);
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(type);
    setTraversalComplete(false);

    try {
      const response = await fetch(`/api/splay/${type}`);
      const data = await response.json();
      const sequence = data.traversal || [];

      if (sequence.length === 0) {
        showMessage('Tree is empty!');
        setIsAnimating(false);
        return;
      }

      // Animate traversal
      for (let i = 0; i < sequence.length; i++) {
        setCurrentNode(sequence[i]);
        await new Promise(resolve => setTimeout(resolve, 600));

        setVisitedNodes(prev => [...prev, sequence[i]]);
        setTraversalResult(prev => [...prev, sequence[i]]);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setCurrentNode(null);
      setTraversalComplete(true);
      setIsAnimating(false);

      const typeName = type.charAt(0).toUpperCase() + type.slice(1);
      showMessage(`${typeName} traversal complete!`);
    } catch (error) {
      console.error('Traversal error:', error);
      showMessage('Error performing traversal');
      setIsAnimating(false);
    }
  };

  const resetTraversal = () => {
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(null);
    setTraversalComplete(false);
  };

  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro-layout">
        <div className="intro-left">
          <ConceptsPanel dataStructure="splay" />
        </div>
        <AIAssistant context="Splay Tree data structure, self-adjusting BST, splay operations, zig-zig, zig-zag rotations, amortized O(log n)" />
      </div>

      {/* Main Visualizer */}
      <div className="visualizer-layout">
        <ControlPanel
          insertValue={insertValue}
          deleteValue={deleteValue}
          searchValue={searchValue}
          size={size}
          height={height}
          message={message}
          tree={tree}
          isAnimating={isAnimating}
          visitedNodes={visitedNodes}
          lastSplayedValue={lastSplayedValue}
          onInsertValueChange={setInsertValue}
          onDeleteValueChange={setDeleteValue}
          onSearchValueChange={setSearchValue}
          onInsert={insertNode}
          onDelete={deleteNode}
          onSearch={searchNode}
          onTraversal={performTraversal}
          onClear={clearTree}
          onResetTraversal={() => { resetTraversal(); setLastSplayedValue(null); }}
        />

        <div className="visual-panel">
          <h2>Splay Tree Visualization</h2>
          <p className="bst-property-reminder">
            Self-adjusting: <code>Recently accessed = Root</code>
          </p>
          <div className="tree-container">
            <TreeRenderer
              tree={tree}
              currentNode={currentNode}
              visitedNodes={visitedNodes}
              lastSplayedValue={lastSplayedValue}
            />
          </div>

          <TraversalOutput
            traversalType={traversalType}
            traversalResult={traversalResult}
            isAnimating={isAnimating}
            traversalComplete={traversalComplete}
          />
        </div>
      </div>

      <CodeTabs dataStructure="splay" />
    </div>
  );
}

export default SplayVisualizer;
