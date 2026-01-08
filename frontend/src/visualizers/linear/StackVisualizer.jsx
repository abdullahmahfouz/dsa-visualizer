import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb, Bot } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';

function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [size, setSize] = useState(0);
  const [top, setTop] = useState('Empty');
  const [maxSize] = useState(10);
  const [message, setMessage] = useState('');
  const [pushValue, setPushValue] = useState('');

  useEffect(() => {
    loadStack();
  }, []);

  const loadStack = async () => {
    try {
      const response = await fetch('/api/stack');
      const data = await response.json();
      setStack(data.items || []);
      setSize(data.size || 0);
      setTop(data.top !== null && data.top !== undefined ? data.top : 'Empty');
    } catch (error) {
      console.error('Error loading stack:', error);
    }
  };

  const showMessage = (text, type = 'info') => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const pushItem = async () => {
    if (!pushValue || pushValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(pushValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    try {
      const response = await fetch('/api/stack/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: numValue })
      });

      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setStack(result.items || []);
      setSize(result.size || 0);
      setTop(result.top !== null && result.top !== undefined ? result.top : 'Empty');
      showMessage(`Pushed ${numValue} to stack!`, 'success');
      setPushValue('');
    } catch (error) {
      console.error('Push error:', error);
      showMessage('Error pushing to stack. Is Flask running?', 'error');
    }
  };

  const popItem = async () => {
    try {
      const response = await fetch('/api/stack/pop', { method: 'POST' });
      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setStack(result.items || []);
      setSize(result.size || 0);
      setTop(result.top !== null && result.top !== undefined ? result.top : 'Empty');
      showMessage(`Popped ${result.popped} from stack!`, 'success');
    } catch (error) {
      showMessage('Error popping from stack', 'error');
    }
  };

  const peekItem = async () => {
    try {
      const response = await fetch('/api/stack/peek');
      const result = await response.json();
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      showMessage(`Top element is: ${result.top}`, 'info');
    } catch (error) {
      showMessage('Error peeking stack', 'error');
    }
  };

  const clearStack = async () => {
    try {
      await fetch('/api/stack/clear', { method: 'POST' });
      setStack([]);
      setSize(0);
      setTop('Empty');
      showMessage('Stack cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing stack', 'error');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      pushItem();
    }
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is a Stack?</span>
          </div>
          <div className="concept-content">
            <p>A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO</strong> (Last In, First Out) principle.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Think of a stack of plates - you can only add or remove from the <strong>top</strong>!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Push</span>
                <span className="op-desc">Add to top</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Pop</span>
                <span className="op-desc">Remove from top</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Peek</span>
                <span className="op-desc">View top element</span>
                <span className="op-complexity">O(1)</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>Browser back/forward buttons</li>
                <li>Undo/Redo functionality</li>
                <li>Function call stack</li>
                <li>Expression evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Stack data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Stack Operations</h2>
          <div className="operation-group">
            <label htmlFor="pushValue">Push (Add to top)</label>
            <div className="input-group">
              <input
                type="text"
                id="pushValue"
                value={pushValue}
                onChange={(e) => setPushValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a value"
              />
              <button onClick={pushItem} className="btn btn-push">Push</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Other Operations</label>
            <div className="btn-group">
              <button onClick={popItem} className="btn btn-pop">Pop</button>
              <button onClick={peekItem} className="btn btn-peek">Peek</button>
              <button onClick={clearStack} className="btn btn-clear">Clear</button>
            </div>
          </div>
          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Top:</span>
              <span className="info-value">{top}</span>
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
          <h2>Stack Visualization</h2>
          <div className="stack-container">
            <div className="stack-visual">
              {stack.length === 0 ? (
                <div className="stack-empty">Stack is empty. Push some items!</div>
              ) : (
                stack.slice().reverse().map((item, index) => (
                  <div key={index} className="stack-item">
                    {item}
                  </div>
                ))
              )}
            </div>
            <div className="stack-base">
              <span>BOTTOM</span>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="stack" />
    </div>
  );
}

export default StackVisualizer;

