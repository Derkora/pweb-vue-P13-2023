import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/about', name: 'about', component: () => import('../views/About.vue')},
    {path: '/about/:id', name: 'about:id', component: () => import('../views/AboutView.vue')},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView},
  ]
})

export default router
