import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfracoesView from '../views/InfracoesView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  }, {
    path: '/infracoes',
    name: 'InfracoesView',
    component: InfracoesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
