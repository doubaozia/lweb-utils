import { getUrlParam } from '../src';

describe('test getUrlParam function', () => {
  beforeAll(() => {
    const url = 'http://www.abc.com?a=1&b=2&c=3';
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
      },
    });
  });

  test('no param', () => {
    const result = getUrlParam();
    expect(result).toEqual({ a: '1', b: '2', c: '3' });
  });

  test('use default url', () => {
    const result = getUrlParam('a');
    expect(result).toBe('1');
  });

  test('use specified url', () => {
    const result = getUrlParam('a', 'http://www.abc.com?a=2&b=3&c=4');
    expect(result).toBe('2');
  });

  test('use specified url and no param', () => {
    const result = getUrlParam(null, 'http://www.abc.com?a=2&b=3&c=4');
    expect(result).toEqual({ a: '2', b: '3', c: '4' });
  });

  test('URL is not a global function and no param', () => {
    window.URL = null;
    const result = getUrlParam();
    expect(result).toEqual({ a: '1', b: '2', c: '3' });
  });

  test('URL is not a global function and has param', () => {
    window.URL = null;
    const result = getUrlParam('a');
    expect(result).toBe('1');
  });

  test('URL is not a global function and has param but not found', () => {
    window.URL = null;
    const result = getUrlParam('d');
    expect(result).toBe(null);
  });
});
