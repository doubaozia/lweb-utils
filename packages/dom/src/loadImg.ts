/**
 * Loading a image asynchronous.
 * @category Dom
 * @param {string|object} The image url.
 * @param {function} Callback function.
 */
export default function loadImg(
  url: string|object,
  callback: (success: boolean) => void,
): HTMLImageElement | null {
  const img: HTMLImageElement = document.createElement('img');

  if (typeof url === 'object') {
    Object.keys(url).forEach((key) => {
      img[key] = url[key];
    });
  } else {
    img.async = true;
    img.src = url;
  }

  const entry = document.getElementsByTagName('script')[0];
  if (entry && entry.parentNode) {
    entry.parentNode.insertBefore(img, entry);
  } else {
    callback(false);
    return null;
  }

  img.onreadystatechange = () => {
    const rdyState = img.readyState;

    if (!rdyState || /complete|loaded/.test(rdyState as string)) {
      callback(true);
      img.onload = null;
      img.onreadystatechange = null;
    } else {
      callback(false);
    }
  };

  img.onload = img.onreadystatechange;

  return img;
}
