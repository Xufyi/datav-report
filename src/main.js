import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import VCharts from 'v-charts'
//全局样式，样式有层叠关系，放置最后
import './style/index.css'
import 'v-charts/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)
Vue.use(VCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
