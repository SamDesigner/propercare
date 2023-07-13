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
  <div class="mt-16 mb-8 px-4 lg:px-0 lg:my-[160px] mx-auto w-full max-w-[1240px] ">
    <div
      class="flex flex-col md:flex-row justify-between items-start mt-6 lg:mt-16 w-full"
    >
      <div class="w-full max-w-[542px]">
        <h2 class="font-bold leading-snug text-2xl lg:text-3xl text-primary dark:text-white">
          Our Services
        </h2>
      </div>
      <div
        class="mt-6 md:text-lg text-black/70 dark:text-white/70 md:mt-0 max-w-[659px]"
      >
        <p>
          Through our diverse range of services, TGPC NG empowers healthcare providers and social care services to achieve excellence, improve standards, and positively impact the lives of individuals and communities across Nigeria.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap mt-7 lg:mt-10">
      <div class="bg-grey h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl md:text-2xl font-semibold">Quality Assurance Audits</h4>
        <p class="text-black/70 dark:text-white/70 mt-1.5">We conduct quality assurance audits for HMOs to ensure that the service providers they collaborate with are meeting regulatory requirements and providing high-quality healthcare services to their clients.</p>
        <img class="absolute top-0 left-0" src="/img/grid.png" alt="grid lines" >
      </div>
      <div class="bg-primary h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl text-white md:text-2xl font-semibold">Compliance Assessments</h4>
        <p class="dark:text-black/70 text-white/70 mt-1.5">We enable HMOs ensure compliance with regulatory requirements and industry standards, such as those set by the National Health Insurance Scheme (NHIS) and other relevant regulatory bodies.</p>
        <img class="absolute top-0 left-0" src="/img/grid2.png" alt="grid lines" >
      </div>
      <div class="bg-primary h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl text-white md:text-2xl font-semibold">Outcome Measurement</h4>
        <p class="dark:text-black/70 text-white/70 mt-1.5">We support Health Maintenance Organizations (HMOs) measure the outcomes of their programs and services, and provide recommendations for improvement.</p>
        <img class="absolute top-0 left-0" src="/img/grid2.png" alt="grid lines" >
      </div>
      <div class="bg-grey h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl md:text-2xl font-semibold">Training And Education</h4>
        <p class="text-black/70 dark:text-white/70 mt-1.5">We will provide training and education on QA and compliance to HMOs, their staff, and the service providers that they collaborate with to help them better understand the importance of QA and compliance, and how to implement best practices.</p>
        <img class="absolute top-0 left-0" src="/img/grid.png" alt="grid lines" >
      </div>
      <div class="bg-primary h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl text-white md:text-2xl font-semibold">Program Development</h4>
        <p class="dark:text-black/70 text-white/70 mt-1.5">We will assist new providers in developing programs and services that are tailored to the needs of the community, and are designed to provide the highest quality care possible.</p>
        <img class="absolute top-0 left-0" src="/img/grid2.png" alt="grid lines" >
      </div>
      <div class="bg-grey h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl md:text-2xl font-semibold">Continuous Quality Improvement</h4>
        <p class="text-black/70 dark:text-white/70 mt-1.5">We will provide ongoing support and guidance to all clients as they work to continuously improve the quality of their services, through regular check-ins, and guidance on implementing quality improvement strategies.</p>
        <img class="absolute top-0 left-0" src="/img/grid.png" alt="grid lines" >
      </div>
      <div class="bg-grey h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl md:text-2xl font-semibold">Ongoing Support And Guidance</h4>
        <p class="text-black/70 dark:text-white/70 mt-1.5">We will provide ongoing support and guidance to HMOs as they work to improve the quality of healthcare services they provide to their clients. This may include regular check-ins,and assistance with regulatory compliance.</p>
        <img class="absolute top-0 left-0" src="/img/grid.png" alt="grid lines" >
      </div>
      <div class="bg-primary h-[250px] md:h-[332px] px-6 py-6 md:pt-9 relative w-full md:w-[310px]">
        <h4 class="text-xl text-white md:text-2xl font-semibold">Quality Improvement Planning</h4>
        <p class="dark:text-black/70 text-white/70 mt-1.5">On behalf of HMOs, we will develop quality improvement plans based on the findings of audits and assessments. These plans can help HMOs identify areas for improvement and implement strategies.</p>
        <img class="absolute top-0 left-0" src="/img/grid2.png" alt="grid lines" >
      </div>
    </div>
    <div id="contact" />
  </div>
</template>

<style scoped></style>
