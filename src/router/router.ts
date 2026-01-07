import { createRouter, createWebHashHistory } from 'vue-router'
import TutorialIndex from '../pages/TutorialIndex.vue'
import MainMenu from '../pages/MainMenu.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainMenu },
    { path: '/tutorial', component: TutorialIndex },
  ],
})
export default router
