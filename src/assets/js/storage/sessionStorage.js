const sessionStorage = window.sessionStorage;
export default {
  getItem (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
      return null;
    }
  },
  setItem (key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
  },
  removeItem (key) {
    sessionStorage.removeItem(key);
  },
  clear () {
    sessionStorage.clear();
  }
}
