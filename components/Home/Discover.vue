<script setup lang="ts"></script>
<template>
  <div
    class="py-[40px] lg:py-[76px] w-full text-white bg-discover-bg bg-cover bg-grey-4/80 bg-blend-multiply"
  >
  <div class="mx-auto w-full max-w-[1320px]">
    <div
      class="flex flex-col justify-between px-4 xl:px-0 w-full max-w-[632px]"
    >
      <h2
        class="leading-snug lg:leading-[56px] capitalize lg:text-[40px] text-[24px]"
      >
        Discover quality home care services
      </h2>
      <p class="leading-7 mt-4 w-full md:max-w-[636px]">
        Proper Care offers personalized and domiciliary care services for your loved ones.
      </p>
      <div class="flex mt-10 w-full md:w-auto">
        <nuxt-link
          to="#contact"
          class="py-4 px-6 bg-pink rounded-lg text-center leading-none text-white w-full md:w-auto"
          >Get in touch
        </nuxt-link>
      </div>
      <div id="contact" />
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss"></style>
