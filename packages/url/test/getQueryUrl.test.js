import { getQueryUrl } from '../src';

describe('test getQueryUrl function', () => {
  test('url has query', () => {
    const url = 'http://www.abc.com?a=1';
    const result = getQueryUrl(url, { b: 2 });
    expect(result).toBe('http://www.abc.com?a=1&b=2');
  });

  test('url hasn\'t query', () => {
    const url = 'http://www.abc.com';
    const result = getQueryUrl(url, { a: 1 });
    expect(result).toBe('http://www.abc.com?a=1');
  });
});
