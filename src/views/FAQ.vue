<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import PageBanner from '../components/PageBanner.vue'

const faqs = [
  {
    question: 'How much will my case cost?',
    answer:
      'We offer fixed-fee pricing on many of our immigration services so you know the cost upfront. For other matters, we provide a free initial enquiry to assess your case before agreeing a fee.',
  },
  {
    question: 'What languages do you offer support in?',
    answer:
      'Our team can assist clients in English, Bengali, Sylheti, Hindi and Urdu, ensuring clear communication throughout your case.',
  },
  {
    question: 'Can I get advice remotely?',
    answer:
      'Yes. We offer remote consultations by phone or video call, so you can get expert legal advice without needing to visit our offices in person.',
  },
  {
    question: 'Are you regulated?',
    answer:
      'Yes. NESOLICITORS Legal Limited t/a NESOLICITORS is authorised and regulated by the Solicitors Regulation Authority under SRA ID: 832104.',
  },
]

const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <div>
    <PageBanner title="Frequently Asked Questions" subtitle="Answers to common questions about our services." />

    <section class="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-3xl space-y-4">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.question"
          class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="font-serif text-base font-semibold text-navy sm:text-lg">{{ faq.question }}</span>
            <ChevronDown
              :size="20"
              class="shrink-0 text-teal transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === i }"
              aria-hidden="true"
            />
          </button>
          <div
            class="grid transition-all duration-300 ease-in-out"
            :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 text-sm leading-relaxed text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
