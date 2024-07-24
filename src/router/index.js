import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/BlogList.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogList
    },
  ]
})

export default router
