import { useState, useEffect } from 'react';
import AIAssistant from '../../../components/AIAssistant';
import CodeTabs from '../../../components/CodeTabs';
import ConceptsPanel from '../../../components/ConceptsPanel';

import {
  ControlPanel,
  TreeRenderer,
  TraversalOutput,
  MAX_TREE_SIZE,
  getSearchPath
} from './BSTVisualizer.parts';

function BSTVisualizer() {
  // Tree state
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);

  // Form state
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');

  // Search state
  const [searchPath, setSearchPath] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

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
      const response = await fetch('/api/bst');
      const data = await response.json();
      setTree(data.tree);
      setSize(data.size || 0);
      setHeight(data.height !== undefined ? data.height : -1);
    } catch (error) {
      console.error('Error loading BST:', error);
    }
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const clearSearchHighlight = () => {
    setSearchPath([]);
    setSearchResult(null);
  };

  // ============ Flask API Operations ============

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

    clearSearchHighlight();
    resetTraversal();

    try {
      const response = await fetch('/api/bst/insert', {
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
      showMessage(`Inserted ${numValue}`);
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

    clearSearchHighlight();
    resetTraversal();

    try {
      const response = await fetch('/api/bst/delete', {
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

  // Search node via Flask API with animated path
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

    // Get search path for animation
    const path = getSearchPath(tree, numValue);

    // Animate through path
    for (let i = 0; i < path.length; i++) {
      setSearchPath(path.slice(0, i + 1));
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Verify result with Flask API
    try {
      const response = await fetch(`/api/bst/search?value=${numValue}`);
      const result = await response.json();
      setSearchResult(result.found);

      if (result.found) {
        showMessage(`Found ${numValue}!`);
      } else {
        showMessage(`${numValue} not found in BST`);
      }
    } catch (error) {
      showMessage('Error searching');
    }

    setIsAnimating(false);
    setSearchValue('');
  };

  // Clear tree via Flask API
  const clearTree = async () => {
    try {
      await fetch('/api/bst/clear', { method: 'POST' });
      setTree(null);
      setSize(0);
      setHeight(-1);
      resetTraversal();
      clearSearchHighlight();
      showMessage('BST cleared!');
    } catch (error) {
      showMessage('Error clearing tree');
    }
  };

  // ============ Traversal via Flask API ============

  const performTraversal = async (type) => {
    if (!tree) {
      showMessage('Tree is empty! Insert some nodes first.');
      return;
    }

    clearSearchHighlight();
    setIsAnimating(true);
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(type);
    setTraversalComplete(false);

    // Fetch traversal sequence from Flask API
    try {
      const response = await fetch(`/api/bst/${type}`);
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
      showMessage(`${typeName} traversal complete!${type === 'inorder' ? ' (Sorted!)' : ''}`);
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

  // ============ Render ============

  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro-layout">
        <div className="intro-left">
          <ConceptsPanel dataStructure="bst" />
        </div>
        <AIAssistant context="Binary Search Tree (BST) data structure, search, insert, delete operations, and traversals" />
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
          searchPath={searchPath}
          searchResult={searchResult}
          onInsertValueChange={setInsertValue}
          onDeleteValueChange={setDeleteValue}
          onSearchValueChange={setSearchValue}
          onInsert={insertNode}
          onDelete={deleteNode}
          onSearch={searchNode}
          onTraversal={performTraversal}
          onClear={clearTree}
          onResetTraversal={() => { resetTraversal(); clearSearchHighlight(); }}
        />

        <div className="visual-panel">
          <h2>BST Visualization</h2>
          <p className="bst-property-reminder">
            Remember: <code>Left {'<'} Parent {'<'} Right</code>
          </p>
          <div className="tree-container">
            <TreeRenderer
              tree={tree}
              currentNode={currentNode}
              visitedNodes={visitedNodes}
              searchPath={searchPath}
              searchResult={searchResult}
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

      <CodeTabs dataStructure="bst" />
    </div>
  );
}

export default BSTVisualizer;
