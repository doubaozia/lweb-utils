import { numberWithCommas } from '../src';

describe('test numberWithCommas function', () => {
  test('use default decimal', () => {
    const value1 = numberWithCommas('123456.1234');
    expect(value1).toBe('123,456.12');
    const value2 = numberWithCommas('1234567');
    expect(value2).toBe('1,234,567.00');
  });

  test('use custom decimal', () => {
    const value = numberWithCommas('123456.1234', 3);
    expect(value).toBe('123,456.123');
  });
});
