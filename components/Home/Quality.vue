<script setup lang="ts">
const open = ref(false);
</script>
<template>
  <div class="bg-light-pink border-y border-pink-2 py-20 relative">
    <!-- <img class="absolute hidden lg:block top-0 left-0 w-[564px]" src="/img/ellipse.png" alt="ellipse"> -->
    <div class="mx-auto w-full max-w-[1320px]">
      <div class="flex flex-col gap-10">
        <div class="w-full text-primary px-4 xl:px-0 flex flex-col lg:flex-row justify-between">
          <h2
            class="leading-snug lg:leading-[56px] capitalize lg:text-[40px] text-[24px]"
          >
            Experience Quality Care in the Comfort of Your Home
          </h2>
          <p class="leading-7 mt-4 w-full md:max-w-[636px]">
            At Proper Care, we understand the importance of receiving
            high-quality care in the comfort of your own home. Our team of
            dedicated professionals is committed to providing exceptional care
            that meets your unique needs. With our personalized approach, you
            can trust that you or your loved one will receive the attention and
            support necessary to maintain independence and enhance overall
            well-being.
          </p>
        </div>
        <img
          class="w-full rounded-xl"
          src="/img/quality-img.png"
          alt="quality image"
        />
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
