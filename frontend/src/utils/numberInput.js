/**
 * Allows in-progress numeric typing (empty string, "-", "12", "-1.2", etc).
 * Useful for controlled inputs.
 */
export function isAllowedNumberInput(value) {
  return value === '' || value === '-' || /^-?\d*\.?\d*$/.test(value);
}

