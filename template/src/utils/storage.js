export const local = {
  /**
   *
   * @param {StorageKeys} key
   * @param {any} value
   */
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   *
   * @param {StorageKeys} key
   * @returns
   */
  getItem(key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
  /**
   *
   * @param {StorageKeys} key
   */
  removeItem(key) {
    localStorage.removeItem(key);
  },
};

export const session = {
  /**
   *
   * @param {StorageKeys} key
   * @param {string} value
   */
  setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  /**
   *
   * @param {StorageKeys} key
   * @returns
   */
  getItem(key) {
    const value = sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
  /**
   *
   * @param {StorageKeys} key
   */
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
};

export const asyncLocal = {
  /**
   *
   * @param {StorageKeys} key
   * @param {any} value
   */
  setItem(key, value) {
    return new Promise((res, rej) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        res(true);
      } catch (error) {
        rej(error);
      }
    });
  },
  /**
   *
   * @param {StorageKeys} key
   * @returns
   */
  getItem(key) {
    return new Promise((res, rej) => {
      const value = localStorage.getItem(key);
      try {
        res(JSON.parse(value));
      } catch (error) {
        rej(error);
      }
    });
  },
  /**
   *
   * @param {StorageKeys} key
   */
  removeItem(key) {
    return new Promise((res, rej) => {
      try {
        localStorage.removeItem(key);
        res(true);
      } catch (error) {
        rej(error);
      }
    });
  },
};
