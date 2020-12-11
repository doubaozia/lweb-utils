import { ready } from '../src';

describe('test ready function', () => {
  beforeAll(() => {
    let rdyState = '';
    Object.defineProperty(document, 'readyState', {
      get: () => rdyState,
      set: (name) => {
        rdyState = name;
      },
    });
  });

  test('ready state is not loading', () => {
    const callback = jest.fn();
    document.readyState = 'complete';
    ready(callback);
    expect(callback).toHaveBeenCalled();
  });

  test('ready state is loading and addEventListener exists', () => {
    const callback = jest.fn();
    document.readyState = 'loading';
    ready(callback);
    expect(callback.mock.calls.length).toBe(0);
  });

  test('ready state is complete and addEventListener not exists', (done) => {
    const callback = () => done();
    window.addEventListener = null;
    window.attachEvent = (name, cb) => {
      if (name === 'onreadystatechange') {
        setTimeout(() => {
          cb();
        }, 100);
      }
    };
    document.readyState = 'loading';
    ready(callback);
    document.readyState = 'complete';
  });

  test('ready state isn\'t complete and addEventListener not exists', (done) => {
    const callback = () => done('error');
    window.addEventListener = null;
    window.attachEvent = (name, cb) => {
      if (name === 'onreadystatechange') {
        setTimeout(() => {
          cb();
        }, 100);
      }
    };
    document.readyState = 'loading';
    ready(callback);
    setTimeout(() => {
      done();
    }, 200);
  });
});
