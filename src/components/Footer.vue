<script setup>
import { MapPin, Clock, Phone, Mail, ShieldCheck } from 'lucide-vue-next'
import SocialIcons from './SocialIcons.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-teal text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="mb-4 flex items-center gap-2 font-serif text-lg font-bold">
            <MapPin :size="18" aria-hidden="true" />
            Address
          </h3>
          <p class="text-sm leading-relaxed text-gray-200">
            Suite 4, 711 Cranbrook Road,<br />
            Gants Hill, Ilford<br />
            IG2 6RJ
          </p>
        </div>

        <div>
          <h3 class="mb-4 flex items-center gap-2 font-serif text-lg font-bold">
            <Clock :size="18" aria-hidden="true" />
            Working Hours
          </h3>
          <p class="text-sm leading-relaxed text-gray-200">
            Monday to Friday<br />
            10:00 to 18:00
          </p>
        </div>

        <div>
          <h3 class="mb-4 flex items-center gap-2 font-serif text-lg font-bold">
            <Phone :size="18" aria-hidden="true" />
            Phone
          </h3>
          <ul class="space-y-1 text-sm text-gray-200">
            <li>Landline: 020 7247 6015</li>
            <li>Mobile: 079 5711 4379</li>
            <li>Fax: 020 7247 4688</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 flex items-center gap-2 font-serif text-lg font-bold">
            <Mail :size="18" aria-hidden="true" />
            Email
          </h3>
          <ul class="space-y-1 text-sm text-gray-200">
            <li>
              <a href="mailto:mail@nesolicitors.co.uk" class="hover:text-white">
                mail@nesolicitors.co.uk
              </a>
            </li>
            <li>
              <a href="mailto:info@nesolicitors.co.uk" class="hover:text-white">
                info@nesolicitors.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/15 bg-teal/95">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8"
      >
        <div class="text-xs leading-relaxed text-gray-300">
          <p>&copy; {{ year }} NESOLICITORS Legal Limited t/a NESOLICITORS.</p>
          <p class="mt-1 flex items-center justify-center gap-1.5 sm:justify-start">
            <ShieldCheck :size="14" class="shrink-0" aria-hidden="true" />
            Authorised and regulated by the Solicitors Regulation Authority under SRA ID: 832104
          </p>
        </div>
        <SocialIcons />
      </div>
    </div>
  </footer>
</template>
