import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/product/:id',
    name: 'TheProductView',
    component: () => import('@/views/products/TheProductView')
  },
  {
    path: '/list',
    name: 'ProductsListView',
    component: () => import('@/views/products/ProductsListView')
  },
  {
    path: '/new',
    name: 'NewProductView',
    component: () => import('@/views/products/NewProductView')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/auth/LoginView')
  },
  {
    path: '/registration',
    name: 'RegistrationView',
    component: () => import('@/views/auth/RegistrationView')
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: () => import('@/views/CheckoutView')
  },
  {
    path: '*',
    name: 'ErrorView',
    component: () => import('@/views/ErrorView')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
