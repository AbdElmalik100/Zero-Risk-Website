<template>
  <section class="my-32">
    <div class="container">
      <div class="flex flex-col gap-10 max-md:gap-20">
        <div
          class="flex items-center justify-between gap-10 max-md:flex-col"
          :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
          v-for="(service, index) in servicesGrid"
          :key="service.id"
        >
          <div class="flex w-full" :class="index % 2 === 0 ? 'justify-start' : 'justify-end'">
            <div class="flex flex-col gap-4 md:w-3/4">
              <h2 class="text-navy-text text-2xl flex items-center gap-4">
                <span class="font-bold text-5xl ms-4">{{ index + 1 }}</span>
                {{ service.title }}
              </h2>
              <p class="text-paragraph-dark leading-8">
                {{ service.desc }}
              </p>
            </div>
          </div>
          <div class="image-wrapper md:w-3/4">
            <img class="w-full" :src="service.image" :alt="service.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { servicesGrid } from "~/data/data";
</script>

<style lang="scss" scoped></style>
