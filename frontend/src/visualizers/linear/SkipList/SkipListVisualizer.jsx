import React, { useState, useEffect } from 'react';
import { HelpCircle, Lightbulb, Layers } from 'lucide-react';
import AIAssistant from '../../../components/AIAssistant';
import CodeTabs from '../../../components/CodeTabs';
import MessageBanner from '../../../components/MessageBanner';
import { getJson, postJson } from '../../../api/api';
import { useTimedMessage } from '../../../hooks/useTimedMessage';

function SkipListVisualizer() {
  const [levels, setLevels] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [maxLevel, setMaxLevel] = useState(0);
  const [size, setSize] = useState(0);
  const { message, showMessage } = useTimedMessage(3000);
  const [insertValue, setInsertValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchPath, setSearchPath] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [highlightedValue, setHighlightedValue] = useState(null);

  useEffect(() => {
    loadSkipList();
  }, []);

  const loadSkipList = async () => {
    try {
      const data = await getJson('/api/skiplist');
      setLevels(data.levels || []);
      setNodes(data.nodes || []);
      setMaxLevel(data.maxLevel || 0);
      setSize(data.size || 0);
    } catch (error) {
      console.error('Error loading skip list:', error);
    }
  };

  const handleInsert = async () => {
    if (!insertValue || insertValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(insertValue);
    if (isNaN(numValue) || !Number.isInteger(numValue)) {
      showMessage('Please enter a valid integer!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/skiplist/insert', { value: numValue });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setLevels(result.levels || []);
      setNodes(result.nodes || []);
      setMaxLevel(result.maxLevel || 0);
      setSize(result.size || 0);
      setHighlightedValue(numValue);
      showMessage(`Inserted ${numValue} at level ${result.insertedLevel}!`, 'success');
      setInsertValue('');

      // Clear highlight after animation
      setTimeout(() => setHighlightedValue(null), 2000);
    } catch (error) {
      console.error('Insert error:', error);
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deleteValue || deleteValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(deleteValue);
    if (isNaN(numValue) || !Number.isInteger(numValue)) {
      showMessage('Please enter a valid integer!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/skiplist/delete', { value: numValue });
      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setLevels(result.levels || []);
      setNodes(result.nodes || []);
      setMaxLevel(result.maxLevel || 0);
      setSize(result.size || 0);
      showMessage(`Deleted ${numValue}!`, 'success');
      setDeleteValue('');
    } catch (error) {
      console.error('Delete error:', error);
      showMessage('Error deleting. Is Flask running?', 'error');
    }
  };

  const handleSearch = async () => {
    if (!searchValue || searchValue.trim() === '') {
      showMessage('Please enter a number!', 'error');
      return;
    }

    const numValue = Number(searchValue);
    if (isNaN(numValue) || !Number.isInteger(numValue)) {
      showMessage('Please enter a valid integer!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/skiplist/search', { value: numValue });
      setSearchPath(result.path || []);
      setSearchResult(result.found);

      if (result.found) {
        setHighlightedValue(numValue);
        showMessage(`Found ${numValue}!`, 'success');
      } else {
        showMessage(`${numValue} not found`, 'warning');
      }
      setSearchValue('');

      // Clear search state after animation
      setTimeout(() => {
        setSearchPath([]);
        setSearchResult(null);
        setHighlightedValue(null);
      }, 3000);
    } catch (error) {
      console.error('Search error:', error);
      showMessage('Error searching. Is Flask running?', 'error');
    }
  };

  const clearList = async () => {
    try {
      await postJson('/api/skiplist/clear', {});
      setLevels([]);
      setNodes([]);
      setMaxLevel(0);
      setSize(0);
      setSearchPath([]);
      setSearchResult(null);
      setHighlightedValue(null);
      showMessage('Skip list cleared!', 'success');
    } catch (error) {
      showMessage('Error clearing skip list', 'error');
    }
  };

  // Get node level for visualization
  const getNodeLevel = (value) => {
    const node = nodes.find(n => n.value === value);
    return node ? node.level : 0;
  };

  // Check if a value exists at a given level
  const valueExistsAtLevel = (value, level) => {
    return levels[level]?.includes(value);
  };

  // Get all unique values in sorted order
  const getAllValues = () => {
    if (levels.length === 0) return [];
    return [...levels[0]].sort((a, b) => a - b);
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is a Skip List?</span>
          </div>
          <div className="concept-content">
            <p>A <strong>Skip List</strong> is a probabilistic data structure that allows O(log n) search, insert, and delete operations by maintaining multiple layers of linked lists.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Think of an express train system - express lines skip stations to get you there faster!</span>
            </div>
          </div>
        </div>

        <AIAssistant context="Skip List data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Skip List Operations</h2>

          <div className="operation-group">
            <label htmlFor="insertValue">Insert Value</label>
            <div className="input-group">
              <input
                type="text"
                id="insertValue"
                value={insertValue}
                onChange={(e) => setInsertValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleInsert()}
                placeholder="Enter integer"
              />
              <button onClick={handleInsert} className="btn btn-insert">Insert</button>
            </div>
          </div>

          <div className="operation-group">
            <label htmlFor="searchValue">Search Value</label>
            <div className="input-group">
              <input
                type="text"
                id="searchValue"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Enter integer"
              />
              <button onClick={handleSearch} className="btn btn-search">Search</button>
            </div>
          </div>

          <div className="operation-group">
            <label htmlFor="deleteValue">Delete Value</label>
            <div className="input-group">
              <input
                type="text"
                id="deleteValue"
                value={deleteValue}
                onChange={(e) => setDeleteValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleDelete()}
                placeholder="Enter integer"
              />
              <button onClick={handleDelete} className="btn btn-delete">Delete</button>
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
              <span className="info-label">Max Level:</span>
              <span className="info-value">{maxLevel}</span>
            </div>
          </div>

          <div className="complexity-info">
            <h3>Time Complexity</h3>
            <div className="complexity-item">
              <span>Search:</span>
              <span className="complexity-value">O(log n) avg</span>
            </div>
            <div className="complexity-item">
              <span>Insert:</span>
              <span className="complexity-value">O(log n) avg</span>
            </div>
            <div className="complexity-item">
              <span>Delete:</span>
              <span className="complexity-value">O(log n) avg</span>
            </div>
          </div>

          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Skip List Visualization</h2>
          <div className="skiplist-container">
            {size === 0 ? (
              <div className="skiplist-empty">
                Skip list is empty. Insert some values!
              </div>
            ) : (
              <div className="skiplist-visual">
                {/* Render levels from top to bottom */}
                {[...Array(maxLevel + 1)].reverse().map((_, idx) => {
                  const level = maxLevel - idx;
                  return (
                    <div key={level} className="skiplist-level">
                      <div className="level-label">
                        <Layers size={14} />
                        <span>L{level}</span>
                      </div>
                      <div className="level-nodes">
                        <div className="skiplist-head">HEAD</div>
                        <div className="skiplist-arrow">→</div>
                        {getAllValues().map((value, nodeIdx) => {
                          const existsAtLevel = valueExistsAtLevel(value, level);
                          const isHighlighted = highlightedValue === value;

                          return (
                            <React.Fragment key={`${level}-${value}`}>
                              {existsAtLevel ? (
                                <>
                                  <div
                                    className={`skiplist-node ${isHighlighted ? 'highlighted' : ''}`}
                                  >
                                    {value}
                                  </div>
                                  <div className="skiplist-arrow">→</div>
                                </>
                              ) : (
                                <>
                                  <div className="skiplist-gap">
                                    <div className="gap-line"></div>
                                  </div>
                                </>
                              )}
                            </React.Fragment>
                          );
                        })}
                        <div className="skiplist-null">NULL</div>
                      </div>
                    </div>
                  );
                })}

                {/* Vertical connectors */}
                <div className="vertical-connectors">
                  {getAllValues().map((value) => {
                    const nodeLevel = getNodeLevel(value);
                    return (
                      <div
                        key={`connector-${value}`}
                        className="connector-column"
                        style={{ '--node-level': nodeLevel }}
                      >
                        {[...Array(nodeLevel)].map((_, idx) => (
                          <div key={idx} className="vertical-line"></div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="skiplist-legend">
            <div className="legend-item">
              <div className="legend-color head"></div>
              <span>Head Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-color node"></div>
              <span>Data Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-color highlighted"></div>
              <span>Highlighted</span>
            </div>
            <div className="legend-item">
              <div className="legend-color null"></div>
              <span>Null Pointer</span>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="skiplist" />
    </div>
  );
}

export default SkipListVisualizer;
