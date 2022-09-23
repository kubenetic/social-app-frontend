export default {
  namespaced: true,
  state: () => ({
    currentUser: {
      id: 1,
      username: 'teszt.elek',
      description: 'Hello! I\'m Elek!',
      loggedIn: false
    }
  }),
  getters: {
    currentUser (state) {
      return state.currentUser
    },
    isLoggedIn (state) {
      return !state.currentUser && state.currentUser.loggedIn
    }
  },
  mutations: {
    login (state) {
      state.currentUser.loggedIn = true
    },
    logout (state) {
      state.currentUser.loggedIn = true
    }
  },
  actions: {
    login (context) {
      context.commit('login')
    },
    logout (context) {
      context.commit('logout')
    }
  }
}
