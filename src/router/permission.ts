import router from '@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由前置守卫
router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.path === '/') {
    next({ path: '/helloworld' })
    Nprogress.done()
  } else if (to.path === '/init') {
    next({ path: '/loading' })
    Nprogress.done()
  } else {
    next()
  }
})

// 路由后置守卫
router.afterEach(() => {
  Nprogress.done()
})
