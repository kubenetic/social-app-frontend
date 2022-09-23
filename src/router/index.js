import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import PostsView from '@/views/PostsView'
import ProfileView from '@/views/ProfileView'
import LoginView from '@/views/LoginView'

const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: '/posts'
  },
  {
    name: 'Posts',
    path: '/posts',
    component: PostsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Profile',
    path: '/user/:userid',
    component: ProfileView,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginView,
    meta: {
      requiresUnAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = store.getters['authStore/isLoggedIn']
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'Login' }
  }

  if (to.meta.requiresUnAuth && isAuthenticated) {
    return { name: 'Home' }
  }
})

export default router
