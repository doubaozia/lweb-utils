import { requestWithoutAjax } from '../src';

describe('test requestWithoutAjax function', () => {
  beforeAll(() => {
    window.HTMLFormElement.prototype.submit = () => {};
  });

  test('use default params and method', (done) => {
    requestWithoutAjax('http://www.abc.com');
    expect(document.getElementsByTagName('iframe').length).toBe(1);
    setTimeout(() => {
      expect(document.getElementsByTagName('iframe').length).toBe(0);
      done();
    }, 600);
  });

  test('use custom params and method', (done) => {
    requestWithoutAjax('http://www.abc.com', { a: 1, b: 2 }, 'put');
    expect(document.getElementsByTagName('iframe').length).toBe(1);
    setTimeout(() => {
      expect(document.getElementsByTagName('iframe').length).toBe(0);
      done();
    }, 600);
  });
});
