<script setup lang="ts">
const services = ref([
  {
    name: "Client's Name",
    title: "Position",
    image: "impact1",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
  {
    name: "Client's Name",
    title: "Position",
    image: "impact2",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
  {
    name: "Client's Name",
    title: "Position",
    image: "impact1",
    desc: "Working with The Good Practice Company NG has been a game-changer for our organization. Their quality assurance audits have helped us identify areas for improvement and implement strategies that have elevated our services. The expertise and professionalism of their team are truly impressive. Highly recommended!",
  },
]);

const swiperOptions = reactive({
  breakpoints: {
    200: {
      slidesPerView: 1
    }
  }
})
</script>
<template>
  <div
    class="flex flex-col mb-10 lg:mb-[100px] mt-20 lg:mt-0 mx-auto px-4 lg:px-0 w-full max-w-[1240px]"
  >
    <div class="flex lg:items-center justify-between w-full">
      <div class="">
        <h2
          class="font-semibold leading-snug text-2xl md:text-3xl text-primary mb-3"
        >
          Testimonials: A Glimpse Into Our Impact
        </h2>
      </div>
    </div>
    <swiper-container
      slides-per-view="2"
      space-between="10"
      loop="true"
      css-mode="true"
      navigation="true"
      class="w-full"
      :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide
        v-for="(service, idx) in services"
        :key="idx"
        :style="'font-size: 16px'"
      >
        <div
          class="bg-primary/5 flex flex-col justify-center relative rounded-2xl px-6 pb-11 pt-48 md:pt-32 w-full md:w-[520px] h-auto md:h-[440px]"
        >
          <span class="text-black/20 text-[160px] leading-3">“</span>
          <img class="absolute right-0 top-0 w-[194px]" :src="`/svg/${service.image}.svg`" alt="impact image">
          <p class="text-black/70 max-w-[390px] -mt-3 leading-7 mb-6">{{ service.desc }}</p>
          <div class="flex items-center gap-3">
            <div class="flex flex-col">
              <h6 class="text-xl font-semibold text-black">
                {{ service.name }}
              </h6>
              <p class="mt-1 text-black/70">
                {{ service.title }}
              </p>
            </div>
          </div>
        </div>
        </swiper-slide>
    </swiper-container>
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
