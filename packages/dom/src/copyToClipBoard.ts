/**
 * Copy text to clipboard.
 * @category Dom
 * @param {string} Text to copy.
 * @returns {boolean} If the copy is success.
 */
export default function copyTextToClipBoard(text: string) {
  const textArea = document.createElement('textarea');

  textArea.style.position = 'fixed';
  textArea.style.top = '0px';
  textArea.style.left = '0px';

  textArea.style.width = '2em';
  textArea.style.height = '2em';

  textArea.style.padding = '0px';

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  textArea.style.background = 'transparent';

  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();
  let result;

  try {
    const successful = document.execCommand('copy');
    result = successful || false;
  } catch (err) {
    result = false;
  }
  document.body.removeChild(textArea);
  return result;
}
