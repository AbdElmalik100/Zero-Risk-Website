<template>
  <section class="my-32">
    <div class="container px-10 text-center">
      <h2 class="text-primary-500 font-bold text-3xl mb-8">
        {{ whoAreWe.title }}
      </h2>
      <p class="text-paragraph-dark leading-8 lg:w-3/4 mx-auto">
        {{ whoAreWe.desc }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { whoAreWe } from "~/data/data";
</script>

<style lang="scss" scoped></style>
