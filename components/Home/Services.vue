<script setup lang="ts">
const services = ref([
  {
    title: 'Branding',
    img: 'branding'
  },
  {
    title: 'Digital Marketing',
    img: 'marketing'
  },
  {
    title: 'Website Design',
    img: 'website'
  },
  {
    title: 'Content Creation',
    img: 'content'
  },
  {
    title: 'Social Media Management',
    img: 'social'
  }
]);
</script>
<template>
  <div class="mt-16 mb-8 px-4 lg:px-0 lg:my-[80px] mx-auto w-full max-w-[1240px]">
    <div class="h-px bg-black dark:bg-white" />
    <div
      class="flex flex-col md:flex-row justify-between items-start mt-6 lg:mt-16 w-full"
    >
      <div class="w-full max-w-[542px]">
        <h2 class="font-bold leading-snug text-2xl md:text-3xl lg:text-4xl text-black">
          Our Services
        </h2>
      </div>
      <div
        class="mt-6 hidden md:block text-lg text-black/70 dark:text-white/70 md:mt-0 max-w-[613px]"
      >
        <p>
          Our comprehensive range of services is designed to meet the specific needs of Health and Social Care companies. From social media management to engaging content creation and captivating web design, we offer tailored solutions that amplify your online presence and drive new client acquisition.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap mt-7 lg:mt-14 gap-5 lg:gap-[47px]">
      <div v-for="(service, index) in services" :key="index" class="border-2 border-black rounded-lg w-full md:w-auto flex items-center p-5">
        <img class="w-7" :src="`/img/${service.img}.png`" :alt="service.img">
        <p class="ml-2">{{ service.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
