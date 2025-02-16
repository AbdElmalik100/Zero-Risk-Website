<template>
  <section class="py-20 bg-primary-soft">
    <div class="container px-10 flex gap-4 max-md:gap-8 items-center max-md:flex-col">
      <div class="flex flex-col gap-4 w-full">
        <h2 class="font-bold text-navy-text text-2xl">
          {{ contacts.title }}
        </h2>
        <p class="leading-8 text-dark-text">
          {{ contacts.desc }}
        </p>
        <NuxtLink to="/contacts" class="main-btn !px-16 my-8" >تواصل معنا</NuxtLink>
        <Socials />
      </div>
      <div class="map-wrapper rounded-lg w-full h-[350px] overflow-hidden">
        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d8621.07711361059!2d46.68185913693294!3d24.702273247525365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d24.702221881295234!2d46.6867866009971!5e0!3m2!1sen!2seg!4v1739650643380!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contacts } from '~/data/data';


</script>

<style lang="scss" scoped>

</style>