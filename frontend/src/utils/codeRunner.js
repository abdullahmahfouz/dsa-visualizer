/**
 * codeRunner.js - Async bridge to the Python execution backend.
 *
 * Sends user code to POST /api/sandbox/run and returns the snapshot array.
 * All sandboxing and safety constraints live in the Flask route.
 */

export async function runCode(code) {
  const res = await fetch('/api/sandbox/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!res.ok) throw new Error(`Server error (${res.status})`);
  return res.json(); // { snapshots, error, errorLine }
}
