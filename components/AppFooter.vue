<template>
  <footer class="bg-primary dark:bg-white text-white dark:text-black min-h-[390px] pt-10 flex flex-col justify-between px-4">
    <div class="flex flex-col md:flex-row justify-between w-full max-w-[1240px] mx-auto mb-[30px]">
      <div class="self-center flex flex-col items-center md:items-start md:self-auto text-center md:text-left max-w-fit">
        <nuxt-link class="max-w-fit" to="/">
          <img class="md:w-[154px]" src="/svg/logo.svg" />
        </nuxt-link>
        <h5 class="text-grey-2 text-lg w-[262px] md:w-[310px] mt-8 font-normal">Striving for Excellence, Advancing Social Care</h5>
      </div>
      <div class="flex flex-wrap items-start gap-10 mt-14 md:mt-0 md:gap-[150px]">
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold text-white mb-4">Quick Links</h6>
          <nuxt-link class="mb-6" to="/">Home</nuxt-link>
          <nuxt-link class="mb-6" to="/about">About Us</nuxt-link>
          <nuxt-link class="mb-6" to="/services">Services</nuxt-link>
          <nuxt-link class="mb-6" to="/projects">Industries Served</nuxt-link>
          <nuxt-link to="/projects">Blog</nuxt-link>
        </div>
        <div class="flex flex-col text-grey-2">
          <h6 class="text-xl font-semibold text-white mb-6">Social Media</h6>
          <a href="#" target="_blank" class="mb-6">LinkedIn</a>
          <a href="#" target="_blank" class="mb-6">Facebook</a>
          <a href="#" target="_blank" class="mb-6">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
        <div class="flex flex-col text-grey-2 w-full md:max-w-[200px]">
          <h6 class="text-xl font-semibold text-white mb-6">Contact Us</h6>
          <p class="mb-6">+44 2074 594519 / +44 7720 185252</p>
          <p class="mb-6 break-words">hello@ocmanagementconsultants.co.uk</p>
          <!-- <p class="mb-4">Company's Address</p> -->
        </div>
      </div>
    </div>
    <div class="border-t border-grey-3 py-6">
      <p class="text-center leading-snug text-grey-2">© {{ new Date().getFullYear() }} The Good Practice Company (TGPC) NG. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>