/* eslint-disable no-param-reassign */

const rAF = (window as any).requestAnimationFrame
  || (window as any).mozRequestAnimationFrame
  || (window as any).msRequestAnimationFrame
  || (window as any).webkitRequestAnimationFrame
  || ((cb: () => void) => setTimeout(cb, 1000 / 60));

export function enableScroll(el: HTMLElement, canScroll = true) {
  if (canScroll) {
    el.style.overflow = 'auto';
    (el.style as any).WebkitOverflowScrolling = 'touch';
  } else {
    el.style.overflow = 'hidden';
    (el.style as any).WebkitOverflowScrolling = 'auto';
  }
}

/**
 * Make a smooth scroll in a html element.
 * @category Dom
 * @param {HTMLElement} The container element to scroll.
 * @param {number} Scroll distance.
 * @param {number} Total scroll time, specified with millisecond.
 */
const scrollTo = (el: HTMLElement, target: number, duration?: number) => {
  enableScroll(el, false);

  if (!duration) {
    el.scrollTop = target;
    enableScroll(el, true);
    return;
  }

  const initialOffset = el.scrollTop;
  const speed = Math.abs(target - initialOffset) / duration;

  const step = (time: number) => {
    if (target > initialOffset) {
      const curTime = +new Date();
      const delta = curTime - time;
      if (Math.round(el.scrollTop) < target) {
        rAF(() => {
          const toScrollTop = Math.round(Math.min(el.scrollTop + speed * delta, target));
          el.scrollTop = toScrollTop;
          // 在使用缩放的操作系统中，el.scrollTop可能是个小数
          if (Math.round(el.scrollTop) === toScrollTop) {
            step(curTime);
          }
        });
      }
    }
    if (target < initialOffset) {
      const curTime = +new Date();
      const delta = curTime - time;
      if (Math.round(el.scrollTop) > target) {
        rAF(() => {
          const toScrollTop = Math.round(Math.min(el.scrollTop - speed * delta, target));
          el.scrollTop = toScrollTop;
          // 在使用缩放的操作系统中，el.scrollTop可能是个小数
          if (Math.round(el.scrollTop) === toScrollTop) {
            step(curTime);
          }
        });
      }
    }
  };

  step(+new Date());
  enableScroll(el, true);
};

export default scrollTo;
