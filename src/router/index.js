import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MobileHome from '../views/MobileHome.vue'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const lazyImport = (comp) => {
  return () => import(`../views/${comp}.vue`)
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: isMobile ? MobileHome : Home,
      meta: {
        showNav: true,
        isMobile
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: isMobile ? lazyImport('MobileWork') : lazyImport('Work'),
      meta: {
        showNav: true,
        isMobile
      }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: isMobile ? lazyImport('MobileResume') : lazyImport('Resume'),
      meta: {
        showNav: true,
        isMobile
      }
    },
    // {
    //   path: '/mobile/home',
    //   name: 'MobileHome',
    //   component: () => import('../views/MobileHome.vue'),
    //   meta: {
    //     isMobile: true
    //   }
    // },
    // {
    //   path: '/mobile/work',
    //   name: 'work',
    //   component: () => import('../views/MobileWork.vue'),
    //   meta: {
    //     isMobile: true
    //   }
    // },
    // {
    //   path: '/mobile/resume',
    //   name: 'resume',
    //   component: () => import('../views/MobileResume.vue'),
    //   meta: {
    //     isMobile: true
    //   }
    // },
  ]
})

export default router
