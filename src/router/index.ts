import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageComponentSelector from '@/Pages/PageComponentSelector/PageComponentSelector.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'startpage',
    component: PageComponentSelector,
  },
  {
    path: '/translate',
    name: 'translate',
    component: PageComponentSelector,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
