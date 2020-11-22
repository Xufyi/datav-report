import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bmap from '../views/bmap.vue'
import Bmap2 from '../views/bmap2.vue'
import ChartsLiquidFill from '../views/chartsLiquidFill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'Bmap',
    component: Bmap
  },
  {
    path: '/bmap2',
    name: 'Bmap2',
    component: Bmap2
  },
  {
    path: '/chartsLiquidFill',
    name: 'chartsLiquidFill',
    component: ChartsLiquidFill
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
