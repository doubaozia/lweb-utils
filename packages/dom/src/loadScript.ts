/**
 * Loading a script asynchronous.
 * @category Dom
 * @param {string} The script url.
 * @param {function} Callback function.
 */
export default function loadScript(
  url: string | object,
  callback: (success: boolean) => void,
): HTMLScriptElement | null {
  const script = document.createElement('script');

  if (typeof url === 'object') {
    Object.keys(url).forEach((key) => {
      script[key] = url[key];
    });
  } else {
    script.async = true;
    script.src = url;
  }

  const entry: HTMLElement = document.getElementsByTagName('script')[0];
  if (entry && entry.parentNode) {
    entry.parentNode.insertBefore(script, entry);
  } else {
    callback(false);
    return null;
  }

  // eslint-disable-next-line no-multi-assign
  script.onload = (script as any).onreadystatechange = function onreadystatechange() {
    const rdyState = this.readyState;

    if (!rdyState || /complete|loaded/.test(rdyState)) {
      callback(true);

      this.onload = null;
      this.onreadystatechange = null;
    } else {
      callback(false);
    }
  };

  return script;
}
