/**
 * Check if an html element has proper class.
 * @category Dom
 * @param {HTMLElement} Html element.
 * @param {String} Class to check.
 * @returns {Boolean} Returns if the element has class.
 */
export function hasClass(ele: HTMLElement, cls: string) {
  const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
  return reg.test(ele.className);
}

/**
 * Add proper class to the html element.
 * @category Dom
 * @param  {HTMLElement} Html element.
 * @param  {String} Class to add.
 */
export function addClass(ele: HTMLElement, cls: string) {
  if (!hasClass(ele, cls)) {
    // eslint-disable-next-line no-param-reassign
    ele.className += `${ele.className ? ' ' : ''}${cls}`;
  }
}

/**
 * Remove proper class from html element.
 * @category Dom
 * @param {HTMLElement} Html element
 * @param {string} Class to remove.
 */
export function removeClass(ele: HTMLElement, cls: string) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
    // eslint-disable-next-line no-param-reassign
    ele.className = ele.className.replace(reg, '');
  }
}
