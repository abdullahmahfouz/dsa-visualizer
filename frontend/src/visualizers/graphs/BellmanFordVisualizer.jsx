import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';

function BellmanFordVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [startVertex, setStartVertex] = useState('');
  const [distances, setDistances] = useState({});
  const [paths, setPaths] = useState({});
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [checkingEdge, setCheckingEdge] = useState(null);
  const [updatedVertex, setUpdatedVertex] = useState(null);
  const [hasNegativeCycle, setHasNegativeCycle] = useState(false);
  const [nodePositions, setNodePositions] = useState({});
  const { message, showMessage } = useTimedMessage(3000);
  const intervalRef = useRef(null);
  const stepIndexRef = useRef(0);

  useEffect(() => {
    loadGraph();
  }, []);

  useEffect(() => {
    if (graph.vertices.length > 0) {
      calculateNodePositions();
    }
  }, [graph.vertices]);

  const calculateNodePositions = useCallback(() => {
    const width = 500;
    const height = 350;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

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
      if (data.vertices.length === 0) {
        await loadPreset('weighted');
      } else {
        setGraph(data);
      }
    } catch (error) {
      console.error('Error loading graph:', error);
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
      resetAlgorithm();
      showMessage(`Loaded '${preset}' preset`, 'success');
    } catch (error) {
      showMessage('Error loading preset', 'error');
    }
  };

  const runBellmanFord = async () => {
    if (!startVertex) {
      showMessage('Please select a start vertex!', 'error');
      return;
    }

    try {
      const result = await getJson(`/api/graph/bellman-ford/${startVertex}`);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setDistances(result.distances);
      setPaths(result.paths);
      setSteps(result.steps);
      setHasNegativeCycle(result.has_negative_cycle);

      if (result.has_negative_cycle) {
        showMessage('Negative cycle detected in graph!', 'error');
      } else {
        showMessage('Starting Bellman-Ford algorithm...', 'info');
      }

      animateAlgorithm(result.steps);
    } catch (error) {
      showMessage('Error running Bellman-Ford algorithm', 'error');
    }
  };

  const animateAlgorithm = (algorithmSteps) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setCheckingEdge(null);
    setUpdatedVertex(null);
    setCurrentIteration(0);
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= algorithmSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCheckingEdge(null);
        setUpdatedVertex(null);
        if (!hasNegativeCycle) {
          showMessage('Bellman-Ford algorithm complete!', 'success');
        }
        return;
      }

      const step = algorithmSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setDistances(step.distances || {});

      if (step.iteration) {
        setCurrentIteration(step.iteration);
      }

      if (step.action === 'check') {
        setCheckingEdge({ from: step.from, to: step.to });
        setUpdatedVertex(null);
      } else if (step.action === 'update') {
        setCheckingEdge({ from: step.from, to: step.to });
        setUpdatedVertex(step.to);
      } else if (step.action === 'negative_cycle') {
        setCheckingEdge({ from: step.from, to: step.to });
      } else {
        setCheckingEdge(null);
        setUpdatedVertex(null);
      }

      stepIndexRef.current++;
    }, 800);
  };

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      animateFromCurrentStep();
    } else {
      setIsPaused(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const animateFromCurrentStep = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= steps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCheckingEdge(null);
        setUpdatedVertex(null);
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setDistances(step.distances || {});

      if (step.iteration) {
        setCurrentIteration(step.iteration);
      }

      if (step.action === 'check') {
        setCheckingEdge({ from: step.from, to: step.to });
        setUpdatedVertex(null);
      } else if (step.action === 'update') {
        setCheckingEdge({ from: step.from, to: step.to });
        setUpdatedVertex(step.to);
      } else {
        setCheckingEdge(null);
        setUpdatedVertex(null);
      }

      stepIndexRef.current++;
    }, 800);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= steps.length) return;

    const step = steps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);
    setDistances(step.distances || {});

    if (step.iteration) {
      setCurrentIteration(step.iteration);
    }

    if (step.action === 'check') {
      setCheckingEdge({ from: step.from, to: step.to });
      setUpdatedVertex(null);
    } else if (step.action === 'update') {
      setCheckingEdge({ from: step.from, to: step.to });
      setUpdatedVertex(step.to);
    } else {
      setCheckingEdge(null);
      setUpdatedVertex(null);
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= steps.length) {
      setIsAnimating(false);
      setCheckingEdge(null);
      setUpdatedVertex(null);
    }
  };

  const resetAlgorithm = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDistances({});
    setPaths({});
    setSteps([]);
    setCurrentStep(-1);
    setCurrentIteration(0);
    setCheckingEdge(null);
    setUpdatedVertex(null);
    setHasNegativeCycle(false);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const getNodeClass = (vertex) => {
    if (updatedVertex === vertex) return 'graph-node current';
    if (vertex === startVertex && !isAnimating && Object.keys(distances).length > 0) return 'graph-node visited';
    return 'graph-node';
  };

  const getEdgeClass = (v1, v2) => {
    if (checkingEdge &&
        ((checkingEdge.from === v1 && checkingEdge.to === v2) ||
         (checkingEdge.from === v2 && checkingEdge.to === v1))) {
      return 'graph-edge checking';
    }
    return 'graph-edge';
  };

  const getCurrentStepMessage = () => {
    if (currentStep >= 0 && currentStep < steps.length) {
      return steps[currentStep].message;
    }
    return '';
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is Bellman-Ford Algorithm?</span>
          </div>
          <div className="concept-content">
            <p><strong>Bellman-Ford Algorithm</strong> finds shortest paths from a source vertex, even with negative edge weights. It can also detect negative cycles.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Unlike Dijkstra, it checks ALL edges V-1 times - slower but handles negative weights!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">V-1 iterations</span>
                <span className="op-complexity">O(V*E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">Distance array</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Feature</span>
                <span className="op-desc">Negative weights</span>
                <span className="op-complexity">Supported</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>Currency exchange arbitrage detection</li>
                <li>Network routing (RIP protocol)</li>
                <li>Graphs with negative weights</li>
                <li>Detecting negative cycles</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Bellman-Ford shortest path algorithm with negative weight handling" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Bellman-Ford Algorithm</h2>

          <div className="operation-group">
            <label>Load Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('weighted')} className="btn btn-preset" disabled={isAnimating}>Weighted</button>
              <button onClick={() => loadPreset('simple')} className="btn btn-preset" disabled={isAnimating}>Simple</button>
            </div>
          </div>

          <div className="operation-group">
            <label>Start Vertex</label>
            <select
              value={startVertex}
              onChange={(e) => setStartVertex(e.target.value)}
              className="vertex-select full-width"
              disabled={isAnimating}
            >
              <option value="">Select start</option>
              {graph.vertices.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runBellmanFord}
                className="btn btn-dijkstra"
                disabled={isAnimating && !isPaused}
              >
                <Play size={14} /> Run
              </button>
              {isAnimating && (
                <button onClick={togglePause} className="btn btn-pause">
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                </button>
              )}
              {isPaused && (
                <button onClick={stepForward} className="btn btn-step">
                  <SkipForward size={14} />
                </button>
              )}
              <button onClick={resetAlgorithm} className="btn btn-reset">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Iteration Counter */}
          {currentIteration > 0 && (
            <div className="info-panel">
              <div className="info-item">
                <span className="info-label">Iteration:</span>
                <span className="info-value">{currentIteration} / {graph.vertices.length - 1}</span>
              </div>
            </div>
          )}

          {/* Distance Table */}
          {Object.keys(distances).length > 0 && (
            <div className="distance-table">
              <h3>Distances from {startVertex}</h3>
              <div className="distance-grid">
                {graph.vertices.map(v => (
                  <div key={v} className={`distance-item ${updatedVertex === v ? 'current' : ''}`}>
                    <span className="vertex-label">{v}</span>
                    <span className="distance-value">
                      {distances[v] === 'inf' || distances[v] === null ? '∞' : distances[v]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Current Step */}
          {currentStep >= 0 && (
            <div className="current-step-box">
              <strong>Step {currentStep + 1}:</strong>
              <p>{getCurrentStepMessage()}</p>
            </div>
          )}

          <MessageBanner message={message} />

          {hasNegativeCycle && (
            <div className="warning-box">
              <strong>Negative Cycle Detected!</strong>
              <p>The graph contains a negative weight cycle. Shortest paths are undefined.</p>
            </div>
          )}

          <div className="legend">
            <h3>Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color unvisited"></span>
                <span>Unprocessed</span>
              </div>
              <div className="legend-item">
                <span className="legend-color current"></span>
                <span>Updated</span>
              </div>
              <div className="legend-item">
                <span className="legend-color checking"></span>
                <span>Checking Edge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="visual-panel">
          <h2>Visualization</h2>
          <div className="graph-container">
            {graph.vertices.length === 0 ? (
              <div className="graph-empty">Loading graph...</div>
            ) : (
              <svg className="graph-svg" viewBox="0 0 500 350">
                {/* Draw edges */}
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
                      <circle cx={pos.x} cy={pos.y} r={25} className="node-circle" />
                      <text
                        x={pos.x}
                        y={pos.y}
                        className="node-label"
                        dominantBaseline="central"
                        textAnchor="middle"
                      >
                        {vertex}
                      </text>
                      {/* Show distance below node */}
                      {distances[vertex] !== undefined && (
                        <text
                          x={pos.x}
                          y={pos.y + 38}
                          className="distance-label"
                          dominantBaseline="central"
                          textAnchor="middle"
                        >
                          d={distances[vertex] === 'inf' || distances[vertex] === null ? '∞' : distances[vertex]}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* Algorithm Comparison */}
          <div className="algorithm-steps">
            <h3>Bellman-Ford vs Dijkstra</h3>
            <div className="comparison-table">
              <div className="comparison-row header">
                <span>Feature</span>
                <span>Bellman-Ford</span>
                <span>Dijkstra</span>
              </div>
              <div className="comparison-row">
                <span>Time Complexity</span>
                <span>O(V*E)</span>
                <span>O((V+E)logV)</span>
              </div>
              <div className="comparison-row">
                <span>Negative Weights</span>
                <span className="yes">Yes</span>
                <span className="no">No</span>
              </div>
              <div className="comparison-row">
                <span>Detects Neg. Cycles</span>
                <span className="yes">Yes</span>
                <span className="no">No</span>
              </div>
            </div>
          </div>

          {/* Shortest Paths */}
          {Object.keys(paths).length > 0 && !isAnimating && !hasNegativeCycle && (
            <div className="paths-section">
              <h3>Shortest Paths from {startVertex}</h3>
              <div className="paths-list">
                {Object.entries(paths).map(([vertex, path]) => (
                  <div key={vertex} className="path-item">
                    <span className="path-target">{vertex}:</span>
                    <span className="path-route">{path.join(' → ')}</span>
                    <span className="path-distance">
                      (dist: {distances[vertex] === null ? '∞' : distances[vertex]})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CodeTabs dataStructure="bellman-ford" />
    </div>
  );
}

export default BellmanFordVisualizer;
