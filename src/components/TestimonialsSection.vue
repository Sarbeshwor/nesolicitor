<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import TestimonialCard from './TestimonialCard.vue'
import { testimonials } from '../data/testimonials'

const perView = ref(1)
const index = ref(0)

function updatePerView() {
  if (window.innerWidth >= 1024) perView.value = 3
  else if (window.innerWidth >= 640) perView.value = 2
  else perView.value = 1
}

const maxIndex = computed(() => Math.max(0, testimonials.length - perView.value))

function next() {
  index.value = index.value >= maxIndex.value ? 0 : index.value + 1
}
function prev() {
  index.value = index.value <= 0 ? maxIndex.value : index.value - 1
}

const trackStyle = computed(() => ({
  transform: `translateX(-${(index.value * 100) / perView.value}%)`,
}))

onMounted(() => {
  updatePerView()
  window.addEventListener('resize', updatePerView)
})
onUnmounted(() => {
  window.removeEventListener('resize', updatePerView)
})
</script>

<template>
  <section class="bg-bg-light px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionTitle
        title="Testimonials"
        subtitle="this is what our existing clients think about us."
      />

      <div class="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-md transition-colors hover:bg-teal hover:text-white"
          aria-label="Previous testimonial"
          @click="prev"
        >
          <ChevronLeft :size="20" aria-hidden="true" />
        </button>

        <div class="min-w-0 flex-1 overflow-hidden">
          <div class="flex transition-transform duration-500 ease-out" :style="trackStyle">
            <div
              v-for="t in testimonials"
              :key="t.name"
              class="shrink-0 px-3"
              :style="{ width: `${100 / perView}%` }"
            >
              <TestimonialCard :name="t.name" :role="t.role" :quote="t.quote" />
            </div>
          </div>
        </div>

        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-md transition-colors hover:bg-teal hover:text-white"
          aria-label="Next testimonial"
          @click="next"
        >
          <ChevronRight :size="20" aria-hidden="true" />
        </button>
      </div>

      <div class="mt-8 flex justify-center gap-2">
        <button
          v-for="i in maxIndex + 1"
          :key="i"
          type="button"
          class="h-2 rounded-full transition-all"
          :class="i - 1 === index ? 'w-6 bg-teal' : 'w-2 bg-teal/25'"
          :aria-label="`Go to testimonial group ${i}`"
          @click="index = i - 1"
        />
      </div>
    </div>
  </section>
</template>
