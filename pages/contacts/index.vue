<template>
  <div class="contacts-page min-h-screen">
    <SectionHeading :headingData="contactsHero" />
    <ContactForm />
    <div class="w-full">
      <iframe
        class="w-full"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3622.641235930428!2d46.77611927536815!3d24.77348707798613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ2JzI0LjYiTiA0NsKwNDYnNDMuMyJF!5e0!3m2!1sen!2seg!4v1739675265109!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
