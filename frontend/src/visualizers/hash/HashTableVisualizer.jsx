import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb, AlertTriangle, Info } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';

function HashTableVisualizer() {
  const [table, setTable] = useState([]);
  const [size, setSize] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [loadFactor, setLoadFactor] = useState(0);
  const [collisionCount, setCollisionCount] = useState(0);
  const { message, showMessage } = useTimedMessage(3000);
  const [insertKey, setInsertKey] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [deleteKey, setDeleteKey] = useState('');
  const [getKey, setGetKey] = useState('');
  const [highlightedSlots, setHighlightedSlots] = useState([]);

  useEffect(() => {
    loadHashtable();
  }, []);

  const loadHashtable = async () => {
    try {
      const data = await getJson('/api/hashtable');
      setTable(data.table || []);
      setSize(data.size || 0);
      setCapacity(data.capacity || 0);
      setLoadFactor(data.load_factor || 0);
      setCollisionCount(data.collision_count || 0);
    } catch (error) {
      console.error('Error loading hashtable:', error);
    }
  };

  // Calculate hash for a key (simple hash function for visualization)
  const calculateHash = (key) => {
    if (!capacity || capacity === 0) return 0;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % capacity;
    }
    return hash;
  };

  const insertItem = async () => {
    if (!insertKey.trim() || !insertValue.trim()) {
      showMessage('Please enter both key and value!', 'error');
      return;
    }

    // Check if this will cause a collision (only if table is loaded)
    const hashIndex = capacity > 0 ? calculateHash(insertKey.trim()) : 0;
    const willCollide = table.length > 0 && table[hashIndex] && table[hashIndex][0] !== insertKey.trim();

    try {
      const result = await postJson('/api/hashtable/insert', { key: insertKey.trim(), value: insertValue.trim() });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      await loadHashtable();
      
      // Show collision message if detected
      if (willCollide) {
        showMessage(`Collision detected! Key "${insertKey}" hashed to slot ${hashIndex} but it was occupied. Used linear probing to find next available slot.`, 'warning');
        // Highlight the collision path
        const probingPath = [];
        for (let i = hashIndex; i < table.length && probingPath.length < 5; i++) {
          probingPath.push(i);
          if (!table[i]) break;
        }
        setHighlightedSlots(probingPath);
        setTimeout(() => setHighlightedSlots([]), 3000);
      } else {
        showMessage(`Inserted ${insertKey}: ${insertValue} at slot ${hashIndex}`, 'success');
        setHighlightedSlots([hashIndex]);
        setTimeout(() => setHighlightedSlots([]), 2000);
      }
      
      setInsertKey('');
      setInsertValue('');
    } catch (error) {
      console.error('Insert error:', error);
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  const deleteItem = async () => {
    if (!deleteKey || deleteKey.trim() === '') {
      showMessage('Please enter a key!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/hashtable/delete', { key: deleteKey.trim() });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      await loadHashtable();
      showMessage(`Deleted ${deleteKey}`, 'success');
      setDeleteKey('');
    } catch (error) {
      console.error('Delete error:', error);
      showMessage('Error deleting. Is Flask running?', 'error');
    }
  };

  const getItem = async () => {
    if (!getKey || getKey.trim() === '') {
      showMessage('Please enter a key!', 'error');
      return;
    }

    try {
      const result = await getJson(`/api/hashtable/get?key=${encodeURIComponent(getKey.trim())}`);
      
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      if (result.found) {
        showMessage(`Found: ${getKey} = ${result.value}`, 'success');
      } else {
        showMessage(`Key ${getKey} not found`, 'error');
      }
      setGetKey('');
    } catch (error) {
      showMessage('Error searching item', 'error');
    }
  };

  const clearHashtable = async () => {
    try {
      await postJson('/api/hashtable/clear', {});
      await loadHashtable();
      showMessage('Hashtable cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing hashtable', 'error');
    }
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="intro-left">
          <div className="concept-box">
            <div className="concept-header">
              <HelpCircle className="icon-sm" />
              <span>What is a Hash Table with Linear Probing?</span>
            </div>
            <div className="concept-content">
              <p>A <strong>Hash Table</strong> stores key-value pairs using a hash function for O(1) average-case lookup, insertion, and deletion.</p>
              <div className="concept-analogy">
                <Lightbulb />
                <span>Think of it like a <strong>library catalog</strong> – the hash function tells you which shelf to check!</span>
              </div>
            </div>
          </div>
          
          <div className="concept-box" style={{ marginTop: '1rem' }}>
            <div className="concept-header">
              <AlertTriangle className="icon-sm" style={{ color: '#f59e0b' }} />
              <span>What are Collisions?</span>
            </div>
            <div className="concept-content">
              <p>A <strong>collision</strong> occurs when two different keys hash to the same index. For example:</p>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '8px', marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                <div>hash("apple") = 3</div>
                <div>hash("banana") = 3 <span style={{ color: '#f59e0b' }}>- Collision!</span></div>
              </div>
              <p style={{ marginTop: '0.75rem' }}><strong>Linear Probing</strong> solves this by checking the next available slot: if slot 3 is full, try slot 4, then 5, and so on.</p>
              <div className="concept-analogy" style={{ marginTop: '0.5rem' }}>
                <Info style={{ color: '#3b82f6' }} />
                <span>Like finding parking – if your spot is taken, find the <strong>next available space</strong>!</span>
              </div>
            </div>
          </div>
        </div>

        <AIAssistant context="Hash Table with Linear Probing data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Hash Table Operations</h2>
          <div className="operation-group">
            <label>Insert Key-Value</label>
            <div className="input-group">
              <input
                type="text"
                value={insertKey}
                onChange={(e) => setInsertKey(e.target.value)}
                placeholder="Key"
              />
              <input
                type="text"
                value={insertValue}
                onChange={(e) => setInsertValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && insertItem()}
                placeholder="Value"
              />
              <button onClick={insertItem} className="btn btn-insert">Insert</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Delete Key</label>
            <div className="input-group">
              <input
                type="text"
                value={deleteKey}
                onChange={(e) => setDeleteKey(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && deleteItem()}
                placeholder="Key"
              />
              <button onClick={deleteItem} className="btn btn-delete">Delete</button>
            </div>
          </div>
          <div className="operation-group">
            <label>Search Key</label>
            <div className="input-group">
              <input
                type="text"
                value={getKey}
                onChange={(e) => setGetKey(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && getItem()}
                placeholder="Key"
              />
              <button onClick={getItem} className="btn btn-search">Search</button>
            </div>
          </div>
          <div className="operation-group">
            <button onClick={clearHashtable} className="btn btn-clear">Clear Table</button>
          </div>
          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Filled Slots:</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Total Capacity:</span>
              <span className="info-value">{capacity}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Load Factor:</span>
              <span className="info-value">{loadFactor.toFixed(2)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Collisions:</span>
              <span className="info-value" style={{ color: collisionCount > 0 ? '#f59e0b' : 'inherit' }}>
                {collisionCount}
              </span>
            </div>
          </div>
          
          {loadFactor > 0.7 && (
            <div className="warning-box" style={{ 
              background: 'rgba(245, 158, 11, 0.1)', 
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '8px',
              padding: '0.75rem',
              marginTop: '1rem',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'start'
            }}>
              <AlertTriangle style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} size={18} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>High Load Factor!</strong> When load factor exceeds 0.7, collisions become more frequent and performance degrades. Consider resizing the table.
              </div>
            </div>
          )}
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Hash Table Visualization</h2>
          <div className="hashtable-container">
            {!table || table.length === 0 || size === 0 ? (
              <div className="hashtable-empty">Hashtable is empty. Insert some items!</div>
            ) : (
              <div className="hashtable-grid">
                {table.map((slot, index) => (
                  <div 
                    key={index} 
                    className={`hashtable-slot ${slot ? 'occupied' : 'empty'} ${highlightedSlots.includes(index) ? 'slot-highlight' : ''}`}
                  >
                    <div className="slot-index">{index}</div>
                    {slot ? (
                      <div className="slot-content">
                        <div className="slot-key">{slot[0]}</div>
                        <div className="slot-value">{slot[1]}</div>
                      </div>
                    ) : (
                      <div className="slot-empty">Empty</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="hashtable" />
    </div>
  );
}

export default HashTableVisualizer;

