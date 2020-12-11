/**
 * Parse a string into capital case.
 * @category String
 * @param {string} String to parse.
 * @returns {string} Capital case string.
 */
export default function toCapital(string?: string): string {
  if (!string || !string.length) {
    return '';
  }
  return string.replace(/^./, string[0].toUpperCase());
}
