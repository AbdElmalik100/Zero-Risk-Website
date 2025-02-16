<template>
  <div class="about-page min-h-screen">
    <SectionHeading :headingData="aboutHero" />
    <WhoAreWe />
    <AboutObjectives />
  </div>
</template>

<script setup>
import { aboutHero } from '~/data/data';


useHead({
  title: "About",
});
</script>

<style lang="scss" scoped>

</style>