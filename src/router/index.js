import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView'
import AboutView from '@/views/AboutView'

const routes = [
  {
    name: 'Posts',
    path: '/',
    component: PostsView
  },
  {
    name: 'About',
    path: '/about/:userid',
    component: AboutView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
