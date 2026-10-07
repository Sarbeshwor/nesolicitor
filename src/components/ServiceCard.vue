<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
})
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-lg border-t-4 border-teal bg-white p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
  >
    <component
      :is="icon"
      :size="120"
      class="pointer-events-none absolute -right-5 -bottom-6 text-navy/5 transition-colors group-hover:text-teal/10"
      aria-hidden="true"
    />

    <div class="relative">
      <span
        class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white"
      >
        <component :is="icon" :size="26" aria-hidden="true" />
      </span>

      <h3 class="mb-3 font-serif text-xl font-bold text-navy">{{ title }}</h3>
      <p class="mb-6 text-sm leading-relaxed text-gray-600">{{ description }}</p>

      <button
        type="button"
        class="flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
      >
        Read more
        <ChevronRight :size="16" class="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </div>
  </article>
</template>
