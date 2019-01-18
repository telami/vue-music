import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/image/default.png'),
  loading: require('common/image/pig.png'),
  attempt: 1
})

fastclick.attach(document.body)

Vue.config.productionTip = false

import 'common/stylus/index.styl'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
