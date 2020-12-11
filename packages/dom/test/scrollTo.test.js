import { scrollTo, enableScroll } from '../src';

describe('test enableScroll function', () => {
  test('disable', () => {
    const div = document.createElement('div');
    enableScroll(div, false);
    expect(div.style.overflow).toBe('hidden');
    expect(div.style.WebkitOverflowScrolling).toBe('auto');
  });

  test('enable', () => {
    const div = document.createElement('div');
    enableScroll(div, true);
    expect(div.style.overflow).toBe('auto');
    expect(div.style.WebkitOverflowScrolling).toBe('touch');
  });
});

describe('test scrollTo function', () => {
  test('no duration', () => {
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100px';
    const child = document.createElement('div');
    child.style.width = '100%';
    child.style.height = '1000px';
    div.appendChild(child);
    document.body.appendChild(div);
    scrollTo(div, 500);
    expect(div.scrollTop).toBe(500);
  });

  test('has duration and scroll down', (done) => {
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100px';
    const child = document.createElement('div');
    child.style.width = '100%';
    child.style.height = '1000px';
    div.appendChild(child);
    document.body.appendChild(div);
    scrollTo(div, 500, 200);
    expect(div.scrollTop).toBeGreaterThanOrEqual(0);
    expect(div.scrollTop).toBeLessThan(500);
    setTimeout(() => {
      try {
        expect(div.scrollTop).toBe(500);
        done();
      } catch (error) {
        done(error);
      }
    }, 300);
  });

  test('has duration and scroll up', (done) => {
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100px';
    const child = document.createElement('div');
    child.style.width = '100%';
    child.style.height = '1000px';
    div.appendChild(child);
    document.body.appendChild(div);
    div.scrollTop = 500;
    scrollTo(div, 0, 200);
    expect(div.scrollTop).toBeLessThanOrEqual(500);
    expect(div.scrollTop).toBeGreaterThan(0);
    setTimeout(() => {
      try {
        expect(div.scrollTop).toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    }, 300);
  });
});
