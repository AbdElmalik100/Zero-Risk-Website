<template>
  <div class="services-page min-h-screen">
    <SectionHeading :headingData="servicesHero" />
    <ServicesGrid />
  </div>
</template>

<script setup>
import { servicesHero } from '~/data/data';

useHead({
  title: "Services",
});
</script>

<style lang="scss" scoped>

</style>