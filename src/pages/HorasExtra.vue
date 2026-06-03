<template>
  <MainLayout>
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold tracking-tight mb-2">Horas Extra</h1>

        <p class="text-slate-500 text-lg">Solicitudes y aprobaciones</p>
      </div>

      <TablaBase :columnas="['Empleado', 'Horas', 'Fecha', 'Estado']">
        <tr
          v-for="item in horasExtra"
          :key="item.id"
          class="border-b border-slate-100 hover:bg-slate-50 transition"
        >
          <td class="px-6 py-5 font-medium">
            {{ item.empleado }}
          </td>

          <td class="px-6 py-5">{{ item.horas }}h</td>

          <td class="px-6 py-5 text-slate-600">
            {{ item.fecha }}
          </td>

          <td class="px-6 py-5">
            <BadgeEstado :estado="item.estado" />
          </td>
        </tr>
      </TablaBase>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

import TablaBase from '@/components/ui/TablaBase.vue'
import BadgeEstado from '@/components/ui/BadgeEstado.vue'

import { horasExtra } from '@/mocks/data'
</script>
