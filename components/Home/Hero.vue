<script setup lang="ts"></script>
<template>
  <div class=" mt-[140px] lg:mt-[200px] mx-auto w-full max-w-[1240px]">
    <div
      class="flex flex-col px-4 lg:px-0 justify-between lg:items-center"
    >
      <div class="w-full max-w-[822px] flex flex-col items-center text-center mb-16">
        <h1
          class="font-bold leading-snug lg:leading-tight text-[40px] lg:text-[56px] text-black dark:text-white"
        >
          Quality Assurance Auditing for a Better
          <!-- <span class="text-primary dark:text-white/60 invert-curve"
            ></span 0021665791
          > -->
          Future
        </h1>
        <!-- <div class="mt-3 md:hidden mb-12 max-w-[509px] relative pr-4">
          <img
            class="w-full max-w-[491px] relative z-10"
            src="/img/hero-img.png"
            alt="hero image"
          />
          <div
            class="absolute w-[calc(100%-16px)] h-full bg-black dark:bg-white rounded-lg top-4 right-0 z-0"
          />
        </div> -->
        <p class="leading-7 mt-4 w-full max-w-[612px]">
          The Good Practice Company NG is a trusted quality assurance auditing company that strives to improve healthcare and social care services in Nigeria. We work with individuals and communities to make a positive impact on their lives.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-5 mt-10 w-full md:w-auto">
          <nuxt-link
            to="#contact"
            class="border border-black bg-black text-center text-sm font-semibold py-5 px-9 rounded leading-none text-white "
            >Work with us <Icon name="mdi:arrow-right" color="#FFF" size="20" class="ml-1 mb-0.5" /></nuxt-link
          >
          <nuxt-link
            to="#contact"
            class="border-2 border-white text-center text-sm bg-white font-semibold p-5 leading-none rounded text-black"
            >Learn More <Icon name="mdi:arrow-down" color="#0A0A0A" size="20" class="ml-1 mb-0.5" /></nuxt-link
          >
        </div>
      </div>
      <div class="mt-3 md:mt-0 w-full relative">
        <img
          class="w-full"
          src="/img/vid-place.png"
          alt="hero image"
        />
      </div>
      <div id="about" />
    </div>
    <div
      class="flex flex-col md:flex-row px-4 lg:px-0 justify-between mt-20 lg:mt-40 w-full"
    >
      <div class="w-full md:ml-4 max-w-[548px]">
        <h1
          class="font-bold leading-snug lg:leading-[56px] text-3xl lg:text-[40px] text-black dark:text-white"
        >
          Improving Lives, One Audit at a Time
        </h1>
        
        <p class="mt-8 leading-7 md:mt-4">
          We are passionate about making a difference in the healthcare and social care sector in Nigeria. We use our expertise and innovative approach to quality assurance auditing to elevate standards, improve patient outcomes, and empower caregivers. 
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-5 mt-10">
          <nuxt-link
            to="#contact"
            class="border border-black bg-black text-center text-sm font-semibold py-5 px-9 rounded leading-none text-white "
            >Work with us <Icon name="mdi:arrow-right" color="#FFF" size="20" class="ml-1 mb-0.5" /></nuxt-link
          >
        </div>
      </div>
      <div class="mt-12 md:mt-0 max-w-[612px] relative">
        <img
          class="w-full relative"
          src="/img/img-place.png"
          alt="hero image"
        />
      </div>
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