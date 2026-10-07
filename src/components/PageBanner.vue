<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <section class="relative overflow-hidden border-b border-gray-100 bg-bg-light py-12 sm:py-20">
    <div
      class="absolute inset-0 opacity-60"
      style="
        background-image: linear-gradient(rgba(27, 36, 59, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(27, 36, 59, 0.05) 1px, transparent 1px);
        background-size: 42px 42px;
      "
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h1 class="font-serif text-2xl font-bold text-navy sm:text-4xl">{{ title }}</h1>
      <span class="mx-auto mt-4 block h-1 w-14 rounded-full bg-teal-light" />
      <p v-if="subtitle" class="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
