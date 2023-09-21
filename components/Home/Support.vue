<script setup lang="ts"></script>
<template>
  <div class="py-16 lg:py-20 border-y border-pink-2 px-4 md:px-0 mx-auto w-full">
    <div
      class="flex flex-col-reverse justify-between lg:flex-row lg:items-center w-full max-w-[1320px] mx-auto"
    >
      <div
        class="mt-10 lg:mt-0 w-full max-w-[624px] rounded-2xl py-20 px-10 bg-light-pink border border-pink-2 relative"
      >
        <img class="w-full" src="/img/support.png" alt="hero image" />
      </div>
      <div
        class="w-full text-primary max-w-[632px] md:px-4 xl:px-0 flex flex-col"
      >
        <h2
          class="leading-snug lg:leading-[56px] capitalize lg:text-[40px] text-[24px]"
        >
          Quality Home Care services you can trust
        </h2>
        <p class="leading-7 mt-4 w-full">
          We pride ourselves on delivering top-notch home care services that
          meet the unique needs of our clients. Our dedicated team of caregivers
          is committed to providing compassionate and personalized care to
          ensure the well-being and comfort of our clients.
        </p>
        <div class="flex flex-col lg:flex-row gap-6 mt-8 py-2 w-full">
          <div class="flex items-center gap-4 pr-8">
            <div class="p-[10px] bg-light-pink border rounded-xl border-pink-2">
              <img src="/svg/love-head.svg" alt="love head">
            </div>
            <h3 class="text-lg md:text-xl">Experienced Caregivers</h3>
          </div>
          <div class="flex items-center gap-4 pr-8">
            <div class="p-[10px] bg-light-pink border rounded-xl border-pink-2">
              <img src="/svg/love-head.svg" alt="love head">
            </div>
            <h3 class="text-lg md:text-xl">Personalized Approach</h3>
          </div>
        </div>
        <div class="flex mt-10 w-full md:w-auto">
          <nuxt-link
            to="#contact"
            class="py-4 px-6 bg-pink rounded-lg text-center leading-none text-white w-full md:w-auto"
            >Get in touch
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0px 2px 72px 2px rgba(40, 13, 25, 0.08);
}
</style>
