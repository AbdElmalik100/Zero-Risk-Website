<template>
  <section class="py-32 my-32 bg-soft-gray">
    <div class="container flex justify-center lg:gap-8 max-lg:gap-20 max-lg:flex-col ">
      <div
        class="box relative p-8 border rounded-lg w-full bg-white"
        v-for="item in objectives"
        :key="item.id"
      >
        <div class="absolute w-[88px] h-[88px] rounded-full -top-[44px] left-1/2 -translate-x-1/2 bg-objbg-gray p-4 grid place-items-center">
          <img :src="item.image" :alt="`${item.title} ${item.id}`">
        </div>
        <h2 class="font-bold text-lg mb-3">
          {{ item.title }}
        </h2>
        <p class="text-dark-text leading-8">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { objectives } from "~/data/data";
</script>

<style lang="scss" scoped></style>
