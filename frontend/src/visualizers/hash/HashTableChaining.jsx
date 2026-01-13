import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb, Info, ArrowRight, Link, RefreshCw, Zap } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';
import hashTableChainingData from '../../data/concepts/hashTableChaining.json';

function HashTableChaining() {
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
  const [lastInsertedKey, setLastInsertedKey] = useState(null);
  const [isRehashing, setIsRehashing] = useState(false);

  useEffect(() => {
    loadHashtable();
  }, []);

  const loadHashtable = async () => {
    try {
      const data = await getJson('/api/hashtable_chaining');
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

  const insertItem = async () => {
    if (!insertKey.trim() || !insertValue.trim()) {
      showMessage(hashTableChainingData.messages.errorNoKeyValue, 'error');
      return;
    }

    try {
      const result = await postJson('/api/hashtable_chaining/insert', { key: insertKey.trim(), value: insertValue.trim() });

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      await loadHashtable();
      setLastInsertedKey(insertKey.trim());

      if (result.updated) {
        showMessage(hashTableChainingData.messages.insertUpdated.replace('{key}', insertKey).replace('{index}', result.index), 'info');
      } else if (result.collision) {
        showMessage(hashTableChainingData.messages.insertCollision.replace('{key}', insertKey).replace('{index}', result.index), 'warning');
      } else {
        showMessage(hashTableChainingData.messages.insertSuccess.replace('{key}', insertKey).replace('{index}', result.index), 'success');
      }

      setHighlightedSlot(result.index);
      setTimeout(() => {
        setHighlightedSlot(null);
        setLastInsertedKey(null);
      }, 3000);

      setInsertKey('');
      setInsertValue('');
    }
    catch (error) {
      showMessage(hashTableChainingData.messages.errorInsert, 'error');
    }
  };

  const deleteItem = async () => {
    if (!deleteKey.trim()) {
      showMessage(hashTableChainingData.messages.errorNoKey, 'error');
      return;
    }
    try {
      const result = await postJson('/api/hashtable_chaining/delete', { key: deleteKey.trim() });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }
      await loadHashtable();
      showMessage(hashTableChainingData.messages.deleteSuccess.replace('{key}', deleteKey), 'success');
      setDeleteKey('');
    }
    catch (error) {
      showMessage(hashTableChainingData.messages.errorDelete, 'error');
    }
  };

  const getItem = async () => {
    if (!getKey.trim()) {
      showMessage(hashTableChainingData.messages.errorNoKey, 'error');
      return;
    }

    try {
      const result = await getJson(`/api/hashtable_chaining/get?key=${encodeURIComponent(getKey.trim())}`);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      if (result.found) {
        showMessage(hashTableChainingData.messages.searchFound.replace('{key}', getKey).replace('{value}', result.value), 'success');
      } else {
        showMessage(hashTableChainingData.messages.searchNotFound.replace('{key}', getKey), 'error');
      }
      setGetKey('');
    } catch (error) {
      showMessage(hashTableChainingData.messages.errorSearch, 'error');
    }
  };

  const clearHashtable = async () => {
    try {
      await postJson('/api/hashtable_chaining/clear', {});
      await loadHashtable();
      setHighlightedSlot(null);
      setLastInsertedKey(null);
      showMessage(hashTableChainingData.messages.clearSuccess, 'success');
    } catch (error) {
      showMessage(hashTableChainingData.messages.errorClear, 'error');
    }
  };

 

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="intro-left">
          <div className="concept-box">
            <div className="concept-header">
              <HelpCircle className="icon-sm" />
              <span>{hashTableChainingData.concept.title}</span>
            </div>
            <div className="concept-content">
              <p><strong>Chaining</strong> {hashTableChainingData.concept.description.replace('Chaining ', '')}</p>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '8px', marginTop: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                <div>{hashTableChainingData.concept.codeExample}</div>
              </div>
              <div className="concept-analogy" style={{ marginTop: '0.75rem' }}>
                <Lightbulb />
                <span>{hashTableChainingData.concept.analogy}</span>
              </div>
            </div>
          </div>

          <div className="concept-box" style={{ marginTop: '1rem' }}>
            <div className="concept-header">
              <Info className="icon-sm" style={{ color: '#3b82f6' }} />
              <span>{hashTableChainingData.comparison.title}</span>
            </div>
            <div className="concept-content">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                <div>
                  <strong style={{ color: hashTableChainingData.comparison.chaining.color }}>{hashTableChainingData.comparison.chaining.label}</strong>
                  {hashTableChainingData.comparison.chaining.points.map((point, idx) => (
                    <div key={idx} style={{ marginTop: '0.25rem' }}>{point}</div>
                  ))}
                </div>
                <div>
                  <strong style={{ color: hashTableChainingData.comparison.probing.color }}>{hashTableChainingData.comparison.probing.label}</strong>
                  {hashTableChainingData.comparison.probing.points.map((point, idx) => (
                    <div key={idx} style={{ marginTop: '0.25rem' }}>{point}</div>
                  ))}
                </div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>{hashTableChainingData.comparison.summary}</p>
            </div>
          </div>
        </div>

        <AIAssistant context="Hash Table with Chaining" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Operations</h2>
          <div className="operation-group">
            <label>{hashTableChainingData.operations.insert.label}</label>
            <div className="input-group">
              <input
                type="text"
                value={insertKey}
                onChange={(e) => setInsertKey(e.target.value)}
                placeholder={hashTableChainingData.operations.insert.keyPlaceholder}
              />
              <input
                type="text"
                value={insertValue}
                onChange={(e) => setInsertValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && insertItem()}
                placeholder={hashTableChainingData.operations.insert.valuePlaceholder}
              />
              <button onClick={insertItem} className="btn btn-insert">{hashTableChainingData.operations.insert.buttonText}</button>
            </div>
          </div>
          <div className="operation-group">
            <label>{hashTableChainingData.operations.delete.label}</label>
            <div className="input-group">
              <input
                type="text"
                value={deleteKey}
                onChange={(e) => setDeleteKey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && deleteItem()}
                placeholder={hashTableChainingData.operations.delete.placeholder}
              />
              <button onClick={deleteItem} className="btn btn-delete">{hashTableChainingData.operations.delete.buttonText}</button>
            </div>
          </div>
          <div className="operation-group">
            <label>{hashTableChainingData.operations.search.label}</label>
            <div className="input-group">
              <input
                type="text"
                value={getKey}
                onChange={(e) => setGetKey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && getItem()}
                placeholder={hashTableChainingData.operations.search.placeholder}
              />
              <button onClick={getItem} className="btn btn-search">{hashTableChainingData.operations.search.buttonText}</button>
            </div>
          </div>
          <div className="operation-group" style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={clearHashtable} className="btn btn-clear">{hashTableChainingData.operations.clear.buttonText}</button>
            
          </div>

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">{hashTableChainingData.infoLabels.items}</span>
              <span className="info-value">{size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{hashTableChainingData.infoLabels.capacity}</span>
              <span className="info-value">{capacity}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{hashTableChainingData.infoLabels.load}</span>
              <span className="info-value" style={{ color: loadFactor >= 1.0 ? '#f59e0b' : 'inherit' }}>
                {loadFactor.toFixed(2)}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">{hashTableChainingData.infoLabels.collisions}</span>
              <span className="info-value" style={{ color: collisionCount > 0 ? '#f59e0b' : 'inherit' }}>
                {collisionCount}
              </span>
            </div>
          </div>

          <div className="rehash-info-box">
            <Link size={16} />
            <div>
              <strong>{hashTableChainingData.chainingAdvantage.title}</strong>
              <p>{hashTableChainingData.chainingAdvantage.description}</p>
              {loadFactor >= hashTableChainingData.chainingAdvantage.highLoadThreshold ? (
                <div className="rehash-recommend">
                  <Zap size={14} />
                  <span className="rehash-warning">{hashTableChainingData.chainingAdvantage.highLoadMessage.replace('{loadFactor}', loadFactor.toFixed(2))}</span>
                </div>
              ) : (
                <span className="rehash-safe">{hashTableChainingData.chainingAdvantage.safeMessage.replace('{loadFactor}', loadFactor.toFixed(2))}</span>
              )}
            </div>
          </div>

          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Hash Table (Chaining)</h2>

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

          <div className="ht-chaining-visual">
            {!table || table.length === 0 ? (
              <div className="ht-empty">
                {hashTableChainingData.messages.emptyTable}
              </div>
            ) : (
              <div className="ht-chaining-buckets">
                {table.map((chain, index) => {
                  const isHighlighted = highlightedSlot === index;
                  const hasChain = chain && Array.isArray(chain) && chain.length > 0;
                  const chainLength = hasChain ? chain.length : 0;

                  return (
                    <div
                      key={index}
                      className={`ht-chaining-row ${hasChain ? 'filled' : 'empty'} ${isHighlighted ? 'highlighted' : ''}`}
                    >
                      <div className="ht-chaining-index">
                        <span className="index-number">{index}</span>
                        {chainLength > 1 && (
                          <span className="chain-count">{chainLength}</span>
                        )}
                      </div>

                      <div className="ht-chaining-arrow-container">
                        <ArrowRight size={18} className="bucket-arrow" />
                      </div>

                      <div className="ht-chaining-content">
                        {!hasChain ? (
                          <div className="ht-chaining-empty-slot">
                            <span>Empty</span>
                          </div>
                        ) : (
                          <div className="ht-chaining-chain">
                            {chain.map((item, itemIndex) => {
                              const isLastInserted = lastInsertedKey && item.key === lastInsertedKey;
                              return (
                                <React.Fragment key={itemIndex}>
                                  <div className={`ht-chaining-node ${isLastInserted ? 'just-inserted' : ''} ${itemIndex > 0 ? 'collision-node' : ''}`}>
                                    <div className="node-key">{item.key}</div>
                                    <div className="node-separator"></div>
                                    <div className="node-value">{item.value}</div>
                                  </div>
                                  {itemIndex < chain.length - 1 && (
                                    <div className="chain-link">
                                      <ArrowRight size={16} />
                                    </div>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="ht-legend">
            {hashTableChainingData.legend.map((item, idx) => (
              <div key={idx} className="legend-item">
                {item.type === 'color' ? (
                  <div className={`legend-color ${item.className}`}></div>
                ) : (
                  <Link size={14} style={{ color: item.color }} />
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="hashtableChaining" />
    </div>
  );
}

export default HashTableChaining;
