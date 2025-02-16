<template>
  <section class="my-32">
    <div class="container">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div
          class="image-wrapper rounded-xl aspect-square overflow-hidden border border-transparent hover:border-primary-500 transition-all ease-out hover:shadow-lg"
          v-for="(item, index) in studioGallery[pagination]"
          :key="index"
        >
          <img
            class="w-full h-full object-cover"
            :src="`/images/studio/${item + 1}.jpg`"
            :alt="`Studio ${index + 1}`"
          />
        </div>
      </div>
      <div class="pagination mt-10 flex items-center justify-center gap-4">
        <div
          v-for="(item, index) in Object.keys(studioGallery)"
          :key="index"
          @click="updatePagination(item)"
          :class="pagination == item ? 'active' : ''"
          class="box [&.active]:bg-primary-500 [&.active]:scale-110 [&.active]:text-white border border-primary-500 transition-all ease-out rounded-lg grid text-primary-500 place-items-center w-10 h-10 cursor-pointer"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { studioGallery } from "~/data/data";
const pagination = ref("1");
const route = useRoute();
const router = useRouter();


const updatePagination = (page) => {
  pagination.value = page;
  router.push({
    name: route.name,
    query: { page: page },
  });
};

onMounted(() => {
  if (route.query.page) {
    pagination.value = route.query.page
  } else {
    router.push({
      name: route.name,
      query: { page: pagination.value },
    });
  }
});
</script>

<style lang="scss" scoped></style>
