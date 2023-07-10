<template>
  <footer class="bg-black dark:bg-white text-white dark:text-black min-h-[257px] pt-12 flex flex-col justify-between px-4">
    <div class="flex flex-col justify-center w-full max-w-[1240px] mx-auto">
      <div class="flex flex-col items-center">
        <nuxt-link to="/">
          <!-- <img class="w-[183px]" src="/img/logo-footer.png" alt="footer logo" > -->
          <div class="bg-no-repeat bg-contain bg-logo-footer dark:bg-logo w-[183px] h-[55px]" />
        </nuxt-link>
        <div class="flex gap-3 mt-4">
          <Icon name="mdi:linkedin" class="text-white dark:text-black" size="28px" />
          <Icon name="mdi:twitter-box" class="text-white dark:text-black" size="28px" />
          <Icon name="ph:instagram-logo-fill" class="text-white dark:text-black" size="28px" />
        </div>
      </div>
    </div>
    <div class="border-t border-grey-3 py-6">
      <p class="text-center leading-snug text-grey-2">© {{ new Date().getFullYear() }} The Good Practice Company (TGPC) Media. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>