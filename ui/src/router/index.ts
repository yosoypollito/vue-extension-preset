import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const getPath = (path: string) => `/ui/${path}`

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: getPath('index.html'),
      component: HomeView,
    }
  ]
})

export default router
