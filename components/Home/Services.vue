<script setup lang="ts"></script>
<template>
  <div
    class="py-[40px] lg:py-[120px] px-4 md:px-0 mx-auto w-full max-w-[1320px]"
  >
    <div
      class="flex flex-col justify-between items-center w-full"
    >
      <div class="gap-6 flex flex-wrap justify-center">
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/chat.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">Personal Care & Hygiene</h3>
            <p class="leading-[30px]">
              Our team of experienced caregivers provide personalized care plans
              tailored to each individual's needs.
            </p>
          </div>
        </div>
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/message.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Reliable Service and 24/7 Support
            </h3>
            <p class="leading-[30px]">
              We pride ourselves on providing reliable service and
              round-the-clock support for our clients.
            </p>
          </div>
        </div>
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/send.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Manage your team with reports
            </h3>
            <p class="leading-[30px]">
              We offer flexible scheduling options and affordable rates to
              ensure our services meet your needs and budget.
            </p>
          </div>
        </div>
      </div>
      <div class="flex mt-10 w-full md:w-auto">
        <nuxt-link
          to="#contact"
          class="py-4 px-6 bg-pink rounded-lg leading-none text-white w-full md:w-auto text-center"
          >Get in touch
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
