import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        showNav: true
      }
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue'),
      meta: {
        showNav: true
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
      meta: {
        showNav: true
      }
    },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: () => import('../views/Project.vue'),
    //   meta: {
    //     showNav: false
    //   }
    // },
  ]
})

export default router
