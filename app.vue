<template>
  <main dir="rtl">
    <Header />
    <NuxtPage />
    <Footer />
    <Toaster richColors closeButton position="top-right" theme="light" />
  </main>
</template>

<script setup lang="ts">

useHead({
  titleTemplate: `Zero Risk | %s`,
});

</script>
