import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {
  observerOptions: {
    rootMargin: '0px 0px 200px 0px', // 提前200px触发加载
    threshold: 0.1, // 当10%可见时开始加载
  },
})

app.mount('#app')
