import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

/**
 * 前置守卫
 * to：到哪里去 from：从哪里来 next：必须要执行的函数
 */
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    // 存在token
    if (to.path === '/login') {
      // 跳转到主页,中转到主页
      // 当next里面有地址的时候并不会执行后置守卫
      next('/')
      nprogress.done()
    } else {
      // 判断是否获取过资料
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      // 没有token
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      nprogress.done()
    }
  }
})

/**
 * 后置守卫
 */
router.afterEach(() => {
  nprogress.done()
})

