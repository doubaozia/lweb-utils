import { percentStr } from '../src';

describe('test percentStr function', () => {
  test('first param is not string or number', () => {
    const value = percentStr({ a: 1 });
    expect(value).toEqual({ a: 1 });
  });

  test('first param is string but not a number format', () => {
    const value = percentStr('abc');
    expect(value).toBe('abc');
  });

  test('first param is number', () => {
    const value = percentStr(0.123);
    expect(value).toBe('12.30%');
  });

  test('custom decimal', () => {
    const value = percentStr(0.123, 3);
    expect(value).toBe('12.300%');
  });
});
