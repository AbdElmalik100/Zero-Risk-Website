<template>
  <section class="my-32">
    <div class="container max-md:">
      <div class="image-wrapper relative rounded-lg overflow-hidden h-[300px]">
        <img :src="headingData.image" class="w-full object-cover h-full" :alt="headingData.imagealt" />
        <div class="overlay bg-black/40 absolute top-0 left-0 w-full h-full"></div>
        <div class="bg-primary-500/40 absolute grid place-items-center top-0 left-0 w-full h-full">
          <h1 class="text-white font-bold md:text-3xl text-center">{{ headingData.title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  headingData: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped></style>
