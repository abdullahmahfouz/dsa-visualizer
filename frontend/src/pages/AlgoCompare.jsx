import React, { useState, useRef } from 'react';
import { BarChart2, Search, Hash, Play, RotateCcw, Trophy, ChevronRight } from 'lucide-react';
import '../styles/page-styles/algo-compare.css';
import '../styles/page-styles/hash-comparison.css';

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { id: 'sorting',   label: 'Sorting Race',  Icon: BarChart2 },
  { id: 'searching', label: 'Searching',     Icon: Search    },
  { id: 'hashing',   label: 'Hash Tables',   Icon: Hash      },
];

// ═══════════════════════════════════════════════════════════════════════════════
//  SORTING TAB
// ═══════════════════════════════════════════════════════════════════════════════

const SORT_ALGOS = ['bubble', 'insertion', 'merge', 'quick'];

const SORT_META = {
  bubble:    { label: 'Bubble Sort',    color: '#6366f1', complexity: 'O(n²)',      swap: 'Swaps'   },
  insertion: { label: 'Insertion Sort', color: '#f59e0b', complexity: 'O(n²)',      swap: 'Swaps'   },
  merge:     { label: 'Merge Sort',     color: '#10b981', complexity: 'O(n log n)', swap: 'Writes'  },
  quick:     { label: 'Quick Sort',     color: '#ef4444', complexity: 'O(n log n)', swap: 'Swaps'   },
};

const SPEEDS = [
  { label: 'Fast',   ms: 8  },
  { label: 'Medium', ms: 30 },
  { label: 'Slow',   ms: 80 },
];

// ── Array generators ──────────────────────────────────────────────────────────

function makeRandom(n)  { return Array.from({ length: n }, () => Math.floor(Math.random() * 80) + 15); }
function makeSorted(n)  { return Array.from({ length: n }, (_, i) => Math.round(15 + (i / (n - 1)) * 80)); }
function makeReverse(n) { return makeSorted(n).reverse(); }

// ── Step generators ───────────────────────────────────────────────────────────

function step(arr, cmp, swp, comparisons, swaps, done = false) {
  return { array: [...arr], comparing: cmp, swapping: swp, comparisons, swaps, done };
}

function bubbleSteps(arr) {
  const s = [], a = [...arr], n = a.length;
  let c = 0, w = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      c++;
      s.push(step(a, [j, j + 1], [], c, w));
      if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; w++; s.push(step(a, [], [j, j + 1], c, w)); }
    }
  }
  s.push(step(a, [], [], c, w, true));
  return s;
}

function insertionSteps(arr) {
  const s = [], a = [...arr];
  let c = 0, w = 0;
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0) {
      c++; s.push(step(a, [j - 1, j], [], c, w));
      if (a[j - 1] > a[j]) { [a[j - 1], a[j]] = [a[j], a[j - 1]]; w++; s.push(step(a, [], [j - 1, j], c, w)); j--; }
      else break;
    }
  }
  s.push(step(a, [], [], c, w, true));
  return s;
}

function mergeSteps(arr) {
  const s = [], a = [...arr];
  let c = 0, w = 0;

  function merge(lo, mid, hi) {
    const L = a.slice(lo, mid + 1), R = a.slice(mid + 1, hi + 1);
    let i = 0, j = 0, k = lo;
    while (i < L.length && j < R.length) {
      c++; s.push(step(a, [lo + i, mid + 1 + j], [], c, w));
      a[k++] = L[i] <= R[j] ? L[i++] : R[j++];
      w++; s.push(step(a, [], [k - 1], c, w));
    }
    while (i < L.length) { a[k++] = L[i++]; w++; s.push(step(a, [], [k - 1], c, w)); }
    while (j < R.length) { a[k++] = R[j++]; w++; s.push(step(a, [], [k - 1], c, w)); }
  }

  function ms(lo, hi) {
    if (lo >= hi) return;
    const mid = (lo + hi) >> 1;
    ms(lo, mid); ms(mid + 1, hi); merge(lo, mid, hi);
  }

  ms(0, a.length - 1);
  s.push(step(a, [], [], c, w, true));
  return s;
}

