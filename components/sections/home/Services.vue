<template>
  <section class="my-32">
    <div class="container px-10">
      <div class="header text-center">
        <h2 class="text-3xl font-bold mb-4 text-navy-text">{{ services.title }}</h2>
        <p class="text-paragraph-dark leading-8 lg:w-3/4 mx-auto">
          {{ services.desc }}
        </p>
      </div>
      <div class="image-wrapper rounded-lg overflow-hidden my-10">
        <img :src="services.image" class="mx-auto" :alt="imageAlt" />
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4 max-md:gap-8 mt-10">
        <div
          class="box rounded-lg shadow-lg w-full flex flex-col gap-4"
          v-for="service in services.allServices"
          :key="service.id"
        >
          <div class="image-wrapper">
            <img class="w-full h-full" :src="service.image" :alt="`${service.title}`" />
          </div>
          <div class="p-4">
            <h2 class="text-lg font-semibold text-light-navy-text mb-4">
              {{ service.title }}
            </h2>
            <p class="text-paragraph-dark leading-8">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from "~/data/data";
</script>

<style lang="scss" scoped></style>
