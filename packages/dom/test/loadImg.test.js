import { loadImg } from '../src';

describe('test loadImg function', () => {
  const url = 'https://lilithimage.oss-cn-shanghai.aliyuncs.com/l-ow/logo.png';

  test('no entry script tag', (done) => {
    const callback = (data) => {
      try {
        expect(data).toBeFalsy();
        done();
      } catch (error) {
        done(error);
      }
    };
    loadImg(url, callback);
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
    const s = loadImg(url, callback);
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
    const s = loadImg({ url }, callback);
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
    const s = loadImg({ url }, callback);
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
    const s = loadImg({ url }, callback);
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
    const s = loadImg({ url }, callback);
    s.readyState = 'abc';
    s.onload();
  });
});
