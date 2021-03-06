import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DCHeroes from '../views/DCHeroes.vue'
import Calendar from '../views/Calendar.vue'
import Markdown from '../views/Markdown.vue'
import Slider from '../views/Slider.vue'
import Calculator from '../views/Calculator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dc-heroes',
      name: 'dcHeroes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DCHeroes
    },
    {
      path: '/calendar',
      name: 'calendar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Calendar
    },
    {
      path: '/markdown',
      name: 'markdown',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Markdown
    },
    {
      path: '/slider',
      name: 'slider',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Slider
    },
    {
      path: '/calculator',
      name: 'calculator',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Calculator
    },
  ]
})

export default router
