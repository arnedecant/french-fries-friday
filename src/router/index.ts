import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/RootPage.vue'),
    children: [
      {
        path: '',
        redirect: '/food'
      },
      {
        path: 'food',
        component: () => import('@/views/Food.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/Order.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/User.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
