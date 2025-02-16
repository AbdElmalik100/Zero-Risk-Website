<template>
  <div class="projects-studio-page min-h-screen">
    <SectionHeading  :headingData="studioHero"/>
    <StudioGrid />
  </div>
</template>

<script setup>
import { studioHero } from '~/data/data';


useHead({
  title: "Projects Studio",
});
</script>

<style lang="scss" scoped>

</style>