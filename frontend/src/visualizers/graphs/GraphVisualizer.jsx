import React, { useState, useEffect, useCallback } from 'react';
import { HelpCircle, Lightbulb, Plus, Trash2, ArrowRight } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson, deleteJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';
import '../../styles/visualizer-styles/graphs/graph.css';

function GraphVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [vertexInput, setVertexInput] = useState('');
  const [fromVertex, setFromVertex] = useState('');
  const [toVertex, setToVertex] = useState('');
  const [edgeWeight, setEdgeWeight] = useState('1');
  const [highlightedVertex, setHighlightedVertex] = useState(null);
  const [highlightedEdge, setHighlightedEdge] = useState(null);
  const [recentAction, setRecentAction] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const { message, showMessage } = useTimedMessage(3000);

  useEffect(() => {
    loadGraph();
  }, []);

  useEffect(() => {
    if (graph.vertices.length > 0) {
      calculateNodePositions();
    }
  }, [graph.vertices]);

  // Clear highlight after animation
  useEffect(() => {
    if (highlightedVertex || highlightedEdge) {
      const timer = setTimeout(() => {
        setHighlightedVertex(null);
        setHighlightedEdge(null);
        setRecentAction(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightedVertex, highlightedEdge]);

  const calculateNodePositions = useCallback(() => {
    const width = 450;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;

    const positions = {};
    const n = graph.vertices.length;

    graph.vertices.forEach((vertex, index) => {
      const angle = (2 * Math.PI * index) / n - Math.PI / 2;
      positions[vertex] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    });

    setNodePositions(positions);
  }, [graph.vertices]);

  const loadGraph = async () => {
    try {
      const data = await getJson('/api/graph');
      setGraph(data);
    } catch (error) {
      console.error('Error loading graph:', error);
    }
  };

  const addVertex = async () => {
    if (!vertexInput.trim()) {
      showMessage('Please enter a vertex name!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/graph/vertex', { vertex: vertexInput.trim() });

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      setHighlightedVertex(vertexInput.trim().toUpperCase());
      setRecentAction('add-vertex');
      showMessage(`Added vertex '${vertexInput}' - Created new entry in adjacency list`, 'success');
      setVertexInput('');
    } catch (error) {
      showMessage('Error adding vertex', 'error');
    }
  };

  const removeVertex = async (vertex) => {
    try {
      const result = await deleteJson(`/api/graph/vertex/${vertex}`);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      showMessage(`Removed vertex '${vertex}' - Deleted from list and all references`, 'success');
    } catch (error) {
      showMessage('Error removing vertex', 'error');
    }
  };

  const addEdge = async () => {
    if (!fromVertex.trim() || !toVertex.trim()) {
      showMessage('Please select both vertices!', 'error');
      return;
    }

    const weight = parseInt(edgeWeight) || 1;

    try {
      const result = await postJson('/api/graph/edge', {
        from: fromVertex.trim(),
        to: toVertex.trim(),
        weight: weight
      });

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      setHighlightedEdge({ from: fromVertex, to: toVertex });
      setRecentAction('add-edge');
      showMessage(`Added edge ${fromVertex}→${toVertex} (weight: ${weight}) - Appended to ${fromVertex}'s neighbor list`, 'success');
      setFromVertex('');
      setToVertex('');
      setEdgeWeight('1');
    } catch (error) {
      showMessage('Error adding edge', 'error');
    }
  };

  const removeEdge = async () => {
    if (!fromVertex.trim() || !toVertex.trim()) {
      showMessage('Please select both vertices!', 'error');
      return;
    }

    try {
      const result = await deleteJson('/api/graph/edge', {
        from: fromVertex.trim(),
        to: toVertex.trim()
      });

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      showMessage(`Removed edge ${fromVertex}→${toVertex} - Removed from neighbor lists`, 'success');
      setFromVertex('');
      setToVertex('');
    } catch (error) {
      showMessage('Error removing edge', 'error');
    }
  };

  const loadPreset = async (preset) => {
    try {
      const result = await postJson(`/api/graph/preset/${preset}`, {});

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      showMessage(`Loaded '${preset}' graph preset`, 'success');
    } catch (error) {
      showMessage('Error loading preset', 'error');
    }
  };

  const clearGraph = async () => {
    try {
      const result = await postJson('/api/graph/clear', {});
      setGraph(result);
      showMessage('Graph cleared', 'success');
    } catch (error) {
      showMessage('Error clearing graph', 'error');
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  const getNodeClass = (vertex) => {
    if (highlightedVertex === vertex && recentAction === 'add-vertex') {
      return 'graph-node highlighted-new';
    }
    if (highlightedEdge && (highlightedEdge.from === vertex || highlightedEdge.to === vertex)) {
      return 'graph-node highlighted-edge';
    }
    return 'graph-node';
  };

  const getEdgeClass = (v1, v2) => {
    if (highlightedEdge &&
        ((highlightedEdge.from === v1 && highlightedEdge.to === v2) ||
         (highlightedEdge.from === v2 && highlightedEdge.to === v1))) {
      return 'graph-edge highlighted';
    }
    return 'graph-edge';
  };

  // Get edge weight for display
  const getEdgeWeight = (v1, v2) => {
    const neighbors = graph.adjacency_list[v1] || [];
    const edge = neighbors.find(([n]) => n === v2);
    return edge ? edge[1] : 1;
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is an Adjacency List?</span>
          </div>
          <div className="concept-content">
            <p>An <strong>Adjacency List</strong> represents a graph using a collection of lists. Each vertex stores a list of its neighboring vertices.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like a contact list - each person has their own list of friends they're connected to!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Add Vertex</span>
                <span className="op-desc">Create new list</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Add Edge</span>
                <span className="op-desc">Append to list</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Remove Edge</span>
                <span className="op-desc">Search & delete</span>
                <span className="op-complexity">O(E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Find Neighbors</span>
                <span className="op-desc">Return list</span>
                <span className="op-complexity">O(1)</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Why Adjacency List?</strong>
              <ul>
                <li>Space efficient for sparse graphs: O(V + E)</li>
                <li>Fast iteration over neighbors</li>
                <li>Easy to add vertices and edges</li>
                <li>Supports weighted edges naturally</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Adjacency List graph representation, graph data structure" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Operations</h2>

          <div className="operation-group">
            <label>Load Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('simple')} className="btn btn-preset">Simple</button>
              <button onClick={() => loadPreset('tree')} className="btn btn-preset">Tree</button>
              <button onClick={() => loadPreset('cyclic')} className="btn btn-preset">Cyclic</button>
            </div>
          </div>

          <div className="operation-group">
            <label htmlFor="vertexInput">
              <Plus size={14} /> Add Vertex
            </label>
            <div className="input-group">
              <input
                type="text"
                id="vertexInput"
                value={vertexInput}
                onChange={(e) => setVertexInput(e.target.value.toUpperCase())}
                onKeyPress={(e) => handleKeyPress(e, addVertex)}
                placeholder="Name (e.g., A)"
                maxLength={3}
              />
              <button onClick={addVertex} className="btn btn-add">Add</button>
            </div>
            <span className="operation-hint">Creates a new empty list entry</span>
          </div>

          <div className="operation-group">
            <label>Add/Remove Edge (with Weight)</label>
            <div className="edge-inputs">
              <select
                value={fromVertex}
                onChange={(e) => setFromVertex(e.target.value)}
                className="vertex-select"
              >
                <option value="">From</option>
                {graph.vertices.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <span className="edge-arrow">→</span>
              <select
                value={toVertex}
                onChange={(e) => setToVertex(e.target.value)}
                className="vertex-select"
              >
                <option value="">To</option>
                {graph.vertices.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className="weight-input">
              <label htmlFor="weightInput">Weight:</label>
              <input
                type="number"
                id="weightInput"
                value={edgeWeight}
                onChange={(e) => setEdgeWeight(e.target.value)}
                min="1"
                max="99"
                className="weight-field"
              />
            </div>
            <div className="btn-group">
              <button onClick={addEdge} className="btn btn-add">
                <Plus size={14} /> Add Edge
              </button>
              <button onClick={removeEdge} className="btn btn-remove">
                <Trash2 size={14} /> Remove
              </button>
            </div>
            <span className="operation-hint">Appends neighbor to the vertex's list</span>
          </div>

          <div className="operation-group">
            <button onClick={clearGraph} className="btn btn-clear full-width">Clear Graph</button>
          </div>

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Vertices (V):</span>
              <span className="info-value">{graph.vertex_count || 0}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Edges (E):</span>
              <span className="info-value">{graph.edge_count || 0}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Space:</span>
              <span className="info-value">O(V + E)</span>
            </div>
          </div>
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>Graph View</h2>
          <div className="graph-container">
            {graph.vertices.length === 0 ? (
              <div className="graph-empty">
                Graph is empty. Add vertices or load a preset!
              </div>
            ) : (
              <svg className="graph-svg" viewBox="0 0 450 300">
                {/* Draw edges with weights */}
                {graph.edges.map(([v1, v2, weight], index) => {
                  const pos1 = nodePositions[v1];
                  const pos2 = nodePositions[v2];
                  if (!pos1 || !pos2) return null;

                  const midX = (pos1.x + pos2.x) / 2;
                  const midY = (pos1.y + pos2.y) / 2;

                  return (
                    <g key={`edge-${index}`}>
                      <line
                        x1={pos1.x}
                        y1={pos1.y}
                        x2={pos2.x}
                        y2={pos2.y}
                        className={getEdgeClass(v1, v2)}
                      />
                      {/* Weight label */}
                      <circle cx={midX} cy={midY} r={12} className="weight-bg" />
                      <text
                        x={midX}
                        y={midY}
                        className="weight-label"
                        dominantBaseline="central"
                        textAnchor="middle"
                      >
                        {weight}
                      </text>
                    </g>
                  );
                })}

                {/* Draw vertices */}
                {graph.vertices.map((vertex) => {
                  const pos = nodePositions[vertex];
                  if (!pos) return null;

                  return (
                    <g key={vertex} className={getNodeClass(vertex)}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={22}
                        className="node-circle"
                      />
                      <text
                        x={pos.x}
                        y={pos.y}
                        className="node-label"
                        dominantBaseline="central"
                        textAnchor="middle"
                      >
                        {vertex}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* Adjacency List - Behind the Scenes */}
          <div className="adjacency-list-section">
            <h3>Behind the Scenes: Adjacency List Structure</h3>
            <p className="adj-explanation">
              Each vertex has its own linked list of neighbors. When you add an edge A→B,
              we append B to A's list (and A to B's list for undirected graphs).
            </p>

            <div className="adj-list-visual">
              {graph.vertices.length === 0 ? (
                <div className="adj-empty">No vertices in graph</div>
              ) : (
                graph.vertices.map(vertex => {
                  const neighbors = graph.adjacency_list[vertex] || [];
                  const isHighlighted = highlightedVertex === vertex ||
                    (highlightedEdge && (highlightedEdge.from === vertex || highlightedEdge.to === vertex));

                  return (
                    <div key={vertex} className={`adj-row-visual ${isHighlighted ? 'highlighted' : ''}`}>
                      {/* Vertex box (array index) */}
                      <div className="adj-vertex-box">
                        <span className="adj-vertex-label">{vertex}</span>
                      </div>

                      {/* Arrow to linked list */}
                      <div className="adj-pointer">
                        <ArrowRight size={16} />
                      </div>

                      {/* Linked list of neighbors */}
                      <div className="adj-linked-list">
                        {neighbors.length === 0 ? (
                          <div className="adj-null">null</div>
                        ) : (
                          neighbors.map(([neighbor, weight], idx) => {
                            const isEdgeHighlighted = highlightedEdge &&
                              highlightedEdge.from === vertex && highlightedEdge.to === neighbor;
                            return (
                              <React.Fragment key={`${vertex}-${neighbor}`}>
                                <div className={`adj-neighbor-node ${isEdgeHighlighted ? 'highlighted' : ''}`}>
                                  <span className="neighbor-vertex">{neighbor}</span>
                                  <span className="neighbor-weight">w:{weight}</span>
                                </div>
                                {idx < neighbors.length - 1 && (
                                  <div className="adj-link">
                                    <ArrowRight size={14} />
                                  </div>
                                )}
                              </React.Fragment>
                            );
                          })
                        )}
                        {neighbors.length > 0 && (
                          <>
                            <div className="adj-link">
                              <ArrowRight size={14} />
                            </div>
                            <div className="adj-null">null</div>
                          </>
                        )}
                      </div>

                      {/* Remove vertex button */}
                      <button
                        className="adj-remove-btn"
                        onClick={() => removeVertex(vertex)}
                        title={`Remove vertex ${vertex}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Memory representation hint */}
            <div className="memory-hint">
              <strong>Memory Layout:</strong> An array/hashmap stores vertex references,
              each pointing to the head of a linked list containing (neighbor, weight) pairs.
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="graph" />
    </div>
  );
}

export default GraphVisualizer;
