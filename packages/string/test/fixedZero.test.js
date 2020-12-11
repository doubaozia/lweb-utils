import { fixedZero } from '../src';

describe('test fixedZero function', () => {
  test('number less than 10', () => {
    const value = fixedZero(3);
    expect(value).toBe('03');
  });

  test('number equal to 10', () => {
    const value = fixedZero(10);
    expect(value).toBe('10');
  });
});
