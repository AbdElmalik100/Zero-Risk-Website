<template>
  <section class="py-32">
    <div class="container px-10 flex items-start gap-4 max-md:flex-col-reverse max-md:gap-8">
      <div class="flex flex-col gap-4 w-full">
        <div class="box" v-for="item in aboutObjectives.objectives" :key="item.id">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-full text-white bg-obj-dark grid place-items-center">
              <Icon :name="item.icon" size="1.5em" />
            </div>
            <h2 class="text-navy-text font-bold">
              {{ item.title }}
            </h2>
          </div>
          <p
            class="text-dark-text relative before:absolute before:top-0 before:right-0 ps-7 ms-7 before:w-0.5 before:rounded-full before:h-full before:bg-[#9b9b9b]"
          >
            {{ item.desc }}
          </p>
        </div>
      </div>
      <div class="image-wrapper md:w-1/2">
        <img class="w-full" :src="aboutObjectives.image" :alt="aboutObjectives.imageAlt" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { aboutObjectives, objectives } from "~/data/data";
</script>

<style lang="scss" scoped></style>
