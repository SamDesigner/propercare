<template>
  <footer
    id="footer"
    class="bg-green text-grey-3 min-h-[369px] py-10 flex flex-col justify-between px-4"
  >
    <div class="w-full max-w-[1240px] mx-auto">
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center w-full"
      >
        <div class="flex flex-col items-center mt-10">
          <nuxt-link to="/">
            <img class="w-[127px]" src="/img/logo.png" />
          </nuxt-link>
          <div
            class="text-sm w-full flex flex-col md:flex-row gap-10 max-w-full md:max-w-[333px] mt-10 text-center md:text-left"
          >
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
            <nuxt-link class="min-w-max" to="/service">Services</nuxt-link>
            <!-- <nuxt-link class="min-w-max" to="/job">Find Jobs</nuxt-link> -->
          </div>
          <!-- <div class="mt-6 flex justify-center md:justify-start gap-3">
            <a href="#" target="_blank"
              ><Icon name="ic:round-facebook" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="mdi:linkedin" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="mdi:twitter-box" size="24px" color="#FFFFFF"
            /></a>
            <a href="#" target="_blank"
              ><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF"
            /></a>
          </div> -->
        </div>
      </div>
      <div class="border-t border-white mt-10 text-sm pt-10">
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
