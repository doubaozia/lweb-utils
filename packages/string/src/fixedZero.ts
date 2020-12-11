/**
 * Return a two digits number.
 * @category String
 * @param {number} The number to parse.
 * @returns {string} Parsed string.
 */
export default function fixedZero(val: number): string {
  return val * 1 < 10 ? `0${val}` : `${val}`;
}
