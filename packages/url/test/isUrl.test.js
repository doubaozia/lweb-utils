import { isUrl } from '../src';

describe('test isUrl function', () => {
  test('return true', () => {
    const result = isUrl('http://www.abc.com');
    expect(result).toBeTruthy();
  });

  test('return false', () => {
    const result = isUrl('www.abc.com');
    expect(result).toBeFalsy();
  });
});
