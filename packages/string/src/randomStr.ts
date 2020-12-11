/**
 * Generate a random string with given number.
 * @category String
 * @param {number} Generated string length.
 * @returns {string} Generated string.
 */
export default function randomStr(len: number = 4): string {
  const $chars = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678';
  const maxPos = $chars.length;
  let hash = '';
  for (let i = 0; i < len; i += 1) {
    hash += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return hash;
}
