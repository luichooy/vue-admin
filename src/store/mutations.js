import { sessionStorage } from '../common/utils/storage'

const mutations = {
  SET_USER(state, user) {
    state.user = user
    sessionStorage.setItem('user', user)
  },
  SET_TOKEN(state, token) {
    state.token = token
    sessionStorage.setItem('token', token)
  }
}

export default mutations
