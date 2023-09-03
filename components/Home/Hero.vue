<script setup lang="ts"></script>
<template>
  <div class="bg-light-pink relative">
    <img class="absolute hidden lg:block top-0 left-0 w-[564px]" src="/img/ellipse.png" alt="ellipse">
    <div class="pt-[140px] pb-10 lg:pt-[200px] mx-auto w-full max-w-[1280px]">
      <div
        class="flex flex-col px-4 lg:px-0 justify-between lg:flex-row lg:items-center"
      >
        <div class="w-full text-secondary max-w-[610px] lg:pt-24 flex flex-col">
          <h1
            class="font-semibold leading-snug lg:leading-[80px] text-[40px] lg:text-[64px]"
          >
            Live In Care, Your Family Will Love
          </h1>
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
          <div class="flex flex-col gap-2 mt-10">
            <img class="w-[130px]" src="/img/avatar.png" alt="avatar" />
            <p class="font-semibold leading-[32px]">Our Clients Love Us</p>
            <img class="w-[152px]" src="/img/stars.png" alt="avatar" />
          </div>
        </div>
        <div class="mt-3 md:mt-0 w-full max-w-[566px] relative">
          <img class="w-full" src="/img/hero-img.png" alt="hero image" />
        </div>
      </div>
      <div id="about" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invert-curve {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 14px;
    background-image: url("/svg/line.svg");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1024px) {
      height: 9px;
      bottom: 3px;
    }
  }
}
</style>
