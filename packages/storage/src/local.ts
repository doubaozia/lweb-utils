export interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

/**
 * Get the value from given storage.
 * @category Storage
 * @param {Storage} The storage object.
 * @param {string} The storage key.
 * @param {boolean} If the storage value is object.
 * @param {any} Default storage value.
 * @returns {any} The storage value.
 */
export function getStorage(
  storage: Storage,
  key: string,
  isObject?: boolean,
  defaultValue?: any,
): any {
  if (!isObject) {
    return storage.getItem(key);
  }
  let value;
  try {
    value = JSON.parse(<string>storage.getItem(key)) || defaultValue;
  } catch (e) {
    value = defaultValue;
  }
  return value;
}

/**
 * Set the value from given storage.
 * @category Storage
 * @param {Storage} The storage object.
 * @param {string} The storage key.
 * @param {any} The storage value.
 */
export function setStorage(storage: Storage, key: string, value: any) {
  if (typeof value === 'object') {
    return storage.setItem(key, JSON.stringify(value));
  }
  return storage.setItem(key, value);
}

/**
 * Get the value of localstorage.
 * @category Storage
 * @param {string} The localstorage key.
 * @param {boolean} If the localstorage value is object.
 * @param {any} The localstorage default value.
 * @returns {any} The localstorage value.
 */
export function getLocalStorage(key: string, isObject?: boolean, defaultValue?: any): any {
  return getStorage(localStorage, key, isObject, defaultValue);
}

/**
 * Get the value of sessionstorage.
 * @category Storage
 * @param {string} The sessionstorage key.
 * @param {boolean} If the sessionstorage value is object.
 * @param {any} The sessionstorage default value.
 * @returns {any} The sessionstorage value.
 */
export function getSessionStorage(key: string, isObject?: boolean, defaultValue?: any): any {
  return getStorage(sessionStorage, key, isObject, defaultValue);
}

/**
 * Set the value of localstorage.
 * @category Storage
 * @param {string} The localstorage key.
 * @param {any} The localstorage value.
 */
export function setLocalStorage(key: string, value: any) {
  return setStorage(localStorage, key, value);
}

/**
 * Set the value of sessionstorage.
 * @category Storage
 * @param {string} The sessionstorage key.
 * @param {any} The sessionstorage value.
 */
export function setSessionStorage(key: string, value: any) {
  return setStorage(sessionStorage, key, value);
}
