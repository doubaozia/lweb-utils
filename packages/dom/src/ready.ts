/**
 * Check if the document ready and do something.
 * @category Dom
 * @param {function} Callback function.
 */
export default function ready(fn: () => void) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', fn);
  } else {
    (window as any).attachEvent('onreadystatechange', () => {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
}
