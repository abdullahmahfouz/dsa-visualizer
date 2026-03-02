import React, { useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  History,
  SkipBack,
  SkipForward,
} from 'lucide-react';

/**
 * TimeTravelScrubber
 *
 * A fully controlled, purely presentational component.
 * It owns NO state — all values flow in as props, all actions flow out as callbacks.
 * This makes it trivially testable and reusable across BFS, DFS, Dijkstra, etc.
 *
 * Performance:
 * - Wrapped in React.memo — only re-renders when props change by reference/value.
 * - onScrub (handleSliderChange) is stable via useCallback so memo is effective.
 * - The progress fill uses a CSS custom property set inline — no DOM queries,
 *   no layout thrashing. GPU-composited transform would be even faster for 60fps
 *   scrubbing, but inline style is sufficient for ≤200 steps.
 *
 * Accessibility:
 * - The range input has aria-valuetext so screen readers announce "Step 3 of 12"
 *   instead of just the raw number.
 * - All icon-only buttons have aria-label and title attributes.
 *
 * @param {Object}   props
 * @param {number}   props.currentStepIndex  - Active step (controlled)
 * @param {number}   props.totalSteps        - history.length
 * @param {boolean}  props.isPlaying         - Is auto-play active?
 * @param {boolean}  props.isAtStart         - currentStepIndex <= 0
 * @param {boolean}  props.isAtEnd           - currentStepIndex >= totalSteps - 1
 * @param {Object|null} props.currentSnapshot - history[currentStepIndex]
 * @param {string}   props.algorithmLabel    - Display name e.g. "BFS" | "DFS"
 * @param {Function} props.onPlay            - () => void
 * @param {Function} props.onPause           - () => void
 * @param {Function} props.onStepForward     - () => void
 * @param {Function} props.onStepBackward    - () => void
 * @param {Function} props.onScrub           - (index: number) => void
 * @param {Function} props.onJumpToStart     - () => void
 * @param {Function} props.onJumpToEnd       - () => void
 */
const TimeTravelScrubber = React.memo(function TimeTravelScrubber({
  currentStepIndex,
  totalSteps,
  isPlaying,
  isAtStart,
  isAtEnd,
  currentSnapshot,
  algorithmLabel,
  onPlay,
  onPause,
  onStepForward,
  onStepBackward,
  onScrub,
  onJumpToStart,
  onJumpToEnd,
}) {
  // Stable callback — won't cause memo to bust on every render of the parent
  const handleSliderChange = useCallback(
    (e) => onScrub(parseInt(e.target.value, 10)),
    [onScrub]
  );

  const progressPercent =
    totalSteps > 1 ? (currentStepIndex / (totalSteps - 1)) * 100 : 0;

  const displayStep = currentStepIndex + 1; // 1-based for humans

  return (
    <div className="debugger-suite">
      {/* ── Header ── */}
      <div className="debugger-header">
        <History size={16} aria-hidden="true" />
        <h3>Time-Travel Debugger</h3>
        {algorithmLabel && (
          <span className="scrubber-algo-badge">{algorithmLabel}</span>
        )}
      </div>

      {/* ── Transport Controls ── */}
      <div className="scrubber-controls">
        <button
          onClick={onJumpToStart}
          disabled={isAtStart}
          className="step-btn"
          aria-label="Jump to start"
          title="Jump to start"
        >
          <SkipBack size={16} />
        </button>

        <button
          onClick={onStepBackward}
          disabled={isAtStart}
          className="step-btn"
          aria-label="Previous step"
          title="Previous step (←)"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Central play/pause — the single toggle point */}
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="play-pause-btn"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={onStepForward}
          disabled={isAtEnd}
          className="step-btn"
          aria-label="Next step"
          title="Next step (→)"
        >
          <ChevronRight size={20} />
        </button>

        <button
          onClick={onJumpToEnd}
          disabled={isAtEnd}
          className="step-btn"
          aria-label="Jump to end"
          title="Jump to end"
        >
          <SkipForward size={16} />
        </button>
      </div>

      {/* ── Scrubber Slider ── */}
      <div className="slider-container">
        {/*
          The progress fill is a separate <div> behind the native range input.
          We can't style the track fill cross-browser with pure CSS on <input type=range>,
          but this approach works everywhere without JS gymnastics.
        */}
        <div className="slider-track-wrapper">
          <div
            className="slider-progress-fill"
            style={{ width: `${progressPercent}%` }}
            aria-hidden="true"
          />
          <input
            type="range"
            min={0}
            max={Math.max(0, totalSteps - 1)}
            value={currentStepIndex < 0 ? 0 : currentStepIndex}
            onChange={handleSliderChange}
            className="history-slider"
            aria-label="Algorithm step scrubber"
            aria-valuemin={0}
            aria-valuemax={totalSteps - 1}
            aria-valuenow={currentStepIndex}
            aria-valuetext={`Step ${displayStep} of ${totalSteps}`}
          />
        </div>

        <div className="slider-labels">
          <span className="slider-step-label">Step {displayStep}</span>
          <span className="slider-total-label">of {totalSteps}</span>
        </div>
      </div>

      {/* ── Step Description Panel ── */}
      {currentSnapshot && (
        <div className="step-details">
          {/* Action badge — color comes from CSS [data-action] attribute selector */}
          <span
            className="step-action-badge"
            data-action={currentSnapshot.action}
          >
            {currentSnapshot.action?.toUpperCase()}
          </span>

          <p className="step-description">{currentSnapshot.description}</p>

          {/* Live state summary */}
          <div className="step-state-row">
            <span className="state-pill state-pill--visited">
              Visited: {currentSnapshot.visited.length}
            </span>
            <span className="state-pill state-pill--frontier">
              {currentSnapshot.algorithm === 'bfs' ? 'Queue' : 'Stack'}:{' '}
              {currentSnapshot.frontier.length > 0
                ? `[${currentSnapshot.frontier.join(' → ')}]`
                : 'empty'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default TimeTravelScrubber;
