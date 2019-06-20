import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * router.beforeResolve（全局解析守卫 ）
 * 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
 */
router.beforeEach((to, from, next) => {
  console.log('进入每个页面时 全局 调用的方法')
  next()
})
router.afterEach((to, from) => {
  console.log('速度在before后 但是不依赖next')
})

export default router
