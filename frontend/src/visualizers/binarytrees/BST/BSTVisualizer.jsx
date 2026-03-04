import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import AIAssistant from '../../../components/AIAssistant';
import CodeTabs from '../../../components/CodeTabs';
import ConceptsPanel from '../../../components/ConceptsPanel';
import ChallengeOverlay from '../../../components/ChallengeOverlay';

import {
  ControlPanel,
  TreeRenderer,
  TraversalOutput,
  MAX_TREE_SIZE,
  getSearchPath
} from './BSTVisualizer.parts';

// ─── Helper ───────────────────────────────────────────────────────────────────

/** Collect all node values from the BST in inorder (sorted) using the tree dict. */
function getInorderValues(node) {
  if (!node) return [];
  return [
    ...getInorderValues(node.left),
    node.value,
    ...getInorderValues(node.right),
  ];
}

// ─── Component ────────────────────────────────────────────────────────────────

function BSTVisualizer() {
  // ── Tree state ──────────────────────────────────────────────────────────────
  const [tree, setTree]     = useState(null);
  const [size, setSize]     = useState(0);
  const [height, setHeight] = useState(-1);

  // ── Form state ──────────────────────────────────────────────────────────────
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage]         = useState('');

  // ── Search state ────────────────────────────────────────────────────────────
  const [searchPath,   setSearchPath]   = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  // ── Traversal animation state ───────────────────────────────────────────────
  const [traversalResult,   setTraversalResult]   = useState([]);
  const [isAnimating,       setIsAnimating]       = useState(false);
  const [currentNode,       setCurrentNode]       = useState(null);
  const [visitedNodes,      setVisitedNodes]      = useState([]);
  const [traversalType,     setTraversalType]     = useState(null);
  const [traversalComplete, setTraversalComplete] = useState(false);

  // ── Challenge state ─────────────────────────────────────────────────────────
  const [isChallengeMode,   setIsChallengeMode]   = useState(false);
  const [challenge,         setChallenge]         = useState(null);
  const [userClicks,        setUserClicks]        = useState([]);
  // 'idle' | 'loading' | 'active' | 'success' | 'failed'
  const [challengeStatus,   setChallengeStatus]   = useState('idle');
  // value that triggered a wrong click (shows red briefly before failing)
  const [challengeWrongClick, setChallengeWrongClick] = useState(null);

  // ── Lifecycle ───────────────────────────────────────────────────────────────
  useEffect(() => { loadTree(); }, []);

  // ── Tree API calls ──────────────────────────────────────────────────────────

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

  const insertNode = async () => {
    if (!insertValue.trim()) { showMessage('Please enter a number!'); return; }
    const numValue = Number(insertValue);
    if (isNaN(numValue)) { showMessage('Please enter a valid number!'); return; }
    if (size >= MAX_TREE_SIZE) { showMessage(`Tree is full! Maximum size is ${MAX_TREE_SIZE} nodes.`); return; }

    clearSearchHighlight();
    resetTraversal();
    try {
      const response = await fetch('/api/bst/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });
      const result = await response.json();
      if (result.error) { showMessage(result.error); return; }
      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      showMessage(`Inserted ${numValue}`);
      setInsertValue('');
    } catch { showMessage('Error inserting node'); }
  };

  const deleteNode = async () => {
    if (!deleteValue.trim()) { showMessage('Please enter a number!'); return; }
    const numValue = Number(deleteValue);
    if (isNaN(numValue)) { showMessage('Please enter a valid number!'); return; }

    clearSearchHighlight();
    resetTraversal();
    try {
      const response = await fetch('/api/bst/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });
      const result = await response.json();
      if (result.error) { showMessage(result.error); return; }
      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      showMessage(`Deleted ${numValue}`);
      setDeleteValue('');
    } catch { showMessage('Error deleting node'); }
  };

  const searchNode = async () => {
    if (!searchValue.trim()) { showMessage('Please enter a number!'); return; }
    const numValue = Number(searchValue);
    if (isNaN(numValue)) { showMessage('Please enter a valid number!'); return; }
    if (!tree) { showMessage('Tree is empty!'); return; }

    resetTraversal();
    setIsAnimating(true);
    const path = getSearchPath(tree, numValue);
    for (let i = 0; i < path.length; i++) {
      setSearchPath(path.slice(0, i + 1));
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    try {
      const response = await fetch(`/api/bst/search?value=${numValue}`);
      const result = await response.json();
      setSearchResult(result.found);
      showMessage(result.found ? `Found ${numValue}!` : `${numValue} not found in BST`);
    } catch { showMessage('Error searching'); }
    setIsAnimating(false);
    setSearchValue('');
  };

  const clearTree = async () => {
    try {
      await fetch('/api/bst/clear', { method: 'POST' });
      setTree(null);
      setSize(0);
      setHeight(-1);
      resetTraversal();
      clearSearchHighlight();
      showMessage('BST cleared!');
    } catch { showMessage('Error clearing tree'); }
  };

  // ── Traversal ───────────────────────────────────────────────────────────────

  const performTraversal = async (type) => {
    if (!tree) { showMessage('Tree is empty! Insert some nodes first.'); return; }
    clearSearchHighlight();
    setIsAnimating(true);
    setTraversalResult([]);
    setCurrentNode(null);
    setVisitedNodes([]);
    setTraversalType(type);
    setTraversalComplete(false);
    try {
      const response = await fetch(`/api/bst/${type}`);
      const data = await response.json();
      const sequence = data.traversal || [];
      if (sequence.length === 0) { showMessage('Tree is empty!'); setIsAnimating(false); return; }
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

  // ── Challenge handlers ──────────────────────────────────────────────────────

  const startChallenge = async () => {
    if (!tree || size < 2) {
      showMessage('Insert at least 2 nodes before starting a challenge!');
      return;
    }

    // Reset everything to a clean state
    setIsChallengeMode(true);
    setChallengeStatus('loading');
    setChallenge(null);
    setUserClicks([]);
    setChallengeWrongClick(null);
    resetTraversal();
    clearSearchHighlight();

    try {
      const res = await fetch('/api/generate-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tree_values: getInorderValues(tree),
          root_value:  tree.value,
          tree_dict:   tree,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        showMessage(data.error || 'Failed to generate challenge');
        setIsChallengeMode(false);
        setChallengeStatus('idle');
        return;
      }

      setChallenge(data);
      setChallengeStatus('active');
    } catch {
      showMessage('Failed to generate challenge — check your connection');
      setIsChallengeMode(false);
      setChallengeStatus('idle');
    }
  };

  /**
   * Validates a node click against the current challenge.
   * - search / inorder_start : ordered — each click must match expected_steps[userClicks.length]
   * - identify_leaves        : unordered — click any expected node in any order
   */
  const handleChallengeNodeClick = (value) => {
    if (challengeStatus !== 'active' || !challenge) return;

    const { type, expected_steps } = challenge;

    if (type === 'search' || type === 'inorder_start') {
      const nextExpected = expected_steps[userClicks.length];
      if (value === nextExpected) {
        const newClicks = [...userClicks, value];
        setUserClicks(newClicks);
        if (newClicks.length === expected_steps.length) {
          setChallengeStatus('success');
        }
      } else {
        // Show red flash for 600 ms, then transition to failed state
        setChallengeWrongClick(value);
        setTimeout(() => {
          setChallengeWrongClick(null);
          setChallengeStatus('failed');
        }, 600);
      }
    } else if (type === 'identify_leaves') {
      if (userClicks.includes(value)) return; // ignore duplicate clicks
      if (expected_steps.includes(value)) {
        const newClicks = [...userClicks, value];
        setUserClicks(newClicks);
        if (newClicks.length === expected_steps.length) {
          setChallengeStatus('success');
        }
      } else {
        setChallengeWrongClick(value);
        setTimeout(() => {
          setChallengeWrongClick(null);
          setChallengeStatus('failed');
        }, 600);
      }
    }
  };

  const exitChallenge = () => {
    setIsChallengeMode(false);
    setChallenge(null);
    setUserClicks([]);
    setChallengeStatus('idle');
    setChallengeWrongClick(null);
  };

  const retryChallenge = () => {
    setUserClicks([]);
    setChallengeWrongClick(null);
    setChallengeStatus('active');
  };

  // Fetch a fresh challenge with the same tree
  const newChallenge = () => startChallenge();

  // ── Render ──────────────────────────────────────────────────────────────────

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
          isChallengeMode={isChallengeMode}
          challengeStatus={challengeStatus}
          onInsertValueChange={setInsertValue}
          onDeleteValueChange={setDeleteValue}
          onSearchValueChange={setSearchValue}
          onInsert={insertNode}
          onDelete={deleteNode}
          onSearch={searchNode}
          onTraversal={performTraversal}
          onClear={clearTree}
          onResetTraversal={() => { resetTraversal(); clearSearchHighlight(); }}
          onStartChallenge={startChallenge}
        />

        <div className="visual-panel">
          <h2>BST Visualization</h2>
          <p className="bst-property-reminder">
            Remember: <code>Left {'<'} Parent {'<'} Right</code>
          </p>

          {/* Challenge overlay (loading / active / success / failed) */}
          {isChallengeMode && (
            <ChallengeOverlay
              challenge={challenge}
              userClicks={userClicks}
              status={challengeStatus}
              onExit={exitChallenge}
              onRetry={retryChallenge}
              onNewChallenge={newChallenge}
            />
          )}

          <div className="tree-container">
            <TreeRenderer
              tree={tree}
              currentNode={currentNode}
              visitedNodes={visitedNodes}
              searchPath={searchPath}
              searchResult={searchResult}
              isChallengeMode={isChallengeMode}
              challengeClickedNodes={userClicks}
              challengeWrongClick={challengeWrongClick}
              onNodeClick={handleChallengeNodeClick}
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
