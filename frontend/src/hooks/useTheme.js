import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'dsa-theme';

/**
 * Resolve what the page should currently be showing.
 * An explicit stored choice always wins; otherwise follow the OS.
 */
function resolveTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Theme controller for the token layer in styles/base-styles/variables.css.
 *
 * The stylesheet handles all three states on its own: bare :root is light,
 * a prefers-color-scheme media query supplies dark, and [data-theme] on the
 * root element overrides either one. This hook only has to keep that
 * attribute in sync and remember an explicit choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState(resolveTheme);

  // Mirror state onto the root element so CSS can act on it.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow the OS while the user has not made an explicit choice.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
      setTheme(event.matches ? 'dark' : 'light');
    };

    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
