import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView'
import AboutView from '@/views/AboutView'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
