const reg: RegExp = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

/**
 * Check if a string is url.
 * @category Url
 * @param {string} String to check.
 * @returns {boolean} If the given string is url.
 */
export default function isUrl(path: string): boolean {
  return reg.test(path);
}
