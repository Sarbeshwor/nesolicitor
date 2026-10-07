<script setup>
import { Facebook, Twitter, Linkedin } from 'lucide-vue-next'

const links = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]
</script>

<template>
  <div class="flex items-center gap-3">
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.href"
      :aria-label="link.label"
      class="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
    >
      <component :is="link.icon" :size="16" aria-hidden="true" />
    </a>
  </div>
</template>
