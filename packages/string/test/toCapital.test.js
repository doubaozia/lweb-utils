import { toCapital } from '../src';

describe('test toCapital function', () => {
  test('no param', () => {
    const value = toCapital();
    expect(value).toBe('');
  });

  test('param length is 0', () => {
    const value = toCapital('');
    expect(value).toBe('');
  });

  test('capital case', () => {
    const value = toCapital('abcd');
    expect(value).toBe('Abcd');
  });
});
