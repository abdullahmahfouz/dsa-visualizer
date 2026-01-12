import React, { useState, useEffect } from 'react';
import AIAssistant from '../../../components/AIAssistant';
import CodeTabs from '../../../components/CodeTabs';

import {
  ConceptBoxes,
  ControlPanel,
  TreeRenderer,
  TraversalOutput,
  MAX_TREE_SIZE,
  inorderTraversal,
  preorderTraversal,
  postorderTraversal,
  levelOrderTraversal
} from './BinaryTreeTraversals.parts';

function BinaryTreeVisualizer() {
  // Tree state
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);
  
  // Form state
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [message, setMessage] = useState('');
  
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

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  // ============ API Operations ============

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

    try {
      const response = await fetch('/api/binarytree/insert', {
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

    try {
      const response = await fetch('/api/binarytree/delete', {
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

  const clearTree = async () => {
    try {
      await fetch('/api/binarytree/clear', { method: 'POST' });
      setTree(null);
      setSize(0);
      setHeight(-1);
      resetTraversal();
      showMessage('Tree cleared!');
    } catch (error) {
      showMessage('Error clearing tree');
    }
  };

  // ============ Traversal Animation ============

  const performTraversal = async (type) => {
    if (!tree) {
      showMessage('Tree is empty! Insert some nodes first.');
      return;
    }

    setIsAnimating(true);
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(type);
    setTraversalComplete(false);

    // Get traversal sequence
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
    showMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} traversal complete!`);
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
        <ConceptBoxes />
        <AIAssistant context="Binary Tree data structure and traversals" />
      </div>

      {/* Main Visualizer */}
      <div className="visualizer-layout">
        <ControlPanel
          insertValue={insertValue}
          deleteValue={deleteValue}
          size={size}
          height={height}
          message={message}
          tree={tree}
          isAnimating={isAnimating}
          visitedNodes={visitedNodes}
          onInsertValueChange={setInsertValue}
          onDeleteValueChange={setDeleteValue}
          onInsert={insertNode}
          onDelete={deleteNode}
          onTraversal={performTraversal}
          onClear={clearTree}
          onResetTraversal={resetTraversal}
        />

        <div className="visual-panel">
          <h2>Binary Tree Visualization</h2>
          <div className="tree-container">
            <TreeRenderer
              tree={tree}
              currentNode={currentNode}
              visitedNodes={visitedNodes}
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

      <CodeTabs dataStructure="binarytree" />
    </div>
  );
}

export default BinaryTreeVisualizer;
