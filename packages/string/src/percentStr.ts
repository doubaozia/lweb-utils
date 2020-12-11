/**
 * Parse a number into percentage format.
 * @category String
 * @param {any} Parsed string or number.
 * @param {number} Decimal number.
 * @returns {any} Percentage format string.
 */
export default function percentStr(s: any, d: number = 2): any {
  if (typeof s !== 'string' && typeof s !== 'number') {
    return s;
  }
  /* eslint no-new-wrappers: 0 */
  /* eslint no-restricted-globals: 0 */
  if (isNaN(+s)) {
    return s;
  }
  return `${(parseFloat(<string>s) * 100).toFixed(d)}%`;
}
