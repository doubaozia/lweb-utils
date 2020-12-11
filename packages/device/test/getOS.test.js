import { getOS } from '../src';

describe('test getOS function', () => {
  beforeAll(() => {
    Object.defineProperty(window.navigator, 'userAgent', ((value) => ({
      get() { return value; },
      // eslint-disable-next-line no-param-reassign
      set(v) { value = v; },
    }))(window.navigator.userAgent));
  });

  test('ios', () => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
    const os = getOS();
    expect(os).toBe('ios');
  });

  test('android', () => {
    navigator.userAgent = 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36';
    const os = getOS();
    expect(os).toBe('android');
  });

  test('windows phone', () => {
    navigator.userAgent = 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263';
    const os = getOS();
    expect(os).toBe('windowsPhone');
  });

  test('no match any', () => {
    navigator.userAgent = 'abc';
    const os = getOS();
    expect(os).toBe('');
  });

  test('userAgent not exists', () => {
    navigator.userAgent = null;
    const os = getOS();
    expect(os).toBe('');
  });
});
