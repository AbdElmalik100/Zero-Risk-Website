<template>
  <footer class="pt-10 pb-6 bg-primary-500 text-white">
    <div class="container flex items-start gap-12 max-md:flex-col">
      <div class="flex flex-col w-full max-md:text-center max-md:items-center">
        <div class="logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <p class="leading-8 mt-4">
          {{ footer.desc }}
        </p>
      </div>
      <div class="flex flex-col items-center max-md:text-center w-full">
        <h2 class="font-bold text-lg mb-4">روابط سريعة</h2>
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.id">
            <NuxtLink :to="link.path" class="hover:underline">
              {{ link.arabicName }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-8 w-full max-md:items-center">
        <div class="contacts flex flex-col gap-4 max-md:items-center">
          <div
            class="flex items-center gap-3"
            v-for="(obj, key) in footer.contacts"
            :key="key"
          >
            <Icon :name="obj.icon" size="1.5em" />
            <NuxtLink :dir="key == 'phone' ? 'ltr' : 'rtl'" :to="obj.link" target="_blank" class="hover:underline">
              {{ obj.title }}
            </NuxtLink>
          </div>
        </div>
        <Socials />
      </div>
    </div>
    <p class="copy pt-6 mt-10 border-t border-white text-center text-sm" dir="ltr">
      © {{ new Date().getFullYear() }} zerorisk - جميع الحقوق محفوظة.
    </p>
  </footer>
</template>

<script setup>
import { footer, hero } from "~/data/data";

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
</script>

<style lang="scss" scoped></style>
