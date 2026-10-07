<script setup>
import { Check } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'

const plans = [
  {
    name: 'Family Service',
    price: 'Fixed Fee',
    features: [
      'Initial consultation',
      'Case assessment',
      'Tailored family law advice',
      'Ongoing case support',
    ],
  },
  {
    name: 'Immigration',
    price: 'Fixed Fee',
    features: [
      'Visa & application review',
      'Individual & business support',
      'Document preparation',
      'End-to-end case handling',
      'Fixed-fee transparency',
    ],
    featured: true,
  },
  {
    name: 'General Legal Advice',
    price: 'Free Initial Enquiry',
    features: [
      'Free online initial advice',
      'Remote consultations',
      'Multilingual support',
      'Referral to a specialist solicitor',
    ],
  },
]
</script>

<template>
  <div>
    <PageBanner
      title="Pricing"
      subtitle="Transparent, fixed-fee pricing with a free initial enquiry."
    />

    <section class="bg-bg-light px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          :class="plan.featured ? 'border-2 border-teal' : 'border-t-4 border-teal'"
        >
          <h3 class="mb-1 font-serif text-xl font-bold text-navy">{{ plan.name }}</h3>
          <p class="mb-6 text-2xl font-bold text-teal">{{ plan.price }}</p>
          <ul class="mb-8 flex-1 space-y-3">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-600">
              <Check :size="18" class="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
          <RouterLink
            to="/appointment"
            class="rounded-md bg-teal-light py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal"
          >
            Get a Quote
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
