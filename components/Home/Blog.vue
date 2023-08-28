<script setup lang="ts">
const services = ref([
  {
    title: "The Positive Externalities of Developing Social Care in Africa",
    image: "first-blog-img",
    desc: "Social care encompasses a wide range of services, including healthcare, education, and social protection. These services are essential... ",
    author: "Admin",
    date: "07/24/2023",
    duration: "2 min",
    to: "/blog/first",
  },
  {
    title: "The Growing Importance of Enhancing Social Care in Nigeria",
    image: "second-blog-img",
    desc: "Nigeria is Africa's most populous country, with over 200 million people. Despite its natural resources and diverse economy...",
    author: "Admin",
    date: "07/24/2023",
    duration: "4 min",
    to: "/blog/second",
  },
  {
    title:
      "How Small Businesses Can Maximize Digital Footprints in an Increasingly Connected World",
    image: "third-blog-img",
    desc: "As the world becomes more and more interconnected, businesses are increasingly... ",
    author: "Admin",
    date: "07/24/2023",
    duration: "3 min",
    to: "/blog/third",
  },
]);
</script>
<template>
  <div
    class="flex flex-col mb-40 lg:mb-[120px] px-4 lg:px-0 mx-auto w-full max-w-[1240px]"
  >
    <!-- <div
      class="flex flex-col md:flex-row justify-between items-start mt-6 lg:mt-16 w-full"
    >
      <div class="w-full max-w-[542px]">
        <h2
          class="font-bold leading-snug text-2xl lg:text-3xl text-primary dark:text-white"
        >
          Featured Blog Post
        </h2>
      </div>
      <div class="mt-3 text-lg text-black/70 dark:md:mt-0 max-w-[645px]">
        <p>
          Dive into our articles, written by industry experts, and join the
          conversation to broaden your knowledge and make an impact in your
          field.
        </p>
      </div>
    </div> -->
    <div class="flex items-stretch flex-wrap gap-[24px]">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        :style="'font-size: 16px'"
        class="flex flex-col justify-center items-stretch w-full md:w-[397px]"
      >
        <img
          class="rounded-t-2xl"
          :src="`/img/${service.image}.png`"
          alt="impact image"
        />
        <div class="py-4 flex flex-col items-start">
          <h6 class="bg-white text-sm mb-4 px-4 py-3">
            {{ service.duration }} read
          </h6>

          <h5 class="text-xl font-semibold leading-[36px] ellipsis-text">
            {{ service.title }}
          </h5>
          <p class="leading-7 mb-[37px] ellipsis-text">
            {{ service.desc }}
          </p>
          <div class="flex justify-between items-center w-full">
            <nuxt-link
              :to="service.to"
              class="text-sm text-black tracking-[0.028px]"
              >Read more <Icon name="mdi:arrow-right" size="20" class="ml-1"
            /></nuxt-link>
            <div class="flex text-sm gap-2 items-center">
              <p>By {{ service.author }}</p>
              <p>
                {{ service.date }}
              </p>
            </div>
          </div>
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

.ellipsis-text {
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
align-self: stretch;
overflow: hidden;
text-overflow: ellipsis;
}
</style>
