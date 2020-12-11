import { loadScript } from '../src';

describe('test loadScript function', () => {
  const url = 'https://code.jquery.com/jquery-3.5.1.min.js';

  test('no entry script tag', (done) => {
    const callback = (data) => {
      try {
        expect(data).toBeFalsy();
        done();
      } catch (error) {
        done(error);
      }
    };
    loadScript(url, callback);
  });

  test('has entry script tag', (done) => {
    const script = document.createElement('script');
    document.body.appendChild(script);

    const callback = (data) => {
      try {
        expect(data).toBeTruthy();
        done();
      } catch (error) {
        done(error);
      }
    };
    const s = loadScript(url, callback);
    s.readyState = 'complete';
    s.onload();
  });

  test('first param is an object', (done) => {
    const script = document.createElement('script');
    document.body.appendChild(script);

    const callback = (data) => {
      try {
        expect(data).toBeTruthy();
        done();
      } catch (error) {
        done(error);
      }
    };
    const s = loadScript({ url }, callback);
    s.readyState = 'complete';
    s.onload();
  });

  test('readyState is null', (done) => {
    const script = document.createElement('script');
    document.body.appendChild(script);

    const callback = (data) => {
      try {
        expect(data).toBeTruthy();
        done();
      } catch (error) {
        done(error);
      }
    };
    const s = loadScript({ url }, callback);
    s.readyState = null;
    s.onload();
  });

  test('readyState is loaded', (done) => {
    const script = document.createElement('script');
    document.body.appendChild(script);

    const callback = (data) => {
      try {
        expect(data).toBeTruthy();
        done();
      } catch (error) {
        done(error);
      }
    };
    const s = loadScript({ url }, callback);
    s.readyState = 'loaded';
    s.onload();
  });

  test('readyState is other value', (done) => {
    const script = document.createElement('script');
    document.body.appendChild(script);

    const callback = (data) => {
      try {
        expect(data).toBeFalsy();
        done();
      } catch (error) {
        done(error);
      }
    };
    const s = loadScript({ url }, callback);
    s.readyState = 'abc';
    s.onload();
  });
});
