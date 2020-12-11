import {
  getCookie,
  setCookie,
  removeCookie,
} from '../src';

describe('test getCookie function', () => {
  beforeAll(() => {
    document.cookie = 'a=1; b=2';
  });

  test('key exists', () => {
    const value = getCookie('a');
    expect(value).toBe('1');
  });

  test('key not exists', () => {
    const value = getCookie('c');
    expect(value).toBe('');
  });
});

describe('test setCookie function', () => {
  afterEach(() => {
    document.cookie = '';
  });

  test('only value', () => {
    setCookie('a', 1);
    expect(document.cookie).toBe('a=1');
  });

  test('value and days', () => {
    setCookie('a', 1, 1);
    expect(document.cookie).toBe('a=1; ');
  });

  test('value days and domain', () => {
    setCookie('a', 1, 1, 'www.baidu.com');
    expect(document.cookie).toBe('a=1; ');
  });

  test('value days domain and path', () => {
    setCookie('a', 1, 1, 'www.baidu.com', '/');
    expect(document.cookie).toBe('a=1; ');
  });
});

describe('test removeCookie function', () => {
  test('remove cookie', () => {
    document.cookie = 'a=1';
    removeCookie('a');
    expect(document.cookie).toBe('');
  });
});
