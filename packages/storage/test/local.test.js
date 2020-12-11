import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage,
} from '../src';

describe('test getLocalStorage function', () => {
  test('key', () => {
    localStorage.setItem('a', 1);
    const value = getLocalStorage('a');
    expect(value).toBe('1');
  });

  test('isObject is true and value is object', () => {
    localStorage.setItem('a', '{"a": 1}');
    const value = getLocalStorage('a', true);
    expect(value).toEqual({ a: 1 });
  });

  test('isObject is true and value is not a object', () => {
    localStorage.setItem('a', '{"a": 1');
    const value = getLocalStorage('a', true);
    expect(value).toBeUndefined();
  });

  test('value is object and defaultValue exists', () => {
    localStorage.setItem('a', '{"a": 1}');
    const value = getLocalStorage('a', true, 'default');
    expect(value).toEqual({ a: 1 });
  });

  test('value is not a object and defaultValue exists', () => {
    localStorage.setItem('a', '{"a": 1');
    const value = getLocalStorage('a', true, 'default');
    expect(value).toBe('default');
  });

  test('key not exists', () => {
    const value = getLocalStorage('b', true, 'default');
    expect(value).toBe('default');
  });
});

describe('test getSessionStorage function', () => {
  test('key', () => {
    sessionStorage.setItem('a', 1);
    const value = getSessionStorage('a');
    expect(value).toBe('1');
  });

  test('isObject is true and value is object', () => {
    sessionStorage.setItem('a', '{"a": 1}');
    const value = getSessionStorage('a', true);
    expect(value).toEqual({ a: 1 });
  });

  test('isObject is true and value is not a object', () => {
    sessionStorage.setItem('a', '{"a": 1');
    const value = getSessionStorage('a', true);
    expect(value).toBeUndefined();
  });

  test('value is object and defaultValue exists', () => {
    sessionStorage.setItem('a', '{"a": 1}');
    const value = getSessionStorage('a', true, 'default');
    expect(value).toEqual({ a: 1 });
  });

  test('value is not a object and defaultValue exists', () => {
    sessionStorage.setItem('a', '{"a": 1');
    const value = getSessionStorage('a', true, 'default');
    expect(value).toBe('default');
  });
});

describe('test setLocalStorage function', () => {
  test('value is object', () => {
    setLocalStorage('a', { a: 1 });
    expect(localStorage.getItem('a')).toEqual('{"a":1}');
  });

  test('value is not an object', () => {
    setLocalStorage('a', 1);
    expect(localStorage.getItem('a')).toBe('1');
  });
});

describe('test setSessionStorage function', () => {
  test('value is object', () => {
    setSessionStorage('a', { a: 1 });
    expect(sessionStorage.getItem('a')).toEqual('{"a":1}');
  });

  test('value is not an object', () => {
    setSessionStorage('a', 1);
    expect(sessionStorage.getItem('a')).toBe('1');
  });
});
