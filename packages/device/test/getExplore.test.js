import { getExplore } from '../src';

describe('test getExplore function', () => {
  beforeAll(() => {
    Object.defineProperty(window.navigator, 'userAgent', ((value) => ({
      get() { return value; },
      // eslint-disable-next-line no-param-reassign
      set(v) { value = v; },
    }))(window.navigator.userAgent));
  });

  test('wechat work browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 wxwork/2.4.2 MicroMessenger/6.3.22 Language/zh';
    const explore = getExplore();
    expect(explore).toBe('wxwork: 2.4.2');
  });

  test('wechat browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 MicroMessenger/6.5.23 NetType/WIFI Language/zh_CN';
    const explore = getExplore();
    expect(explore).toBe('wx: 6.5.23');
  });

  test('ie browser 1', () => {
    navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko';
    const explore = getExplore();
    expect(explore).toBe('ie: 11.0');
  });

  test('ie browser 2', () => {
    navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)';
    const explore = getExplore();
    expect(explore).toBe('ie: 6.0');
  });

  test('edge browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134';
    const explore = getExplore();
    expect(explore).toBe('edge: 17.17134');
  });

  test('firefox browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:81.0) Gecko/20100101 Firefox/81.0';
    const explore = getExplore();
    expect(explore).toBe('firefox: 81.0');
  });

  test('opera browser', () => {
    navigator.userAgent = 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18';
    const explore = getExplore();
    expect(explore).toBe('opera: 9.80');
  });

  test('chrome browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36';
    const explore = getExplore();
    expect(explore).toBe('chrome: 86.0.4240.198');
  });

  test('safari browser', () => {
    navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1';
    const explore = getExplore();
    expect(explore).toBe('safari: 12.1');
  });

  test('no match any', () => {
    navigator.userAgent = 'abc';
    const explore = getExplore();
    expect(explore).toBe('');
  });
});
