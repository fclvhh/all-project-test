

const state = {
  user:{},
  token:''
}
const getters = {}
const mutations = {
  setToken(state,payload) {
    state.user = payload
    state.token = payload.token
    sessionStorage.setItem('token',JSON.stringify(state.token))
    sessionStorage.setItem('user',JSON.stringify(state.user))
  },
  getUserLogin(state,payload) {
   const user = sessionStorage.getItem('user')
    if(user) {
      state.user = JSON.parse(user)
      state.token = state.user.token
    }
  },
  signOutHandle(state,payload) {
    state.user = {}
    state.token = ''
    sessionStorage.clear()
  }
}
const actions = {}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}