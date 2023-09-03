<script setup lang="ts"></script>
<template>
  <div class="w-full mt-[64px] mb-20 py-6 md:py-[55px] lg:mt-16">
    <div class="flex flex-col items-center mx-auto w-full max-w-[1280px]">
      <div
        class="flex flex-col md:flex-row gap-6 justify-between lg:items-stretch"
      >
        <div
          class="w-full px-4 xl:px-0 leading-7 flex flex-col max-w-[608px] rounded-[25px] relative"
        >
          <h3
            class="font-bold leading-snug lg:leading-tight text-2xl lg:text-3xl text-black dark:text-white"
          >
            Our Mission
          </h3>
          <p class="mt-4">
            Our mission is to provide high-quality, objective, and reliable
            auditing services to healthcare and social care providers in
            Nigeria. Our services will help healthcare providers improve the
            quality of care they deliver to patients, while ensuring compliance
            with regulatory requirements and standards.
          </p>
          <!-- <img
            class="absolute bottom-0"
            src="/svg/mission-bg.svg"
            alt="mission line"
          /> -->
        </div>
        <div
          class="w-full px-4 xl:px-0 leading-7 flex flex-col max-w-[608px] rounded-[25px] relative"
        >
          <h3
            class="font-bold leading-snug lg:leading-tight text-2xl lg:text-3xl text-black dark:text-white"
          >
            Our Vision
          </h3>
          <p class="mt-4">
            Our vision is to be the leading catalyst for transforming the
            healthcare and social care landscape in Nigeria. We strive to create
            a future where every person has access to high-quality and
            compassionate care, and where healthcare and social care providers
            continuously strive for excellence and innovation.
          </p>
          <!-- <img
            class="absolute bottom-0"
            src="/svg/mission-bg.svg"
            alt="mission line"
          /> -->
        </div>
      </div>
      <div id="services" />
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
  }
}
</style>
