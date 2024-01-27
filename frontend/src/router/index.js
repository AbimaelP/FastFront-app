import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projetos',
    name: 'projetos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projetos" */ '../views/ProjetosView.vue')
  },
  {
    path:"/criar-projeto",
    name:"criarProjeto",
    component: () => import(/*webpackChunkName: "criar-projeto"*/'../views/CriarProjetoView.vue'),
  },
  {
    path:"/login",
    name:"login",
    component:() => import(/*webpackChunkName: "login"*/'../views/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import(/*webpackChunkName: "register"*/'../views/RegisterView.vue')
  },
  {
    path:'/perfil',
    name:'perfil',
    component: () => import(/*webpackChunkName: "perfil"*/'../views/UserPerfilView')
  },
  {
    path: '/config',
    name: 'config',
    component: () => import(/*webpackChunkName: "config"*/'../views/ConfigView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router