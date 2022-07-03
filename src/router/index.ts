import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: () => import('@/views/HelloWorld.vue'),
    meta: {
      title: '初始页面',
    },
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/components/loadingTool.vue'),
    meta: {
      title: '加载页面',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
