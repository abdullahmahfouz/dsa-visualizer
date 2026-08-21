import React from 'react';

/**
 * Small instrument-style readout for an algorithm's time/space complexity.
 * Purely presentational - the visualizer that mounts it owns the values.
 */
function ComplexityBadge({ time, space }) {
  return (
    <div className="complexity-badge">
      <span className="complexity-badge-stat">
        Time: <strong>{time}</strong>
      </span>
      <span className="complexity-badge-divider" aria-hidden="true" />
      <span className="complexity-badge-stat">
        Space: <strong>{space}</strong>
      </span>
    </div>
  );
}

export default ComplexityBadge;
