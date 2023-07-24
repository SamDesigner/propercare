<script setup lang="ts">
const services = ref([
  {
    title: "The Positive Externalities of Developing Social Care in Africa",
    image: "blog1",
    desc: "Social care encompasses a wide range of services, including healthcare, education, and social protection. These services are essential... ",
    author: "Admin",
    date: "July 24, 2023",
    duration: "2 min",
    to: "/blog/first"
  },
  {
    title: "The Growing Importance of Enhancing Social Care in Nigeria",
    image: "blog2",
    desc: "Nigeria is Africa's most populous country, with over 200 million people. Despite its natural resources and diverse economy...",
    author: "Admin",
    date: "July 24, 2023",
    duration: "4 min",
    to: "/blog/second"
  },
  {
    title: "How Small Businesses Can Maximize Digital Footprints in an Increasingly Connected World",
    image: "blog3",
    desc: "As the world becomes more and more interconnected, businesses are increasingly... ",
    author: "Admin",
    date: "July 24, 2023",
    duration: "3 min",
    to: "/blog/third"
  },
]);
</script>
<template>
  <div class="flex flex-col mb-40 lg:mb-[200px] px-4 lg:px-0 mx-auto w-full max-w-[1240px]">
    <div
      class="flex flex-col md:flex-row justify-between items-start mt-6 lg:mt-16 w-full"
    >
      <div class="w-full max-w-[542px]">
        <h2
          class="font-bold leading-snug text-2xl lg:text-3xl text-primary dark:text-white"
        >
          Featured Blog Post
        </h2>
      </div>
      <div
        class="mt-3 text-lg text-black/70 dark:text-white/70 md:mt-0 max-w-[645px]"
      >
        <p>
          Dive into our articles, written by industry experts, and join the
          conversation to broaden your knowledge and make an impact in your
          field.
        </p>
      </div>
    </div>
    <div class="flex items-stretch flex-wrap gap-[24px] mt-8">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        :style="'font-size: 16px'"
        class="flex flex-col justify-center items-stretch rounded-b-2xl w-full md:w-[397px]"
      >
        <img class="" :src="`/img/${service.image}.png`" alt="impact image" />
        <div class="bg-primary px-4 py-6 rounded-b-2xl">
          <h5 class="text-xl font-semibold text-white">
            {{ service.title }}
          </h5>
          <div class="flex mt-1 gap-2 items-center">
            <h6 class="font-semibold text-sm text-white">
              By {{ service.author }}
            </h6>
            <div class="h-[18px] w-px bg-white/20" />
            <h6 class="font-semibold text-sm text-white">
              {{ service.date }}
            </h6>
            <div class="h-[18px] w-px bg-white/20" />
            <h6 class="font-semibold text-sm text-white">
              {{ service.duration }} read
            </h6>
          </div>
          <p class="text-white/70 leading-7">
            {{ service.desc }}
          </p>
          <nuxt-link :to="service.to" class="text-white text-lg font-semibold">Read more...</nuxt-link>
        </div>
      </div>
    </div>
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
