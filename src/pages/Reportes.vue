<template>
  <MainLayout>
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold tracking-tight mb-2">Reportes</h1>

        <p class="text-slate-500 text-lg">Gestión y exportación de reportes laborales</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="reporte in reportes"
          :key="reporte.id"
          class="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition"
        >
          <div class="flex items-start justify-between mb-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">
                {{ reporte.nombre }}
              </h3>

              <p class="text-slate-500">
                {{ reporte.fecha }}
              </p>
            </div>

            <BadgeEstado :estado="reporte.estado" />
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <span class="text-sm font-medium text-slate-500"> Formato: {{ reporte.formato }} </span>

            <button
              class="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 transition"
            >
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

import BadgeEstado from '@/components/ui/BadgeEstado.vue'

import { reportes } from '@/mocks/data'
</script>
