<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <div class="mb-12 text-center">
    <h2
      class="mb-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl"
      :class="light ? 'text-white' : 'text-navy'"
    >
      {{ title }}
    </h2>
    <span class="mx-auto block h-1 w-16 rounded-full bg-teal-light" />
    <p v-if="subtitle" class="mt-4 text-sm sm:text-base" :class="light ? 'text-gray-300' : 'text-gray-600'">
      {{ subtitle }}
    </p>
  </div>
</template>
