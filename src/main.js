import Vue from 'vue'
import router from './router'
import App from './App.vue'
import filters from './js/filters'

Vue.config.productionTip = true
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
new Vue({
  router, // 将router.js映射好的路由实例挂载在实例Vue上
  render: h => h(App),
}).$mount('#app')
