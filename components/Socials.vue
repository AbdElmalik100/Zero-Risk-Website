<template>
  <div class="socials flex items-center gap-4 flex-wrap">
    <NuxtLink
      v-for="(social, index) in socials"
      :key="index"
      target="_blank"
      :to="social.link"
      :class="dark ? 'bg-objbg-gray' : 'bg-white'"
      class="w-10 h-10 grid place-items-center text-primary-500 rounded-full border border-transparent transition-all hover:bg-black hover:text-white"
    >
      <Icon :name="social.icon" size="1.5em" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { footer } from '~/data/data';

const socials = computed(() => footer.socials)

defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
