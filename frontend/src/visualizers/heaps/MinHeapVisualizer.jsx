import { useState, useEffect } from 'react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import ConceptsPanel from '../../components/ConceptsPanel';

import {
  ControlPanel,
  HeapTreeRenderer,
  HeapArrayRenderer,
  MAX_HEAP_SIZE
} from './MinHeapVisualizer.parts';

function MinHeapVisualizer() {
  // Heap state
  const [heap, setHeap] = useState([]);
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);
  const [min, setMin] = useState(null);

  // Form state
  const [insertValue, setInsertValue] = useState('');
  const [buildArray, setBuildArray] = useState('');
  const [message, setMessage] = useState('');

  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [swappingIndices, setSwappingIndices] = useState([]);

  // Load heap on mount
  useEffect(() => {
    loadHeap();
  }, []);

  const loadHeap = async () => {
    try {
      const response = await fetch('/api/minheap');
      const data = await response.json();
      setHeap(data.heap || []);
      setTree(data.tree);
      setSize(data.size || 0);
      setHeight(data.height !== undefined ? data.height : -1);
      setMin(data.min);
    } catch (error) {
      console.error('Error loading Min Heap:', error);
    }
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  // Insert element
  const insertElement = async () => {
    if (!insertValue.trim()) {
      showMessage('Please enter a number!');
      return;
    }

    const numValue = Number(insertValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!');
      return;
    }

    if (size >= MAX_HEAP_SIZE) {
      showMessage(`Heap is full! Maximum size is ${MAX_HEAP_SIZE}.`);
      return;
    }

    setIsAnimating(true);

    try {
      const response = await fetch('/api/minheap/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(result.error);
        setIsAnimating(false);
        return;
      }

      setHeap(result.heap || []);
      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      setMin(result.min);
      showMessage(`Inserted ${numValue}`);
      setInsertValue('');
    } catch (error) {
      showMessage('Error inserting element');
    }

    setIsAnimating(false);
  };

  // Extract minimum
  const extractMin = async () => {
    if (size === 0) {
      showMessage('Heap is empty!');
      return;
    }

    setIsAnimating(true);
    setHighlightedIndex(0);

    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const response = await fetch('/api/minheap/extract', {
        method: 'POST'
      });

      const result = await response.json();
      if (result.error) {
        showMessage(result.error);
        setIsAnimating(false);
        setHighlightedIndex(null);
        return;
      }

      setHeap(result.heap || []);
      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      setMin(result.min);
      showMessage(`Extracted minimum: ${result.extracted}`);
    } catch (error) {
      showMessage('Error extracting minimum');
    }

    setHighlightedIndex(null);
    setIsAnimating(false);
  };

  // Peek minimum
  const peekMin = async () => {
    if (size === 0) {
      showMessage('Heap is empty!');
      return;
    }

    setHighlightedIndex(0);
    showMessage(`Minimum element is ${min}`);

    await new Promise(resolve => setTimeout(resolve, 1500));
    setHighlightedIndex(null);
  };

  // Build heap from array
  const buildHeap = async () => {
    if (!buildArray.trim()) {
      showMessage('Please enter an array of numbers!');
      return;
    }

    const arr = buildArray.split(',').map(s => {
      const num = Number(s.trim());
      return isNaN(num) ? null : num;
    }).filter(n => n !== null);

    if (arr.length === 0) {
      showMessage('Please enter valid numbers separated by commas!');
      return;
    }

    if (arr.length > MAX_HEAP_SIZE) {
      showMessage(`Array too large! Maximum size is ${MAX_HEAP_SIZE}.`);
      return;
    }

    setIsAnimating(true);

    try {
      const response = await fetch('/api/minheap/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ array: arr })
      });

      const result = await response.json();
      if (result.error) {
        showMessage(result.error);
        setIsAnimating(false);
        return;
      }

      setHeap(result.heap || []);
      setTree(result.tree);
      setSize(result.size || 0);
      setHeight(result.height !== undefined ? result.height : -1);
      setMin(result.min);
      showMessage('Built heap from array!');
      setBuildArray('');
    } catch (error) {
      showMessage('Error building heap');
    }

    setIsAnimating(false);
  };

  // Clear heap
  const clearHeap = async () => {
    try {
      await fetch('/api/minheap/clear', { method: 'POST' });
      setHeap([]);
      setTree(null);
      setSize(0);
      setHeight(-1);
      setMin(null);
      setHighlightedIndex(null);
      setSwappingIndices([]);
      showMessage('Heap cleared!');
    } catch (error) {
      showMessage('Error clearing heap');
    }
  };

  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro-layout">
        <div className="intro-left">
          <ConceptsPanel dataStructure="minheap" />
        </div>
        <AIAssistant context="Min Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek minimum" />
      </div>

      {/* Main Visualizer */}
      <div className="visualizer-layout">
        <ControlPanel
          insertValue={insertValue}
          buildArray={buildArray}
          size={size}
          height={height}
          min={min}
          message={message}
          heap={heap}
          isAnimating={isAnimating}
          onInsertValueChange={setInsertValue}
          onBuildArrayChange={setBuildArray}
          onInsert={insertElement}
          onExtract={extractMin}
          onPeek={peekMin}
          onBuild={buildHeap}
          onClear={clearHeap}
        />

        <div className="visual-panel">
          <h2>Min Heap Visualization</h2>
          <p className="bst-property-reminder">
            Heap Property: <code>Parent &lt;= Children</code> (Min at root)
          </p>

          {/* Tree View */}
          <div className="heap-tree-section">
            <h3>Tree View</h3>
            <div className="tree-container">
              <HeapTreeRenderer
                tree={tree}
                heap={heap}
                highlightedIndex={highlightedIndex}
                swappingIndices={swappingIndices}
              />
            </div>
          </div>

          {/* Array View */}
          <div className="heap-array-section">
            <h3>Array Representation</h3>
            <HeapArrayRenderer
              heap={heap}
              highlightedIndex={highlightedIndex}
              swappingIndices={swappingIndices}
            />
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="minheap" />
    </div>
  );
}

export default MinHeapVisualizer;
