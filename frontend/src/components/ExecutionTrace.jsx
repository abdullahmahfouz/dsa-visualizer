import React, { useEffect, useRef } from 'react';

/**
 * Scrollable step-history log for algorithms that already compute their full
 * history up front via useAlgorithmHistory. Purely presentational - reads
 * `history` (array of snapshots with a `.description`) and `currentStepIndex`,
 * and keeps the active row scrolled into view as the caller steps/scrubs.
 */
function ExecutionTrace({ history, currentStepIndex }) {
  const activeRowRef = useRef(null);

  useEffect(() => {
    activeRowRef.current?.scrollIntoView({ block: 'nearest' });
  }, [currentStepIndex]);

  return (
    <div className="execution-trace">
      <div className="execution-trace-header">Execution Trace</div>
      <div className="execution-trace-list">
        {history.map((snap, i) => (
          <div
            key={i}
            ref={i === currentStepIndex ? activeRowRef : null}
            className={
              'execution-trace-row' +
              (i === currentStepIndex ? ' active' : '') +
              (i > currentStepIndex ? ' pending' : '')
            }
          >
            <span className="execution-trace-index">{String(i).padStart(2, '0')}</span>
            <span className="execution-trace-desc">{snap.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutionTrace;
