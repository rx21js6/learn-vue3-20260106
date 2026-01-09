import { createRouter, createWebHashHistory } from 'vue-router'

import GoOverIndex from '@/pages/GoOverIndex.vue'
import GuideIndex from '@/pages/GuideIndex.vue'
import MainMenu from '@/pages/MainMenu.vue'
import TutorialIndex from '@/pages/TutorialIndex.vue'
import ValidationIndex from '@/pages/ValidationIndex.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainMenu },
    { path: '/tutorial', component: TutorialIndex },
    { path: '/guide', component: GuideIndex },
    { path: '/goOver', component: GoOverIndex },
    { path: '/validation', component: ValidationIndex },
  ],
})
export default router
