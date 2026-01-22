import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';
import '../../styles/visualizer-styles/graphs/graph.css';

function DijkstraVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [startVertex, setStartVertex] = useState('');
  const [endVertex, setEndVertex] = useState('');
  const [distances, setDistances] = useState({});
  const [paths, setPaths] = useState({});
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [currentNode, setCurrentNode] = useState(null);
  const [checkingEdge, setCheckingEdge] = useState(null);
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

  const runDijkstra = async () => {
    if (!startVertex) {
      showMessage('Please select a start vertex!', 'error');
      return;
    }

    try {
      const url = endVertex
        ? `/api/graph/dijkstra/${startVertex}?end=${endVertex}`
        : `/api/graph/dijkstra/${startVertex}`;

      const result = await getJson(url);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setDistances(result.distances);
      setPaths(result.paths);
      setSteps(result.steps);
      showMessage('Starting Dijkstra\'s algorithm...', 'info');
      animateAlgorithm(result.steps);
    } catch (error) {
      showMessage('Error running Dijkstra\'s algorithm', 'error');
    }
  };

  const animateAlgorithm = (algorithmSteps) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setVisitedNodes(new Set());
    setCurrentNode(null);
    setCheckingEdge(null);
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= algorithmSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCurrentNode(null);
        setCheckingEdge(null);
        showMessage('Dijkstra\'s algorithm complete!', 'success');
        return;
      }

      const step = algorithmSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setDistances(step.distances || {});
      setVisitedNodes(new Set(step.visited || []));

      if (step.action === 'visit') {
        setCurrentNode(step.current);
        setCheckingEdge(null);
      } else if (step.action === 'check' || step.action === 'update') {
        setCurrentNode(step.current);
        setCheckingEdge({ from: step.current, to: step.neighbor });
      }

      stepIndexRef.current++;
    }, 1200);
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
        setCurrentNode(null);
        setCheckingEdge(null);
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setDistances(step.distances || {});
      setVisitedNodes(new Set(step.visited || []));

      if (step.action === 'visit') {
        setCurrentNode(step.current);
        setCheckingEdge(null);
      } else if (step.action === 'check' || step.action === 'update') {
        setCurrentNode(step.current);
        setCheckingEdge({ from: step.current, to: step.neighbor });
      }

      stepIndexRef.current++;
    }, 1200);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= steps.length) return;

    const step = steps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);
    setDistances(step.distances || {});
    setVisitedNodes(new Set(step.visited || []));

    if (step.action === 'visit') {
      setCurrentNode(step.current);
      setCheckingEdge(null);
    } else if (step.action === 'check' || step.action === 'update') {
      setCurrentNode(step.current);
      setCheckingEdge({ from: step.current, to: step.neighbor });
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= steps.length) {
      setIsAnimating(false);
      setCurrentNode(null);
      setCheckingEdge(null);
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
    setVisitedNodes(new Set());
    setCurrentNode(null);
    setCheckingEdge(null);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const getNodeClass = (vertex) => {
    if (currentNode === vertex) return 'graph-node current';
    if (visitedNodes.has(vertex)) return 'graph-node visited';
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
            <span>What is Dijkstra's Algorithm?</span>
          </div>
          <div className="concept-content">
            <p><strong>Dijkstra's Algorithm</strong> finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative weights.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like GPS finding the quickest route - always picks the closest unvisited location!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">With min-heap</span>
                <span className="op-complexity">O((V+E)logV)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">Distance array</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Strategy</span>
                <span className="op-desc">Greedy</span>
                <span className="op-complexity">Min first</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>GPS navigation systems</li>
                <li>Network routing protocols</li>
                <li>Social network analysis</li>
                <li>Game pathfinding</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Dijkstra's shortest path algorithm" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Dijkstra's Algorithm</h2>

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
            <label>End Vertex (Optional)</label>
            <select
              value={endVertex}
              onChange={(e) => setEndVertex(e.target.value)}
              className="vertex-select full-width"
              disabled={isAnimating}
            >
              <option value="">All vertices</option>
              {graph.vertices.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runDijkstra}
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

          {/* Distance Table */}
          {Object.keys(distances).length > 0 && (
            <div className="distance-table">
              <h3>Distances from {startVertex}</h3>
              <div className="distance-grid">
                {graph.vertices.map(v => (
                  <div key={v} className={`distance-item ${visitedNodes.has(v) ? 'visited' : ''} ${currentNode === v ? 'current' : ''}`}>
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

          <div className="legend">
            <h3>Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color unvisited"></span>
                <span>Unvisited</span>
              </div>
              <div className="legend-item">
                <span className="legend-color current"></span>
                <span>Current</span>
              </div>
              <div className="legend-item">
                <span className="legend-color visited"></span>
                <span>Visited</span>
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

          {/* Shortest Paths */}
          {Object.keys(paths).length > 0 && !isAnimating && (
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

      <CodeTabs dataStructure="dijkstra" />
    </div>
  );
}

export default DijkstraVisualizer;
