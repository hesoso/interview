import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        showNav: true
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work.vue'),
      meta: {
        showNav: true
      }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/Resume.vue'),
      meta: {
        showNav: true
      }
    },
    {
      path: '/mobile/home',
      name: 'MobileHome',
      component: () => import('../views/MobileHome.vue'),
      meta: {
        isMobile: true
      }
    },
    {
      path: '/mobile/work',
      name: 'work',
      component: () => import('../views/MobileWork.vue'),
      meta: {
        isMobile: true
      }
    },
    {
      path: '/mobile/resume',
      name: 'resume',
      component: () => import('../views/MobileResume.vue'),
      meta: {
        isMobile: true
      }
    },
  ]
})

export default router
