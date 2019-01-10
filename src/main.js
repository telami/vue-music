import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

import 'common/stylus/index.styl'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
