import { sessionStorage } from 'src/assets/js/storage';

const mutations = {
  SET_USER (state, user) {
    sessionStorage.setItem('user', user);
    state.user = user;
  },
  SET_TOKEN (state, token) {
    sessionStorage.setItem('token', token);
    state.token = token;
  }
};

export default mutations;
