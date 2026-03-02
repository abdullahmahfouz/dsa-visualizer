import React, { useState, useEffect, useCallback } from 'react';
import { HelpCircle, Lightbulb, Play, RotateCcw } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import TimeTravelScrubber from '../../components/TimeTravelScrubber';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../hooks/useTimedMessage';
import { useAlgorithmHistory } from '../../hooks/useAlgorithmHistory';
import { buildHistory } from '../../utils/snapshotBuilder';

function DFSVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [traversalStart, setTraversalStart] = useState('');
  const [nodePositions, setNodePositions] = useState({});
  const { message, showMessage } = useTimedMessage(3000);

  const {
    currentStepIndex,
    currentSnapshot,
    isPlaying,
    totalSteps,
    isAtStart,
    isAtEnd,
    loadHistory,
    pause,
    resume,
    stepForward,
    stepBackward,
    scrubTo,
    reset: resetTraversal,
  } = useAlgorithmHistory(900);

  const visitedNodes = new Set(currentSnapshot?.visited ?? []);
  const currentNode  = currentSnapshot?.currentNode ?? null;
  const stack        = currentSnapshot?.frontier ?? [];

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
      if (result.error) { showMessage(result.error, 'error'); return; }

      const snapshots = buildHistory(result.steps, 'dfs', graph);
      loadHistory(snapshots);
      showMessage('DFS complete — use the scrubber to explore each step.', 'info');
    } catch (error) {
      console.error('DFS Error:', error);
      showMessage('Error running DFS', 'error');
    }
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
              <button onClick={() => loadPreset('simple')} className="btn btn-preset" disabled={isPlaying}>Simple</button>
              <button onClick={() => loadPreset('tree')} className="btn btn-preset" disabled={isPlaying}>Tree</button>
              <button onClick={() => loadPreset('cyclic')} className="btn btn-preset" disabled={isPlaying}>Cyclic</button>
            </div>
          </div>

          <div className="operation-group">
            <label>Start DFS From</label>
            <select
              value={traversalStart}
              onChange={(e) => setTraversalStart(e.target.value)}
              className="vertex-select full-width"
              disabled={isPlaying}
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
                disabled={isPlaying}
              >
                <Play size={14} /> Run DFS
              </button>
              <button onClick={resetTraversal} className="btn btn-reset">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {totalSteps > 0 && (
            <TimeTravelScrubber
              currentStepIndex={currentStepIndex}
              totalSteps={totalSteps}
              isPlaying={isPlaying}
              isAtStart={isAtStart}
              isAtEnd={isAtEnd}
              currentSnapshot={currentSnapshot}
              algorithmLabel="DFS"
              onPlay={resume}
              onPause={pause}
              onStepForward={stepForward}
              onStepBackward={stepBackward}
              onScrub={scrubTo}
              onJumpToStart={() => scrubTo(0)}
              onJumpToEnd={() => scrubTo(totalSteps - 1)}
            />
          )}

          <div className="info-panel">
            <div className="info-item">
              <span className="info-label">Vertices:</span>
              <span className="info-value">{graph.vertices.length}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Stack:</span>
              <span className="info-value">[{stack.join(', ')}]</span>
            </div>
            <div className="info-item">
              <span className="info-label">Visited:</span>
              <span className="info-value">{visitedNodes.size} / {graph.vertices.length}</span>
            </div>
          </div>
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>DFS Visualization</h2>
          <div className="graph-container">
            {graph.vertices.length === 0 ? (
              <div className="graph-empty">Loading graph...</div>
            ) : (
              <svg className="graph-svg" viewBox="0 0 500 350">
                {graph.edges.map(([v1, v2], index) => {
                  const pos1 = nodePositions[v1];
                  const pos2 = nodePositions[v2];
                  if (!pos1 || !pos2) return null;
                  return (
                    <line
                      key={`edge-${index}`}
                      x1={pos1.x} y1={pos1.y}
                      x2={pos2.x} y2={pos2.y}
                      className="graph-edge"
                    />
                  );
                })}

                {graph.vertices.map((vertex) => {
                  const pos = nodePositions[vertex];
                  if (!pos) return null;
                  return (
                    <g key={vertex} className={getNodeClass(vertex)}>
                      <circle cx={pos.x} cy={pos.y} r={25} className="node-circle" />
                      <text x={pos.x} y={pos.y} className="node-label" dominantBaseline="central" textAnchor="middle">
                        {vertex}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        </div>
      </div>

      <CodeTabs dataStructure="dfs" />
    </div>
  );
}

export default DFSVisualizer;
