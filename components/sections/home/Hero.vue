<template>
  <section class="landing my-32">
    <div class="container flex items-center gap-4 justify-center max-lg:flex-col-reverse">
      <div class="p-12 rounded-lg text-white relative z-10 lg:-translate-x-12 bg-[linear-gradient(248.38deg,_rgba(56,130,96,0.9)_-3.73%,_rgba(41,153,109,0.9)_52.59%,_rgba(56,130,96,0.9)_109.33%)]">
        <h1 class="font-bold text-2xl mb-4">{{ hero.title }}</h1>
        <p class="leading-8 mb-8">{{ hero.desc }}</p>
        <NuxtLink to="/about" class="second-btn !px-14">اعرف المزيد</NuxtLink>
      </div>
      <div class="image-wrapper lg:translate-x-12">
        <img src="/images/hero.png" alt="Hero image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { hero } from "~/data/data";
</script>

<style lang="scss" scoped></style>
