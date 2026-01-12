import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';

function LinkedListVisualizer() {
  const [list, setList] = useState([]);
  const [size, setSize] = useState(0);
  const [head, setHead] = useState('Empty');
  const { message, showMessage } = useTimedMessage(3000);
  const [insertHeadValue, setInsertHeadValue] = useState('');
  const [insertTailValue, setInsertTailValue] = useState('');
  const [insertIndexValue, setInsertIndexValue] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    loadLinkedList();
  }, []);

  const loadLinkedList = async () => {
    try {
      const data = await getJson('/api/linkedlist');
      setList(data.items || []);
      setSize(data.size || 0);
      setHead(data.head !== null && data.head !== undefined ? data.head : 'Empty');
    } catch (error) {
      console.error('Error loading linked list:', error);
    }
  };

  const insertAtHead = async () => {
    if (!insertHeadValue || insertHeadValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(insertHeadValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/linkedlist/insert/head', { value: numValue });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setList(result.items || []);
      setSize(result.size || 0);
      setHead(result.head !== null && result.head !== undefined ? result.head : 'Empty');
      showMessage(`Inserted ${numValue} at head!`, 'success');
      setInsertHeadValue('');
    } catch (error) {
      console.error('Insert error:', error);
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  const insertAtTail = async () => {
    if (!insertTailValue || insertTailValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(insertTailValue);
    if (isNaN(numValue)) {
      showMessage('Please enter a valid number!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/linkedlist/insert/tail', { value: numValue });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setList(result.items || []);
      setSize(result.size || 0);
      setHead(result.head !== null && result.head !== undefined ? result.head : 'Empty');
      showMessage(`Inserted ${numValue} at tail!`, 'success');
      setInsertTailValue('');
    } catch (error) {
      console.error('Insert error:', error);
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  const deleteAtHead = async () => {
    try {
      const result = await postJson('/api/linkedlist/delete/head', {});
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }
      setList(result.items || []);
      setSize(result.size || 0);
      setHead(result.head !== null && result.head !== undefined ? result.head : 'Empty');
      showMessage('Deleted head!', 'success');
    } catch (error) {
      showMessage('Error deleting head', 'error');
    }
  };

  const deleteAtTail = async () => {
    try {
      const result = await postJson('/api/linkedlist/delete/tail', {});
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }
      setList(result.items || []);
      setSize(result.size || 0);
      setHead(result.head !== null && result.head !== undefined ? result.head : 'Empty');
      showMessage('Deleted tail!', 'success');
    } catch (error) {
      showMessage('Error deleting tail', 'error');
    }
  };

  const clearList = async () => {
    try {
      await postJson('/api/linkedlist/clear', {});
      setList([]);
      setSize(0);
      setHead('Empty');
      showMessage('List cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing list', 'error');
    }
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is a Singly Linked List?</span>
          </div>
          <div className="concept-content">
            <p>A <strong>Singly Linked List</strong> is a linear data structure where each element contains data and a pointer to the next node.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Think of a treasure hunt – each clue points to the <strong>next location</strong>!</span>
            </div>
          </div>
        </div>

        <AIAssistant context="Singly Linked List data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Linked List Operations</h2>
          <div className="operation-group">
            <label htmlFor="insertHeadValue">Insert at Head</label>
            <div className="input-group">
              <input
                type="text"
                id="insertHeadValue"
                value={insertHeadValue}
                onChange={(e) => setInsertHeadValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && insertAtHead()}
                placeholder="Enter a value"
              />
              <button onClick={insertAtHead} className="btn btn-insert">Insert Head</button>
            </div>
          </div>
          <div className="operation-group">
            <label htmlFor="insertTailValue">Insert at Tail</label>
            <div className="input-group">
              <input
                type="text"
                id="insertTailValue"
                value={insertTailValue}
                onChange={(e) => setInsertTailValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && insertAtTail()}
                placeholder="Enter a value"
              />
              <button onClick={insertAtTail} className="btn btn-insert">Insert Tail</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Delete Operations</label>
            <div className="btn-group">
              <button onClick={deleteAtHead} className="btn btn-delete">Delete Head</button>
              <button onClick={deleteAtTail} className="btn btn-delete">Delete Tail</button>
            </div>
          </div>
          <div className="operation-group">
            <button onClick={clearList} className="btn btn-clear full-width">Clear All</button>
          </div>
          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Head:</span>
              <span className="info-value">{head}</span>
            </div>
          </div>
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Linked List Visualization</h2>
          <div className="linkedlist-container">
            <div className="linkedlist-visual">
              {list.length === 0 ? (
                <div className="linkedlist-empty">List is empty. Insert some nodes!</div>
              ) : (
                list.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="linkedlist-node">
                      <div className="node-value">{item}</div>
                      {index < list.length - 1 && <div className="node-arrow">→</div>}
                    </div>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="linkedlist" />
    </div>
  );
}

export default LinkedListVisualizer;

