import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';

function TopologicalSortVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [sortedResult, setSortedResult] = useState([]);
  const [inDegrees, setInDegrees] = useState({});
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [processedNodes, setProcessedNodes] = useState(new Set());
  const [currentNode, setCurrentNode] = useState(null);
  const [queue, setQueue] = useState([]);
  const [hasCycle, setHasCycle] = useState(false);
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
        await loadPreset('dag');
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

  const runTopologicalSort = async () => {
    try {
      const result = await getJson('/api/graph/topological');

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      if (result.has_cycle) {
        setHasCycle(true);
        showMessage('Graph has a cycle - topological sort not possible!', 'error');
        return;
      }

      setHasCycle(false);
      setSortedResult(result.sorted || []);
      setSteps(result.steps);
      showMessage('Starting Topological Sort (Kahn\'s Algorithm)...', 'info');
      animateAlgorithm(result.steps);
    } catch (error) {
      showMessage('Error running topological sort', 'error');
    }
  };

  const animateAlgorithm = (algorithmSteps) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setProcessedNodes(new Set());
    setCurrentNode(null);
    setQueue([]);
    setInDegrees({});
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= algorithmSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCurrentNode(null);
        showMessage(`Topological Sort Complete: ${sortedResult.join(' → ')}`, 'success');
        return;
      }

      const step = algorithmSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setInDegrees(step.in_degrees || {});
      setQueue(step.queue || []);

      if (step.action === 'process') {
        setCurrentNode(step.vertex);
        setProcessedNodes(new Set(step.result || []));
      } else if (step.action === 'decrement' || step.action === 'enqueue') {
        setCurrentNode(step.vertex || step.neighbor);
      } else if (step.action === 'init') {
        setInDegrees(step.in_degrees || {});
        setQueue(step.queue || []);
      }

      stepIndexRef.current++;
    }, 1000);
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
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setInDegrees(step.in_degrees || {});
      setQueue(step.queue || []);

      if (step.action === 'process') {
        setCurrentNode(step.vertex);
        setProcessedNodes(new Set(step.result || []));
      } else if (step.action === 'decrement' || step.action === 'enqueue') {
        setCurrentNode(step.vertex || step.neighbor);
      }

      stepIndexRef.current++;
    }, 1000);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= steps.length) return;

    const step = steps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);
    setInDegrees(step.in_degrees || {});
    setQueue(step.queue || []);

    if (step.action === 'process') {
      setCurrentNode(step.vertex);
      setProcessedNodes(new Set(step.result || []));
    } else if (step.action === 'decrement' || step.action === 'enqueue') {
      setCurrentNode(step.vertex || step.neighbor);
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= steps.length) {
      setIsAnimating(false);
      setCurrentNode(null);
    }
  };

  const resetAlgorithm = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSortedResult([]);
    setInDegrees({});
    setSteps([]);
    setCurrentStep(-1);
    setProcessedNodes(new Set());
    setCurrentNode(null);
    setQueue([]);
    setHasCycle(false);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const getNodeClass = (vertex) => {
    if (currentNode === vertex) return 'graph-node current';
    if (processedNodes.has(vertex)) return 'graph-node visited';
    if (queue.includes(vertex)) return 'graph-node queued';
    return 'graph-node';
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
            <span>What is Topological Sort?</span>
          </div>
          <div className="concept-content">
            <p><strong>Topological Sort</strong> orders vertices in a directed acyclic graph (DAG) so that for every edge u→v, u comes before v in the ordering.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like scheduling tasks - you must complete prerequisites before dependent tasks!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">Kahn's Algorithm</span>
                <span className="op-complexity">O(V+E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">In-degree array</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Requirement</span>
                <span className="op-desc">Graph type</span>
                <span className="op-complexity">DAG only</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>Task scheduling with dependencies</li>
                <li>Build systems (Makefile)</li>
                <li>Course prerequisite planning</li>
                <li>Package dependency resolution</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Topological Sort using Kahn's Algorithm on directed acyclic graphs" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Topological Sort</h2>

          <div className="operation-group">
            <label>Load Graph Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('dag')} className="btn btn-preset" disabled={isAnimating}>DAG</button>
              <button onClick={() => loadPreset('tree')} className="btn btn-preset" disabled={isAnimating}>Tree</button>
              <button onClick={() => loadPreset('simple')} className="btn btn-preset" disabled={isAnimating}>Simple</button>
            </div>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runTopologicalSort}
                className="btn btn-bfs"
                disabled={isAnimating && !isPaused}
              >
                <Play size={14} /> Run Sort
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

          {/* In-Degree Table */}
          {Object.keys(inDegrees).length > 0 && (
            <div className="distance-table">
              <h3>In-Degrees</h3>
              <div className="distance-grid">
                {graph.vertices.map(v => (
                  <div key={v} className={`distance-item ${processedNodes.has(v) ? 'visited' : ''} ${currentNode === v ? 'current' : ''}`}>
                    <span className="vertex-label">{v}</span>
                    <span className="distance-value">{inDegrees[v] ?? '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Vertices:</span>
              <span className="info-value">{graph.vertex_count || graph.vertices.length}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Edges:</span>
              <span className="info-value">{graph.edge_count || 0}</span>
            </div>
            {queue.length > 0 && (
              <div className="info-item queue-display">
                <span className="info-label">Queue:</span>
                <span className="info-value queue-items">[{queue.join(', ')}]</span>
              </div>
            )}
            {sortedResult.length > 0 && !isAnimating && (
              <div className="info-item traversal-result">
                <span className="info-label">Order:</span>
                <span className="info-value">{sortedResult.join(' → ')}</span>
              </div>
            )}
          </div>

          {/* Current Step */}
          {currentStep >= 0 && (
            <div className="current-step-box">
              <strong>Step {currentStep + 1}:</strong>
              <p>{getCurrentStepMessage()}</p>
            </div>
          )}

          <MessageBanner message={message} />

          {hasCycle && (
            <div className="warning-box">
              <strong>Cycle Detected!</strong>
              <p>Topological sort is only possible on Directed Acyclic Graphs (DAGs).</p>
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
                <span className="legend-color queued"></span>
                <span>In Queue (in-degree 0)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color current"></span>
                <span>Current</span>
              </div>
              <div className="legend-item">
                <span className="legend-color visited"></span>
                <span>Processed</span>
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
                {/* Draw edges with arrows for directed graph */}
                {graph.edges.map(([v1, v2, weight], index) => {
                  const pos1 = nodePositions[v1];
                  const pos2 = nodePositions[v2];
                  if (!pos1 || !pos2) return null;

                  // Calculate arrow direction
                  const dx = pos2.x - pos1.x;
                  const dy = pos2.y - pos1.y;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  const unitX = dx / length;
                  const unitY = dy / length;

                  // Shorten line to not overlap with node circles
                  const startX = pos1.x + unitX * 25;
                  const startY = pos1.y + unitY * 25;
                  const endX = pos2.x - unitX * 30;
                  const endY = pos2.y - unitY * 30;

                  return (
                    <g key={`edge-${index}`}>
                      <defs>
                        <marker
                          id={`arrowhead-${index}`}
                          markerWidth="10"
                          markerHeight="7"
                          refX="9"
                          refY="3.5"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 10 3.5, 0 7"
                            fill="#64748b"
                          />
                        </marker>
                      </defs>
                      <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        className="graph-edge"
                        markerEnd={`url(#arrowhead-${index})`}
                      />
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
                      {/* Show in-degree below node */}
                      {inDegrees[vertex] !== undefined && (
                        <text
                          x={pos.x}
                          y={pos.y + 38}
                          className="distance-label"
                          dominantBaseline="central"
                          textAnchor="middle"
                        >
                          in={inDegrees[vertex]}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* Algorithm Steps Display */}
          <div className="algorithm-steps">
            <h3>Kahn's Algorithm Steps</h3>
            <div className="steps-content">
              <ol>
                <li className={currentStep === 0 ? 'active' : ''}>Calculate in-degree for all vertices</li>
                <li className={queue.length > 0 ? 'active' : ''}>Add vertices with in-degree 0 to queue</li>
                <li className={currentNode ? 'active' : ''}>Dequeue vertex and add to result</li>
                <li>Decrement in-degree of neighbors</li>
                <li>Add neighbors with in-degree 0 to queue</li>
                <li>Repeat until queue is empty</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="topological" />
    </div>
  );
}

export default TopologicalSortVisualizer;
