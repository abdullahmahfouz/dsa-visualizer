import React, { useState, useRef, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Square, RotateCcw, Save, FolderOpen, Terminal, ChevronDown, ChevronRight } from 'lucide-react';
import TimeTravelScrubber from '../components/TimeTravelScrubber';
import { useAlgorithmHistory } from '../hooks/useAlgorithmHistory';
import { runCode } from '../utils/codeRunner';
import '../styles/page-styles/sandbox.css';

const DEFAULT_CODE = `# Push values onto the stack, then pop them all
for i in range(1, 6):
    my_stack.push(i * 10)

while not my_stack.is_empty:
    my_stack.pop()`;

// ── API Reference ─────────────────────────────────────────────────────────────

const API_REF = [
  {
    label: 'my_stack',
    color: '#6366f1',
    methods: [
      { sig: 'my_stack.push(value)',  desc: 'Push a value onto the top' },
      { sig: 'my_stack.pop()',        desc: 'Remove & return the top value' },
      { sig: 'my_stack.peek()',       desc: 'Return top value without removing' },
      { sig: 'my_stack.size',         desc: 'Number of items (property)' },
      { sig: 'my_stack.is_empty',     desc: 'True if empty (property)' },
    ],
  },
  {
    label: 'my_queue',
    color: '#06b6d4',
    methods: [
      { sig: 'my_queue.enqueue(value)', desc: 'Add a value to the back' },
      { sig: 'my_queue.dequeue()',      desc: 'Remove & return the front value' },
      { sig: 'my_queue.peek()',         desc: 'Return front value without removing' },
      { sig: 'my_queue.size',           desc: 'Number of items (property)' },
      { sig: 'my_queue.is_empty',       desc: 'True if empty (property)' },
    ],
  },
  {
    label: 'my_list',
    color: '#f59e0b',
    methods: [
      { sig: 'my_list.insert_head(value)', desc: 'Add node at the front' },
      { sig: 'my_list.insert_tail(value)', desc: 'Add node at the back' },
      { sig: 'my_list.delete(value)',       desc: 'Remove first node with that value' },
      { sig: 'my_list.find(value)',         desc: 'Returns True if value exists' },
      { sig: 'my_list.size',               desc: 'Number of nodes (property)' },
      { sig: 'my_list.is_empty',           desc: 'True if empty (property)' },
    ],
  },
];

const EXAMPLES = [
  {
    label: 'Stack',
    code: `# Push 1–5, then pop all
for i in range(1, 6):
    my_stack.push(i * 10)

while not my_stack.is_empty:
    my_stack.pop()`,
  },
  {
    label: 'Queue',
    code: `# Enqueue tasks, then process them
tasks = [15, 30, 45, 60, 75]
for t in tasks:
    my_queue.enqueue(t)

while not my_queue.is_empty:
    my_queue.dequeue()`,
  },
  {
    label: 'Linked List',
    code: `# Build a list, search, then delete
for v in [10, 20, 30, 40, 50]:
    my_list.insert_tail(v)

my_list.find(30)
my_list.delete(30)
my_list.insert_head(5)`,
  },
  {
    label: 'All Three',
    code: `# Use all three structures together
for i in range(1, 4):
    my_stack.push(i)
    my_queue.enqueue(i * 10)
    my_list.insert_tail(i * 100)

my_stack.pop()
my_queue.dequeue()
my_list.delete(200)`,
  },
];

// ── Visual sub-components ─────────────────────────────────────────────────────

function StepBanner({ snap }) {
  if (!snap) return null;
  const opColors = {
    push: '#6366f1',   pop: '#6366f1',
    enqueue: '#06b6d4', dequeue: '#06b6d4',
    insertHead: '#f59e0b', insertTail: '#f59e0b',
    delete: '#ef4444', find: '#10b981',
  };
  const color = opColors[snap.operation] ?? 'var(--accent-primary)';
  return (
    <div className="sandbox-step-banner" style={{ '--op-color': color }}>
      <span className="sandbox-step-op">{snap.operation}</span>
      <span className="sandbox-step-desc">{snap.description}</span>
      {snap.lineNumber && (
        <span className="sandbox-step-line">line {snap.lineNumber}</span>
      )}
    </div>
  );
}

