/**
 * Check if current browser enviroment support passive.
 * @category Dom
 * @returns {boolean} If passive support.
 */
export function checkPassiveSupport(): boolean {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassive = true;
        return '';
      },
    });
    window.addEventListener('test', () => {}, opts);
  } catch (e) {
    supportsPassive = false;
  }
  return supportsPassive;
}

/**
 * Register an event listener to a html element.
 * @category Dom
 * @param {any} Html element.
 * @param {string} Event name.
 * @param {function} Event callback function.
 */
export function addEvent(element: any, name: string, callback: (e: any) => void) {
  if (element.attachEvent) {
    element.attachEvent(`on${name}`, (e: any) => {
      callback.call(element, e);
    });
  } else {
    const supportsPassive = checkPassiveSupport();
    element.addEventListener(name, callback, supportsPassive ? { passive: true } : false);
  }
}

/**
 * Remove an event listerner from a html element.
 * @category Dom
 * @param {any} Html element.
 * @param {string} Event name.
 * @param {function} Event callback function.
 */
export function removeEvent(element: any, name: string, callback: () => void) {
  if (element.detachEvent) {
    element.detachEvent(`on${name}`, callback);
  } else {
    const supportsPassive = checkPassiveSupport();
    element.removeEventListener(name, callback, supportsPassive ? { passive: true } : false);
  }
}
