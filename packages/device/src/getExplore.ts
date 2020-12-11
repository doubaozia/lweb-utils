interface SysType {
  wxwork?: string;
  wx?: string;
  ie?: string;
  edge?: string;
  firefox?: string;
  opera?: string;
  chrome?: string;
  safari?: string;
}

/**
 * Get current explore info.
 * @category Device
 * @returns {string} Returns the explore string.
 */
export default function getExplore(): string {
  const sys: SysType = {};
  const ua = navigator.userAgent.toLowerCase();

  const regMap = {
    wxwork: /wxwork\/([\d.]+)/i,
    wx: /MicroMessenger\/([\d.]+)/i,
    ie: [/rv:([\d.]+)\) like gecko/i, /msie ([\d.]+)/i],
    edge: /edge\/([\d.]+)/i,
    firefox: /firefox\/([\d.]+)/i,
    opera: /(?:opera|opr).([\d.]+)/i,
    chrome: /chrome\/([\d.]+)/i,
    safari: /version\/([\d.]+).*safari/i,
  };

  Object.entries(regMap).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        const s = ua.match(<RegExp>v);
        if (s) {
          [, sys[key]] = s;
        }
      });
    } else {
      const s = ua.match(<RegExp>value);
      if (s) {
        [, sys[key]] = s;
      }
    }
  });
  // 根据关系进行判断
  const kv = Object.entries(sys).find((entry) => entry);
  if (kv) {
    return `${kv[0]}: ${kv[1]}`;
  }

  return '';
}
