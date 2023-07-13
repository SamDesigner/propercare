<script setup lang="ts"></script>
<template>
  <div class=" mt-[140px] lg:mt-[200px] mx-auto w-full max-w-[1240px]">
    <div
      class="flex flex-col md:flex-row px-4 lg:px-0 justify-between lg:items-center"
    >
      <div class="w-full max-w-[612px]">
        <h1
          class="font-bold leading-snug lg:leading-tight text-3xl lg:text-5xl text-black dark:text-white"
        >
          Quality Assurance Auditing for a
          <span class="text-primary dark:text-white/60 invert-curve"
            >Better</span
          >
          Future
        </h1>
        <div class="mt-3 md:hidden mb-12 max-w-[509px] relative pr-4">
          <img
            class="w-full max-w-[491px] relative z-10"
            src="/img/hero-img.png"
            alt="hero image"
          />
          <div
            class="absolute w-[calc(100%-16px)] h-full bg-black dark:bg-white rounded-lg top-4 right-0 z-0"
          />
        </div>
        <p class="md:text-lg leading-7 mt-3 text-black/70 dark:text-white/70">
          Welcome to The Good Practice Company NG, where we are dedicated to
          improving healthcare and social care services in Nigeria. As a trusted
          quality assurance auditing company, we strive to make a positive
          impact on the lives of individuals and communities.
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-5 mt-5">
          <nuxt-link
            to="#contact"
            class="border border-primary bg-primary text-center font-semibold py-5 px-9 rounded-2xl leading-none text-white dark:text-primary"
            >Learn More</nuxt-link
          >
          <nuxt-link
            to="#contact"
            class="border-2 border-primary text-center bg-white font-semibold p-5 rounded-2xl leading-none dark:text-white text-black"
            >Explore Our Services</nuxt-link
          >
        </div>
      </div>
      <div class="mt-3 hidden md:block md:mt-0 max-w-[509px] relative">
        <img
          class="w-full max-w-[491px] relative z-10"
          src="/img/hero-img.png"
          alt="hero image"
        />
        <div
          class="absolute w-full h-full bg-black dark:bg-white rounded-lg top-4 -right-4 z-0"
        />
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row px-4 lg:px-0 justify-between lg:items-center mt-20 lg:mt-40 w-full"
    >
      <div class="hidden md:block mt-3 md:mt-0 max-w-[509px] relative">
        <img
          class="w-full max-w-[491px] relative mt-4 ml-4 z-10"
          src="/img/hero2-img.png"
          alt="hero image"
        />
        <div
          class="absolute w-[206px] h-[206px] bg-black dark:bg-white rounded-lg top-0 left-0 z-0"
        />
      </div>
      <div class="w-full max-w-[612px]">
        <h1
          class="font-bold leading-snug lg:leading-tight text-3xl lg:text-5xl text-black dark:text-white"
        >
          Improving Lives, One Audit at a Time
        </h1>
        <div class="mt-3 md:mt-0 max-w-[509px] pl-3 md:pl-4 pt-3 md:pt-4 relative">
          <img
            class="w-full max-w-[491px] relative z-10"
            src="/img/hero2-img.png"
            alt="hero image"
          />
          <div
            class="absolute w-[87px] md:w-[206px] h-[87px] md:h-[206px] bg-black dark:bg-white rounded-lg top-0 left-0 z-0"
          />
        </div>
        <p class="md:text-lg mt-8 md:mt-3 text-black/70 dark:text-white/70">
          At The Good Practice Company NG, we are passionate about making a difference. With a focus on quality assurance auditing, we strive to elevate healthcare and social care services in Nigeria to new heights. Through our expertise, dedication, and innovative approach, we aim to improve standards, enhance patient outcomes, and empower caregivers. 
        </p>
        <div class="flex flex-col md:flex-row gap-3 md:gap-5 mt-5">
          <nuxt-link
            to="#contact"
            class="border border-primary text-center bg-primary font-semibold py-5 px-9 rounded-2xl leading-none text-white dark:text-primary"
            >Read More</nuxt-link
          >
          <nuxt-link
            to="#contact"
            class="border-2 border-primary text-center bg-white font-semibold p-5 rounded-2xl leading-none dark:text-white text-black"
            >Explore Our Services</nuxt-link
          >
        </div>
      </div>
    </div>
    <div id="about" />
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