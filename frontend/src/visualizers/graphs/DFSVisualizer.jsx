import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';
import '../../styles/visualizer-styles/graphs/graph.css';

function DFSVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [traversalStart, setTraversalStart] = useState('');
  const [traversalResult, setTraversalResult] = useState([]);
  const [traversalSteps, setTraversalSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [currentNode, setCurrentNode] = useState(null);
  const [stack, setStack] = useState([]);
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
        await loadPreset('simple');
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
      resetTraversal();
      showMessage(`Loaded '${preset}' preset`, 'success');
    } catch (error) {
      showMessage('Error loading preset', 'error');
    }
  };

  const runDFS = async () => {
    if (!traversalStart.trim()) {
      showMessage('Please select a starting vertex!', 'error');
      return;
    }

    try {
      const result = await getJson(`/api/graph/dfs/${traversalStart}`);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setTraversalResult(result.traversal);
      setTraversalSteps(result.steps);
      showMessage('Starting DFS traversal...', 'info');
      animateTraversal(result.steps);
    } catch (error) {
      showMessage('Error running DFS', 'error');
    }
  };

  const animateTraversal = (steps) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setVisitedNodes(new Set());
    setCurrentNode(null);
    setStack([]);
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= steps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCurrentNode(null);
        showMessage(`DFS Complete: ${traversalResult.join(' → ')}`, 'success');
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);

      if (step.action === 'visit') {
        setCurrentNode(step.vertex);
        setVisitedNodes(new Set(step.visited));
        setStack(step.stack || []);
      } else if (step.action === 'push') {
        setStack(step.stack || []);
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
      if (stepIndexRef.current >= traversalSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCurrentNode(null);
        return;
      }

      const step = traversalSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);

      if (step.action === 'visit') {
        setCurrentNode(step.vertex);
        setVisitedNodes(new Set(step.visited));
        setStack(step.stack || []);
      } else if (step.action === 'push') {
        setStack(step.stack || []);
      }

      stepIndexRef.current++;
    }, 1000);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= traversalSteps.length) return;

    const step = traversalSteps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);

    if (step.action === 'visit') {
      setCurrentNode(step.vertex);
      setVisitedNodes(new Set(step.visited));
      setStack(step.stack || []);
    } else if (step.action === 'push') {
      setStack(step.stack || []);
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= traversalSteps.length) {
      setIsAnimating(false);
      setCurrentNode(null);
    }
  };

  const resetTraversal = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTraversalResult([]);
    setTraversalSteps([]);
    setCurrentStep(-1);
    setVisitedNodes(new Set());
    setCurrentNode(null);
    setStack([]);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const getNodeClass = (vertex) => {
    if (currentNode === vertex) return 'graph-node current';
    if (visitedNodes.has(vertex)) return 'graph-node visited';
    if (stack.includes(vertex)) return 'graph-node stacked';
    return 'graph-node';
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is Depth-First Search?</span>
          </div>
          <div className="concept-content">
            <p><strong>DFS</strong> explores a graph by going as deep as possible along each branch before backtracking.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like exploring a maze by following one path to its end before trying another!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">Visit all nodes</span>
                <span className="op-complexity">O(V+E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">Stack storage</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Structure</span>
                <span className="op-desc">Uses a Stack</span>
                <span className="op-complexity">LIFO</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>Topological sorting</li>
                <li>Cycle detection</li>
                <li>Solving mazes and puzzles</li>
                <li>Finding connected components</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Depth-First Search (DFS) algorithm on graphs" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>DFS Controls</h2>

          <div className="operation-group">
            <label>Load Graph Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('simple')} className="btn btn-preset" disabled={isAnimating}>Simple</button>
              <button onClick={() => loadPreset('tree')} className="btn btn-preset" disabled={isAnimating}>Tree</button>
              <button onClick={() => loadPreset('cyclic')} className="btn btn-preset" disabled={isAnimating}>Cyclic</button>
            </div>
          </div>

          <div className="operation-group">
            <label>Start DFS From</label>
            <select
              value={traversalStart}
              onChange={(e) => setTraversalStart(e.target.value)}
              className="vertex-select full-width"
              disabled={isAnimating}
            >
              <option value="">Select start vertex</option>
              {graph.vertices.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runDFS}
                className="btn btn-dfs"
                disabled={isAnimating && !isPaused}
              >
                <Play size={14} /> Run DFS
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
              <button
                onClick={resetTraversal}
                className="btn btn-reset"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Vertices:</span>
              <span className="info-value">{graph.vertex_count || graph.vertices.length}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Edges:</span>
              <span className="info-value">{graph.edge_count || 0}</span>
            </div>
            {stack.length > 0 && (
              <div className="info-item stack-display">
                <span className="info-label">Stack:</span>
                <span className="info-value stack-items">[{stack.join(', ')}]</span>
              </div>
            )}
            {traversalResult.length > 0 && (
              <div className="info-item traversal-result">
                <span className="info-label">Order:</span>
                <span className="info-value">{traversalResult.join(' → ')}</span>
              </div>
            )}
          </div>
          <MessageBanner message={message} />

          <div className="legend">
            <h3>Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color unvisited"></span>
                <span>Unvisited</span>
              </div>
              <div className="legend-item">
                <span className="legend-color stacked"></span>
                <span>In Stack</span>
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
          <h2>DFS Visualization</h2>
          <div className="graph-container">
            {graph.vertices.length === 0 ? (
              <div className="graph-empty">
                Loading graph...
              </div>
            ) : (
              <svg className="graph-svg" viewBox="0 0 500 350">
                {/* Draw edges */}
                {graph.edges.map(([v1, v2], index) => {
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
                      className="graph-edge"
                    />
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
                        r={25}
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

          {/* Algorithm Steps Display */}
          <div className="algorithm-steps">
            <h3>DFS Algorithm Steps</h3>
            <div className="steps-content">
              <ol>
                <li className={currentStep >= 0 ? 'active' : ''}>Start at the selected vertex</li>
                <li className={stack.length > 0 ? 'active' : ''}>Push it to a stack and mark as visited</li>
                <li className={currentNode ? 'active' : ''}>Pop a vertex and explore one unvisited neighbor</li>
                <li>Push the neighbor to stack and repeat</li>
                <li>Backtrack when no unvisited neighbors remain</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="dfs" />
    </div>
  );
}

export default DFSVisualizer;
