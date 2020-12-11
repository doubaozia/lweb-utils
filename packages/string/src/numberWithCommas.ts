/**
 * Parse a string into comma splited format.
 * @category String
 * @param {string} The string formed with numbers.
 * @param {number} The decimal numbers.
 * @returns {string} Number with comma.
 */
export default function numberWithCommas(x: string, d: number = 2): string {
  return parseFloat(x).toFixed(d).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
