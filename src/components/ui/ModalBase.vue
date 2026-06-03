<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
  >
    <div class="w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold">
            {{ titulo }}
          </h2>

          <p class="text-slate-500 mt-1">Completa la información requerida</p>
        </div>

        <button
          @click="$emit('cerrar')"
          class="w-10 h-10 rounded-full hover:bg-slate-100 transition"
        >
          ✕
        </button>
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  titulo: String,
})

defineEmits(['cerrar'])
</script>
