import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';

function MSTVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [startVertex, setStartVertex] = useState('');
  const [mstEdges, setMstEdges] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState(new Set());
  const [currentNode, setCurrentNode] = useState(null);
  const [consideringEdge, setConsideringEdge] = useState(null);
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

  const runMST = async () => {
    try {
      const url = startVertex
        ? `/api/graph/mst?start=${startVertex}`
        : '/api/graph/mst';

      const result = await getJson(url);

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setSteps(result.steps);
      showMessage('Starting Prim\'s MST algorithm...', 'info');
      animateAlgorithm(result.steps, result.mst_edges, result.total_weight);
    } catch (error) {
      showMessage('Error running MST algorithm', 'error');
    }
  };

  const animateAlgorithm = (algorithmSteps, finalMstEdges, finalWeight) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setVisitedNodes(new Set());
    setMstEdges([]);
    setTotalWeight(0);
    setCurrentNode(null);
    setConsideringEdge(null);
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= algorithmSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setCurrentNode(null);
        setConsideringEdge(null);
        setMstEdges(finalMstEdges);
        setTotalWeight(finalWeight);
        showMessage(`MST complete! Total weight: ${finalWeight}`, 'success');
        return;
      }

      const step = algorithmSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setVisitedNodes(new Set(step.visited || []));
      setMstEdges(step.mst_edges || []);
      setTotalWeight(step.total_weight || 0);

      if (step.action === 'add') {
        setCurrentNode(step.current);
        setConsideringEdge(null);
      } else if (step.action === 'consider') {
        setCurrentNode(step.current);
        setConsideringEdge({ from: step.current, to: step.neighbor, weight: step.weight });
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
        setConsideringEdge(null);
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setVisitedNodes(new Set(step.visited || []));
      setMstEdges(step.mst_edges || []);
      setTotalWeight(step.total_weight || 0);

      if (step.action === 'add') {
        setCurrentNode(step.current);
        setConsideringEdge(null);
      } else if (step.action === 'consider') {
        setCurrentNode(step.current);
        setConsideringEdge({ from: step.current, to: step.neighbor, weight: step.weight });
      }

      stepIndexRef.current++;
    }, 1000);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= steps.length) return;

    const step = steps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);
    setVisitedNodes(new Set(step.visited || []));
    setMstEdges(step.mst_edges || []);
    setTotalWeight(step.total_weight || 0);

    if (step.action === 'add') {
      setCurrentNode(step.current);
      setConsideringEdge(null);
    } else if (step.action === 'consider') {
      setCurrentNode(step.current);
      setConsideringEdge({ from: step.current, to: step.neighbor, weight: step.weight });
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= steps.length) {
      setIsAnimating(false);
      setCurrentNode(null);
      setConsideringEdge(null);
    }
  };

  const resetAlgorithm = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setMstEdges([]);
    setTotalWeight(0);
    setSteps([]);
    setCurrentStep(-1);
    setVisitedNodes(new Set());
    setCurrentNode(null);
    setConsideringEdge(null);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const getNodeClass = (vertex) => {
    if (currentNode === vertex) return 'graph-node current';
    if (visitedNodes.has(vertex)) return 'graph-node visited';
    return 'graph-node';
  };

  const isEdgeInMST = (v1, v2) => {
    return mstEdges.some(([from, to]) =>
      (from === v1 && to === v2) || (from === v2 && to === v1)
    );
  };

  const getEdgeClass = (v1, v2) => {
    if (consideringEdge &&
        ((consideringEdge.from === v1 && consideringEdge.to === v2) ||
         (consideringEdge.from === v2 && consideringEdge.to === v1))) {
      return 'graph-edge considering';
    }
    if (isEdgeInMST(v1, v2)) {
      return 'graph-edge mst';
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
            <span>What is Minimum Spanning Tree?</span>
          </div>
          <div className="concept-content">
            <p>A <strong>Minimum Spanning Tree (MST)</strong> connects all vertices with the minimum total edge weight, without any cycles.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like finding the cheapest way to connect all cities with roads!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">Prim's with heap</span>
                <span className="op-complexity">O((V+E)logV)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Edges</span>
                <span className="op-desc">In MST</span>
                <span className="op-complexity">V - 1</span>
              </div>
              <div className="op-item">
                <span className="op-name">Strategy</span>
                <span className="op-desc">Greedy</span>
                <span className="op-complexity">Min edge</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Common Uses:</strong>
              <ul>
                <li>Network design (cables, pipes)</li>
                <li>Cluster analysis</li>
                <li>Image segmentation</li>
                <li>Approximation algorithms</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Minimum Spanning Tree, Prim's algorithm" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Prim's MST Algorithm</h2>

          <div className="operation-group">
            <label>Load Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('weighted')} className="btn btn-preset" disabled={isAnimating}>Weighted</button>
              <button onClick={() => loadPreset('complete')} className="btn btn-preset" disabled={isAnimating}>Complete</button>
            </div>
          </div>

          <div className="operation-group">
            <label>Start Vertex (Optional)</label>
            <select
              value={startVertex}
              onChange={(e) => setStartVertex(e.target.value)}
              className="vertex-select full-width"
              disabled={isAnimating}
            >
              <option value="">Auto (first vertex)</option>
              {graph.vertices.map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runMST}
                className="btn btn-mst"
                disabled={isAnimating && !isPaused}
              >
                <Play size={14} /> Run MST
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

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">MST Edges:</span>
              <span className="info-value">{mstEdges.length} / {graph.vertices.length - 1}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Total Weight:</span>
              <span className="info-value mst-weight">{totalWeight}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Visited:</span>
              <span className="info-value">{visitedNodes.size} / {graph.vertices.length}</span>
            </div>
          </div>

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
                <span>In MST</span>
              </div>
              <div className="legend-item">
                <span className="legend-line mst"></span>
                <span>MST Edge</span>
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
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* MST Edges List */}
          {mstEdges.length > 0 && (
            <div className="mst-edges-section">
              <h3>MST Edges</h3>
              <div className="mst-edges-list">
                {mstEdges.map(([from, to, weight], idx) => (
                  <div key={idx} className="mst-edge-item">
                    <span>{from} — {to}</span>
                    <span className="edge-weight">(w: {weight})</span>
                  </div>
                ))}
              </div>
              <div className="mst-total">
                <strong>Total MST Weight: {totalWeight}</strong>
              </div>
            </div>
          )}
        </div>
      </div>

      <CodeTabs dataStructure="graph" />
    </div>
  );
}

export default MSTVisualizer;
