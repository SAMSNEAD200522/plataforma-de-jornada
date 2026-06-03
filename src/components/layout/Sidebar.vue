<template>
  <aside class="hidden lg:flex w-72 bg-white border-r border-slate-200 px-6 py-8 flex-col">
    <div class="mb-12">
      <h1 class="text-2xl font-bold">JornadaPro</h1>

      <p class="text-sm text-muted mt-1">Gestión laboral</p>
    </div>

    <nav class="flex flex-col gap-2">
      <RouterLink
        to="/"
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition text-slate-700 hover:bg-slate-100"
        active-class="bg-slate-100 font-medium"
      >
        <House :size="18" />

        <span>Inicio</span>
      </RouterLink>

      <RouterLink
        to="/empleados"
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition text-slate-700 hover:bg-slate-100"
        active-class="bg-slate-100 font-medium"
      >
        <Users :size="18" />

        <span>Empleados</span>
      </RouterLink>

      <RouterLink
        to="/horas-extra"
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition text-slate-700 hover:bg-slate-100"
        active-class="bg-slate-100 font-medium"
      >
        <Clock3 :size="18" />

        <span>Horas Extra</span>
      </RouterLink>

      <RouterLink
        to="/recargos"
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition text-slate-700 hover:bg-slate-100"
        active-class="bg-slate-100 font-medium"
      >
        <BadgeDollarSign :size="18" />

        <span>Recargos</span>
      </RouterLink>

      <RouterLink
        to="/reportes"
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition text-slate-700 hover:bg-slate-100"
        active-class="bg-slate-100 font-medium"
      >
        <BarChart3 :size="18" />

        <span>Reportes</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { House, Users, Clock3, BarChart3, BadgeDollarSign } from 'lucide-vue-next'
</script>
