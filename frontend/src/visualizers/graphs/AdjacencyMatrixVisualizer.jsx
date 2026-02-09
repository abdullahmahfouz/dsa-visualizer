import React, { useState, useEffect, useCallback } from 'react';
import { HelpCircle, Lightbulb, Plus, Trash2, Search } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson, deleteJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';

function AdjacencyMatrixVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [matrix, setMatrix] = useState([]);
  const [matrixVertices, setMatrixVertices] = useState([]);
  const [vertexInput, setVertexInput] = useState('');
  const [fromVertex, setFromVertex] = useState('');
  const [toVertex, setToVertex] = useState('');
  const [edgeWeight, setEdgeWeight] = useState('1');
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [lookupResult, setLookupResult] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const { message, showMessage } = useTimedMessage(3000);

  useEffect(() => {
    loadGraph();
  }, []);

  useEffect(() => {
    if (graph.vertices.length > 0) {
      loadMatrix();
      calculateNodePositions();
    } else {
      setMatrix([]);
      setMatrixVertices([]);
    }
  }, [graph]);

  // Clear highlight after animation
  useEffect(() => {
    if (highlightedCell) {
      const timer = setTimeout(() => {
        setHighlightedCell(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightedCell]);

  const calculateNodePositions = useCallback(() => {
    const width = 350;
    const height = 250;
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

  const loadMatrix = async () => {
    try {
      const data = await getJson('/api/graph/matrix');
      setMatrix(data.matrix);
      setMatrixVertices(data.vertices);
    } catch (error) {
      console.error('Error loading matrix:', error);
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
      showMessage(`Added vertex '${vertexInput}' - Added new row and column to matrix`, 'success');
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
      showMessage(`Removed vertex '${vertex}' - Removed row and column from matrix`, 'success');
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

      // Highlight the cells that were modified
      const fromIdx = matrixVertices.indexOf(fromVertex);
      const toIdx = matrixVertices.indexOf(toVertex);
      setHighlightedCell({ row: fromIdx, col: toIdx });

      showMessage(`Added edge: matrix[${fromVertex}][${toVertex}] = ${weight}`, 'success');
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
      showMessage(`Removed edge: matrix[${fromVertex}][${toVertex}] = 0`, 'success');
      setFromVertex('');
      setToVertex('');
    } catch (error) {
      showMessage('Error removing edge', 'error');
    }
  };

  const checkEdge = () => {
    if (!fromVertex.trim() || !toVertex.trim()) {
      showMessage('Please select both vertices to check!', 'error');
      return;
    }

    const fromIdx = matrixVertices.indexOf(fromVertex);
    const toIdx = matrixVertices.indexOf(toVertex);

    if (fromIdx === -1 || toIdx === -1) {
      showMessage('Vertex not found!', 'error');
      return;
    }

    const weight = matrix[fromIdx]?.[toIdx] || 0;
    const exists = weight > 0;

    setHighlightedCell({ row: fromIdx, col: toIdx });
    setLookupResult({
      from: fromVertex,
      to: toVertex,
      exists,
      weight
    });

    showMessage(
      exists
        ? `Edge exists! matrix[${fromVertex}][${toVertex}] = ${weight} (O(1) lookup)`
        : `No edge: matrix[${fromVertex}][${toVertex}] = 0 (O(1) lookup)`,
      exists ? 'success' : 'info'
    );
  };

  const loadPreset = async (preset) => {
    try {
      const result = await postJson(`/api/graph/preset/${preset}`, {});

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setGraph(result);
      setLookupResult(null);
      showMessage(`Loaded '${preset}' graph preset`, 'success');
    } catch (error) {
      showMessage('Error loading preset', 'error');
    }
  };

  const clearGraph = async () => {
    try {
      const result = await postJson('/api/graph/clear', {});
      setGraph(result);
      setMatrix([]);
      setMatrixVertices([]);
      setLookupResult(null);
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

  const getCellClass = (rowIdx, colIdx, value) => {
    let classes = 'matrix-cell';

    if (highlightedCell && highlightedCell.row === rowIdx && highlightedCell.col === colIdx) {
      classes += ' highlighted';
    }

    // For undirected graphs, also highlight the symmetric cell
    if (highlightedCell && highlightedCell.row === colIdx && highlightedCell.col === rowIdx) {
      classes += ' highlighted';
    }

    if (value > 0) {
      classes += ' has-edge';
    }

    if (rowIdx === colIdx) {
      classes += ' diagonal';
    }

    return classes;
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is an Adjacency Matrix?</span>
          </div>
          <div className="concept-content">
            <p>An <strong>Adjacency Matrix</strong> is a 2D array where <code>matrix[i][j]</code> represents the edge weight between vertex i and j (0 if no edge).</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like a spreadsheet where rows and columns are people, and cells show if they're friends!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Check Edge</span>
                <span className="op-desc">Direct lookup</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Add Edge</span>
                <span className="op-desc">Set cell value</span>
                <span className="op-complexity">O(1)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Add Vertex</span>
                <span className="op-desc">Resize matrix</span>
                <span className="op-complexity">O(V²)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">2D array</span>
                <span className="op-complexity">O(V²)</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>When to Use:</strong>
              <ul>
                <li>Dense graphs (many edges)</li>
                <li>Fast edge existence checks needed</li>
                <li>Small number of vertices</li>
                <li>Frequent edge weight updates</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Adjacency Matrix graph representation" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Operations</h2>

          <div className="operation-group">
            <label>Load Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('simple')} className="btn btn-preset">Simple</button>
              <button onClick={() => loadPreset('complete')} className="btn btn-preset">Complete</button>
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
            <span className="operation-hint">Adds new row & column (O(V²) resize)</span>
          </div>

          <div className="operation-group">
            <label>Edge Operations</label>
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
                <Plus size={14} /> Add
              </button>
              <button onClick={removeEdge} className="btn btn-remove">
                <Trash2 size={14} /> Remove
              </button>
              <button onClick={checkEdge} className="btn btn-check">
                <Search size={14} /> Check
              </button>
            </div>
            <span className="operation-hint">O(1) direct cell access</span>
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
              <span className="info-label">Matrix Size:</span>
              <span className="info-value">{matrixVertices.length} × {matrixVertices.length}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Space Used:</span>
              <span className="info-value">O({matrixVertices.length}²) = {matrixVertices.length * matrixVertices.length} cells</span>
            </div>
          </div>

          {lookupResult && (
            <div className={`lookup-result ${lookupResult.exists ? 'exists' : 'not-exists'}`}>
              <strong>Lookup Result:</strong>
              <code>matrix[{lookupResult.from}][{lookupResult.to}] = {lookupResult.weight}</code>
              <span>{lookupResult.exists ? 'Edge exists!' : 'No edge'}</span>
            </div>
          )}

          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          {/* Mini Graph View */}
          <div className="mini-graph-section">
            <h3>Graph View</h3>
            <div className="mini-graph-container">
              {graph.vertices.length === 0 ? (
                <div className="graph-empty-mini">Empty graph</div>
              ) : (
                <svg className="mini-graph-svg" viewBox="0 0 350 250">
                  {/* Draw edges */}
                  {graph.edges.map(([v1, v2, weight], index) => {
                    const pos1 = nodePositions[v1];
                    const pos2 = nodePositions[v2];
                    if (!pos1 || !pos2) return null;

                    return (
                      <line
                        key={`edge-${index}`}
                        x1={pos1.x}
                        y1={pos1.y}
                        x2={pos2.x}
                        y2={pos2.y}
                        className="mini-edge"
                      />
                    );
                  })}

                  {/* Draw vertices */}
                  {graph.vertices.map((vertex) => {
                    const pos = nodePositions[vertex];
                    if (!pos) return null;

                    return (
                      <g key={vertex} className="mini-node">
                        <circle cx={pos.x} cy={pos.y} r={18} />
                        <text
                          x={pos.x}
                          y={pos.y}
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
          </div>

          {/* Matrix View */}
          <div className="matrix-section">
            <h3>Adjacency Matrix</h3>
            <p className="matrix-explanation">
              Each cell <code>matrix[row][col]</code> stores the edge weight (0 = no edge).
              Undirected graphs have symmetric matrices.
            </p>

            {matrixVertices.length === 0 ? (
              <div className="matrix-empty">
                No vertices in graph. Add vertices or load a preset!
              </div>
            ) : (
              <div className="matrix-container">
                <table className="adjacency-matrix">
                  <thead>
                    <tr>
                      <th className="matrix-corner"></th>
                      {matrixVertices.map((v, idx) => (
                        <th key={v} className="matrix-header col-header">{v}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrixVertices.map((rowVertex, rowIdx) => (
                      <tr key={rowVertex}>
                        <th className="matrix-header row-header">
                          {rowVertex}
                          <button
                            className="remove-vertex-btn"
                            onClick={() => removeVertex(rowVertex)}
                            title={`Remove ${rowVertex}`}
                          >
                            ×
                          </button>
                        </th>
                        {matrixVertices.map((colVertex, colIdx) => (
                          <td
                            key={`${rowIdx}-${colIdx}`}
                            className={getCellClass(rowIdx, colIdx, matrix[rowIdx]?.[colIdx])}
                            title={`matrix[${rowVertex}][${colVertex}] = ${matrix[rowIdx]?.[colIdx] || 0}`}
                          >
                            {matrix[rowIdx]?.[colIdx] || 0}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Comparison hint */}
            <div className="comparison-hint">
              <strong>vs Adjacency List:</strong>
              <ul>
                <li><span className="pro">Pro:</span> O(1) edge lookup vs O(degree) for list</li>
                <li><span className="con">Con:</span> O(V²) space vs O(V+E) for list</li>
                <li><span className="pro">Pro:</span> Better for dense graphs (E ≈ V²)</li>
                <li><span className="con">Con:</span> Wastes space for sparse graphs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="graph" />
    </div>
  );
}

export default AdjacencyMatrixVisualizer;
