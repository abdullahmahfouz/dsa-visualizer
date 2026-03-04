import React, { useState } from 'react';
import { Trophy, Play, RefreshCw, ChevronRight, GitMerge } from 'lucide-react';
import '../styles/page-styles/hash-comparison.css';

// ─── Constants ────────────────────────────────────────────────────────────────

const CAPACITY = 11; // prime — guarantees quadratic probing works to ~55% load

const PRESETS = [
  { label: '5 Keys',  keys: ['cat', 'dog', 'fox', 'ant', 'bee'] },
  { label: '8 Keys',  keys: ['cat', 'dog', 'fox', 'ant', 'bee', 'cow', 'hen', 'pig'] },
  { label: '8 Names', keys: ['alice', 'bob', 'carol', 'dave', 'eve', 'frank', 'grace', 'hank'] },
];

// ─── Hash function (same as HashTableVisualizer) ──────────────────────────────

function hashFn(key, cap) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) % cap;
  }
  return h;
}

// ─── State factories ──────────────────────────────────────────────────────────

function initOpen(cap) {
  return {
    cap,
    table:       Array(cap).fill(null),
    size:        0,
    totalProbes: 0,
    collisions:  0,
    maxProbes:   0,
    log:         [],
  };
}

function initChaining(cap) {
  return {
    cap,
    table:       Array.from({ length: cap }, () => []),
    size:        0,
    totalProbes: 0,
    collisions:  0,
    maxChain:    0,
    log:         [],
  };
}

// ─── Pure insert functions ────────────────────────────────────────────────────

/** Linear probing: h(k,i) = (h0 + i) % cap */
function insertLinear(state, key) {
  if (state.size >= state.cap) return state;
  const { cap, table } = state;
  const h0 = hashFn(key, cap);
  let idx = h0, steps = 0;

  while (table[idx] !== null && table[idx] !== key) {
    idx = (idx + 1) % cap;
    steps++;
    if (steps >= cap) return state; // table full
  }
  if (table[idx] === key) return state; // duplicate

  const probes    = steps + 1;
  const collision = steps > 0;
  const newTable  = [...table];
  newTable[idx]   = key;

  return {
    ...state,
    table:       newTable,
    size:        state.size + 1,
    totalProbes: state.totalProbes + probes,
    collisions:  state.collisions + (collision ? 1 : 0),
    maxProbes:   Math.max(state.maxProbes, probes),
    log:         [{ key, slot: idx, probes, collision }, ...state.log.slice(0, 7)],
  };
}

/** Quadratic probing: h(k,i) = (h0 + i²) % cap */
function insertQuadratic(state, key) {
  if (state.size >= state.cap) return state;
  const { cap, table } = state;
  const h0 = hashFn(key, cap);
  let steps = 0, idx = h0;

  for (let i = 0; i < cap; i++) {
    idx = (h0 + i * i) % cap;
    if (table[idx] === null) break;
    if (table[idx] === key) return state; // duplicate
    steps++;
  }
  if (table[idx] !== null) return state; // probe sequence exhausted

  const probes    = steps + 1;
  const collision = steps > 0;
  const newTable  = [...table];
  newTable[idx]   = key;

  return {
    ...state,
    table:       newTable,
    size:        state.size + 1,
    totalProbes: state.totalProbes + probes,
    collisions:  state.collisions + (collision ? 1 : 0),
    maxProbes:   Math.max(state.maxProbes, probes),
    log:         [{ key, slot: idx, probes, collision }, ...state.log.slice(0, 7)],
  };
}

