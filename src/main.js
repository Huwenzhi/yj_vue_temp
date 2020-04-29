import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
//element-ui 的UI配置
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 记录访问的最后一个页面
  if (from.path !== '/login') {
    window.localStorage.setItem('from_path', from.path)
  }
  if (to.path == '/login') {
    window.localStorage.removeItem('userInfo')
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
