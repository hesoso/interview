import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {
  observerOptions: {
    rootMargin: '0px 0px 10px 0px',
    threshold: 0.1,
  },
})

app.mount('#app')
