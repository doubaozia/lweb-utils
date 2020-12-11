/**
 * Use form to make a request rather than ajax.
 * @category Dom
 * @param {string} The request url.
 * @param {object} The request params.
 * @param {string} The request method.
 */
export default function requestWithoutAjax(
  url: string,
  params?: object,
  method?: string,
) {
  const newParams = params || {};
  const newMethod = method || 'post';

  // function to remove the iframe
  const removeIframe = (iframe: HTMLIFrameElement) => {
    (iframe.parentNode as HTMLElement).removeChild(iframe);
  };

  // make a iframe...
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';

  iframe.onload = function onload() {
    const iframeDoc = this.contentWindow.document;

    // Make a invisible form
    const form = iframeDoc.createElement('form');
    form.method = newMethod;
    form.action = url;
    iframeDoc.body.appendChild(form);

    // pass the parameters
    Object.keys(newParams).forEach((name) => {
      const input = iframeDoc.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = newParams[name];
      form.appendChild(input);
    });

    form.dispatchEvent(new Event('submit'));
    // remove the iframe
    setTimeout(() => {
      removeIframe(iframe);
    }, 500);
  };

  document.body.appendChild(iframe);
}
