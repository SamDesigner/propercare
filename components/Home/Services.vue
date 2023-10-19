<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();
const fromLeft = ref(null);
const mm = $gsap.matchMedia();
const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
const animateFrom = () => {
  const elem = document.querySelector(".from_left");
  elem.style.transform = "translate(-300px, 0px)";
  elem.style.opacity = "0";
  $gsap.fromTo(
    elem,
    { x: -300, y: 0, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
};

const hide = () => {
  const elem = document.querySelector('.from_left');
  $gsap.set(elem, {autoAlpha: 0});
}
onMounted(() => {
  setTimeout(() => {
    console.log("mounted");
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {});
    hide();
    $ScrollTrigger.create({
      trigger: fromLeft.value,
      start: `top+=100px bottom`,
      markers: false,
      onEnter: function() { animateFrom() },
      onEnterBack: function() { animateFrom() },
      onLeave: function() { hide() }
    })
  });
});
</script>
<template>
  <div
    class="py-[40px] lg:py-[120px] px-4 md:px-0 mx-auto w-full max-w-[1320px]"
  >
    <div ref="fromLeft" class="from_left flex flex-col justify-between items-center w-full gap-[40px]">
      <div class="flex items-center justify-center">
        <h1 class="text-primary text-[40px] font-[500] leading-[56px] text-center">Other Services We Provide</h1>
      </div>
      <div class="gap-6 flex flex-wrap justify-center">
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/svg/1.svg" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">Home Care</h3>
            <p class="leading-[30px]">
              Our home care services are flexible and can be tailored to your individual needs, whether you need help with a few tasks each week or 24/7 care.
            </p>
          </div>
        </div>
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/svg/2.svg" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Live in Care
            </h3>
            <p class="leading-[30px]">
              Our live-in carers are dedicated to providing you with the highest quality of care and support. They will work with you to develop a personalized care plan that meets your specific needs and preferences.
            </p>
          </div>
        </div>
        <div
          class="bg-light-pink border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/svg/3.svg" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Domicilliary care
            </h3>
            <p class="leading-[30px]">
              Our domiciliary care team is made up of compassionate and experienced professionals who are dedicated to providing you with the highest quality of care.
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
      <div id="about" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
