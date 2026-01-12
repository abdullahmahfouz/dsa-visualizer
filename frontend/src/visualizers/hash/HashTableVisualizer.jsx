import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb, AlertTriangle, Info, ArrowRight, RefreshCw } from 'lucide-react';
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
  const [highlightedSlot, setHighlightedSlot] = useState(null);
  const [probingPath, setProbingPath] = useState([]);
  const [lastInsertedKey, setLastInsertedKey] = useState(null);
  const [collisionInfo, setCollisionInfo] = useState(null);

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

  const calculateHash = (key) => {
    if (!capacity || capacity === 0) return 0;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % capacity;
    }
    return hash;
  };

  // Calculate probing path for visualization
  const calculateProbingPath = (key, currentTable) => {
    const hashIndex = calculateHash(key);
    const path = [hashIndex];
    let index = hashIndex;
    
    // Simulate linear probing
    while (currentTable[index] && currentTable[index][0] !== key) {
      index = (index + 1) % capacity;
      path.push(index);
      if (index === hashIndex) break; // Full loop
      if (path.length > capacity) break; // Safety
    }
    
    return { originalHash: hashIndex, path, finalSlot: index };
  };

  const insertItem = async () => {
    if (!insertKey.trim() || !insertValue.trim()) {
      showMessage('Please enter both key and value!', 'error');
      return;
    }

    const hashIndex = capacity > 0 ? calculateHash(insertKey.trim()) : 0;
    const willCollide = table.length > 0 && table[hashIndex] && table[hashIndex][0] !== insertKey.trim();
    
    // Calculate probing path before insert
    let probing = null;
    if (willCollide) {
      probing = calculateProbingPath(insertKey.trim(), table);
    }

    try {
      const result = await postJson('/api/hashtable/insert', { key: insertKey.trim(), value: insertValue.trim() });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      await loadHashtable();
      setLastInsertedKey(insertKey.trim());
      
      if (willCollide && probing) {
        // Show collision with probing visualization
        setCollisionInfo({
          key: insertKey.trim(),
          originalSlot: probing.originalHash,
          probedSlots: probing.path,
          finalSlot: probing.path[probing.path.length - 1]
        });
        setProbingPath(probing.path);
        showMessage(`Collision! "${insertKey}" hashed to ${probing.originalHash}, probed ${probing.path.length} slot(s)`, 'warning');
        
        // Clear probing visualization after delay
        setTimeout(() => {
          setProbingPath([]);
          setCollisionInfo(null);
        }, 4000);
      } else {
        showMessage(`Inserted "${insertKey}" → slot ${hashIndex}`, 'success');
        setHighlightedSlot(hashIndex);
        setTimeout(() => setHighlightedSlot(null), 2000);
      }
      
      setInsertKey('');
      setInsertValue('');
      setTimeout(() => setLastInsertedKey(null), 3000);
    } catch (error) {
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  const deleteItem = async () => {
    if (!deleteKey.trim()) {
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
      showMessage(`Deleted "${deleteKey}"`, 'success');
      setDeleteKey('');
    } catch (error) {
      showMessage('Error deleting. Is Flask running?', 'error');
    }
  };

  const getItem = async () => {
    if (!getKey.trim()) {
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
        showMessage(`Found: "${getKey}" = ${result.value}`, 'success');
      } else {
        showMessage(`Key "${getKey}" not found`, 'error');
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
      setProbingPath([]);
      setCollisionInfo(null);
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
              <span>What is a Hash Table?</span>
            </div>
            <div className="concept-content">
              <p>A <strong>Hash Table</strong> maps keys to values using a hash function for O(1) lookups.</p>
              <div className="concept-analogy">
                <Lightbulb />
                <span>Like a <strong>coat check</strong> – give them your coat (value), get a ticket number (hash of key)!</span>
              </div>
            </div>
          </div>
          
          <div className="concept-box" style={{ marginTop: '1rem' }}>
            <div className="concept-header">
              <AlertTriangle className="icon-sm" style={{ color: '#f59e0b' }} />
              <span>Linear Probing</span>
            </div>
            <div className="concept-content">
              <p>When two keys hash to the same slot (<strong>collision</strong>), we check the next slot until we find an empty one.</p>
              <div className="concept-analogy" style={{ marginTop: '0.5rem' }}>
                <Info style={{ color: '#3b82f6' }} />
                <span>Like parking – if spot 3 is taken, try spot 4, then 5...</span>
              </div>
            </div>
          </div>
        </div>

        <AIAssistant context="Hash Table with Linear Probing" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Operations</h2>
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
              <span className="info-label">Items</span>
              <span className="info-value">{size}/{capacity}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Load</span>
              <span className="info-value" style={{ color: loadFactor >= 0.7 ? '#f59e0b' : 'inherit' }}>
                {(loadFactor * 100).toFixed(0)}%
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Collisions</span>
              <span className="info-value" style={{ color: collisionCount > 0 ? '#f59e0b' : 'inherit' }}>
                {collisionCount}
              </span>
            </div>
          </div>
          
          {/* Rehash Info Box - shows when load factor approaches threshold */}
          <div className="rehash-info-box">
            <RefreshCw size={16} />
            <div>
              <strong>Rehashing Threshold: 70%</strong>
              <p>In practice, hash tables rehash (double capacity) when load factor reaches ~0.7 to maintain O(1) performance.</p>
              {loadFactor >= 0.7 ? (
                <span className="rehash-warning">⚠️ Current load ({(loadFactor * 100).toFixed(0)}%) exceeds threshold!</span>
              ) : (
                <span className="rehash-safe">✓ Currently safe ({(loadFactor * 100).toFixed(0)}% &lt; 70%)</span>
              )}
            </div>
          </div>
          
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Hash Table</h2>
          
          {/* Hash Function Demo */}
          {insertKey && (
            <div className="hash-demo">
              <div className="hash-demo-item">
                <span className="hash-demo-label">Key:</span>
                <span className="hash-demo-key">"{insertKey}"</span>
              </div>
              <ArrowRight className="hash-demo-arrow" />
              <div className="hash-demo-item">
                <span className="hash-demo-label">hash()</span>
              </div>
              <ArrowRight className="hash-demo-arrow" />
              <div className="hash-demo-item">
                <span className="hash-demo-label">Slot:</span>
                <span className="hash-demo-index">{calculateHash(insertKey)}</span>
              </div>
            </div>
          )}
          
          {/* Collision/Probing Info Banner */}
          {collisionInfo && (
            <div className="collision-banner">
              <AlertTriangle size={18} />
              <div>
                <strong>Collision Detected!</strong>
                <p>
                  "{collisionInfo.key}" hashed to slot <span className="slot-badge original">{collisionInfo.originalSlot}</span>
                  {collisionInfo.probedSlots.length > 1 && (
                    <>
                      {' '}→ Probed: {collisionInfo.probedSlots.map((slot, i) => (
                        <span key={i}>
                          <span className={`slot-badge ${i === collisionInfo.probedSlots.length - 1 ? 'final' : 'probed'}`}>
                            {slot}
                          </span>
                          {i < collisionInfo.probedSlots.length - 1 && ' → '}
                        </span>
                      ))}
                    </>
                  )}
                </p>
              </div>
            </div>
          )}

          <div className="ht-visual">
            {!table || table.length === 0 ? (
              <div className="ht-empty">
                Hash table is empty. Insert some key-value pairs!
              </div>
            ) : (
              <div className="ht-buckets">
                {table.map((slot, index) => {
                  const isProbed = probingPath.includes(index);
                  const isOriginalHash = collisionInfo && collisionInfo.originalSlot === index;
                  const isFinalSlot = collisionInfo && collisionInfo.finalSlot === index;
                  
                  return (
                    <div 
                      key={index} 
                      className={`ht-row ${slot ? 'filled' : 'empty'} 
                        ${highlightedSlot === index ? 'highlighted' : ''} 
                        ${lastInsertedKey && slot && slot[0] === lastInsertedKey ? 'just-inserted' : ''}
                        ${isProbed ? 'probed' : ''}
                        ${isOriginalHash ? 'original-hash' : ''}
                        ${isFinalSlot ? 'final-slot' : ''}`}
                    >
                      {/* Probing indicator */}
                      {isProbed && (
                        <div className="probe-indicator">
                          {isOriginalHash ? '🎯' : isFinalSlot ? '✓' : '→'}
                        </div>
                      )}
                      
                      {/* Key Box (left side) */}
                      <div className={`ht-key-box ${slot ? 'has-key' : ''}`}>
                        {slot && <span className="ht-key">{slot[0]}</span>}
                      </div>
                      
                      {/* Arrow */}
                      <div className="ht-arrow">
                        {slot && <ArrowRight size={20} />}
                      </div>
                      
                      {/* Index Badge */}
                      <div className={`ht-index ${isOriginalHash ? 'collision-index' : ''}`}>{index}</div>
                      
                      {/* Value Box (right side) */}
                      <div className={`ht-value-box ${slot ? 'has-value' : ''}`}>
                        {slot ? (
                          <span className="ht-value">{slot[1]}</span>
                        ) : (
                          <span className="ht-empty-slot">—</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Legend */}
          <div className="ht-legend">
            <div className="legend-item">
              <div className="legend-color key-color"></div>
              <span>Key</span>
            </div>
            <div className="legend-item">
              <div className="legend-color index-color"></div>
              <span>Index</span>
            </div>
            <div className="legend-item">
              <div className="legend-color value-color"></div>
              <span>Value</span>
            </div>
            {probingPath.length > 0 && (
              <div className="legend-item">
                <div className="legend-color probe-color"></div>
                <span>Probing Path</span>
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