function DsSection({ title, color, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="sandbox-ds-section" style={{ '--ds-color': color }}>
      <button className="sandbox-ds-header" onClick={() => setOpen(o => !o)}>
        <span className="sandbox-ds-dot" />
        <span className="sandbox-ds-title">{title}</span>
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
      </button>
      {open && <div className="sandbox-ds-body">{children}</div>}
    </div>
  );
}

/** Stack — vertical blocks stacked on a base plate */
function StackPanel({ items, activeValue }) {
  const reversed = [...items].reverse(); // reversed[0] = top of stack
  return (
    <div className="sandbox-stack-container">
      <div className="sandbox-stack-shaft">
        {reversed.length === 0 ? (
          <p className="sandbox-ds-empty">Empty</p>
        ) : (
          reversed.map((item, idx) => {
            const isTop = idx === 0;
            const isActive = isTop && item === activeValue;
            return (
              <div
                key={idx}
                className={`sandbox-stack-block${isTop ? ' sandbox-stack-block--top' : ''}${isActive ? ' sandbox-item--active' : ''}`}
              >
                {isTop && <span className="sandbox-top-badge">TOP</span>}
                <span className="sandbox-stack-val">{String(item)}</span>
              </div>
            );
          })
        )}
      </div>
      <div className="sandbox-stack-base">
        <span className="sandbox-stack-base-label">▲ BOTTOM ▲</span>
      </div>
    </div>
  );
}

/** Queue — horizontal conveyor belt with entry/exit labels */
function QueuePanel({ items, activeValue }) {
  if (items.length === 0) {
    return (
      <div className="sandbox-queue-track sandbox-queue-track--empty">
        <p className="sandbox-ds-empty">Empty</p>
      </div>
    );
  }
  return (
    <div className="sandbox-queue-wrapper">
      <div className="sandbox-queue-track">
        <div className="sandbox-queue-end sandbox-queue-end--out">
          <span>OUT</span>
          <span className="sandbox-queue-end-arrow">←</span>
        </div>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className={`sandbox-queue-cell${item === activeValue ? ' sandbox-item--active' : ''}`}>
              {String(item)}
            </div>
            {idx < items.length - 1 && <span className="sandbox-queue-conn">→</span>}
          </React.Fragment>
        ))}
        <div className="sandbox-queue-end sandbox-queue-end--in">
          <span className="sandbox-queue-end-arrow">→</span>
          <span>IN</span>
        </div>
      </div>
      <div className="sandbox-queue-footer">
        <span className="sandbox-queue-label">FRONT (dequeue)</span>
        <span className="sandbox-queue-label">BACK (enqueue)</span>
      </div>
    </div>
  );
}