function quickSteps(arr) {
  const s = [], a = [...arr];
  let c = 0, w = 0;

  function partition(lo, hi) {
    const pivot = a[hi]; let i = lo - 1;
    for (let j = lo; j < hi; j++) {
      c++; s.push(step(a, [j, hi], [], c, w));
      if (a[j] <= pivot) { i++; if (i !== j) { [a[i], a[j]] = [a[j], a[i]]; w++; s.push(step(a, [], [i, j], c, w)); } }
    }
    [a[i + 1], a[hi]] = [a[hi], a[i + 1]]; w++; s.push(step(a, [], [i + 1, hi], c, w));
    return i + 1;
  }

  function qs(lo, hi) { if (lo >= hi) return; const pi = partition(lo, hi); qs(lo, pi - 1); qs(pi + 1, hi); }

  qs(0, a.length - 1);
  s.push(step(a, [], [], c, w, true));
  return s;
}

const GEN = { bubble: bubbleSteps, insertion: insertionSteps, merge: mergeSteps, quick: quickSteps };

// ── Component ─────────────────────────────────────────────────────────────────

const DEFAULT_N = 18;

function emptyAlgoState(arr) {
  return { array: [...arr], comparing: [], swapping: [], comparisons: 0, swaps: 0, done: false };
}

