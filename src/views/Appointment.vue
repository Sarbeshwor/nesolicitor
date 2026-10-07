<script setup>
import { reactive, ref } from 'vue'
import { ChevronRight, Calendar } from 'lucide-vue-next'
import PageBanner from '../components/PageBanner.vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/30'
const labelClass = 'mb-1.5 block text-xs font-medium text-gray-600'
</script>

<template>
  <div>
    <PageBanner
      title="Make an Appointment"
      subtitle="Book a consultation with one of our experienced solicitors."
    />

    <section class="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-3xl rounded-lg bg-bg-light p-6 shadow-md sm:p-12">
        <div class="mb-8 flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
            <Calendar :size="24" aria-hidden="true" />
          </span>
          <h2 class="font-serif text-2xl font-bold text-navy">Book Your Consultation</h2>
        </div>

        <form class="space-y-5" @submit.prevent="handleSubmit">
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label :class="labelClass" for="firstName">First Name</label>
              <input id="firstName" v-model="form.firstName" type="text" required :class="inputClass" />
            </div>
            <div>
              <label :class="labelClass" for="lastName">Last Name</label>
              <input id="lastName" v-model="form.lastName" type="text" required :class="inputClass" />
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label :class="labelClass" for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" required :class="inputClass" />
            </div>
            <div>
              <label :class="labelClass" for="phone">Phone Number</label>
              <input id="phone" v-model="form.phone" type="tel" :class="inputClass" />
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label :class="labelClass" for="service">Service</label>
              <select id="service" v-model="form.service" required :class="inputClass">
                <option value="" disabled selected>Select a service</option>
                <option value="family">Family Service</option>
                <option value="immigration">Immigration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label :class="labelClass" for="date">Preferred Date</label>
              <input id="date" v-model="form.date" type="date" :class="inputClass" />
            </div>
          </div>

          <div>
            <label :class="labelClass" for="message">Your Message</label>
            <textarea id="message" v-model="form.message" rows="4" :class="inputClass" />
          </div>

          <button
            type="submit"
            class="flex items-center gap-2 rounded-md bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
          >
            Book Appointment
            <ChevronRight :size="16" aria-hidden="true" />
          </button>

          <p v-if="submitted" class="text-sm font-medium text-teal" role="status">
            Thank you — we'll confirm your appointment shortly.
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
