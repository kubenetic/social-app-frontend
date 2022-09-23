export default {
  namespaced: true,
  state: () => ({
    currentUser: {}
  }),
  getters: {
    currentUser (state) {
      return state.currentUser
    },
    isLoggedIn (state) {
      return state.currentUser && state.currentUser.loggedIn
    }
  },
  mutations: {
    login (state, user) {
      state.currentUser = user
      state.currentUser.loggedIn = true
    },
    logout (state) {
      state.currentUser = null
    }
  },
  actions: {
    async login (context, payload) {
      const user = context.rootGetters['userStore/getUserByName'](payload.username)
      if (user && user.id) {
        context.commit('login', user)
      }
    },
    async logout (context) {
      context.commit('logout')
    }
  }
}
