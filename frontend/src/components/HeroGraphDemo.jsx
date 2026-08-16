import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * The hero visual: a real breadth-first search, actually running.
 *
 * This is deliberately not a picture of the product and not a mocked-up
 * screenshot. The traversal below is computed by running BFS over the
 * adjacency list, and the colours are the same --state-* tokens every
 * visualiser in the app uses. What the hero shows is what the product does.
 */

const NODES = [
  { id: 0, x: 42, y: 124, label: 'A' },
  { id: 1, x: 116, y: 58, label: 'B' },
  { id: 2, x: 116, y: 190, label: 'C' },
  { id: 3, x: 196, y: 30, label: 'D' },
  { id: 4, x: 196, y: 124, label: 'E' },
  { id: 5, x: 196, y: 214, label: 'F' },
  { id: 6, x: 278, y: 74, label: 'G' },
  { id: 7, x: 278, y: 172, label: 'H' },
];

const EDGES = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4],
  [2, 5], [3, 6], [4, 6], [4, 7], [5, 7],
];

const ADJACENCY = NODES.map(() => []);
EDGES.forEach(([a, b]) => {
  ADJACENCY[a].push(b);
  ADJACENCY[b].push(a);
});

/** Run BFS from `start`, recording a snapshot after each dequeue. */
function buildTraversal(start) {
  const visited = new Set();
  const queue = [start];
  const queued = new Set([start]);
  const steps = [{ current: null, visited: [], frontier: [start], treeEdges: [] }];
  const treeEdges = [];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.add(current);

    for (const neighbour of ADJACENCY[current]) {
      if (!queued.has(neighbour)) {
        queued.add(neighbour);
        queue.push(neighbour);
        treeEdges.push([current, neighbour]);
      }
    }

    steps.push({
      current,
      visited: [...visited],
      frontier: [...queue],
      treeEdges: [...treeEdges],
    });
  }

  return steps;
}

const STEP_MS = 900;

function HeroGraphDemo() {
  const steps = useMemo(() => buildTraversal(0), []);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const indexRef = useRef(0);

  // Reduced motion: show the completed traversal instead of looping it.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      setAnimate(!query.matches);
      if (query.matches) setIndex(steps.length - 1);
    };
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, [steps.length]);

  useEffect(() => {
    if (!animate) return undefined;

    const timer = setInterval(() => {
      // Mirror the index in a ref so the interval never closes over a
      // stale value between renders.
      indexRef.current = (indexRef.current + 1) % (steps.length + 2);
      setIndex(Math.min(indexRef.current, steps.length - 1));
    }, STEP_MS);

    return () => clearInterval(timer);
  }, [animate, steps.length]);

  const step = steps[Math.min(index, steps.length - 1)];
  const visited = new Set(step.visited);
  const frontier = new Set(step.frontier);
  const treeEdges = new Set(step.treeEdges.map(([a, b]) => `${a}-${b}`));

  const stateOf = (id) => {
    if (step.current === id) return 'active';
    if (visited.has(id)) return 'visited';
    if (frontier.has(id)) return 'frontier';
    return 'idle';
  };

  const edgeTraversed = ([a, b]) =>
    treeEdges.has(`${a}-${b}`) || treeEdges.has(`${b}-${a}`);

  return (
    <figure className="hero-demo">
      <figcaption className="hero-demo-caption">
        <span className="hero-demo-title">Breadth-first search</span>
        <span className="hero-demo-step">
          step {Math.min(index, steps.length - 1)} / {steps.length - 1}
        </span>
      </figcaption>

      <svg
        className="hero-demo-svg"
        viewBox="0 0 320 244"
        role="img"
        aria-label="A breadth-first search traversing an eight node graph, one node at a time"
      >
        {EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            className={`hero-demo-edge${edgeTraversed([a, b]) ? ' is-traversed' : ''}`}
          />
        ))}

        {NODES.map((node) => (
          <g key={node.id} className={`hero-demo-node is-${stateOf(node.id)}`}>
            <circle cx={node.x} cy={node.y} r="17" />
            <text x={node.x} y={node.y} dominantBaseline="central" textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <ul className="hero-demo-legend">
        <li><span className="hero-demo-key is-active" />Visiting</li>
        <li><span className="hero-demo-key is-frontier" />Queued</li>
        <li><span className="hero-demo-key is-visited" />Visited</li>
      </ul>
    </figure>
  );
}

export default HeroGraphDemo;
