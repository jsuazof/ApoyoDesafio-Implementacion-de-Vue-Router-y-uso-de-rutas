import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ArticuloView from '../views/ArticuloView.vue'
import ContactoView from '../views/ContactoView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: InicioView
  },
  {
    path: '/about',
    name: 'about',
    componente: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactoView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,

    children:[{
      path:'1',
      name: 'articulo',
      component: ArticuloView
    },
  ]
  },
  {
    path: '/:catchALL(.*)',
    name: 'NotFoundlView',
    component: NotFoundView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
