<script setup lang="ts"></script>
<template>
  <div
    class="my-[40px] lg:mt-[120px] lg:mb-[200px] px-4 md:px-0 mx-auto w-full max-w-[1280px]"
  >
    <div
      class="flex flex-col justify-between items-center mt-10 lg:mt-16 w-full"
    >
      <div class="w-full">
        <h2
          class="font-semibold text-center leading-snug text-3xl lg:text-4xl text-secondary"
        >
          Live in care, your family will love
        </h2>
      </div>
      <div class="gap-6 flex flex-wrap justify-center mt-12">
        <div
          class="bg-grey p-6 rounded-lg flex flex-col items-start gap-10 w-full max-w-[410px]"
        >
          <div class="bg-primary p-2 rounded">
            <img src="/svg/chat.svg" alt="chat" />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold text-xl">Personal Care & Hygiene</h3>
            <p class="leading-[30px]">
              We help with the personal care and hygiene of your family members.
            </p>
          </div>
        </div>
        <div
          class="bg-white p-6 rounded-lg card flex flex-col items-start gap-10 w-full max-w-[410px]"
        >
          <div class="bg-primary p-2 rounded">
            <img src="/svg/phone.svg" alt="chat" />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold text-xl">Personal Care & Hygiene</h3>
            <p class="leading-[30px]">
              We help with the personal care and hygiene of your family members.
            </p>
          </div>
        </div>
        <div
          class="bg-grey p-6 rounded-lg flex flex-col items-start gap-10 w-full max-w-[410px]"
        >
          <div class="bg-primary p-2 rounded">
            <img src="/svg/location.svg" alt="chat" />
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold text-xl">Personal Care & Hygiene</h3>
            <p class="leading-[30px]">
              We help with the personal care and hygiene of your family members.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0px 2px 72px 2px rgba(40, 13, 25, 0.08);
}
</style>
