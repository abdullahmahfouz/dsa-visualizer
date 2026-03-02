import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * useAlgorithmHistory
 *
 * A custom hook that owns the entire time-travel debugger state machine.
 * Extracted from BFSVisualizer/DFSVisualizer to eliminate ~60 lines of duplication.
 *
 * ─── STATE MACHINE ───────────────────────────────────────────────────────────
 *
 *  IDLE ──(loadHistory)──► PLAYING ──(pause/stepForward/stepBackward/scrubTo)──► PAUSED
 *   ▲                          │                        │
 *   └──────(reset)─────────────┘◄───────(resume)────────┘
 *                              │
 *                    (reaches last step)
 *                              │
 *                           PAUSED (isAtEnd=true)
 *
 * ─── KEY DESIGN DECISIONS ────────────────────────────────────────────────────
 *
 * 1. STALE CLOSURE FIX (Bug #2 from audit):
 *    setInterval callbacks capture variables at creation time. If we read
 *    `currentStepIndex` state inside the interval, we get the value from when
 *    startPlayback() was called — not the current value. Fix: maintain
 *    `stepIndexRef` as a ref that is always kept in sync with state. The interval
 *    reads `stepIndexRef.current` which is always fresh.
 *
 * 2. UNMOUNT CLEANUP (Bug #1 from audit):
 *    A single useEffect with an empty dep array returns stopPlayback as the
 *    cleanup function. This ensures the interval is always cleared if the
 *    component unmounts mid-animation.
 *
 * 3. isPlaying CORRECTNESS (Bug #3 from audit):
 *    We use a single `isPlaying` boolean instead of separate `isAnimating` +
 *    `isPaused`. This eliminates the case where isAnimating=false + isPaused=false
 *    produces the wrong icon after resume.
 *
 * 4. SCRUB GUARD (Bug #4 from audit):
 *    scrubTo() only clears the interval if one is actually running (checks
 *    intervalRef.current !== null). Calling it when already stopped is safe.
 *
 * @param {number} [intervalMs=800] - Milliseconds per auto-play step
 * @returns {AlgorithmHistoryControls}
 */
export function useAlgorithmHistory(intervalMs = 800) {
  const [history, setHistory] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  // ── Refs ───────────────────────────────────────────────────────────────────
  // intervalRef: holds the setInterval ID. Using a ref (not state) means
  // clearing/setting the interval never triggers a re-render.
  const intervalRef = useRef(null);

  // stepIndexRef: mirrors currentStepIndex so interval callbacks always read
  // the live value, not the stale closure value from when the interval started.
  // This is the canonical fix for the stale closure problem with setInterval.
  const stepIndexRef = useRef(-1);

  // historyLengthRef: same pattern — interval needs to know total steps
  // without being recreated every time history.length changes.
  const historyLengthRef = useRef(0);

  // Keep refs in sync with state on every render
  useEffect(() => { stepIndexRef.current = currentStepIndex; }, [currentStepIndex]);

  // ── Unmount cleanup ────────────────────────────────────────────────────────
  // This runs once on mount, returns cleanup. Prevents "setState on unmounted
  // component" warnings and interval leaks when navigating away.
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // ── Core playback engine ───────────────────────────────────────────────────

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startPlayback = useCallback((fromIndex, total) => {
    // Guard: nothing to play if already at the last step
    if (fromIndex >= total - 1) {
      setIsPlaying(false);
      return;
    }

    stopInterval();
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      // Read from ref — this is ALWAYS the current step, never stale
      const next = stepIndexRef.current + 1;

      if (next >= historyLengthRef.current) {
        // Reached the end naturally
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsPlaying(false);
        return;
      }

      // Sync ref first so next tick reads the updated value
      stepIndexRef.current = next;
      setCurrentStepIndex(next);
    }, intervalMs);
  }, [intervalMs, stopInterval]);

  // ── Public API ─────────────────────────────────────────────────────────────

  /**
   * loadHistory — Call this after receiving steps from the backend.
   * Accepts a pre-built frozen history array from buildHistory() in snapshotBuilder.js.
   *
   * @param {TraversalSnapshot[]} snapshots
   */
  const loadHistory = useCallback((snapshots) => {
    stopInterval();
    setIsPlaying(false);

    historyLengthRef.current = snapshots.length;
    stepIndexRef.current = 0;

    setHistory(snapshots);
    setCurrentStepIndex(0);

    // Defer playback start one frame so state has settled before the interval reads refs
    requestAnimationFrame(() => {
      startPlayback(0, snapshots.length);
    });
  }, [startPlayback, stopInterval]);

  const pause = useCallback(() => {
    stopInterval();
    setIsPlaying(false);
  }, [stopInterval]);

  const resume = useCallback(() => {
    // Use ref values — reading from state here would risk stale values
    if (stepIndexRef.current < historyLengthRef.current - 1) {
      startPlayback(stepIndexRef.current, historyLengthRef.current);
    }
  }, [startPlayback]);

  const togglePlayPause = useCallback(() => {
    // Read isPlaying via callback form to avoid stale closure on the boolean
    setIsPlaying(current => {
      if (current) {
        // Currently playing → pause
        stopInterval();
        return false;
      } else {
        // Currently paused → resume
        if (stepIndexRef.current < historyLengthRef.current - 1) {
          // startPlayback is called outside setIsPlaying to avoid nesting setState
          requestAnimationFrame(() => resume());
        }
        return current; // actual isPlaying update happens inside startPlayback
      }
    });
  }, [stopInterval, resume]);

  /**
   * stepForward — Pauses auto-play and advances one step.
   * Using functional updater ensures we always mutate from the latest state,
   * even if multiple stepForward calls are batched.
   */
  const stepForward = useCallback(() => {
    stopInterval();
    setIsPlaying(false);
    setCurrentStepIndex(prev => {
      const next = Math.min(prev + 1, historyLengthRef.current - 1);
      stepIndexRef.current = next;
      return next;
    });
  }, [stopInterval]);

  const stepBackward = useCallback(() => {
    stopInterval();
    setIsPlaying(false);
    setCurrentStepIndex(prev => {
      const next = Math.max(prev - 1, 0);
      stepIndexRef.current = next;
      return next;
    });
  }, [stopInterval]);

  /**
   * scrubTo — Called by the range slider onChange.
   * Only clears the interval if one is actually running (Bug #4 fix).
   * Does NOT call setIsPlaying(false) if not playing — avoids spurious re-renders.
   *
   * Performance note: This is called on every slider tick (mousemove).
   * By only calling setCurrentStepIndex (O(1) array lookup) and skipping
   * setIsPlaying when already paused, we keep scrubbing at 60fps with zero lag.
   *
   * @param {number} index - Target step index from the slider
   */
  const scrubTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, historyLengthRef.current - 1));

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
    }

    stepIndexRef.current = clamped;
    setCurrentStepIndex(clamped);
  }, []);

  const reset = useCallback(() => {
    stopInterval();
    setIsPlaying(false);
    setHistory([]);
    setCurrentStepIndex(-1);
    stepIndexRef.current = -1;
    historyLengthRef.current = 0;
  }, [stopInterval]);

  // ── Derived values ─────────────────────────────────────────────────────────
  // These are computed inline — no useMemo needed.
  // history[index] is an O(1) array lookup; React's reconciler handles the rest.
  const currentSnapshot = history[currentStepIndex] ?? null;
  const totalSteps = history.length;
  const isAtStart = currentStepIndex <= 0;
  const isAtEnd = currentStepIndex >= totalSteps - 1 && totalSteps > 0;

  return {
    // State
    history,
    currentStepIndex,
    currentSnapshot,
    isPlaying,
    totalSteps,
    isAtStart,
    isAtEnd,

    // Actions
    loadHistory,
    pause,
    resume,
    togglePlayPause,
    stepForward,
    stepBackward,
    scrubTo,
    reset,
  };
}
