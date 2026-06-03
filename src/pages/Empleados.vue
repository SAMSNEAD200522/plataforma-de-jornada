<template>
  <MainLayout>
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <div>
          <h1 class="text-4xl font-bold tracking-tight mb-2">Empleados</h1>

          <p class="text-slate-500 text-lg">Gestión general del personal</p>
        </div>

        <BotonBase @click="modalVisible = true"> Agregar empleado </BotonBase>
      </div>

      <div class="mb-6 flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <InputBase placeholder="Buscar empleado..." />
        </div>

        <button
          class="px-5 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition"
        >
          Filtrar
        </button>
      </div>

      <TablaBase :columnas="['Empleado', 'Cargo', 'Horas', 'Horas Extra', 'Estado']">
        <tr
          v-for="empleado in empleados"
          :key="empleado.id"
          class="border-b border-slate-100 hover:bg-slate-50 transition"
        >
          <td class="px-6 py-5">
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 rounded-full bg-slate-200"></div>

              <div>
                <p class="font-semibold">
                  {{ empleado.nombre }}
                </p>

                <p class="text-sm text-slate-500">ID: #{{ empleado.id }}</p>
              </div>
            </div>
          </td>

          <td class="px-6 py-5 text-slate-600">
            {{ empleado.cargo }}
          </td>

          <td class="px-6 py-5 font-medium">{{ empleado.horasTrabajadas }}h</td>

          <td class="px-6 py-5 font-medium">{{ empleado.horasExtra }}h</td>

          <td class="px-6 py-5">
            <BadgeEstado :estado="empleado.estado" />
          </td>
        </tr>
      </TablaBase>
    </div>
    <ModalBase :visible="modalVisible" titulo="Agregar empleado" @cerrar="modalVisible = false">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputBase v-model="nuevoEmpleado.nombre" placeholder="Nombre completo" />

        <InputBase placeholder="Correo electrónico" />

        <InputBase placeholder="Cargo" />

        <InputBase placeholder="Salario base" />

        <InputBase placeholder="Horas semanales" />

        <select
          class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-slate-200 transition"
        >
          <option>Tipo de contrato</option>

          <option>Término indefinido</option>

          <option>Término fijo</option>

          <option>Prestación de servicios</option>
        </select>
      </div>

      <div class="mt-5">
        <textarea
          rows="4"
          placeholder="Observaciones adicionales"
          class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none resize-none focus:ring-2 focus:ring-slate-200 transition"
        ></textarea>
      </div>

      <div class="flex justify-end gap-3 mt-8">
        <button @click="modalVisible = false" class="px-5 py-3 rounded-2xl border border-slate-200">
          Cancelar
        </button>

        <button class="px-5 py-3 rounded-2xl bg-slate-900 text-white">Guardar empleado</button>
      </div>
    </ModalBase>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

import TablaBase from '@/components/ui/TablaBase.vue'
import BotonBase from '@/components/ui/BotonBase.vue'
import InputBase from '@/components/ui/InputBase.vue'
import BadgeEstado from '@/components/ui/BadgeEstado.vue'
import ModalBase from '@/components/ui/ModalBase.vue'
import { ref } from 'vue'
import { empleados } from '@/mocks/data'
const modalVisible = ref(false)
const nuevoEmpleado = ref({
  nombre: '',
  correo: '',
  cargo: '',
  salario: '',
  horas: '',
  contrato: '',
  observaciones: '',
})
</script>
