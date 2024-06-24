import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/category/:id',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: '/detail/:id',
          component: () => import('@/views/detail/index.vue')
        },
        {
          path: '/cart',
          component: () => import('@/views/cart/index.vue')
        },
        {
          path: '/order',
          component: () => import('@/views/order/index.vue')
        },
        {
          path: '/pay/:id',
          component: () => import('@/views/pay/index.vue')
        },
        {
          path: '/paycallback',
          component: () => import('@/views/payback/index.vue')
        },
        {
          path: '/member',
          component: () => import('@/views/member/index.vue'),
          redirect: '/member/user',
          children: [
            {
              path: 'user',
              component: () => import('@/views/member/user/index.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/member/order/index.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ],
  // 路由滚动行为
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
