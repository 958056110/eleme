import Vue from 'vue'
import App from './App.vue'
// 全局引入
import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import 'weui';
// 引入vant的组件
import Vant from './vant/index'
Vant()
new Vue({
  render: h => h(App),
}).$mount('#app')