/** Separate chaining: O(1+α) expected probes */
function insertChaining(state, key) {
  const { cap, table } = state;
  const h0    = hashFn(key, cap);
  const chain = table[h0];

  if (chain.includes(key)) return state; // duplicate

  const probes    = chain.length; // nodes traversed before appending
  const collision = chain.length > 0;
  const newTable  = table.map((c, i) => (i === h0 ? [...c, key] : c));

  return {
    ...state,
    table:       newTable,
    size:        state.size + 1,
    totalProbes: state.totalProbes + probes,
    collisions:  state.collisions + (collision ? 1 : 0),
    maxChain:    Math.max(state.maxChain, chain.length + 1),
    log:         [{ key, slot: h0, probes, collision }, ...state.log.slice(0, 7)],
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Metric({ label, value }) {
  return (
    <div className="hc-metric">
      <span className="hc-metric-value">{value}</span>
      <span className="hc-metric-label">{label}</span>
    </div>
  );
}

function AlgoColumn({ name, formula, color, state, currentKey, isChaining, isWinner }) {
  const lastEntry = state.log[0];
  const lastSlot  = lastEntry?.key === currentKey ? lastEntry.slot : null;
  const loadFactor = state.size / state.cap;

  return (
    <div
      className={`hc-column${isWinner && state.size > 0 ? ' hc-column--winner' : ''}`}
      style={{ '--col-color': color }}
    >
      {/* Header */}
      <div className="hc-col-header">
        <div className="hc-col-title-group">
          <span className="hc-col-dot" />
          <span className="hc-col-name">{name}</span>
        </div>
        {isWinner && state.size > 0 && (
          <span className="hc-winner-badge">
            <Trophy size={11} /> Best
          </span>
        )}
      </div>
      <p className="hc-col-formula">{formula}</p>

      {/* 4 metrics */}
      <div className="hc-metrics">
        <Metric label="Total Probes"                      value={state.totalProbes} />
        <Metric label="Collisions"                        value={state.collisions}  />
        <Metric label={isChaining ? 'Max Chain' : 'Max Probes/Insert'} value={isChaining ? state.maxChain : state.maxProbes} />
        <Metric label="Load Factor"                       value={`${(loadFactor * 100).toFixed(0)}%`} />
      </div>

      {/* Load bar */}
      <div className="hc-load-bar">
        <div
          className="hc-load-fill"
          style={{
            width:      `${Math.min(loadFactor * 100, 100)}%`,
            background: loadFactor > 0.7 ? '#ef4444' : loadFactor > 0.5 ? '#f59e0b' : color,
          }}
        />
      </div>

      {/* Slot visualization */}
      <div className="hc-slots">
        {isChaining
          ? state.table.map((chain, i) => (
              <div
                key={i}
                className={`hc-slot${chain.length > 0 ? ' filled' : ' empty'}${lastSlot === i ? ' newly-inserted' : ''}`}
              >
                <div className="hc-slot-index">{i}</div>
                <div className="hc-chain-items">
                  {chain.length === 0 ? (
                    <span className="hc-empty-label">—</span>
                  ) : (
                    chain.map((k, j) => (
                      <React.Fragment key={j}>
                        {j > 0 && <ChevronRight size={9} className="hc-chain-sep" />}
                        <span className={`hc-chain-key${k === currentKey ? ' hc-new-key' : ''}`}>{k}</span>
                      </React.Fragment>
                    ))
                  )}
                </div>
              </div>
            ))
          : state.table.map((slot, i) => (
              <div
                key={i}
                className={`hc-slot${slot ? ' filled' : ' empty'}${lastSlot === i ? ' newly-inserted' : ''}`}
              >
                <div className="hc-slot-index">{i}</div>
                <div className="hc-slot-key">
                  {slot ? (
                    <span className={slot === currentKey ? 'hc-new-key' : ''}>{slot}</span>
                  ) : (
                    <span className="hc-empty-label">—</span>
                  )}
                </div>
              </div>
            ))}
      </div>

      {/* Recent insert log */}
      {state.log.length > 0 && (
        <div className="hc-log">
          <div className="hc-log-title">Recent Inserts</div>
          {state.log.slice(0, 5).map((entry, i) => (
            <div
              key={i}
              className={`hc-log-entry${entry.collision ? ' hc-log-collision' : ''}`}
            >
              <span className="hc-log-key">"{entry.key}"</span>
              <span className="hc-log-detail">→ [{entry.slot}] · {entry.probes}p</span>
              {entry.collision && <span className="hc-log-flag">col</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function HashComparison() {
  const [linear,    setLinear]    = useState(() => initOpen(CAPACITY));
  const [quadratic, setQuadratic] = useState(() => initOpen(CAPACITY));
  const [chaining,  setChaining]  = useState(() => initChaining(CAPACITY));

  const [currentKey, setCurrentKey] = useState(null);
  const [singleKey,  setSingleKey]  = useState('');
  const [isRunning,  setIsRunning]  = useState(false);

  // ── Single insert ──────────────────────────────────────────────────────────

  const handleSingleInsert = () => {
    const key = singleKey.trim();
    if (!key || isRunning) return;
    setCurrentKey(key);
    setLinear(prev    => insertLinear(prev, key));
    setQuadratic(prev => insertQuadratic(prev, key));
    setChaining(prev  => insertChaining(prev, key));
    setSingleKey('');
    // Clear highlight after 1.4s (but don't clobber a later key)
    setTimeout(() => setCurrentKey(prev => (prev === key ? null : prev)), 1400);
  };

  // ── Batch preset ──────────────────────────────────────────────────────────

  const runPreset = async (keys) => {
    if (isRunning) return;
    setIsRunning(true);

    // Build fresh local state — avoids functional-update ordering issues
    let lin   = initOpen(CAPACITY);
    let quad  = initOpen(CAPACITY);
    let chain = initChaining(CAPACITY);

    // Flush reset to React before starting animation
    setLinear(lin);
    setQuadratic(quad);
    setChaining(chain);
    setCurrentKey(null);
    await new Promise(r => setTimeout(r, 60));

    for (const key of keys) {
      lin   = insertLinear(lin, key);
      quad  = insertQuadratic(quad, key);
      chain = insertChaining(chain, key);

      setCurrentKey(key);
      setLinear(lin);
      setQuadratic(quad);
      setChaining(chain);

      await new Promise(r => setTimeout(r, 300));
    }

    setCurrentKey(null);
    setIsRunning(false);
  };

  // ── Reset ──────────────────────────────────────────────────────────────────

  const reset = () => {
    if (isRunning) return;
    setLinear(initOpen(CAPACITY));
    setQuadratic(initOpen(CAPACITY));
    setChaining(initChaining(CAPACITY));
    setCurrentKey(null);
    setSingleKey('');
  };

  // ── Winner calculation ─────────────────────────────────────────────────────

  const hasData   = linear.size > 0;
  const minProbes = hasData
    ? Math.min(linear.totalProbes, quadratic.totalProbes, chaining.totalProbes)
    : -1;

  const isLinearWinner    = hasData && linear.totalProbes    === minProbes;
  const isQuadWinner      = hasData && quadratic.totalProbes === minProbes;
  const isChainingWinner  = hasData && chaining.totalProbes  === minProbes;

  const winnerNames = [
    isLinearWinner   && 'Linear',
    isQuadWinner     && 'Quadratic',
    isChainingWinner && 'Chaining',
  ].filter(Boolean).join(' & ');

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="container hc-page">
      {/* Page header */}
      <div className="hc-header">
        <div className="hc-header-icon">
          <GitMerge size={22} />
        </div>
        <div>
          <h1 className="hc-title">Hash Table Comparison</h1>
          <p className="hc-subtitle">
            Insert the same keys into all three collision strategies simultaneously.
            Table size: <strong>{CAPACITY}</strong> (prime) ·{' '}
            Hash: <code>h = (h × 31 + charCode) % {CAPACITY}</code>
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="hc-controls">
        <div className="hc-input-row">
          <input
            className="hc-key-input"
            type="text"
            placeholder="Type a key…"
            value={singleKey}
            onChange={e => setSingleKey(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSingleInsert()}
            disabled={isRunning}
          />
          <button
            className="btn btn-insert hc-insert-btn"
            onClick={handleSingleInsert}
            disabled={!singleKey.trim() || isRunning}
          >
            Insert into All
          </button>
        </div>

        <div className="hc-preset-row">
          <span className="hc-preset-label">Presets:</span>
          {PRESETS.map(p => (
            <button
              key={p.label}
              className="btn hc-preset-btn"
              onClick={() => runPreset(p.keys)}
              disabled={isRunning}
            >
              <Play size={11} /> {p.label}
            </button>
          ))}
          <button
            className="btn btn-clear hc-reset-btn"
            onClick={reset}
            disabled={isRunning}
          >
            <RefreshCw size={12} /> Reset
          </button>
        </div>
      </div>

      {/* Winner / current key banners */}
      {hasData && (
        <div className="hc-winner-banner">
          <Trophy size={14} />
          <span>
            <strong>{winnerNames}</strong> used fewest total probes ({minProbes})
          </span>
        </div>
      )}

      {currentKey && (
        <div className="hc-current-key-banner">
          Inserting <strong>"{currentKey}"</strong>…
        </div>
      )}

      {/* 3-column comparison grid */}
      <div className="hc-grid">
        <AlgoColumn
          name="Linear Probing"
          formula="h(k,i) = (h₀ + i) % cap"
          color="#6366f1"
          state={linear}
          currentKey={currentKey}
          isChaining={false}
          isWinner={isLinearWinner}
        />
        <AlgoColumn
          name="Quadratic Probing"
          formula="h(k,i) = (h₀ + i²) % cap"
          color="#f59e0b"
          state={quadratic}
          currentKey={currentKey}
          isChaining={false}
          isWinner={isQuadWinner}
        />
        <AlgoColumn
          name="Separate Chaining"
          formula="slot = h(k) % cap, chain appended"
          color="#10b981"
          state={chaining}
          currentKey={currentKey}
          isChaining={true}
          isWinner={isChainingWinner}
        />
      </div>

      {/* Legend */}
      <div className="hc-legend">
        <span className="hc-legend-title">Probe count:</span>
        <span className="hc-legend-item">
          Open addressing — slots examined until empty slot found (min 1)
        </span>
        <span className="hc-legend-sep">·</span>
        <span className="hc-legend-item">
          Chaining — nodes traversed in chain before appending (0 if bucket empty)
        </span>
      </div>
    </div>
  );
}

export default HashComparison;
