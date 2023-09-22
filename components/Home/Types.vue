<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();
const fromRight = ref(null);
const mm = $gsap.matchMedia();
const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
const animateFrom = () => {
  const elem = document.querySelector(".from_right");
  elem.style.transform = "translate(300px, 0px)";
  elem.style.opacity = "0";
  $gsap.fromTo(
    elem,
    { x: 300, y: 0, autoAlpha: 0 },
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
  const elem = document.querySelector('.from_right');
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
      trigger: fromRight.value,
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
    class="py-[40px] lg:py-[120px] w-full bg-light-pink"
  >
    <div
      ref="fromRight"
      class="from_right flex flex-col justify-between items-center mx-auto px-4 md:px-0 w-full max-w-[1320px]"
    >
      <div class="gap-6 flex flex-wrap justify-center">
        <div
          class="bg-white border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/chat2.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">Comprehensive Home Care Services for Your Loved Ones</h3>
            <p class="leading-[30px]">
              At Proper Care, we offer a wide range of home care services to meet the unique needs of your loved ones.
            </p>
          </div>
        </div>
        <div
          class="bg-white border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/message2.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Personalized Care Plans Tailored to Your Needs
            </h3>
            <p class="leading-[30px]">
              At Proper Care, we offer a wide range of home care services to meet the unique needs of your loved ones.
            </p>
          </div>
        </div>
        <div
          class="bg-white border border-pink-2 rounded-2xl px-6 py-10 flex flex-col items-start gap-10 w-full md:max-w-[384px]"
        >
          <img class="w-16" src="/img/send2.png" alt="chat" />
          <div class="flex flex-col gap-2">
            <h3 class="font-medium text-[22px]">
              Specialized Care for Chronic Conditions and Disabilities
            </h3>
            <p class="leading-[30px]">
              At Proper Care, we offer a wide range of home care services to meet the unique needs of your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
