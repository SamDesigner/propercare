<script setup lang="ts">
const active = ref("all");
const roles = ref([
  {
    title: "Product Designer",
    category: "Design",
    type: "Remote",
    to: "/job",
    duration: "Contract",
  },
  {
    title: "Engineering Manager",
    category: "Software Development",
    type: "Semi-Remote",
    to: "/job",
    duration: "Part-time",
  },
  {
    title: "Customer Success Manager",
    category: "Customer Success",
    type: "On-site",
    to: "/job",
    duration: "Full-time",
  },
  {
    title: "Account Executive",
    category: "Sales",
    type: "Remote",
    to: "/job",
    duration: "Part-time",
  },
  {
    title: "SEO Marketing Manager",
    category: "Marketing",
    type: "Semi-Remote",
    to: "/job",
    duration: "Full-time",
  },
]);

const submitForm = () => {
  console.log("submitting form");
};

const errorMsg = reactive({});
const fullname = ref("");
const lastname = ref("");
const company = ref("");
const email = ref("");
const message = ref("");
const subject = ref("");
const phone = ref("");

const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errorMsg.email = "";
  } else {
    errorMsg.email = "Invalid Email Address";
  }
};

const validateInput = (input, value) => {
  if (value) {
    errorMsg[input] = "";
  } else {
    errorMsg[input] = "Required";
  }
};

watch(name, (value) => {
  validateInput("name", value);
});

watch(email, (value) => {
  validateEmail(value);
});

watch(message, (value) => {
  validateInput("message", value);
});
</script>
<template>
  <div class="">
    <div class="w-full max-w-[1320px] mx-auto py-14 relative">
      <div
        class="w-full flex flex-col lg:flex-row items-start justify-center lg:gap-[56px]"
      >
        <div
          class="flex flex-col px-4 xl:mx-0 gap-x-2 gap-y-10 md:px-16 max-w-[620px] w-full"
        >
          <div class="px-4 lg:px-0 text-center">
            <h2 class="text-head font-medium text-[40px]">Get In Touch</h2>
            <p class="mt-1 text-lg tracking-wide">
              Our friendly team would love to hear from you
            </p>
          </div>
          <div class="w-full mt-10 lg:mt-0">
            <form
              id="getLicense"
              class="flex flex-col items-start"
              @submit.prevent="submitForm"
            >
              <div class="w-full flex flex-col md:flex-row md:gap-4">
                <div class="w-full">
                  <label for="fullName" class="mb-2">Full Name</label>
                  <input
                    id="fullName"
                    v-model="fullname"
                    type="text"
                    name="fullName"
                    required
                    class="border border-grey-6  rounded-lg py-4 pl-6 pr-2 focus:outline-none w-full h-[62px]"
                    :class="errorMsg.name ? 'border border-red-500' : ''"
                    placeholder="John"
                  />
                  <span
                    v-if="errorMsg.name"
                    class="text-red-500 text-xs mt-1"
                    >{{ errorMsg.name }}</span
                  >
                  <span v-else class="text-transparent text-xs mt-1"
                    >There is no error message</span
                  >
                </div>
                
              </div>
              
              <div class="w-full">
                <div class="flex flex-col w-full">
                  <label for="email">Email Address</label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    required
                    class="border border-grey-6  rounded-lg py-4 pl-6 pr-2 focus:outline-none h-[62px]"
                    :class="errorMsg.email ? 'border border-red-500' : ''"
                    placeholder="Enter your email address"
                  />
                  <span
                    v-if="errorMsg.email"
                    class="text-red-500 text-xs mt-1"
                    >{{ errorMsg.email }}</span
                  >
                  <span v-else class="text-transparent text-xs mt-1"
                    >There is no error message</span
                  >
                </div>
              </div>

              <div class="flex w-full">
                <div class="flex flex-col w-full">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    v-model="message"
                    name="message"
                    rows="5"
                    cols="30"
                    class="border border-grey-6  rounded-lg py-4 px-6 focus:outline-none"
                    placeholder="Leave us a message"
                    maxlength="500"
                  />
                  <span
                    v-if="errorMsg.message"
                    class="text-red-500 text-xs mt-1"
                    >{{ errorMsg.message }}</span
                  >
                  <span v-else class="text-transparent text-xs mt-1"
                    >There is no error message</span
                  >
                  <!-- <p class="text-grey-4 italic">
              * Please limit your message to 500 characters
            </p> -->
                </div>
              </div>
              <div class="w-full mt-6">
                <button
                  type="submit"
                  class="liquor-btn min-w-max p-4 leading-none rounded-lg bg-pink text-white w-full hover:bg-pink/90"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  background: url("/svg/list.svg") no-repeat left top + 5px;
  padding: 3px 0 3px 40px;
  list-style: none;
  margin: 0;
  line-height: 28px;
}
</style>
