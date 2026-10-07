<script setup>
import { reactive, ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}

const inputClass =
  'w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-gray-400 outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/25'
const labelClass = 'mb-1.5 block text-xs font-medium text-gray-600'
</script>

<template>
  <section class="bg-bg-light px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div>
        <h2 class="font-serif text-3xl leading-tight font-bold text-navy sm:text-4xl">
          Request A Call Back.
        </h2>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-gray-600">
          Leave your details below and one of our solicitors will get back to you as soon as
          possible to discuss your legal matter.
        </p>
      </div>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label :class="labelClass" for="firstName">First Name</label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              :class="inputClass"
              placeholder="John"
            />
          </div>
          <div>
            <label :class="labelClass" for="lastName">Last Name</label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              :class="inputClass"
              placeholder="Smith"
            />
          </div>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label :class="labelClass" for="email">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :class="inputClass"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label :class="labelClass" for="service">Service</label>
            <select id="service" v-model="form.service" required :class="inputClass">
              <option value="" disabled selected class="text-gray-500">Select a service</option>
              <option value="family" class="text-navy">Family Service</option>
              <option value="agreements" class="text-navy">Agreements</option>
              <option value="immigration" class="text-navy">Immigration</option>
              <option value="other" class="text-navy">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label :class="labelClass" for="message">Your Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            :class="inputClass"
            placeholder="Tell us briefly about your case..."
          />
        </div>

        <button
          type="submit"
          class="flex items-center gap-2 rounded-md bg-teal-light px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal"
        >
          Contact
          <ChevronRight :size="16" aria-hidden="true" />
        </button>

        <p v-if="submitted" class="text-sm text-teal-light" role="status">
          Thank you — we'll be in touch shortly.
        </p>
      </form>
    </div>
  </section>
</template>
