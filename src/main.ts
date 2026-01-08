import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { enableMocking } from './mocks'

async function bootstrap() {
  await enableMocking()
  createApp(App).use(router).mount('#app')
}

bootstrap()
