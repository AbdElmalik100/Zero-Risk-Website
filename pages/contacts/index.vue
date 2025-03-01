<template>
  <div class="contacts-page min-h-screen">
    <SectionHeading :headingData="contactsHero" />
    <ContactForm />
    <div class="w-full">
      <iframe class="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.632262543666!2d46.778723199999995!3d24.773794600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01004aa7a727%3A0xbbc9f992db3f090b!2z2YXYpNiz2LPYqSDYtdmB2LEg2YXYrtin2LfYsSDZhNij2LnZhdin2YQg2KfZhNiv2YrZg9mI2LEg2Ygg2YjYqti02LfZitioINin2YTZhdio2KfZhtmK!5e0!3m2!1sen!2seg!4v1740779327479!5m2!1sen!2seg"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>
import { contactsHero } from "~/data/data";

useHead({
  title: "Contact Us",
});
</script>

<style lang="scss" scoped></style>
