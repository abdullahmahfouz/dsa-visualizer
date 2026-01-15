import { useState, useEffect } from 'react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import ConceptsPanel from '../../components/ConceptsPanel';

import {
  ControlPanel,
  HeapTreeRenderer,
  HeapArrayRenderer,
  MAX_HEAP_SIZE
} from './MaxHeapVisualizer.parts';

function MaxHeapVisualizer() {
  // Heap state
  const [heap, setHeap] = useState([]);
  const [tree, setTree] = useState(null);
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState(-1);
  const [max, setMax] = useState(null);

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
      const response = await fetch('/api/maxheap');
      const data = await response.json();
      setHeap(data.heap || []);
      setTree(data.tree);
      setSize(data.size || 0);
      setHeight(data.height !== undefined ? data.height : -1);
      setMax(data.max);
    } catch (error) {
      console.error('Error loading Max Heap:', error);
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
      const response = await fetch('/api/maxheap/insert', {
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
      setMax(result.max);
      showMessage(`Inserted ${numValue}`);
      setInsertValue('');
    } catch (error) {
      showMessage('Error inserting element');
    }

    setIsAnimating(false);
  };

  // Extract maximum
  const extractMax = async () => {
    if (size === 0) {
      showMessage('Heap is empty!');
      return;
    }

    setIsAnimating(true);
    setHighlightedIndex(0);

    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const response = await fetch('/api/maxheap/extract', {
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
      setMax(result.max);
      showMessage(`Extracted maximum: ${result.extracted}`);
    } catch (error) {
      showMessage('Error extracting maximum');
    }

    setHighlightedIndex(null);
    setIsAnimating(false);
  };

  // Peek maximum
  const peekMax = async () => {
    if (size === 0) {
      showMessage('Heap is empty!');
      return;
    }

    setHighlightedIndex(0);
    showMessage(`Maximum element is ${max}`);

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
      const response = await fetch('/api/maxheap/build', {
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
      setMax(result.max);
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
      await fetch('/api/maxheap/clear', { method: 'POST' });
      setHeap([]);
      setTree(null);
      setSize(0);
      setHeight(-1);
      setMax(null);
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
          <ConceptsPanel dataStructure="maxheap" />
        </div>
        <AIAssistant context="Max Heap data structure, priority queue, heapify operations, O(log n) insert and extract, O(1) peek maximum, heap sort" />
      </div>

      {/* Main Visualizer */}
      <div className="visualizer-layout">
        <ControlPanel
          insertValue={insertValue}
          buildArray={buildArray}
          size={size}
          height={height}
          max={max}
          message={message}
          heap={heap}
          isAnimating={isAnimating}
          onInsertValueChange={setInsertValue}
          onBuildArrayChange={setBuildArray}
          onInsert={insertElement}
          onExtract={extractMax}
          onPeek={peekMax}
          onBuild={buildHeap}
          onClear={clearHeap}
        />

        <div className="visual-panel">
          <h2>Max Heap Visualization</h2>
          <p className="bst-property-reminder">
            Heap Property: <code>Parent &gt;= Children</code> (Max at root)
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

      <CodeTabs dataStructure="maxheap" />
    </div>
  );
}

export default MaxHeapVisualizer;
