// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "ProperCare4U",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "At Proper Care, our team of dedicated professionals are committed to providing exceptional care that meets your unique needs.",
        },
      ],
      // script: [
      //   {
      //     src: "https://cdnjs.cloudflare.com/ajax/libs/video.js/8.3.0/video.min.js",
      //     defer: true,
      //   },
      //   {
      //     hid: "tawk.to",
      //     src: "https://embed.tawk.to/64b6bac7cc26a871b0293389/1h5ksj7mj",
      //     async: true,
      //     defer: true,
      //   },
      // ],
    },
  },
  css: ["~/assets/main.scss", "~/assets/fonts/fonts.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  googleFonts: {
    families: {
      Archivo: [400, 500, 600, 700],
      Poppins: [400, 500, 600, 700],
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
