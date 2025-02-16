// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/globals.scss"],
  googleFonts: {
    families: {
      "Noto Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
