<template>
  <span
    :class="[
      'px-3 py-1 rounded-full text-sm font-medium',

      estado === 'Activo' && 'bg-green-100 text-green-700',

      estado === 'Inactivo' && 'bg-slate-200 text-slate-700',

      estado === 'Pendiente' && 'bg-amber-100 text-amber-700',

      estado === 'Aprobado' && 'bg-emerald-100 text-emerald-700',

      estado === 'Generado' && 'bg-blue-100 text-blue-700',

      estado === 'Descargado' && 'bg-purple-100 text-purple-700',

      estado === 'Rechazado' && 'bg-red-100 text-red-700',
    ]"
  >
    {{ estado }}
  </span>
</template>

<script setup>
defineProps({
  estado: String,
})
</script>
