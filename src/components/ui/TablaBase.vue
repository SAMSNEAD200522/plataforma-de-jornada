<template>
  <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white">
    <table class="w-full">
      <thead class="bg-slate-50 border-b border-slate-200">
        <tr>
          <th
            v-for="columna in columnas"
            :key="columna"
            class="text-left px-6 py-4 text-sm font-semibold text-slate-600"
          >
            {{ columna }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columnas: Array,
})
</script>
