<script setup lang="ts"></script>
<template>
  <div class="w-full bg-primary dark:bg-white mt-[140px] py-6 md:py-[55px] lg:mt-[200px]">
    <div class="flex flex-col items-center mx-auto w-full max-w-[1240px]">
      <h3 class="text-white dark:text-primary text-center md:text-left text-2xl lg:text-3xl mb-6 font-bold">Driving Excellence,<br class="md:hidden"> Enriching Lives</h3>
      <div
        class="flex flex-col md:flex-row px-4 lg:px-0 gap-5 md:gap-[82px] justify-between lg:items-center"
      >
        <div class="bg-white dark:bg-primary w-full px-4 md:px-[62px] py-[29px] md:py-12 flex flex-col items-center text-center max-w-[579px] rounded-[25px] relative">
          <h3
            class="font-bold leading-snug lg:leading-tight text-2xl lg:text-3xl text-black dark:text-white"
          >
            Our Mission
          </h3>
          <p class="md:text-lg mt-3 text-black/70 dark:text-white/70 relative z-10">
            Our mission is to provide high-quality, objective, and reliable auditing services to healthcare and social care providers in Nigeria. Our services will help healthcare providers improve the quality of care they deliver to patients, while ensuring compliance with regulatory requirements and standards.
          </p>
          <img class="absolute bottom-0" src="/svg/mission-bg.svg" alt="mission line" >
        </div>
        <div class="bg-white dark:bg-primary w-full px-4 md:px-[62px] py-[29px] md:py-12 flex flex-col items-center text-center max-w-[579px] rounded-[25px] relative">
          <h3
            class="font-bold leading-snug lg:leading-tight text-2xl lg:text-3xl text-black dark:text-white"
          >
            Our Vision
          </h3>
          <p class="md:text-lg mt-3 text-black/70 dark:text-white/70 relative z-10">
            Our vision is to be the leading catalyst for transforming the healthcare and social care landscape in Nigeria. We strive to create a future where every person has access to high-quality and compassionate care, and where healthcare and social care providers continuously strive for excellence and innovation.
          </p>
          <img class="absolute bottom-0" src="/svg/mission-bg.svg" alt="mission line" >
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
  }
}
</style>