<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-slate-200 transition"
  />
</template>

<script setup>
defineProps({
  placeholder: String,
  modelValue: String,
})

defineEmits(['update:modelValue'])
</script>
