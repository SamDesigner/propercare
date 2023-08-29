<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();
const container = ref(null);
const pinnedElement = ref(null);

const mm = $gsap.matchMedia();

const offsets = ref([262, 234, 234, 262, 234, 262, 262, 262]);
const spacer = ref(40);

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});
onMounted(() => {
  setTimeout(() => {
    console.log('mounted');
    $ScrollTrigger.refresh();
  }, 1000);
  ctx.add(() => {
    mm.add("(min-width: 1024px)", () => {
      const cards = document.querySelectorAll(".card");
      $gsap.utils.toArray(cards).forEach((card, index) => {
        $ScrollTrigger.create({
          trigger: card,
          start: `top top+=40%`,
          endTrigger: container.value,
          end: `bottom 40%+=262`,
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: "pin",
          scale: () => 1 - (cards.length - index) * 0.025,
          invalidateOnRefresh: true,
        });
      });

      $ScrollTrigger.create({
        trigger: pinnedElement.value,
        start: "top top+=40%",
        end: (self) => self.previous().end,
        pin: true,
        // markers: true
      });
    });
  });
  
});
</script>
<template>
  <div class="bg-black-2 w-full mx-auto py-16 lg:pt-[120px] lg:pb-[220px]">
    <div
      ref="container"
      class="mb-8 px-4 lg:px-0 flex flex-col md:flex-row items-start mx-auto w-full max-w-[1240px]"
    >
      <div
        ref="pinnedElement"
        class="flex flex-col text-grey-2 justify-between items-start mt-6 lg:mt-0 w-full"
      >
        <div class="w-full max-w-[542px]">
          <h2
            class="font-bold text-grey-2 leading-snug text-[28px] lg:text-[40px] lg:leading-[56px]"
          >
            Our Services
          </h2>
        </div>
        <div class="mt-4 max-w-[580px]">
          <p class="leading-7">
            Through our diverse range of services, TGPC NG empowers healthcare
            providers and social care services to achieve excellence, improve
            standards, and positively impact the lives of individuals and
            communities across Nigeria.
          </p>
        </div>
        <img
          class="mt-20 md:mt-[145px]"
          src="/svg/mission-bg.svg"
          alt="mission line"
        />
      </div>
      <div class="flex flex-col mt-20 gap-y-10 lg:mt-0">
        <div
          class="card card-1 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">01</h4>
          <h4 class="text-xl text-black font-semibold">
            Quality Assurance Audits
          </h4>
          <p class="mt-1 leading-7">
            We conduct quality assurance audits for HMOs to ensure that the
            service providers they collaborate with are meeting regulatory
            requirements and providing high-quality healthcare services to their
            clients.
          </p>
        </div>
        <div
          class="card card-2 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">02</h4>
          <h4 class="text-xl text-black font-semibold">
            Compliance Assessments
          </h4>
          <p class="mt-1 leading-7">
            We enable HMOs ensure compliance with regulatory requirements and
            industry standards, such as those set by the National Health
            Insurance Scheme (NHIS) and other relevant regulatory bodies.
          </p>
        </div>
        <div
          class="card card-3 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">03</h4>
          <h4 class="text-xl text-black font-semibold">Outcome Measurement</h4>
          <p class="mt-1 leading-7">
            We support Health Maintenance Organizations (HMOs) measure the
            outcomes of their programs and services, and provide recommendations
            for improvement.
          </p>
        </div>
        <div
          class="card card-4 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">04</h4>
          <h4 class="text-xl text-black font-semibold">
            Training And Education
          </h4>
          <p class="mt-1 leading-7">
            We will provide training and education on QA and compliance to HMOs,
            their staff, and the service providers that they collaborate with to
            help them better understand the importance of QA and compliance, and
            how to implement best practices.
          </p>
        </div>
        <div
          class="card card-5 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">05</h4>
          <h4 class="text-xl text-black font-semibold">Program Development</h4>
          <p class="mt-1 leading-7">
            We will assist new providers in developing programs and services
            that are tailored to the needs of the community, and are designed to
            provide the highest quality care possible.
          </p>
        </div>
        <div
          class="card card-6 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">06</h4>
          <h4 class="text-xl text-black font-semibold">
            Continuous Quality Improvement
          </h4>
          <p class="mt-1 leading-7">
            We will provide ongoing support and guidance to all clients as they
            work to continuously improve the quality of their services, through
            regular check-ins, and guidance on implementing quality improvement
            strategies.
          </p>
        </div>
        <div
          class="card card-7 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] -rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">07</h4>
          <h4 class="text-xl text-black font-semibold">
            Ongoing Support And Guidance
          </h4>
          <p class="mt-1 leading-7">
            We will provide ongoing support and guidance to HMOs as they work to
            improve the quality of healthcare services they provide to their
            clients. This may include regular check-ins,and assistance with
            regulatory compliance.
          </p>
        </div>
        <div
          class="card card-8 bg-white border-2 border-black-2 rounded p-8 relative w-full md:w-[580px] rotate-1"
        >
          <h4 class="text-2xl mb-3 text-black font-semibold">08</h4>
          <h4 class="text-xl text-black font-semibold">
            Quality Improvement Planning
          </h4>
          <p class="mt-1 leading-7">
            On behalf of HMOs, we will develop quality improvement plans based
            on the findings of audits and assessments. These plans can help HMOs
            identify areas for improvement and implement strategies.
          </p>
        </div>
      </div>
      <div id="contact" />
    </div>
  </div>
</template>

<style scoped lang="scss">
// .card {
//   &-1 {
//     transform: translate
//   }
// }
</style>
