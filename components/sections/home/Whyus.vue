<template>
  <section class="my-32">
    <div class="container px-10 flex gap-4 max-md:gap-8 max-md:flex-col">
      <div class="flex flex-col gap-4 w-full max-md:text-center">
        <h2 class="font-bold text-xl text-navy-text">{{ whyus.title }}</h2>
        <p class="text-dark-text leading-8">{{ whyus.desc }}</p>
        <NuxtLink to="/contacts" class="main-btn !px-16 mt-8" >تواصل معنا</NuxtLink>
      </div>
      <div class="image-wrapper w-full">
        <img :src="whyus.image" class="w-full" :alt="whyus.imageAlt">
      </div>
    </div>
  </section>
</template>

<script setup>
import { whyus } from '~/data/data';


</script>

<style lang="scss" scoped>

</style>