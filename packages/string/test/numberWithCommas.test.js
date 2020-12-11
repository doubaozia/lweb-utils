import { numberWithCommas } from '../src';

describe('test numberWithCommas function', () => {
  test('use default decimal', () => {
    const value = numberWithCommas('123456.1234');
    expect(value).toBe('123,456.12');
  });

  test('use custom decimal', () => {
    const value = numberWithCommas('123456.1234', 3);
    expect(value).toBe('123,456.123');
  });
});
