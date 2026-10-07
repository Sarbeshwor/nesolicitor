<script setup>
import { Quote } from 'lucide-vue-next'

defineProps({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  quote: { type: String, required: true },
})
</script>

<template>
  <article class="relative flex h-full flex-col rounded-lg bg-white p-6 sm:p-8 shadow-md">
    <Quote :size="36" class="mb-4 text-teal/20" aria-hidden="true" />
    <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-600 italic">"{{ quote }}"</p>
    <div class="flex items-center gap-3">
      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal font-serif text-lg font-bold text-white"
      >
        {{ name.charAt(0) }}
      </span>
      <div>
        <p class="font-semibold text-navy">{{ name }}</p>
        <p v-if="role" class="text-xs text-gray-500">{{ role }}</p>
      </div>
    </div>
  </article>
</template>
