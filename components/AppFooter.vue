<template>
  <footer
    id="footer"
    class="bg-green text-grey-3 min-h-[369px] pt-16 pb-10 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1280px] mx-auto">
      <div
        class="flex flex-col md:flex-row items-center justify-center w-full"
      >
        <div class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 justify-between w-full">
          <nuxt-link to="/">
            <img class="w-[127px]" src="/svg/logo.svg" />
          </nuxt-link>
          <div
            class="flex text-2xl flex-col gap-10 text-center md:text-left"
          >
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
            <nuxt-link class="min-w-max" to="/service">Services</nuxt-link>
            <nuxt-link class="min-w-max" to="/job">Contact</nuxt-link>
          </div>
        </div>
      </div>
      <div class="border-t border-grey-5 mt-10 flex flex-col md:flex-row justify-between text-sm pt-10">
        <p class="text-center leading-snug mb-4">
          Designed by TGPC Media
        </p>
        <p class="text-center leading-snug mb-2">
          © {{ new Date().getFullYear() }} Proper4UCare. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
</script>

<style scoped></style>
