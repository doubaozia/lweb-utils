import { addEvent, removeEvent, checkPassiveSupport } from '../src';

describe('test addEvent function', () => {
  test('attachEvent not exists and event successful', () => {
    const div = document.createElement('div');
    const callback = jest.fn();
    addEvent(div, 'click', callback);
    div.click();
    expect(callback).toHaveBeenCalled();
  });

  test('attachEvent exists and event successful', () => {
    const div = document.createElement('div');
    const map = {};
    div.attachEvent = jest.fn().mockImplementationOnce((name, cb) => {
      map[name] = cb;
    });
    div.click = jest.fn().mockImplementationOnce(() => {
      map.onclick();
    });
    const callback = jest.fn();
    addEvent(div, 'click', callback);
    div.click();
    expect(callback).toHaveBeenCalled();
  });
});

describe('test removeEvent function', () => {
  test('detachEvent not exists and remove fail', () => {
    const div = document.createElement('div');
    const callback = jest.fn();
    div.detachEvent = null;
    div.addEventListener('click', callback, false);
    div.click();
    expect(callback.mock.calls.length).toBe(1);
    removeEvent(div, 'click', callback);
    div.click();
    expect(callback.mock.calls.length).toBe(1);
  });

  test('detachEvent exists and remove succesful', () => {
    const div = document.createElement('div');
    const map = {};
    div.attachEvent = jest.fn().mockImplementationOnce((name, cb) => {
      map[`on${name}`] = cb;
    });
    div.detachEvent = jest.fn().mockImplementationOnce((name) => {
      delete map[`on${name}`];
    });
    div.click = jest.fn().mockImplementationOnce(() => {
      if (map.onclick) {
        map.onclick();
      }
    });
    const callback = jest.fn();
    div.attachEvent('click', callback);
    div.click();
    expect(callback.mock.calls.length).toBe(1);
    removeEvent(div, 'click', callback);
    div.click();
    expect(callback.mock.calls.length).toBe(1);
  });
});

describe('test not support passive', () => {
  test('not support passive', () => {
    Object.defineProperty = jest.fn().mockImplementationOnce(() => {
      throw new Error('test');
    });
    const passiveSupport = checkPassiveSupport();
    expect(passiveSupport).toBeFalsy();
    const div = document.createElement('div');
    const callback = jest.fn();
    addEvent(div, 'click', callback);
    div.click();
    expect(callback).toHaveBeenCalled();
    removeEvent(div, 'click', callback);
    div.click();
    expect(callback.mock.calls.length).toBe(1);
  });
});
