<script setup lang="ts">
const open = ref(false);
</script>
<template>
  <div class="bg-light-pink relative">
    <!-- <img class="absolute hidden lg:block top-0 left-0 w-[564px]" src="/img/ellipse.png" alt="ellipse"> -->
    <div class="pt-4 pb-16 mt-6 mx-auto w-full max-w-[1320px]">
      <div class="flex flex-col px-4 md:px-0 justify-between lg:flex-row">
        <div class="w-full text-primary max-w-[632px] md:px-4 xl:px-0 flex flex-col">
          <div
            class="w-full border border-pink-2 p-3 md:max-w-[432px] rounded-2xl backdrop-blur-[28px] bg-white"
          >
            <div class="flex justify-between">
              <nuxt-link to="/">
                <img class="w-[110px]" src="/svg/logo.svg" alt="logo" />
              </nuxt-link>
              <button ref="hamburger" @click="open = !open">
                <Icon name="ic:round-menu" size="24px" color="#E15E99" />
              </button>
            </div>
            <div v-if="open" class="border-t border-pink-2 mt-3 pt-3 flex justify-between">
              <nuxt-link to="/" class="text-pink-3">HOME</nuxt-link>
              <nuxt-link to="/" class="text-pink-3">ABOUT</nuxt-link>
              <nuxt-link to="/" class="text-pink-3">SERVICES</nuxt-link>
              <nuxt-link to="/" class="text-pink-3">CONTACT</nuxt-link>
            </div>
          </div>
          <div class="flex justify-self-center flex-col mt-10 md:mt-20 w-full">
            <h1
              class="font-medium leading-snug capitalize lg:leading-[72px] text-[40px] lg:text-[56px]"
            >
              Providing
              <span class="text-secondary font-semibold">Exceptional Care</span>
              in the comfort of your home
            </h1>
            <p class="leading-7 mt-4 w-full max-w-[614px]">
              At Proper Care, our team of dedicated professionals are committed
              to providing exceptional care that meets your unique needs. With
              our personalized approach, you can trust that you or your loved
              one will receive he attention and support necessary to maintain
              independence and enhance overall well-being.
            </p>
            <div class="flex mt-10 w-full md:w-auto">
              <nuxt-link
                to="#contact"
                class="py-4 px-8 bg-secondary rounded-lg leading-none text-white w-full md:w-auto text-center"
                >Get in touch
              </nuxt-link>
            </div>
          </div>
          <!-- <div class="flex flex-col gap-2 mt-10">
            <img class="w-[130px]" src="/img/avatar.png" alt="avatar" />
            <p class="font-semibold leading-[32px]">Our Clients Love Us</p>
            <img class="w-[152px]" src="/img/stars.png" alt="avatar" />
          </div> -->
        </div>
        <div
          class="mt-10 lg:mt-0 w-full max-w-[624px] rounded-2xl py-8 md:py-20 px-8 md:px-14 bg-white border border-pink-2 relative"
        >
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
