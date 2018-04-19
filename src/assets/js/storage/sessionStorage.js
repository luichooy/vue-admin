/**
 * @Project Name: dogma
 * @Author: luichooy
 * @Date: 2018-04-10 14:04
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */



const sessionStorage = window.sessionStorage;
export default {
  getItem(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
      return null;
    }
  },
  setItem(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
  },
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  }
}
