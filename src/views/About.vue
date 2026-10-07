<script setup>
import { ShieldCheck, Users2, Globe } from 'lucide-vue-next'
import PageBanner from '../components/PageBanner.vue'
import ExperienceBanner from '../components/ExperienceBanner.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const points = [
  {
    icon: ShieldCheck,
    title: 'SRA Authorised & Regulated',
    text: 'North East Solicitors is authorised and regulated by the Solicitors Regulation Authority under SRA ID: 832104.',
  },
  {
    icon: Users2,
    title: 'Dedicated Solicitors',
    text: 'Our team tailors advice to your individual circumstances, ensuring you receive clear and honest guidance at every step.',
  },
  {
    icon: Globe,
    title: 'Multilingual Service',
    text: 'We offer advice in English, Bengali, Sylheti, Hindi and Urdu, and remote consultations are available.',
  },
]
</script>

<template>
  <div>
    <PageBanner
      title="About Us"
      subtitle="More than 20 years of experience in immigration and family law."
    />

    <section class="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div
          v-for="point in points"
          :key="point.title"
          class="rounded-lg border-t-4 border-teal bg-white p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        >
          <span class="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
            <component :is="point.icon" :size="26" aria-hidden="true" />
          </span>
          <h3 class="mb-3 font-serif text-xl font-bold text-navy">{{ point.title }}</h3>
          <p class="text-sm leading-relaxed text-gray-600">{{ point.text }}</p>
        </div>
      </div>
    </section>

    <ExperienceBanner />
    <TestimonialsSection />
  </div>
</template>
