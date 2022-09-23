import { createStore } from 'vuex'
import postStore from '@/store/postStore'
import authStore from '@/store/authStore'
import userStore from '@/store/userStore'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore,
    postStore,
    userStore
  }
})
