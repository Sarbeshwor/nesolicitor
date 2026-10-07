<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-vue-next'

const slides = [
  {
    eyebrow: 'Authorised & Regulated by the SRA',
    title: 'Immigration & Family Legal Services',
    text: 'We offer immigration and family legal services and maintain quality and standard in all services at the highest possible level.',
  },
  {
    eyebrow: 'More than 20 years of experience',
    title: 'Trusted Legal Advice You Can Rely On',
    text: 'Our solicitors are committed to protecting your interests with clear, honest and dedicated representation.',
  },
  {
    eyebrow: 'Fixed fee options available',
    title: 'Expert Solicitors, By Your Side',
    text: 'From family matters to complex immigration cases, we tailor our advice to best suit your individual needs.',
  },
]

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % slides.length
}
function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}
function goTo(i) {
  current.value = i
}

onMounted(() => {
  timer = setInterval(next, 6000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative overflow-hidden bg-white">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,77,90,0.08),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(0,92,107,0.08),transparent_55%)]"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 opacity-60"
      style="
        background-image: linear-gradient(rgba(27, 36, 59, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(27, 36, 59, 0.045) 1px, transparent 1px);
        background-size: 42px 42px;
      "
      aria-hidden="true"
    />

    <div
      class="relative mx-auto flex min-h-[380px] max-w-7xl flex-col justify-center px-4 py-14 sm:min-h-[460px] sm:px-6 sm:py-20 md:min-h-[540px] lg:px-8"
    >
      <transition name="fade" mode="out-in">
        <div :key="current" class="max-w-2xl">
          <p class="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-teal">
            <ShieldCheck :size="18" aria-hidden="true" />
            {{ slides[current].eyebrow }}
          </p>
          <h1 class="mb-5 font-serif text-3xl leading-tight font-bold text-navy sm:text-4xl md:text-5xl">
            {{ slides[current].title }}
          </h1>
          <p class="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {{ slides[current].text }}
          </p>
        </div>
      </transition>

      <div class="flex flex-wrap gap-4">
        <RouterLink
          to="/appointment"
          class="rounded-md bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
        >
          Get a Quote
        </RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-md border border-navy/20 px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
        >
          Contact Us
        </RouterLink>
      </div>

      <div class="mt-10 flex items-center gap-4">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy/5"
          aria-label="Previous slide"
          @click="prev"
        >
          <ChevronLeft :size="18" aria-hidden="true" />
        </button>
        <div class="flex gap-2">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            type="button"
            class="h-2 rounded-full transition-all"
            :class="i === current ? 'w-6 bg-teal' : 'w-2 bg-navy/15'"
            :aria-label="`Go to slide ${i + 1}`"
            @click="goTo(i)"
          />
        </div>
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy/5"
          aria-label="Next slide"
          @click="next"
        >
          <ChevronRight :size="18" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
