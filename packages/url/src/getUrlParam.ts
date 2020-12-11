/**
 * Get url params from the full url with query.
 * @category Url
 * @param {string} The query param name.
 * @param {string} The url sting.
 * @returns {string|null|object} Proper query value or null or all query params.
 */
export default function getUrlParam(param?: string, url?: string): string | null | object {
  const curUrl = url || window.location.href;
  if (typeof URL !== 'function') {
    const params = {};
    const search = decodeURIComponent(curUrl.slice(curUrl.indexOf('?') + 1));
    const definitions = search.split('&');

    definitions.forEach((val) => {
      const [key, value] = val.split('=', 2);
      params[key] = value;
    });

    if (!param) {
      return params;
    }
    if (param in params) {
      return params[param];
    }

    return null;
  }

  const { searchParams } = new URL(curUrl);
  if (!param) {
    const params = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }
  return searchParams.get(param);
}
