import qs from 'qs';

/**
 * Get full url with given params as query string.
 * @category Url
 * @param {string} The url string.
 * @param {any} query params.
 * @returns {string} Full url with query.
 */
export default function getQueryUrl(url: string, params: any): string {
  const symbol = url.includes('?') ? '&' : '?';
  const qStr = qs.stringify(params, {
    arrayFormat: 'brackets',
  });
  return `${url}${qStr && symbol}${qStr}`;
}
