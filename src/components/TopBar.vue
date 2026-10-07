<script setup>
import { MapPin, Clock, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-teal text-white text-xs sm:text-sm">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
    >
      <div class="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
        <span class="flex items-center gap-1.5">
          <MapPin :size="14" class="shrink-0" aria-hidden="true" />
          Suite 4, 711 Cranbrook Road, Gants Hill, Ilford IG2 6RJ
        </span>
        <span class="flex items-center gap-1.5">
          <Clock :size="14" class="shrink-0" aria-hidden="true" />
          Monday to Friday 10:00 to 18:00
        </span>
      </div>
      <div class="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
        <a
          href="mailto:mail@nesolicitors.co.uk"
          class="flex items-center gap-1.5 transition-colors hover:text-white/80"
        >
          <Mail :size="14" class="shrink-0" aria-hidden="true" />
          mail@nesolicitors.co.uk
        </a>
        <a
          href="tel:02072476015"
          class="flex items-center gap-1.5 transition-colors hover:text-white/80"
        >
          <Phone :size="14" class="shrink-0" aria-hidden="true" />
          020 7247 6015
        </a>
      </div>
    </div>
  </div>
</template>
