import React, { useState } from 'react';
import { X, Lightbulb, ChevronRight, Zap } from 'lucide-react';
import './challenge.css';

// ─── Type metadata ────────────────────────────────────────────────────────────

const TYPE_LABEL = {
  search:          'BST Search',
  identify_leaves: 'Leaf Hunt',
  inorder_start:   'Inorder Sequence',
};

const TYPE_CSS = {
  search:          'search',
  identify_leaves: 'leaves',
  inorder_start:   'inorder',
};

// ─── Sub-states ───────────────────────────────────────────────────────────────

function ChallengeLoading() {
  return (
    <div className="challenge-loading">
      <div className="challenge-mode-dot" />
      Generating challenge…
    </div>
  );
}

function ChallengeSuccess({ challenge, clickCount, onNewChallenge, onExit }) {
  return (
    <div className="challenge-result success">
      <div className="challenge-result-icon">🎉</div>
      <p className="challenge-result-title">Challenge Complete!</p>
      <p className="challenge-result-subtitle">
        <em>{challenge.title}</em> — solved in {clickCount} click{clickCount !== 1 ? 's' : ''}
      </p>
      <div className="challenge-result-actions">
        <button className="btn btn-insert" onClick={onNewChallenge}>
          <Zap size={13} /> New Challenge
        </button>
        <button className="btn btn-secondary" onClick={onExit}>Exit</button>
      </div>
    </div>
  );
}

function ChallengeFailed({ challenge, userClicks, onRetry, onExit }) {
  const expectedNext = challenge.expected_steps[userClicks.length];
  return (
    <div className="challenge-result failed">
      <div className="challenge-result-icon">❌</div>
      <p className="challenge-result-title">Wrong node!</p>
      <p className="challenge-result-subtitle">
        {challenge.type === 'identify_leaves'
          ? "That node isn't part of the solution — look carefully."
          : `Expected step ${userClicks.length + 1} (value ${expectedNext}). Reset and try again.`}
      </p>
      <div className="challenge-result-actions">
        <button className="btn btn-insert" onClick={onRetry}>Try Again</button>
        <button className="btn btn-secondary" onClick={onExit}>Exit</button>
      </div>
    </div>
  );
}

function ChallengeActive({ challenge, userClicks, onExit }) {
  const [showHint, setShowHint] = useState(false);
  const totalSteps     = challenge.expected_steps.length;
  const completedSteps = userClicks.length;
  const isOrdered      = challenge.type !== 'identify_leaves';

  return (
    <div className="challenge-banner">
      {/* Header */}
      <div className="challenge-header-row">
        <div className="challenge-title-group">
          <span className={`challenge-type-badge ${TYPE_CSS[challenge.type] || 'search'}`}>
            {TYPE_LABEL[challenge.type] || challenge.type}
          </span>
          <h3 className="challenge-title">{challenge.title}</h3>
        </div>
        <button className="challenge-exit-btn" onClick={onExit}>
          <X size={13} /> Exit
        </button>
      </div>

      {/* Description */}
      <p className="challenge-description">{challenge.description}</p>

      {/* Progress indicator */}
      {isOrdered ? (
        // Ordered: show numbered step dots with arrows
        <div className="challenge-progress-row">
          {challenge.expected_steps.map((_, idx) => {
            const isDone = idx < completedSteps;
            const isNext = idx === completedSteps;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ChevronRight size={11} className="challenge-progress-arrow" />
                )}
                <div
                  className={`challenge-step-dot ${
                    isDone ? 'done' : isNext ? 'next' : 'pending'
                  }`}
                >
                  {isDone ? '✓' : idx + 1}
                </div>
              </React.Fragment>
            );
          })}
          <span className="challenge-step-label">{completedSteps}/{totalSteps}</span>
        </div>
      ) : (
        // Unordered: show count only (don't reveal which specific nodes)
        <div className="challenge-identify-progress">
          <span className="challenge-identify-count">{completedSteps}</span>
          <span className="challenge-identify-sep"> / </span>
          <span className="challenge-identify-total">{totalSteps}</span>
          <span className="challenge-identify-label"> leaf nodes found</span>
        </div>
      )}

      {/* Hint toggle */}
      <div className="challenge-hint-row">
        <button
          className="challenge-hint-toggle"
          onClick={() => setShowHint(s => !s)}
        >
          <Lightbulb size={12} />
          {showHint ? 'Hide hint' : 'Need a hint?'}
        </button>
        {showHint && (
          <p className="challenge-hint-text">{challenge.hint}</p>
        )}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * ChallengeOverlay
 *
 * Renders above the TreeRenderer. Fully controlled — owns no state.
 *
 * Props:
 *   challenge       – { title, description, type, target, expected_steps, hint }
 *   userClicks      – number[]  (values the user has correctly clicked so far)
 *   status          – 'loading' | 'active' | 'success' | 'failed'
 *   onExit          – () => void
 *   onRetry         – () => void  (same challenge, reset clicks)
 *   onNewChallenge  – () => void  (fetch a fresh challenge)
 */
function ChallengeOverlay({
  challenge,
  userClicks,
  status,
  onExit,
  onRetry,
  onNewChallenge,
}) {
  if (status === 'loading') {
    return <ChallengeLoading />;
  }

  if (status === 'success' && challenge) {
    return (
      <ChallengeSuccess
        challenge={challenge}
        clickCount={userClicks.length}
        onNewChallenge={onNewChallenge}
        onExit={onExit}
      />
    );
  }

  if (status === 'failed' && challenge) {
    return (
      <ChallengeFailed
        challenge={challenge}
        userClicks={userClicks}
        onRetry={onRetry}
        onExit={onExit}
      />
    );
  }

  if (status === 'active' && challenge) {
    return (
      <ChallengeActive
        challenge={challenge}
        userClicks={userClicks}
        onExit={onExit}
      />
    );
  }

  return null;
}

export default ChallengeOverlay;
