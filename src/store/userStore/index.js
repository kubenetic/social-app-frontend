const userStore = {
  namespaced: true,
  state: () => ({
    loadedUsers: [
      {
        id: 1,
        username: 'teszt.elek',
        description: 'Hello! I\'m Elek!',
        loggedIn: false
      },
      {
        id: 2,
        username: 'james.bond',
        description: 'My name is Bond... James Bond',
        loggedIn: false
      }
    ]
  }),
  getters: {
    getUserById: (state) => (id) => {
      return state.loadedUsers.find(user => user.id === Number(id))
    },
    getUserByName: (state) => (username) => {
      return state.loadedUsers.find(user => user.username === username)
    }
  },
  mutations: {
    addUser (state, user) {
      if (!state.loadedUsers.find(u => u.username === user.username)) {
        state.loadedUsers.push(user)
      }
    }
  },
  actions: {}
}

export default userStore
