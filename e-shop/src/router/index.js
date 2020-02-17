import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/earrings',
    name: 'earrings',
    component: () => import('../components/Earrings.vue')
},

{
  path: '/createone',
  name: 'createone',
  component: () => import('../components/CreateOne.vue')
},
{
  path: '/createstock',
  name: 'createstock',
  component: () => import('../components/CreateStock.vue')
},

{
  path: '/img',
  name: 'img',
  component: () => import('../components/Img.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
