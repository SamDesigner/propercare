<script setup lang="ts"></script>
<template>
  <div class="bg-light-pink">
    <div class="py-10 lg:py-20 mx-auto w-full max-w-[1320px]">
      <div
        class="flex flex-col px-4 lg:px-0 justify-between lg:flex-row lg:items-center"
      >
        <div class="mt-3 md:mt-0 w-full max-w-[566px] relative">
          <img class="w-full" src="/img/care.png" alt="hero image" />
        </div>
        <div
          class="w-full text-secondary max-w-[632px] mt-10 lg:mt-0 flex flex-col"
        >
          <h2
            class="font-semibold leading-snug lg:leading-[56px] lg:text-[40px] text-[24px]"
          >
            We will help you help your seniors the best way
          </h2>
          <div class="mt-8">
            <div class="py-4">
              <div class="flex gap-3 items-center">
                <img class="w-6" src="/img/one.png" alt="one" />
                <h3 class="font-semibold text-lg">Local Volunteers</h3>
              </div>
              <p class="leading-7 mt-2">
                Our dedicated team understands the importance of finding work in
                your city or town, and we are here to help you every step of the
                way.
              </p>
            </div>
            <div class="py-4">
              <div class="flex gap-3 items-center">
                <img class="w-6" src="/img/one.png" alt="one" />
                <h3 class="font-semibold text-lg">Monthly Events</h3>
              </div>
              <p class="leading-7 mt-2">
                Schedule appointments with qualified healthcare providers to
                address your health concerns.
              </p>
            </div>
            <div class="py-4">
              <div class="flex gap-3 items-center">
                <img class="w-6" src="/img/one.png" alt="one" />
                <h3 class="font-semibold text-lg">Caregiver</h3>
              </div>
              <p class="leading-7 mt-2">
                If you’re a qualified nurse, midwife, or care assistant looking
                for bank work, Wana Services can help you find flexible shifts
                with 24/7 support.
              </p>
            </div>
          </div>
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