function SortingTab() {
  const [n,           setN]           = useState(DEFAULT_N);
  const [speedIdx,    setSpeedIdx]    = useState(1);
  const [isRunning,   setIsRunning]   = useState(false);
  const [baseArray,   setBaseArray]   = useState(() => makeRandom(DEFAULT_N));
  const [sortState,   setSortState]   = useState(() =>
    Object.fromEntries(SORT_ALGOS.map(a => [a, emptyAlgoState(makeRandom(DEFAULT_N))]))
  );

  const stepsRef   = useRef({});
  const counterRef = useRef({});
  const timerRef   = useRef(null);

  const stopAnim = () => { clearInterval(timerRef.current); timerRef.current = null; };

  const buildArray = (type, size = n) => {
    stopAnim();
    setIsRunning(false);
    const arr = type === 'sorted' ? makeSorted(size) : type === 'reverse' ? makeReverse(size) : makeRandom(size);
    setBaseArray(arr);
    setSortState(Object.fromEntries(SORT_ALGOS.map(a => [a, emptyAlgoState(arr)])));
    stepsRef.current   = {};
    counterRef.current = {};
  };

  const startRace = () => {
    if (isRunning) return;
    // Pre-generate all steps from current baseArray
    for (const a of SORT_ALGOS) {
      stepsRef.current[a]   = GEN[a](baseArray);
      counterRef.current[a] = 0;
    }
    // Seed visual state with first step
    setSortState(Object.fromEntries(SORT_ALGOS.map(a => [a, { ...stepsRef.current[a][0], done: false }])));
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      const next = {};
      let allDone = true;
      for (const a of SORT_ALGOS) {
        const steps = stepsRef.current[a];
        const cur   = counterRef.current[a];
        const nxt   = Math.min(cur + 1, steps.length - 1);
        counterRef.current[a] = nxt;
        next[a] = steps[nxt];
        if (nxt < steps.length - 1) allDone = false;
      }
      setSortState(next);
      if (allDone) { stopAnim(); setIsRunning(false); }
    }, SPEEDS[speedIdx].ms);
  };

  const reset = () => buildArray('random');
  const maxVal = Math.max(...baseArray, 1);

  return (
    <div className="ac-section">
      {/* Controls */}
      <div className="ac-controls">
        <div className="ac-ctrl-row">
          <div className="ac-ctrl-group">
            <span className="ac-label">Array size: <strong>{n}</strong></span>
            <input
              type="range" min={8} max={30} value={n}
              className="ac-range"
              disabled={isRunning}
              onChange={e => { const v = +e.target.value; setN(v); buildArray('random', v); }}
            />
          </div>
          <div className="ac-ctrl-group">
            <span className="ac-label">Speed</span>
            <div className="ac-btn-group">
              {SPEEDS.map((sp, i) => (
                <button key={sp.label} className={`ac-tog-btn ${speedIdx === i ? 'active' : ''}`}
                  onClick={() => setSpeedIdx(i)} disabled={isRunning}>
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
          <div className="ac-ctrl-group">
            <span className="ac-label">Array type</span>
            <div className="ac-btn-group">
              {['random', 'sorted', 'reverse'].map(t => (
                <button key={t} className="ac-tog-btn" onClick={() => buildArray(t)} disabled={isRunning}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="ac-action-row">
          <button className="btn btn-insert ac-run-btn" onClick={startRace} disabled={isRunning}>
            <Play size={13} /> Start Race
          </button>
          <button className="btn btn-clear" onClick={reset} disabled={isRunning}>
            <RotateCcw size={12} /> Reset
          </button>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="ac-sort-grid">
        {SORT_ALGOS.map(algo => {
          const meta  = SORT_META[algo];
          const state = sortState[algo];
          if (!state) return null;
          return (
            <div key={algo} className={`ac-sort-col${state.done ? ' ac-sort-col--done' : ''}`}
              style={{ '--sort-color': meta.color }}>
              <div className="ac-sort-header">
                <span className="ac-sort-name">{meta.label}</span>
                <span className="ac-badge">{meta.complexity}</span>
              </div>
              {state.done && <div className="ac-done-badge">Done ✓</div>}
              <div className="ac-bars">
                {state.array.map((val, i) => {
                  const cmp  = state.comparing.includes(i);
                  const swp  = state.swapping.includes(i);
                  return (
                    <div key={i}
                      className={`ac-bar${cmp ? ' ac-bar--cmp' : ''}${swp ? ' ac-bar--swp' : ''}${state.done ? ' ac-bar--done' : ''}`}
                      style={{ height: `${(val / maxVal) * 100}%` }}
                    />
                  );
                })}
              </div>
              <div className="ac-sort-metrics">
                <div className="ac-sm"><span className="ac-sm-val">{state.comparisons}</span><span className="ac-sm-lbl">Comparisons</span></div>
                <div className="ac-sm"><span className="ac-sm-val">{state.swaps}</span><span className="ac-sm-lbl">{meta.swap}</span></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ac-legend">
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#fbbf24' }}/>Comparing</span>
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#ef4444' }}/>Swapping/Writing</span>
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#10b981' }}/>Sorted</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  SEARCHING TAB
// ═══════════════════════════════════════════════════════════════════════════════

const SEARCH_N = 16;

function makeSearchArr() {
  const vals = new Set();
  while (vals.size < SEARCH_N) vals.add(Math.floor(Math.random() * 85) + 10);
  return [...vals].sort((a, b) => a - b);
}

function linearSteps(arr, target) {
  const steps = [];
  for (let i = 0; i < arr.length; i++) {
    const found = arr[i] === target;
    steps.push({ checking: i, found, done: found, notFound: false, comparisons: i + 1 });
    if (found) return steps;
  }
  steps.push({ checking: -1, found: false, done: true, notFound: true, comparisons: arr.length });
  return steps;
}

function binarySteps(arr, target) {
  const steps = [];
  let lo = 0, hi = arr.length - 1, c = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1; c++;
    const found = arr[mid] === target;
    steps.push({ lo, hi, mid, found, done: found, notFound: false, comparisons: c });
    if (found) return steps;
    if (arr[mid] < target) lo = mid + 1; else hi = mid - 1;
  }
  steps.push({ lo: -1, hi: -1, mid: -1, found: false, done: true, notFound: true, comparisons: c });
  return steps;
}

const IDLE_LINEAR  = { checking: -1, found: false, done: false, notFound: false, comparisons: 0 };
const IDLE_BINARY  = { lo: -1, hi: -1, mid: -1, found: false, done: false, notFound: false, comparisons: 0 };

function SearchingTab() {
  const [searchArr]   = useState(makeSearchArr);
  const [target,  setTarget]   = useState('');
  const [linState, setLinState] = useState(IDLE_LINEAR);
  const [binState, setBinState] = useState(IDLE_BINARY);
  const [isRunning, setIsRunning] = useState(false);

  const linIdxRef  = useRef(0);
  const binIdxRef  = useRef(0);
  const linStepRef = useRef([]);
  const binStepRef = useRef([]);
  const timerRef   = useRef(null);

  const runSearch = () => {
    const t = parseInt(target, 10);
    if (isNaN(t)) return;
    clearInterval(timerRef.current);

    linStepRef.current = linearSteps(searchArr, t);
    binStepRef.current = binarySteps(searchArr, t);
    linIdxRef.current  = 0;
    binIdxRef.current  = 0;
    setLinState(IDLE_LINEAR);
    setBinState({ ...IDLE_BINARY, lo: 0, hi: searchArr.length - 1 });
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      const li = linIdxRef.current, bi = binIdxRef.current;
      const lSteps = linStepRef.current, bSteps = binStepRef.current;
      if (li < lSteps.length) { setLinState(lSteps[li]); linIdxRef.current = li + 1; }
      if (bi < bSteps.length) { setBinState(bSteps[bi]); binIdxRef.current = bi + 1; }
      if (li >= lSteps.length - 1 && bi >= bSteps.length - 1) {
        clearInterval(timerRef.current); setIsRunning(false);
      }
    }, 400);
  };

  const resetSearch = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTarget('');
    setLinState(IDLE_LINEAR);
    setBinState(IDLE_BINARY);
  };

  const ResultLine = ({ state, isLinear }) => {
    if (state.notFound) return <span className="ac-result-notfound">Not found - {state.comparisons} step{state.comparisons !== 1 ? 's' : ''}</span>;
    if (state.found)    return <span className="ac-result-found">Found in {state.comparisons} step{state.comparisons !== 1 ? 's' : ''}!</span>;
    if (state.comparisons > 0) return <span className="ac-result-idle">{state.comparisons} step{state.comparisons !== 1 ? 's' : ''}…</span>;
    return <span className="ac-result-idle">Awaiting search</span>;
  };

  return (
    <div className="ac-section">
      <div className="ac-controls">
        <div className="ac-ctrl-row">
          <div className="ac-ctrl-group">
            <span className="ac-label">Target value</span>
            <div className="ac-search-input-row">
              <input
                type="number"
                className="ac-num-input"
                placeholder="Enter a number…"
                value={target}
                onChange={e => setTarget(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !isRunning && runSearch()}
                disabled={isRunning}
              />
              <button className="btn btn-insert" onClick={runSearch} disabled={isRunning || !target}>
                <Play size={13} /> Search
              </button>
              <button className="btn btn-clear" onClick={resetSearch}>
                <RotateCcw size={12} /> Reset
              </button>
            </div>
          </div>
          <p className="ac-search-hint">Click a value below to autofill, or type any number (even one not in the array).</p>
        </div>
      </div>

      {/* Clickable array */}
      <div className="ac-search-label">Sorted array (click a value to target it):</div>
      <div className="ac-arr-pills">
        {searchArr.map((val, i) => (
          <button key={i} className="ac-pill" onClick={() => setTarget(String(val))} disabled={isRunning}>
            {val}
          </button>
        ))}
      </div>

      {/* Side-by-side */}
      <div className="ac-search-grid">
        {/* Linear Search */}
        <div className="ac-search-col" style={{ '--sc': '#6366f1' }}>
          <div className="ac-search-col-hd">
            <span className="ac-search-col-dot" />
            <span className="ac-search-col-name">Linear Search</span>
            <span className="ac-badge">O(n)</span>
          </div>
          <div className="ac-search-vis">
            {searchArr.map((val, i) => {
              const checking = linState.checking === i;
              const found    = linState.found && checking;
              const past     = !linState.notFound && linState.checking > i;
              return (
                <div key={i} className={`ac-sv-box${found ? ' ac-sv--found' : checking ? ' ac-sv--checking' : past ? ' ac-sv--past' : ''}`}>
                  {val}
                </div>
              );
            })}
          </div>
          <div className="ac-result"><ResultLine state={linState} isLinear /></div>
        </div>

        {/* Binary Search */}
        <div className="ac-search-col" style={{ '--sc': '#10b981' }}>
          <div className="ac-search-col-hd">
            <span className="ac-search-col-dot" />
            <span className="ac-search-col-name">Binary Search</span>
            <span className="ac-badge">O(log n)</span>
          </div>
          <div className="ac-search-vis">
            {searchArr.map((val, i) => {
              const inRange = binState.lo !== -1 && i >= binState.lo && i <= binState.hi;
              const isMid   = binState.mid === i;
              const found   = binState.found && isMid;
              const elim    = binState.lo !== -1 && !inRange;
              return (
                <div key={i} className={`ac-sv-box${found ? ' ac-sv--found' : isMid ? ' ac-sv--checking' : elim ? ' ac-sv--elim' : inRange ? ' ac-sv--range' : ''}`}>
                  {val}
                </div>
              );
            })}
          </div>
          <div className="ac-result"><ResultLine state={binState} /></div>
        </div>
      </div>

      <div className="ac-legend">
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#fbbf24' }}/>Checking</span>
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#10b981' }}/>Found</span>
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#6b7280' }}/>Eliminated</span>
        <span className="ac-leg"><span className="ac-leg-dot" style={{ background: '#6366f1', opacity: 0.4 }}/>Active range (binary)</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  HASH TABLES TAB  (same logic as HashComparison, embedded)
// ═══════════════════════════════════════════════════════════════════════════════

const HASH_CAP = 11;

const HASH_PRESETS = [
  { label: '5 Keys',  keys: ['cat', 'dog', 'fox', 'ant', 'bee'] },
  { label: '8 Keys',  keys: ['cat', 'dog', 'fox', 'ant', 'bee', 'cow', 'hen', 'pig'] },
  { label: '8 Names', keys: ['alice', 'bob', 'carol', 'dave', 'eve', 'frank', 'grace', 'hank'] },
];

function hashFn(key, cap) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) % cap;
  return h;
}

function initOpen(cap)     { return { cap, table: Array(cap).fill(null), size: 0, totalProbes: 0, collisions: 0, maxProbes: 0, log: [] }; }
function initChain(cap)    { return { cap, table: Array.from({ length: cap }, () => []), size: 0, totalProbes: 0, collisions: 0, maxChain: 0, log: [] }; }

function insertLinear(st, key) {
  if (st.size >= st.cap) return st;
  const h0 = hashFn(key, st.cap); let idx = h0, steps = 0;
  while (st.table[idx] !== null && st.table[idx] !== key) { idx = (idx + 1) % st.cap; steps++; if (steps >= st.cap) return st; }
  if (st.table[idx] === key) return st;
  const probes = steps + 1, col = steps > 0, t2 = [...st.table]; t2[idx] = key;
  return { ...st, table: t2, size: st.size + 1, totalProbes: st.totalProbes + probes, collisions: st.collisions + (col ? 1 : 0), maxProbes: Math.max(st.maxProbes, probes), log: [{ key, slot: idx, probes, collision: col }, ...st.log.slice(0, 6)] };
}

function insertQuadratic(st, key) {
  if (st.size >= st.cap) return st;
  const h0 = hashFn(key, st.cap); let steps = 0, idx = h0;
  for (let i = 0; i < st.cap; i++) { idx = (h0 + i * i) % st.cap; if (st.table[idx] === null) break; if (st.table[idx] === key) return st; steps++; }
  if (st.table[idx] !== null) return st;
  const probes = steps + 1, col = steps > 0, t2 = [...st.table]; t2[idx] = key;
  return { ...st, table: t2, size: st.size + 1, totalProbes: st.totalProbes + probes, collisions: st.collisions + (col ? 1 : 0), maxProbes: Math.max(st.maxProbes, probes), log: [{ key, slot: idx, probes, collision: col }, ...st.log.slice(0, 6)] };
}

function insertChaining(st, key) {
  const h0 = hashFn(key, st.cap), chain = st.table[h0];
  if (chain.includes(key)) return st;
  const probes = chain.length, col = chain.length > 0;
  const t2 = st.table.map((c, i) => i === h0 ? [...c, key] : c);
  return { ...st, table: t2, size: st.size + 1, totalProbes: st.totalProbes + probes, collisions: st.collisions + (col ? 1 : 0), maxChain: Math.max(st.maxChain, chain.length + 1), log: [{ key, slot: h0, probes, collision: col }, ...st.log.slice(0, 6)] };
}

function HashColumn({ name, formula, color, state, currentKey, isChaining, isWinner }) {
  const last     = state.log[0];
  const lastSlot = last?.key === currentKey ? last.slot : null;
  const lf       = state.size / state.cap;
  return (
    <div className={`hc-column${isWinner && state.size > 0 ? ' hc-column--winner' : ''}`} style={{ '--col-color': color }}>
      <div className="hc-col-header">
        <div className="hc-col-title-group">
          <span className="hc-col-dot" /><span className="hc-col-name">{name}</span>
        </div>
        {isWinner && state.size > 0 && <span className="hc-winner-badge"><Trophy size={11} /> Best</span>}
      </div>
      <p className="hc-col-formula">{formula}</p>
      <div className="hc-metrics">
        <div className="hc-metric"><span className="hc-metric-value">{state.totalProbes}</span><span className="hc-metric-label">Total Probes</span></div>
        <div className="hc-metric"><span className="hc-metric-value">{state.collisions}</span><span className="hc-metric-label">Collisions</span></div>
        <div className="hc-metric"><span className="hc-metric-value">{isChaining ? state.maxChain : state.maxProbes}</span><span className="hc-metric-label">{isChaining ? 'Max Chain' : 'Max Probes'}</span></div>
        <div className="hc-metric"><span className="hc-metric-value">{`${(lf * 100).toFixed(0)}%`}</span><span className="hc-metric-label">Load Factor</span></div>
      </div>
      <div className="hc-load-bar">
        <div className="hc-load-fill" style={{ width: `${Math.min(lf * 100, 100)}%`, background: lf > 0.7 ? '#ef4444' : lf > 0.5 ? '#f59e0b' : color }} />
      </div>
      <div className="hc-slots">
        {isChaining
          ? state.table.map((chain, i) => (
              <div key={i} className={`hc-slot${chain.length > 0 ? ' filled' : ' empty'}${lastSlot === i ? ' newly-inserted' : ''}`}>
                <div className="hc-slot-index">{i}</div>
                <div className="hc-chain-items">
                  {chain.length === 0
                    ? <span className="hc-empty-label">-</span>
                    : chain.map((k, j) => (
                        <React.Fragment key={j}>
                          {j > 0 && <ChevronRight size={9} className="hc-chain-sep" />}
                          <span className={`hc-chain-key${k === currentKey ? ' hc-new-key' : ''}`}>{k}</span>
                        </React.Fragment>
                      ))
                  }
                </div>
              </div>
            ))
          : state.table.map((slot, i) => (
              <div key={i} className={`hc-slot${slot ? ' filled' : ' empty'}${lastSlot === i ? ' newly-inserted' : ''}`}>
                <div className="hc-slot-index">{i}</div>
                <div className="hc-slot-key">
                  {slot ? <span className={slot === currentKey ? 'hc-new-key' : ''}>{slot}</span> : <span className="hc-empty-label">-</span>}
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
}

function HashTab() {
  const [linear,    setLinear]    = useState(() => initOpen(HASH_CAP));
  const [quadratic, setQuadratic] = useState(() => initOpen(HASH_CAP));
  const [chaining,  setChaining]  = useState(() => initChain(HASH_CAP));
  const [currentKey, setCurrentKey] = useState(null);
  const [singleKey,  setSingleKey]  = useState('');
  const [isRunning,  setIsRunning]  = useState(false);

  const handleInsert = () => {
    const key = singleKey.trim();
    if (!key || isRunning) return;
    setCurrentKey(key);
    setLinear(p    => insertLinear(p, key));
    setQuadratic(p => insertQuadratic(p, key));
    setChaining(p  => insertChaining(p, key));
    setSingleKey('');
    setTimeout(() => setCurrentKey(p => p === key ? null : p), 1400);
  };

  const runPreset = async (keys) => {
    if (isRunning) return;
    setIsRunning(true);
    let lin = initOpen(HASH_CAP), quad = initOpen(HASH_CAP), chain = initChain(HASH_CAP);
    setLinear(lin); setQuadratic(quad); setChaining(chain); setCurrentKey(null);
    await new Promise(r => setTimeout(r, 60));
    for (const key of keys) {
      lin = insertLinear(lin, key); quad = insertQuadratic(quad, key); chain = insertChaining(chain, key);
      setCurrentKey(key); setLinear(lin); setQuadratic(quad); setChaining(chain);
      await new Promise(r => setTimeout(r, 300));
    }
    setCurrentKey(null); setIsRunning(false);
  };

  const reset = () => {
    if (isRunning) return;
    setLinear(initOpen(HASH_CAP)); setQuadratic(initOpen(HASH_CAP)); setChaining(initChain(HASH_CAP));
    setCurrentKey(null); setSingleKey('');
  };

  const hasData    = linear.size > 0;
  const minProbes  = hasData ? Math.min(linear.totalProbes, quadratic.totalProbes, chaining.totalProbes) : -1;
  const linWin     = hasData && linear.totalProbes    === minProbes;
  const quadWin    = hasData && quadratic.totalProbes === minProbes;
  const chainWin   = hasData && chaining.totalProbes  === minProbes;
  const winnerName = [linWin && 'Linear', quadWin && 'Quadratic', chainWin && 'Chaining'].filter(Boolean).join(' & ');

  return (
    <div className="ac-section">
      <div className="ac-controls">
        <div className="ac-ctrl-row ac-hash-row">
          <input className="hc-key-input" type="text" placeholder="Type a key…"
            value={singleKey} onChange={e => setSingleKey(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleInsert()} disabled={isRunning} />
          <button className="btn btn-insert" onClick={handleInsert} disabled={!singleKey.trim() || isRunning}>Insert into All</button>
          {HASH_PRESETS.map(p => (
            <button key={p.label} className="btn hc-preset-btn" onClick={() => runPreset(p.keys)} disabled={isRunning}>
              <Play size={11} /> {p.label}
            </button>
          ))}
          <button className="btn btn-clear" onClick={reset} disabled={isRunning}>
            <RotateCcw size={12} /> Reset
          </button>
        </div>
      </div>

      {hasData && (
        <div className="hc-winner-banner">
          <Trophy size={14} />
          <span><strong>{winnerName}</strong> used fewest total probes ({minProbes})</span>
        </div>
      )}
      {currentKey && (
        <div className="hc-current-key-banner">Inserting <strong>"{currentKey}"</strong>…</div>
      )}

      <div className="hc-grid">
        <HashColumn name="Linear Probing"   formula="h(k,i) = (h₀ + i) % cap"    color="#6366f1" state={linear}    currentKey={currentKey} isChaining={false} isWinner={linWin}   />
        <HashColumn name="Quadratic Probing" formula="h(k,i) = (h₀ + i²) % cap"  color="#f59e0b" state={quadratic} currentKey={currentKey} isChaining={false} isWinner={quadWin}  />
        <HashColumn name="Separate Chaining" formula="slot = h(k), chain append"  color="#10b981" state={chaining}  currentKey={currentKey} isChaining={true}  isWinner={chainWin} />
      </div>
      <div className="hc-legend">
        <span className="hc-legend-title">Probe count:</span>
        <span className="hc-legend-item">Open addressing - slots examined (min 1)</span>
        <span className="hc-legend-sep">·</span>
        <span className="hc-legend-item">Chaining - chain nodes traversed before append (0 if empty)</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  Main Page
// ═══════════════════════════════════════════════════════════════════════════════

function AlgoCompare() {
  const [active, setActive] = useState('sorting');

  return (
    <div className="container ac-page">
      <div className="ac-header">
        <h1 className="ac-title">Algorithm Comparison</h1>
        <p className="ac-subtitle">
          Run algorithms side-by-side on the same data - watch how they differ in speed,
          comparisons, and strategy in real time.
        </p>
      </div>

      <div className="ac-tab-bar">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`ac-tab-btn${active === id ? ' active' : ''}`}
            onClick={() => setActive(id)}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {active === 'sorting'   && <SortingTab />}
      {active === 'searching' && <SearchingTab />}
      {active === 'hashing'   && <HashTab />}
    </div>
  );
}

export default AlgoCompare;
