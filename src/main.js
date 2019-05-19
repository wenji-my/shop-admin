import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'

import Bmob from "hydrogen-js-sdk"
Bmob.initialize("c1e7cf1bab2ad002feea2951f548eef5", "d706a846a16f3949b04519ddc833b307")
Vue.prototype.Bmob = Bmob

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
