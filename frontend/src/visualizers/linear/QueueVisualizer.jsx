import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';

function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [size, setSize] = useState(0);
  const [front, setFront] = useState('Empty');
  const [maxSize] = useState(10);
  const [message, setMessage] = useState('');
  const [enqueueValue, setEnqueueValue] = useState('');

  useEffect(() => {
    loadQueue();
  }, []);

  const loadQueue = async () => {
    try {
      const response = await fetch('/api/queue');
      const data = await response.json();
      setQueue(data.items || []);
      setSize(data.size || 0);
      setFront(data.front !== null && data.front !== undefined ? data.front : 'Empty');
    } catch (error) {
      console.error('Error loading queue:', error);
    }
  };

  const showMessage = (text, type = 'info') => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const enqueueItem = async () => {
    if (!enqueueValue || enqueueValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(enqueueValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    try {
      const response = await fetch('/api/queue/enqueue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setQueue(result.items || []);
      setSize(result.size || 0);
      setFront(result.front !== null && result.front !== undefined ? result.front : 'Empty');
      showMessage(`Enqueued ${numValue}!`, 'success');
      setEnqueueValue('');
    } catch (error) {
      console.error('Enqueue error:', error);
      showMessage('Error enqueueing. Is Flask running?', 'error');
    }
  };

  const dequeueItem = async () => {
    try {
      const response = await fetch('/api/queue/dequeue', { method: 'POST' });
      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setQueue(result.items || []);
      setSize(result.size || 0);
      setFront(result.front !== null && result.front !== undefined ? result.front : 'Empty');
      showMessage(`Dequeued ${result.dequeued} from queue!`, 'success');
    } catch (error) {
      showMessage('Error dequeuing from queue', 'error');
    }
  };

  const peekItem = async () => {
    try {
      const response = await fetch('/api/queue/peek');
      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      showMessage(`Front element is: ${result.front}`, 'info');
    } catch (error) {
      showMessage('Error peeking queue', 'error');
    }
  };

  const clearQueue = async () => {
    try {
      await fetch('/api/queue/clear', { method: 'POST' });
      setQueue([]);
      setSize(0);
      setFront('Empty');
      showMessage('Queue cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing queue', 'error');
    }
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is a Queue?</span>
          </div>
          <div className="concept-content">
            <p>A <strong>Queue</strong> is a linear data structure that follows the <strong>FIFO</strong> (First In, First Out) principle.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Think of a line at a store – the first person in line gets served <strong>first</strong>!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Enqueue</span>
                <span className="op-desc">Add to the back</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Dequeue</span>
                <span className="op-desc">Remove from the front</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Peek</span>
                <span className="op-desc">View the front element</span>
                <span className="op-complexity">O(1)</span>
              </div>
            </div>
          </div>
        </div>

        <AIAssistant context="Queue data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Queue Operations</h2>
          <div className="operation-group">
            <label htmlFor="enqueueValue">Enqueue (Add to back)</label>
            <div className="input-group">
              <input
                type="text"
                id="enqueueValue"
                value={enqueueValue}
                onChange={(e) => setEnqueueValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && enqueueItem()}
                placeholder="Enter a value"
              />
              <button onClick={enqueueItem} className="btn btn-enqueue">Enqueue</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Other Operations</label>
            <div className="btn-group">
              <button onClick={dequeueItem} className="btn btn-dequeue">Dequeue</button>
              <button onClick={peekItem} className="btn btn-peek">Peek</button>
              <button onClick={clearQueue} className="btn btn-clear">Clear</button>
            </div>
          </div>
          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Front:</span>
              <span className="info-value">{front}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Max Size:</span>
              <span className="info-value">{maxSize}</span>
            </div>
          </div>
          {message && (
            <div className={`message message-${message.includes('Error') ? 'error' : message.includes('success') ? 'success' : 'info'}`}>
              {message}
            </div>
          )}
        </div>

        <div className="visual-panel">
          <h2>Queue Visualization</h2>
          <div className="queue-container">
            <div className="queue-label">
              <span className="front-marker">FRONT →</span>
            </div>
            <div className="queue-visual">
              {queue.length === 0 ? (
                <div className="queue-empty">Queue is empty. Enqueue some items!</div>
              ) : (
                queue.map((item, index) => (
                  <div key={index} className="queue-item">
                    {item}
                  </div>
                ))
              )}
            </div>
            <div className="queue-label">
              <span className="back-marker">← BACK</span>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="stack" />
    </div>
  );
}

export default QueueVisualizer;

