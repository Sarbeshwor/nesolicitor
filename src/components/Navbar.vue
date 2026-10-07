<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, Landmark } from 'lucide-vue-next'

const route = useRoute()
const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About us' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/appointment', label: 'Make an appointment' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact us' },
]

function close() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <RouterLink to="/" class="flex items-center gap-2.5" @click="close">
        <span
          class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal text-teal"
        >
          <Landmark :size="22" aria-hidden="true" />
        </span>
        <span class="leading-tight">
          <span class="block font-serif text-lg font-bold text-navy">NESOLICITORS</span>
          <span class="block text-[11px] tracking-[0.2em] text-teal uppercase">Solicitors</span>
        </span>
      </RouterLink>

      <ul class="hidden items-center gap-7 lg:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="relative py-2 text-sm font-medium text-navy transition-colors hover:text-teal"
            :class="{ 'text-teal': route.path === link.to }"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-0.5 left-0 h-0.5 bg-teal transition-all"
              :class="route.path === link.to ? 'w-full' : 'w-0'"
            />
          </RouterLink>
        </li>
      </ul>

      <button
        type="button"
        class="flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
        aria-label="Toggle navigation menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" :size="26" aria-hidden="true" />
        <X v-else :size="26" aria-hidden="true" />
      </button>
    </nav>

    <Transition name="backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-navy/40 lg:hidden"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <Transition name="drawer">
      <div
        v-if="isOpen"
        class="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80vw] flex-col overflow-y-auto bg-white shadow-xl lg:hidden"
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <span class="font-serif text-base font-bold text-navy">Menu</span>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-md text-navy hover:bg-gray-50"
            aria-label="Close navigation menu"
            @click="close"
          >
            <X :size="22" aria-hidden="true" />
          </button>
        </div>
        <ul class="flex flex-col divide-y divide-gray-100 px-5">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block py-4 text-base font-medium text-navy transition-colors hover:text-teal"
              :class="{ 'text-teal': route.path === link.to }"
              @click="close"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
