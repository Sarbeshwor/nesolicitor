import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/Pricing.vue'),
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../views/Appointment.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
