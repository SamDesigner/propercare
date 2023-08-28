<template>
  <footer
    class="bg-black-2 text-green min-h-[526px] pt-10 flex flex-col justify-between relative px-4"
  >
    <div
      class="my-10 md:py-[120px] flex flex-col md:flex-row md:justify-between items-stretch md:items-end w-full max-w-[1240px] mx-auto"
    >
      <img class="hidden lg:block absolute top-40 right-0" src="/svg/mission-bg-half.svg" alt="mission-bg">
      <div class="flex flex-col items-start gap-y-6 w-full max-w-[612px]">
        <p class="text-sm border border-green rounded px-4 py-3">
          The Good Practice Company
        </p>
        <h2 class="font-semibold text-[28px] md:text-[40px] leading-[44px] md:leading-[56px] text-green">
          Make a Positive Impact on the Lives of Your Patients!
        </h2>
        <ul class="impact list-inside flex flex-col gap-4">
          <li>Dedicated to improving healthcare and social care services in Nigeria</li>
          <li>Trusted quality assurance auditing company</li>
          <li>Striving to make a positive impact on the lives of individuals and communities</li>
        </ul>
        <img class="mt-10 lg:hidden" src="/svg/mission-bg.svg" alt="mission line" />
      </div>
      <div class="w-full flex items-center text-center  md:w-auto mt-20 md:mt-0">
        <nuxt-link to="#" class="bg-white text-black px-8 py-4 rounded w-full text-sm"
          >Work with us <Icon name="mdi:arrow-right" size="20" class="ml-1"
        /></nuxt-link>
      </div>
    </div>
    <div
      class="border-b border-green/25 flex flex-col md:flex-row justify-between items-center w-full max-w-[1240px] mx-auto py-10"
    >
      <div
        class="self-center flex flex-col items-center md:items-start md:self-auto text-center md:text-left max-w-fit"
      >
        <nuxt-link class="max-w-fit" to="/">
          <img class="md:w-[115px]" src="/svg/logo.svg" />
        </nuxt-link>
        <!-- <h5 class="text-grey-2 text-lg w-[262px] md:w-[310px] mt-8 font-normal">Striving for Excellence, Advancing Social Care</h5> -->
      </div>
      <div
        class="flex flex-wrap items-start gap-10 mt-14 md:mt-0 md:gap-[150px]"
      >
        <div class="flex text-sm gap-10 text-green">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/#about">About Us</nuxt-link>
          <nuxt-link to="/#services">Services</nuxt-link>
          <!-- <nuxt-link class="mb-6" to="/projects">Industries Served</nuxt-link> -->
          <nuxt-link to="/projects">Blog</nuxt-link>
        </div>
        <!-- <div class="flex flex-col text-green">
          <a href="#" target="_blank" class="mb-6">LinkedIn</a>
          <a href="#" target="_blank" class="mb-6">Facebook</a>
          <a href="#" target="_blank" class="mb-6">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
        <div class="flex flex-col text-green w-full md:max-w-[200px]">
          <p class="mb-6">+44 2074 594519 / +44 7720 185252</p>
          <p class="mb-6 break-words">hello@ocmanagementconsultants.co.uk</p>
          <p class="mb-4">Company's Address</p>
        </div> -->
      </div>
    </div>
    <div class="py-6 text-sm mb-10">
      <p class="text-center leading-snug mb-4 text-green">
        Designed by TGPC Media
      </p>
      <p class="text-center leading-snug text-green">
        © {{ new Date().getFullYear() }} TGPC NG.
        All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.impact li {
  background-image: url("~/assets/icons/tick.svg");
  background-repeat: no-repeat;
}
li {
  list-style: none;
  padding-left: 30px;
}
li::before {
  content: "";
  display: inline-block;
  background-image: url();
}
</style>
