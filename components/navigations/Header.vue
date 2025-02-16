<template>
  <header class="py-4 relative">
    <div class="container flex items-center justify-between gap-8">
      <div class="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div
        :class="activeMenu ? 'max-md:left-[0%]' : 'max-md:-left-[100%]'"
        class="max-md:fixed max-md:flex-col max-md:items-start max-md:w-[250px] max-md:p-4 max-md:backdrop-blur-sm max-md:bg-white/40 max-md:shadow-lg max-md:top-0 max-md:h-screen transition-all ease-out duration-300 z-10 flex items-center justify-between w-full"
      >
        <button
          class="close md:hidden w-12 h-12 rounded-full text-white bg-primary-500 grid place-items-center"
          @click="activeMenu = false"
        >
          <Icon name="icon-park-outline:close" size="1.2em" />
        </button>

        <ul
          ref="menuRef"
          class="nav-links flex items-center gap-8 max-lg:gap-4 max-md:flex-col max-md:items-start"
        >
          <li v-for="link in links" :key="link.id">
            <NuxtLink
              @click="activeMenu = false"
              :to="link.path"
              class="transition-all hover:text-primary-500 [&.router-link-active]:text-primary-500"
            >
              {{ link.arabicName }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink to="/contacts" class="main-btn px-10 max-md:w-full">
          سجل اهتمامك
        </NuxtLink>
      </div>
      <button
        class="menu md:hidden w-12 h-12 rounded-full text-white bg-primary-500 grid place-items-center"
        @click="activeMenu = true"
      >
        <Icon name="heroicons-outline:menu-alt-2" size="1.5em" />
      </button>
    </div>
  </header>
</template>

<script setup>
const menuRef = ref();
const activeMenu = ref(false);
const links = [
  {
    id: 1,
    path: "/",
    name: "home",
    arabicName: "الرئيسيه",
  },
  {
    id: 2,
    path: "/about",
    name: "about",
    arabicName: "من نحن",
  },
  {
    id: 3,
    path: "/services",
    name: "services",
    arabicName: "الخدمات",
  },
  {
    id: 4,
    path: "/projects-studio",
    name: "projects-studio",
    arabicName: "استوديو الاعمال",
  },
  {
    id: 5,
    path: "/contacts",
    name: "contacts",
    arabicName: "تواصل معنا",
  },
];

onClickOutside(menuRef, () => {
  activeMenu.value = false
});
</script>

<style lang="scss" scoped></style>
