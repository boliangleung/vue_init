import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './assets/js/filter'
import './assets/css/reset.css'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
