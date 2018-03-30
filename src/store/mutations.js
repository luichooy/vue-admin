import localStorage from 'src/assets/js/localStorage';

const mutations = {
  setUser (state, User) {
    localStorage.setItem('User', User);
    state.User = User;
  },
  setToken (state, Token) {
    localStorage.setItem('Token', Token);
    state.Token = Token;
  },
  setCurrentPath (state, pathArr) {
    state.currentPath = pathArr;
  }
};

export default mutations;
