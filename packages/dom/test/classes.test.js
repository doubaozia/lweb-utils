import { hasClass, addClass, removeClass } from '../src';

describe('test hasClass function', () => {
  test('existing class', () => {
    const div = document.createElement('div');
    div.className = 'test';
    const has = hasClass(div, 'test');
    expect(has).toBeTruthy();
  });

  test('nonexistent class', () => {
    const div = document.createElement('div');
    div.className = 'test';
    const has = hasClass(div, 'test1');
    expect(has).toBeFalsy();
  });
});

describe('test addClass function', () => {
  test('add nonexistent class', () => {
    const div = document.createElement('div');
    addClass(div, 'test');
    const cls = div.className;
    expect(cls).toBe('test');
  });

  test('add existing class', () => {
    const div = document.createElement('div');
    div.className = 'test';
    addClass(div, 'test');
    const cls = div.className;
    expect(cls).toBe('test');
  });

  test('add nonexistent class and className not empty', () => {
    const div = document.createElement('div');
    div.className = 'test';
    addClass(div, 'test1');
    const cls = div.className;
    expect(cls).toBe('test test1');
  });
});

describe('test removeClass function', () => {
  test('remove not exist class', () => {
    const div = document.createElement('div');
    div.className = 'test';
    removeClass(div, 'test1');
    const cls = div.className;
    expect(cls).toBe('test');
  });

  test('remove existing class', () => {
    const div = document.createElement('div');
    div.className = 'test';
    removeClass(div, 'test');
    const cls = div.className;
    expect(cls).toBe('');
  });

  test('remove existing class and not only one', () => {
    const div = document.createElement('div');
    div.className = 'test test1';
    removeClass(div, 'test1');
    const cls = div.className;
    expect(cls).toBe('test');
  });
});
