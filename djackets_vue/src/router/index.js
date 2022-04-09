import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: () => import( '../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
