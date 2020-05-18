import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '../views/Calendar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/time',
    name: 'Time',
    component: () => import(/* webpackChunkName: "time" */ '../views/Time.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
