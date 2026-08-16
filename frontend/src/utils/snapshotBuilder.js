/**
 * snapshotBuilder.js
 *
 * Pure functions for constructing immutable traversal snapshots.
 * No side effects - output depends solely on inputs.
 *
 * ─── SNAPSHOT SCHEMA ────────────────────────────────────────────────────────
 *
 * @typedef {Object} TraversalSnapshot
 *
 * Graph structure (static - same every step, included for self-containment):
 * @property {string[]}        vertices   - All vertex IDs in the graph
 * @property {[string,string][]} edges    - All edges as [source, target] pairs
 *
 * Algorithmic state (changes every step - the "time machine" payload):
 * @property {number}          step        - Zero-based index in history array
 * @property {string}          action      - 'visit'|'enqueue'|'push'|'backtrack'|'pop'|'done'
 * @property {string|null}     currentNode - Node being processed this step (null if none)
 * @property {string[]}        visited     - Ordered list of permanently visited node IDs
 * @property {string[]}        frontier    - Queue (BFS) or Stack (DFS) at this instant
 *
 * Metadata:
 * @property {string}          description - Human-readable explanation of the step
 * @property {string}          algorithm   - 'bfs' | 'dfs'
 *
 * ── WHY Object.freeze? ──────────────────────────────────────────────────────
 * structuredClone gives us a deep COPY (no shared references between snapshots),
 * but it doesn't prevent future mutation of the clone.
 * Object.freeze makes all properties non-writable at runtime - any accidental
 * `snapshot.visited.push(x)` will throw in strict mode or silently fail otherwise,
 * making mutation bugs loud and easy to catch.
 * ────────────────────────────────────────────────────────────────────────────
 */

const ACTION_DESCRIPTIONS = {
  bfs: {
    visit:   (v) => `Dequeued "${v}" from the queue. Marking visited and scanning neighbors.`,
    enqueue: (v) => `Enqueued "${v}" → added to back of queue for later processing.`,
    explore: (v) => `Exploring neighbors of "${v}". Unvisited neighbors will be enqueued.`,
    done:    ()  => `BFS complete. All reachable nodes have been visited.`,
  },
  dfs: {
    visit:     (v) => `Visiting "${v}". Exploring as deep as possible from here.`,
    push:      (v) => `Pushed "${v}" onto the stack.`,
    pop:       (v) => `Popped "${v}" from stack.`,
    backtrack: (v) => `Backtracking from "${v}". All neighbors exhausted.`,
    done:      ()  => `DFS complete. All reachable nodes have been visited.`,
  },
};

/**
 * buildDescription
 * Pure function - maps a raw API step to a human-readable string.
 *
 * @param {{ action: string, vertex: string }} step
 * @param {'bfs'|'dfs'} algorithm
 * @returns {string}
 */
function buildDescription(step, algorithm) {
  const lookup = ACTION_DESCRIPTIONS[algorithm] ?? {};
  const factory = lookup[step.action];
  if (factory) return factory(step.vertex);
  return `Processing node "${step.vertex}" (${step.action}).`;
}

/**
 * createSnapshot
 * Pure function. Converts one raw API step into a fully frozen, immutable snapshot.
 *
 * Deep copy strategy:
 *   structuredClone - O(n) native clone, handles arrays/objects/Maps/Sets.
 *                      Faster than JSON.parse(JSON.stringify()) and handles
 *                      non-JSON types. Available in all modern browsers + Node 17+.
 *   Object.freeze - Shallow freeze. For nested arrays (visited, frontier)
 *                      we freeze each after cloning so elements can't be pushed/popped.
 *
 * @param {Object}       rawStep   - One step object from the backend API response
 * @param {number}       index     - Position in the full steps array
 * @param {'bfs'|'dfs'} algorithm
 * @param {Object}       graph     - { vertices, edges } - static graph structure
 * @returns {Readonly<TraversalSnapshot>}
 */
export function createSnapshot(rawStep, index, algorithm, graph) {
  const isBFS = algorithm === 'bfs';

  // structuredClone produces independent arrays - mutations on one snapshot
  // cannot propagate to another. Object.freeze then locks them in place.
  const visited  = Object.freeze(structuredClone(rawStep.visited  ?? []));
  const frontier = Object.freeze(structuredClone(
    isBFS ? (rawStep.queue ?? []) : (rawStep.stack ?? [])
  ));

  return Object.freeze({
    // Graph structure (reference - same object, never mutated)
    vertices: graph.vertices,
    edges:    graph.edges,

    // Algorithmic state - fully cloned, fully frozen
    step:        index,
    action:      rawStep.action,
    currentNode: rawStep.action === 'visit' ? rawStep.vertex : null,
    visited,
    frontier,

    // Metadata
    description: buildDescription(rawStep, algorithm),
    algorithm,
  });
}

/**
 * buildHistory
 * Pure function. Maps the full API steps array to a frozen history array.
 * This is the only entry point called by visualizers - never build snapshots manually.
 *
 * @param {Object[]}     steps     - Array of raw step objects from backend
 * @param {'bfs'|'dfs'} algorithm
 * @param {Object}       graph     - { vertices, edges }
 * @returns {Readonly<TraversalSnapshot[]>}
 */
export function buildHistory(steps, algorithm, graph) {
  return Object.freeze(
    steps.map((step, i) => createSnapshot(step, i, algorithm, graph))
  );
}
