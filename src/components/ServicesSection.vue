<script setup>
import SectionTitle from './SectionTitle.vue'
import ServiceCard from './ServiceCard.vue'
import { services } from '../data/services'
</script>

<template>
  <section class="bg-bg-light px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionTitle title="What We Do" />
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>
