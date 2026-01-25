import { createRouter, createWebHashHistory } from 'vue-router'

import SamplePage1 from '@/components/application/pages/SamplePage1.vue'
import SamplePage2 from '@/components/application/pages/SamplePage2.vue'
import ApplicationIndex from '@/pages/ApplicationIndex.vue'
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
    { path: '/application', component: ApplicationIndex },
    { path: '/application/samplePage1', component: SamplePage1 },
    { path: '/application/samplePage2', component: SamplePage2 },
  ],
})
export default router
