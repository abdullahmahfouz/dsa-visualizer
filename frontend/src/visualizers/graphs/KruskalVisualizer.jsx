import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';

function KruskalVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [mstEdges, setMstEdges] = useState([]);
  const [rejectedEdges, setRejectedEdges] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);
  const [sortedEdges, setSortedEdges] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

  const runKruskal = async () => {
    try {
      const result = await getJson('/api/graph/kruskal');

      if (result.error) {
        showMessage(result.error, 'error');
        return;
      }

      setSteps(result.steps);
      // Extract sorted edges from init step
      const initStep = result.steps.find(s => s.action === 'init');
      if (initStep) {
        setSortedEdges(initStep.edges_sorted || []);
      }
      showMessage('Starting Kruskal\'s MST algorithm...', 'info');
      animateAlgorithm(result.steps, result.mst_edges, result.total_weight);
    } catch (error) {
      showMessage('Error running Kruskal\'s algorithm', 'error');
    }
  };

  const animateAlgorithm = (algorithmSteps, finalMstEdges, finalWeight) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsAnimating(true);
    setIsPaused(false);
    setMstEdges([]);
    setRejectedEdges([]);
    setTotalWeight(0);
    setConsideringEdge(null);
    setCurrentStep(-1);
    stepIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (stepIndexRef.current >= algorithmSteps.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setConsideringEdge(null);
        setMstEdges(finalMstEdges);
        setTotalWeight(finalWeight);
        showMessage(`MST complete! Total weight: ${finalWeight}`, 'success');
        return;
      }

      const step = algorithmSteps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setMstEdges(step.mst_edges || []);
      setTotalWeight(step.total_weight || 0);

      if (step.action === 'consider') {
        setConsideringEdge({ from: step.from, to: step.to, weight: step.weight });
      } else if (step.action === 'add') {
        setConsideringEdge(null);
      } else if (step.action === 'reject') {
        setRejectedEdges(prev => [...prev, { from: step.from, to: step.to, weight: step.weight }]);
        setConsideringEdge(null);
      } else {
        setConsideringEdge(null);
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
        setConsideringEdge(null);
        return;
      }

      const step = steps[stepIndexRef.current];
      setCurrentStep(stepIndexRef.current);
      setMstEdges(step.mst_edges || []);
      setTotalWeight(step.total_weight || 0);

      if (step.action === 'consider') {
        setConsideringEdge({ from: step.from, to: step.to, weight: step.weight });
      } else if (step.action === 'add') {
        setConsideringEdge(null);
      } else if (step.action === 'reject') {
        setRejectedEdges(prev => [...prev, { from: step.from, to: step.to, weight: step.weight }]);
        setConsideringEdge(null);
      } else {
        setConsideringEdge(null);
      }

      stepIndexRef.current++;
    }, 1000);
  };

  const stepForward = () => {
    if (stepIndexRef.current >= steps.length) return;

    const step = steps[stepIndexRef.current];
    setCurrentStep(stepIndexRef.current);
    setMstEdges(step.mst_edges || []);
    setTotalWeight(step.total_weight || 0);

    if (step.action === 'consider') {
      setConsideringEdge({ from: step.from, to: step.to, weight: step.weight });
    } else if (step.action === 'add') {
      setConsideringEdge(null);
    } else if (step.action === 'reject') {
      setRejectedEdges(prev => [...prev, { from: step.from, to: step.to, weight: step.weight }]);
      setConsideringEdge(null);
    } else {
      setConsideringEdge(null);
    }

    stepIndexRef.current++;

    if (stepIndexRef.current >= steps.length) {
      setIsAnimating(false);
      setConsideringEdge(null);
    }
  };

  const resetAlgorithm = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setMstEdges([]);
    setRejectedEdges([]);
    setTotalWeight(0);
    setSortedEdges([]);
    setSteps([]);
    setCurrentStep(-1);
    setConsideringEdge(null);
    setIsAnimating(false);
    setIsPaused(false);
    stepIndexRef.current = 0;
  };

  const isEdgeInMST = (v1, v2) => {
    return mstEdges.some(([from, to]) =>
      (from === v1 && to === v2) || (from === v2 && to === v1)
    );
  };

  const isEdgeRejected = (v1, v2) => {
    return rejectedEdges.some(e =>
      (e.from === v1 && e.to === v2) || (e.from === v2 && e.to === v1)
    );
  };

  const getNodeClass = (vertex) => {
    // Check if this vertex is part of any MST edge
    const inMst = mstEdges.some(([from, to]) => from === vertex || to === vertex);
    if (inMst) return 'graph-node visited';
    return 'graph-node';
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
    if (isEdgeRejected(v1, v2)) {
      return 'graph-edge rejected';
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
            <span>What is Kruskal's Algorithm?</span>
          </div>
          <div className="concept-content">
            <p><strong>Kruskal's Algorithm</strong> builds the MST by sorting all edges by weight and adding them if they don't create a cycle (using Union-Find).</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like building a network by always picking the cheapest cable that connects new areas!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">Sort + Union-Find</span>
                <span className="op-complexity">O(E log E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">Union-Find array</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Strategy</span>
                <span className="op-desc">Global greedy</span>
                <span className="op-complexity">Min edge</span>
              </div>
            </div>
            <div className="concept-uses">
              <strong>Kruskal vs Prim:</strong>
              <ul>
                <li>Better for sparse graphs (fewer edges)</li>
                <li>Processes edges globally, not locally</li>
                <li>Uses Union-Find for cycle detection</li>
                <li>Easier to parallelize</li>
              </ul>
            </div>
          </div>
        </div>

        <AIAssistant context="Kruskal's Minimum Spanning Tree algorithm with Union-Find" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>Kruskal's MST Algorithm</h2>

          <div className="operation-group">
            <label>Load Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('weighted')} className="btn btn-preset" disabled={isAnimating}>Weighted</button>
              <button onClick={() => loadPreset('complete')} className="btn btn-preset" disabled={isAnimating}>Complete</button>
            </div>
          </div>

          <div className="operation-group">
            <div className="btn-group">
              <button
                onClick={runKruskal}
                className="btn btn-mst"
                disabled={isAnimating && !isPaused}
              >
                <Play size={14} /> Run Kruskal's
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
              <span className="info-label">Rejected:</span>
              <span className="info-value">{rejectedEdges.length}</span>
            </div>
          </div>

          {/* Sorted Edges List */}
          {sortedEdges.length > 0 && (
            <div className="sorted-edges-panel">
              <h3>Edges (sorted by weight)</h3>
              <div className="sorted-edges-list">
                {sortedEdges.map(([v1, v2, weight], idx) => {
                  const inMst = isEdgeInMST(v1, v2);
                  const rejected = isEdgeRejected(v1, v2);
                  return (
                    <div
                      key={idx}
                      className={`sorted-edge-item ${inMst ? 'in-mst' : ''} ${rejected ? 'rejected' : ''}`}
                    >
                      <span>{v1}—{v2}</span>
                      <span className="edge-weight">w={weight}</span>
                    </div>
                  );
                })}
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
                <span>Unconnected</span>
              </div>
              <div className="legend-item">
                <span className="legend-color visited"></span>
                <span>In MST</span>
              </div>
              <div className="legend-item">
                <span className="legend-line considering"></span>
                <span>Considering</span>
              </div>
              <div className="legend-item">
                <span className="legend-line mst"></span>
                <span>MST Edge</span>
              </div>
              <div className="legend-item">
                <span className="legend-line rejected"></span>
                <span>Rejected (cycle)</span>
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

          {/* Algorithm Comparison */}
          <div className="algorithm-steps">
            <h3>Kruskal vs Prim</h3>
            <div className="comparison-table">
              <div className="comparison-row header">
                <span>Feature</span>
                <span>Kruskal's</span>
                <span>Prim's</span>
              </div>
              <div className="comparison-row">
                <span>Time Complexity</span>
                <span>O(E log E)</span>
                <span>O((V+E)logV)</span>
              </div>
              <div className="comparison-row">
                <span>Best for</span>
                <span>Sparse graphs</span>
                <span>Dense graphs</span>
              </div>
              <div className="comparison-row">
                <span>Data Structure</span>
                <span>Union-Find</span>
                <span>Priority Queue</span>
              </div>
              <div className="comparison-row">
                <span>Strategy</span>
                <span>Global (all edges)</span>
                <span>Local (neighbors)</span>
              </div>
            </div>
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

      <CodeTabs dataStructure="kruskal" />
    </div>
  );
}

export default KruskalVisualizer;
