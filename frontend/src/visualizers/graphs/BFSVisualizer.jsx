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

function BFSVisualizer() {
  const [graph, setGraph] = useState({ vertices: [], edges: [], adjacency_list: {} });
  const [traversalStart, setTraversalStart] = useState('');
  const [nodePositions, setNodePositions] = useState({});
  const { message, showMessage } = useTimedMessage(3000);

  // All history/playback logic lives in the hook - zero duplication with DFS
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

  // Derived rendering state - computed from the single snapshot source of truth
  const visitedNodes = new Set(currentSnapshot?.visited ?? []);
  const currentNode  = currentSnapshot?.currentNode ?? null;
  const queue        = currentSnapshot?.frontier ?? [];

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

  const runBFS = async () => {
    if (!traversalStart.trim()) {
      showMessage('Please select a starting vertex!', 'error');
      return;
    }

    try {
      const result = await getJson(`/api/graph/bfs/${traversalStart}`);
      if (result.error) { showMessage(result.error, 'error'); return; }

      // buildHistory is a pure function: maps raw API steps → frozen snapshots.
      // Each snapshot is deep-copied (structuredClone) + Object.frozen.
      // No shared references between steps - scrubbing can never mutate history.
      const snapshots = buildHistory(result.steps, 'bfs', graph);
      loadHistory(snapshots);
      showMessage('BFS complete - use the scrubber to explore each step.', 'info');
    } catch (error) {
      console.error('BFS Error:', error);
      showMessage('Error running BFS', 'error');
    }
  };

  const getNodeClass = (vertex) => {
    if (currentNode === vertex) return 'graph-node current';
    if (visitedNodes.has(vertex)) return 'graph-node visited';
    if (queue.includes(vertex)) return 'graph-node queued';
    return 'graph-node';
  };

  return (
    <div className="container">
      <div className="intro-layout">
        <div className="concept-box">
          <div className="concept-header">
            <HelpCircle className="icon-sm" />
            <span>What is Breadth-First Search?</span>
          </div>
          <div className="concept-content">
            <p><strong>BFS</strong> explores a graph level by level, visiting all neighbors of a node before moving to the next level.</p>
            <div className="concept-analogy">
              <Lightbulb />
              <span>Like ripples spreading outward when you drop a stone in water!</span>
            </div>
            <div className="concept-operations">
              <div className="op-item">
                <span className="op-name">Time</span>
                <span className="op-desc">Visit all nodes</span>
                <span className="op-complexity">O(V+E)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Space</span>
                <span className="op-desc">Queue storage</span>
                <span className="op-complexity">O(V)</span>
              </div>
              <div className="op-item">
                <span className="op-name">Structure</span>
                <span className="op-desc">Uses a Queue</span>
                <span className="op-complexity">FIFO</span>
              </div>
            </div>
          </div>
        </div>

        <AIAssistant context="Breadth-First Search (BFS) algorithm on graphs" />
      </div>

      <div className="visualizer-layout">
        <div className="control-panel">
          <h2>BFS Controls</h2>

          <div className="operation-group">
            <label>Load Graph Preset</label>
            <div className="btn-group preset-group">
              <button onClick={() => loadPreset('simple')} className="btn btn-preset" disabled={isPlaying}>Simple</button>
              <button onClick={() => loadPreset('tree')} className="btn btn-preset" disabled={isPlaying}>Tree</button>
              <button onClick={() => loadPreset('cyclic')} className="btn btn-preset" disabled={isPlaying}>Cyclic</button>
            </div>
          </div>

          <div className="operation-group">
            <label>Start BFS From</label>
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
                onClick={runBFS}
                className="btn btn-bfs"
                disabled={isPlaying}
              >
                <Play size={14} /> Run BFS
              </button>
              <button onClick={resetTraversal} className="btn btn-reset">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Time-Travel Debugger - fully controlled, zero local state */}
          {totalSteps > 0 && (
            <TimeTravelScrubber
              currentStepIndex={currentStepIndex}
              totalSteps={totalSteps}
              isPlaying={isPlaying}
              isAtStart={isAtStart}
              isAtEnd={isAtEnd}
              currentSnapshot={currentSnapshot}
              algorithmLabel="BFS"
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
              <span className="info-label">Queue:</span>
              <span className="info-value">[{queue.join(', ')}]</span>
            </div>
            <div className="info-item">
              <span className="info-label">Visited:</span>
              <span className="info-value">{visitedNodes.size} / {graph.vertices.length}</span>
            </div>
          </div>
          <MessageBanner message={message} />
        </div>

        <div className="visual-panel">
          <h2>BFS Visualization</h2>
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

      <CodeTabs dataStructure="bfs" />
    </div>
  );
}

export default BFSVisualizer;
