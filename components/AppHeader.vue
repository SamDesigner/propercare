<template>
  <header
    class="fixed bg-white dark:bg-black right-0 left-0 font-medium text-black/70 dark:text-white/70 z-10"
  >
    <div
      class="flex h-24 md:h-[120px] items-center justify-between px-4 px-md-0 w-full max-w-[1240px] mx-auto"
    >
      <nuxt-link to="/">
        <!-- <img class="w-[150px]" src="/img/logo.png" /> -->
        <div
          class="bg-logo dark:bg-logo-footer bg-contain bg-no-repeat w-[150px] h-[45px]"
        />
      </nuxt-link>
      <div class="flex items-center gap-4">
        <button
            ref="themeToggle"
            type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 flex lg:hidden items-center justify-center rounded-lg text-sm p-2.5 w-10"
            @click="toggleMode"
          > 
            <Icon name="material-symbols:clear-day-rounded" size="24px" class="block dark:hidden" ref="toggleDark" v-if="darkMode" />
            <Icon name="bi:moon-fill" size="20px" class="hidden dark:block" ref="toggleLight" v-if="lightMode" />
          </button>
          <button ref="hamburger" class="lg:hidden" @click="open = !open">
            <Icon name="ic:round-menu" size="24px" />
          </button>
      </div>
      <ul
        class="navbar-links flex items-start"
        :class="{ 'navbar-links--navopen': open }"
        v-click-outside="close"
      >
        <button class="lg:hidden absolute right-3" @click="open = !open">
          <Icon name="ic:round-close" size="24px" />
        </button>
        <ul
          class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-16"
        >
          <li @click="open = !open"><nuxt-link to="/">Home</nuxt-link></li>
          <li @click="open = !open">
            <nuxt-link to="/#about">About Us</nuxt-link>
          </li>
          <li @click="open = !open">
            <nuxt-link to="#services">Services</nuxt-link>
          </li>
          <li @click="open = !open">
            <nuxt-link to="#projects">Projects</nuxt-link>
          </li>
          <li @click="open = !open" class="mt-6 lg:mt-0">
            <nuxt-link
              to="#contact"
              class="border-black dark:border-white bg-black dark:bg-white font-semibold px-[30px] py-5 rounded-lg leading-none text-white dark:text-black"
              >Let's Talk</nuxt-link
            >
          </li>
          <button
            ref="themeToggle"
            type="button"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 hidden lg:flex items-center justify-center rounded-lg text-sm p-2.5 w-10"
            @click="toggleMode"
          > 
            <Icon name="material-symbols:clear-day-rounded" size="24px" class="block dark:hidden" ref="toggleDark" v-if="darkMode" />
            <Icon name="bi:moon-fill" size="20px" class="hidden dark:block" ref="toggleLight" v-if="lightMode" />
          </button>
        </ul>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
const lightMode = ref(false);
const darkMode = ref(false);
const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};
const toggleDark = ref(null);
const toggleLight = ref(null);

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkMode.value = true;
} else {
  lightMode.value = true;
}

const toggleMode = () => {
  lightMode.value = !lightMode.value;
  darkMode.value = !darkMode.value;

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
}
.navbar {
  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type="button"]) {
        color: $primary;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $primary;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
        &.drop {
          color: $primary;
          padding: 0;
        }
      }

      // button:not([data-type=button]) {
      //   color: $black;
      //   font-weight: 700;
      //   border-radius: 8px;
      //   min-height: 50px;
      //   min-width: 170px;
      // }
    }

    &__city {
      width: 300px;
    }
    &__about {
      width: 260px;
    }

    @media screen and (max-width: 1023px) {
      transform: translateX(500px);
      // pointer-events: none;
      position: fixed;
      transition: transform 0.2s ease-out;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-left: 30px !important;
      padding-right: 30px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 500px;
      max-width: 100vw;
      background-color: #fff;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--navopen {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 50px;
          right: 20px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(255, 255, 255, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>
