import Default from '@/layouts/default/Default.vue'
import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.component('LayoutDefault', Default)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Quran',
    name: 'Quran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quran.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Hadith',
    name: 'Hadith',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Hadith.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Qibla',
    name: 'Qibla',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Qibla.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
