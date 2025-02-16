<template>
  <section class="my-32">
    <div class="container px-10">
      <div class="header text-center">
        <h2 class="text-3xl font-bold mb-4 text-navy-text">{{ gallery.title }}</h2>
        <div class="studio-gallery mt-10 grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          <div class="image-wrapper relative rounded-lg group shadow-md transition-all cursor-pointer overflow-hidden" v-for="item in gallery.studio" :key="item.id">
            <img :src="item.image" class="w-full" :alt="item.imageAlt">
            <div class="bg-[#0E4E447A] absolute w-full h-full group-hover:top-0 transition-all ease-out duration-300 top-full grid place-items-center text-white">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gallery } from '~/data/data';


</script>

<style lang="scss" scoped>

</style>