import { copyToClipBoard } from '../src';

describe('test copyToClipBoard function', () => {
  test('execCommand return false', () => {
    document.execCommand = jest.fn().mockReturnValueOnce(false);

    const result = copyToClipBoard('test');
    expect(result).toBeFalsy();
  });

  test('execCommand throw error', () => {
    document.execCommand = jest.fn(() => {
      throw new Error('failed');
    });

    const result = copyToClipBoard('test');
    expect(result).toBeFalsy();
  });

  test('copy successful', () => {
    document.execCommand = jest.fn().mockReturnValue(true);

    const result = copyToClipBoard('test');
    expect(result).toBeTruthy();
  });
});
