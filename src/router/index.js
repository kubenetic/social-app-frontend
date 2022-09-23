import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView'
import ProfileView from '@/views/ProfileView'

const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: '/posts'
  },
  {
    name: 'Posts',
    path: '/posts',
    component: PostsView
  },
  {
    name: 'Profile',
    path: '/user/:userid',
    component: ProfileView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