/** Linked List — data|ptr compartment nodes with pointer arrows */
function LinkedListPanel({ nodes, activeValue }) {
  if (nodes.length === 0) {
    return (
      <div className="sandbox-ll-empty-track">
        <p className="sandbox-ds-empty">Empty</p>
      </div>
    );
  }
  return (
    <div className="sandbox-ll-container">
      {nodes.map((node, idx) => {
        const isHead = idx === 0;
        const isTail = idx === nodes.length - 1;
        const isActive = node.value === activeValue;
        return (
          <React.Fragment key={node.id}>
            <div className="sandbox-ll-node-wrapper">
              <div className={`sandbox-ll-node-box${isActive ? ' sandbox-item--active' : ''}`}>
                <div className="sandbox-ll-data">{String(node.value)}</div>
                <div className="sandbox-ll-ptr">{isTail ? '∅' : '→'}</div>
              </div>
              <span className="sandbox-ll-label">
                {isHead && isTail ? 'HEAD/TAIL' : isHead ? 'HEAD' : isTail ? 'TAIL' : ''}
              </span>
            </div>
            {!isTail && (
              <div className="sandbox-ll-connector">
                <div className="sandbox-ll-conn-line" />
                <span className="sandbox-ll-conn-arrow">▶</span>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function ApiRefPanel() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sandbox-api-ref">
      <button className="sandbox-api-ref-toggle" onClick={() => setOpen(o => !o)}>
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
        Python API Reference
      </button>
      {open && (
        <div className="sandbox-api-ref-body">
          {API_REF.map(group => (
            <div key={group.label} className="sandbox-api-group">
              <div className="sandbox-api-group-label" style={{ color: group.color }}>
                {group.label}
              </div>
              {group.methods.map(m => (
                <div key={m.sig} className="sandbox-api-row">
                  <code className="sandbox-api-sig">{m.sig}</code>
                  <span className="sandbox-api-desc">{m.desc}</span>
                </div>
              ))}
            </div>
          ))}
          <p className="sandbox-api-note">
            Built-ins available: <code>range</code>, <code>len</code>, <code>str</code>, <code>int</code>,
            <code>float</code>, <code>list</code>, <code>sorted</code>, <code>min</code>, <code>max</code>, <code>sum</code>, <code>enumerate</code>, <code>zip</code> …
          </p>
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CodeVisualizerSandbox() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveId, setSaveId] = useState('');
  const [loadId, setLoadId] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const decorationsRef = useRef([]);

  const history = useAlgorithmHistory();

  // ── Line highlighting ──────────────────────────────────────────────────────

  const applyLineHighlight = useCallback((lineNum) => {
    const monaco = monacoRef.current;
    const editor = editorRef.current;
    if (!editor || !monaco) return;
    if (!lineNum) {
      decorationsRef.current = editor.deltaDecorations(decorationsRef.current, []);
      return;
    }
    decorationsRef.current = editor.deltaDecorations(
      decorationsRef.current,
      [{
        range: new monaco.Range(lineNum, 1, lineNum, 1),
        options: { isWholeLine: true, className: 'sandbox-active-line' },
      }]
    );
  }, []);

  useEffect(() => {
    applyLineHighlight(history.currentSnapshot?.lineNumber ?? null);
  }, [history.currentSnapshot, applyLineHighlight]);

  // ── Controls ───────────────────────────────────────────────────────────────

  const handleRun = async () => {
    history.reset();
    setError(null);
    setLoading(true);
    applyLineHighlight(null);
    try {
      const { snapshots, error: runError, errorLine } = await runCode(code);
      if (runError && (!snapshots || snapshots.length === 0)) {
        setError({ message: runError, line: errorLine });
        return;
      }
      if (snapshots?.length > 0) history.loadHistory(snapshots);
      if (runError) setError({ message: runError, line: errorLine });
    } catch (err) {
      setError({ message: err.message, line: null });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    history.reset();
    setError(null);
    applyLineHighlight(null);
  };

  // ── Persistence ────────────────────────────────────────────────────────────

  const handleSave = async () => {
    setSaveStatus('Saving…');
    try {
      const res = await fetch('/api/sandbox/scripts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Untitled', code }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setSaveId(data.id);
      setSaveStatus(`Saved! ID: ${data.id}`);
    } catch {
      setSaveStatus('Save failed');
    }
  };

  const handleLoad = async () => {
    if (!loadId.trim()) return;
    setSaveStatus('Loading…');
    try {
      const res = await fetch(`/api/sandbox/scripts/${loadId.trim()}`);
      if (!res.ok) throw new Error('Not found');
      const data = await res.json();
      setCode(data.code);
      history.reset();
      setError(null);
      setSaveStatus('Loaded!');
    } catch {
      setSaveStatus('Script not found');
    }
  };

  // ── Snapshot-derived values ────────────────────────────────────────────────

  const snap         = history.currentSnapshot;
  const stackItems   = snap?.state?.stack?.items      ?? [];
  const queueItems   = snap?.state?.queue?.items      ?? [];
  const llNodes      = snap?.state?.linkedList?.nodes ?? [];
  const activeValue  = snap?.value ?? snap?.result;
  const stackActive  = snap?.dsType === 'stack'      ? activeValue : undefined;
  const queueActive  = snap?.dsType === 'queue'      ? activeValue : undefined;
  const llActive     = snap?.dsType === 'linkedList' ? activeValue : undefined;
  const hasHistory   = history.totalSteps > 0;

  return (
    <div className="sandbox-page">
      {/* ── Header ── */}
      <div className="sandbox-header">
        <div className="sandbox-header-icon">
          <Terminal size={20} />
        </div>
        <div>
          <h1 className="sandbox-title">Python Code Sandbox</h1>
          <p className="sandbox-subtitle">
            Write Python using <code>my_stack</code>, <code>my_queue</code>, or <code>my_list</code> — step through each operation and watch your data structures animate.
          </p>
        </div>
      </div>

      {/* ── Example templates ── */}
      <div className="sandbox-examples">
        <span className="sandbox-examples-label">Examples:</span>
        {EXAMPLES.map(ex => (
          <button
            key={ex.label}
            className="sandbox-example-btn"
            onClick={() => { setCode(ex.code); history.reset(); setError(null); }}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="sandbox-layout">
        {/* ── Left: Editor Panel ── */}
        <div className="sandbox-editor-panel">
          <div className="sandbox-editor-wrapper">
            <Editor
              height="380px"
              language="python"
              theme="vs-dark"
              value={code}
              onChange={val => setCode(val ?? '')}
              onMount={(editor, monaco) => {
                editorRef.current = editor;
                monacoRef.current = monaco;
              }}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                renderLineHighlight: 'none',
              }}
            />
          </div>

          {/* Controls */}
          <div className="sandbox-controls">
            <div className="sandbox-ctrl-left">
              <button
                className="btn btn-primary sandbox-run-btn"
                onClick={handleRun}
                disabled={loading}
              >
                {loading
                  ? <><span className="sandbox-spinner" />Running…</>
                  : <><Play size={14} />Run</>
                }
              </button>
              <button
                className="btn btn-secondary"
                onClick={history.pause}
                disabled={!history.isPlaying}
              >
                <Square size={14} />
                Stop
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleReset}
                disabled={!hasHistory && !error}
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>

            <div className="sandbox-ctrl-right">
              <button className="btn btn-secondary sandbox-save-btn" onClick={handleSave}>
                <Save size={14} />
                Save
              </button>
              <input
                className="sandbox-load-input"
                placeholder="Script ID…"
                value={loadId}
                onChange={e => setLoadId(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLoad()}
              />
              <button className="btn btn-secondary" onClick={handleLoad}>
                <FolderOpen size={14} />
                Load
              </button>
            </div>
          </div>

          {saveStatus && <div className="sandbox-save-status">{saveStatus}</div>}

          {error && (
            <div className="sandbox-error-banner">
              <strong>Error{error.line ? ` (line ${error.line})` : ''}:</strong>{' '}
              {error.message}
            </div>
          )}

          <ApiRefPanel />
        </div>

        {/* ── Right: Visual Panel ── */}
        <div className="sandbox-visual-panel">
          {hasHistory ? (
            <>
              <StepBanner snap={snap} />

              <DsSection title="Stack" color="#6366f1">
                <StackPanel items={stackItems} activeValue={stackActive} />
              </DsSection>

              <DsSection title="Queue" color="#06b6d4">
                <QueuePanel items={queueItems} activeValue={queueActive} />
              </DsSection>

              <DsSection title="Linked List" color="#f59e0b">
                <LinkedListPanel nodes={llNodes} activeValue={llActive} />
              </DsSection>

              <TimeTravelScrubber
                currentStepIndex={history.currentStepIndex}
                totalSteps={history.totalSteps}
                isPlaying={history.isPlaying}
                isAtStart={history.isAtStart}
                isAtEnd={history.isAtEnd}
                currentSnapshot={history.currentSnapshot}
                algorithmLabel="Sandbox"
                onPlay={history.resume}
                onPause={history.pause}
                onStepForward={history.stepForward}
                onStepBackward={history.stepBackward}
                onScrub={history.scrubTo}
                onJumpToStart={() => history.scrubTo(0)}
                onJumpToEnd={() => history.scrubTo(history.totalSteps - 1)}
              />
            </>
          ) : (
            <div className="sandbox-empty-state">
              <Terminal size={40} className="sandbox-empty-icon" />
              <p className="sandbox-empty-title">Nothing to visualize yet</p>
              <p className="sandbox-empty-hint">
                Write Python code in the editor and click <strong>Run</strong> to watch each operation step by step.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
