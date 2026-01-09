import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import { enableMocking } from './mocks'
import router from './router/router'

async function bootstrap() {
  await enableMocking()
  createApp(App).use(router).mount('#app')
}

bootstrap()
