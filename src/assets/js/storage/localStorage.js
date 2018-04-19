/**
 * @Project Name: dogma
 * @Author: luichooy
 * @Date: 2018-02-07 10:53
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */
const localStorage = window.localStorage;
export default {
  getItem (key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      return null;
    }
  },
  setItem (key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },
  removeItem (key) {
    localStorage.removeItem(key);
  },
  clear () {
    localStorage.clear();
  },
  keys () {
    return localStorage.keys();
  }
};


