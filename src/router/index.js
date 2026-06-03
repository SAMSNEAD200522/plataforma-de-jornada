import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import Empleados from '@/pages/Empleados.vue'
import HorasExtra from '@/pages/HorasExtra.vue'
import Reportes from '@/pages/Reportes.vue'
import Recargos from '@/pages/Recargos.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/empleados',
    component: Empleados,
  },
  {
    path: '/horas-extra',
    component: HorasExtra,
  },
  {
    path: '/recargos',
    component: Recargos,
  },
  {
    path: '/reportes',
    component: Reportes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
