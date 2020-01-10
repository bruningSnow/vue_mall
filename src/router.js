import Vue from 'vue'
import Router from 'vue-router'

// 注册vue-router
Vue.use(Router)

// 创建动态加载组件对象
const components = {
  Home: () => import('./views/Home/index.vue')
}

// 设置路由组件映射
const routerConfig = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: components['Home']
  },
]

// 创建Router实例
const router = new Router({
  routes: routerConfig
})

export default router
