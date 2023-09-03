<script setup lang="ts"></script>
<template>
  <div class="py-10 lg:py-20 px-4 md:px-0 mx-auto w-full max-w-[1280px]">
    <div
        class="flex flex-col-reverse px-4 lg:px-0 justify-between lg:flex-row lg:items-center"
      >
        <div class="w-full text-secondary max-w-[610px] flex flex-col mt-10 lg:mt-0">
          <h2
            class="font-semibold leading-snug lg:leading-[56px] lg:text-[40px] text-[24px]"
          >
            Want to support us, Become a volunteer or care giver
          </h2>
          <p class="leading-7 mt-4 w-full max-w-[419px]">
            110+ professional caregivers for you and for your love one from the
            best.
          </p>
          <div class="flex mt-10 w-full md:w-auto">
            <nuxt-link
              to="#contact"
              class="py-4 px-8 bg-pink rounded-lg leading-none text-white"
              >Get in touch
              <Icon
                name="mdi:arrow-down"
                color="#FFF"
                size="20"
                class="ml-1 mb-0.5"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="mt-3 md:mt-0 w-full max-w-[566px] relative">
          <img class="w-full" src="/img/support.png" alt="hero image" />
        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0px 2px 72px 2px rgba(40, 13, 25, 0.08);
}
</style>
