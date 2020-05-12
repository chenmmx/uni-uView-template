import Vue from 'vue'
import App from './App'
import store from './store/index.js'
// 引入全局uView
import uView from 'uview-ui'
import httpInterceptor from '@/common/http.interceptor.js'
import httpApi from '@/common/http.api.js'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView);

const app = new Vue({
	store,
    ...App
})

Vue.use(httpInterceptor, app)
Vue.use(httpApi, app)

app.$mount()
