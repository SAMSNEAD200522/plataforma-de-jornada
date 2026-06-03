<template>
  <TarjetaBase>
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-slate-500 mb-3">
          {{ titulo }}
        </p>

        <h3 class="text-5xl font-bold tracking-tight">
          {{ valor }}
        </h3>
      </div>

      <div class="w-14 h-14 rounded-2xl bg-slate-100"></div>
    </div>
  </TarjetaBase>
</template>

<script setup>
import TarjetaBase from './TarjetaBase.vue'

defineProps({
  titulo: String,
  valor: String,
})
</script>
