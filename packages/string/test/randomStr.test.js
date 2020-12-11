import { randomStr } from '../src';

describe('test randomStr function', () => {
  test('use default length', () => {
    const value = randomStr();
    expect(value.length).toBe(4);
  });

  test('use custom length', () => {
    const value = randomStr(10);
    expect(value.length).toBe(10);
  });
});
