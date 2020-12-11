/**
 * Get cookie value by name.
 * @category Storage
 * @param {string} Cookie name.
 * @returns {string} Cookie value.
 */
export function getCookie(name: string): string {
  const arr = document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < arr.length; i += 1) {
    const tempArr = arr[i].split('=');
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

/**
 * Set cookie.
 * @category Storage
 * @param {string} Cookie name.
 * @param {string} Cookie value.
 * @param {number} Cookie expire days.
 * @param {string} Cookie domain.
 * @param {string} Cookie path.
 */
export function setCookie(
  name: string,
  value: string,
  days?: number,
  domain?: string,
  path?: string,
): void {
  const date = new Date();
  const p = path || '/';
  const d = days || 0;
  date.setDate(date.getDate() + d);
  document.cookie = `${name}=${value};expires=${date}${domain ? `;domain=${domain}` : ''}${path ? `;path=${p}` : ''}`;
}

/**
 * Remove cookie.
 * @category Storage
 * @param {string} Cookie name.
 */
export function removeCookie(name: string): void {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1);
}
