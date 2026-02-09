import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Small helper for showing auto-clearing UI messages.
 *
 * message shape: { text: string, type: 'info' | 'success' | 'warning' | 'error' }
 */
export function useTimedMessage(timeoutMs = 3000) {
  const [message, setMessage] = useState(null);
  const timerRef = useRef(null);

  const clearMessage = useCallback(() => {
    setMessage(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const showMessage = useCallback(
    (text, type = 'info') => {
      setMessage({ text, type });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setMessage(null);
        timerRef.current = null;
      }, timeoutMs);
    },
    [timeoutMs]
  );

  useEffect(() => clearMessage, [clearMessage]);

  return { message, showMessage, clearMessage };
}

