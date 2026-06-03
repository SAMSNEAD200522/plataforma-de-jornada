<template>
  <MainLayout>
    <div class="max-w-7xl mx-auto w-full">
      <section class="mb-10">
        <div class="mb-8">
          <h1 class="text-4xl font-bold tracking-tight mb-2">Panel General</h1>

          <p class="text-slate-500 text-lg">Resumen general del rendimiento laboral</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <TarjetaEstadistica
            v-for="item in dashboard.estadisticas"
            :key="item.titulo"
            :titulo="item.titulo"
            :valor="item.valor"
          />

          <TarjetaEstadistica titulo="Horas Extra" valor="24h" />

          <TarjetaEstadistica titulo="Recargos" valor="18h" />

          <TarjetaEstadistica titulo="Costos" valor="$4.2M" />
        </div>
      </section>

      <TarjetaBase>
        <div class="h-[500px] flex flex-col">
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-2">Resumen de horas</h2>

            <p class="text-slate-500">Comportamiento mensual del personal</p>
          </div>

          <div class="flex-1 rounded-2xl overflow-hidden">
            <GraficaHoras />
          </div>
        </div>
      </TarjetaBase>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

import TarjetaBase from '@/components/ui/TarjetaBase.vue'
import TarjetaEstadistica from '@/components/ui/TarjetaEstadistica.vue'

import GraficaHoras from '@/components/charts/GraficaHoras.vue'

import { dashboard } from '@/mocks/data'
</script>
