import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Join from '../components/Join.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
  ]
})

export default router
