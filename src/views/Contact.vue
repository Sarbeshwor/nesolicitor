<script setup>
import { MapPin, Clock, Phone, Mail } from 'lucide-vue-next'
import PageBanner from '../components/PageBanner.vue'
import CallbackSection from '../components/CallbackSection.vue'

const details = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['1st Floor, 149 Beaconsfield Street,', 'Newcastle upon Tyne, NE4 5JQ', 'United Kingdom'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday to Friday', '10:00 to 18:00'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['Landline: 0191 272 5197', 'Mobile: 075 1158 4392', 'Fax: 0191 272 0317'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['jalal.uddin@nesolicitors.co.uk', 'www.nesolicitors.co.uk'],
  },
]
</script>

<template>
  <div>
    <PageBanner title="Contact Us" subtitle="We'd love to hear from you. Get in touch today." />

    <section class="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="detail in details"
          :key="detail.title"
          class="rounded-lg border-t-4 border-teal bg-white p-6 text-center shadow-md"
        >
          <span class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
            <component :is="detail.icon" :size="24" aria-hidden="true" />
          </span>
          <h3 class="mb-2 font-serif text-lg font-bold text-navy">{{ detail.title }}</h3>
          <p v-for="line in detail.lines" :key="line" class="text-sm text-gray-600">{{ line }}</p>
        </div>
      </div>
    </section>

    <CallbackSection />
  </div>
</template>
