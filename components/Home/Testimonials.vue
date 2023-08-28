<script setup lang="ts">
const services = ref([
  {
    name: "Crystallize Care Services",
    title: "`",
    image: "impact1",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
  // {
  //   name: "Client's Name",
  //   title: "Position",
  //   image: "impact2",
  //   desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  // },
  // {
  //   name: "Client's Name",
  //   title: "Position",
  //   image: "impact1",
  //   desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  // },
]);

const swiperOptions = reactive({
  breakpoints: {
    200: {
      slidesPerView: 1
    },
    1050: {
      slidesPerView: 1
    }
  }
})
</script>
<template>
  <div
    class="flex flex-col items-center mb-10 lg:mb-[100px] mt-20 lg:mt-[120px] mx-auto px-4 lg:px-0 w-full max-w-[1240px]"
  >
    <!-- <swiper-container
      slides-per-view="1"
      space-between="10"
      centered-slides="true"
      loop="true"
      css-mode="true"
      navigation="true"
      class=""
      :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide
        v-for="(service, idx) in services"
        :key="idx"
        :style="'font-size: 16px'"
        class="w-[auto!important]"
      > -->
        <div
          class="flex flex-col justify-center items-center text-center relative rounded-2xl md:px-6 pb-11 md:pt-32 w-full md:w-[854px]"
        >
          <img class="w-[135px]" src="/img/crystallize-logo.png" alt="impact image">
          <p class="md:text-2xl text-black font-semibold leading-[32px] md:leading-[40px] my-6">“Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!”</p>
          <div class="flex items-center gap-3">
            <div class="flex flex-col items-center">

            <img class="w-12" src="/img/pfp-place.png" alt="impact image">
              <h6 class="mt-4 font-semibold">
                Gwen Stacy
              </h6>
              <p class="mt-1">
                Senior Consultant
              </p>
            </div>
          </div>
        </div>
        <!-- </swiper-slide>
    </swiper-container> -->
  </div>
</template>

<style lang="scss" scoped>
// .swiper {
//   width: 100vw;
//   height: 100vh;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }
.swiper-button-next {
  background-color: $primary !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 50% !important;
}
</style>
