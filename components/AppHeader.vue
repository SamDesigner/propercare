<template>
  <header
    class="fixed right-0 left-0 text-black z-20"
    :class="scrolled ? 'bg-light-pink header-shadow' : 'bg-transparent'"
  >
    <div
      class="flex h-24 md:h-[120px] items-center justify-between px-4 px-md-0 w-full max-w-[1320px] mx-auto"
    >
      <nuxt-link to="/">
        <img class="w-[85px] md:w-[127px]" src="/img/logo.png" />
      </nuxt-link>
      <ul
        class="hidden lg:flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-12"
      >
        <li
          :class="route.name === 'index' ? 'text-pink font-semibold' : ''"
          @click="open = !open"
        >
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li @click="open = !open">
          <nuxt-link to="/#about">About Us</nuxt-link>
        </li>
        <li @click="open = !open">
          <nuxt-link to="/#services">Services</nuxt-link>
        </li>
        <!-- <li @click="open = !open">
            <nuxt-link to="#projects">Industries Served</nuxt-link>
          </li>
        <li @click="open = !open">
          <nuxt-link to="#">Blog</nuxt-link>
        </li> -->
      </ul>
      <button ref="hamburger" class="lg:hidden" @click="open = !open">
        <Icon name="ic:round-menu" size="24px" />
      </button>
      <div @click="open = !open" class="mt-6 hidden lg:block lg:mt-0">
        <nuxt-link
          to="#contact"
          class="py-4 px-8 bg-pink rounded-lg leading-none text-white"
          >Get in touch
          <Icon
            name="mdi:arrow-down"
            color="#FFF"
            size="20"
            class="ml-1 mb-0.5"
          />
        </nuxt-link>
      </div>
      <ul
        class="navbar-links flex lg:hidden items-start"
        :class="{ 'navbar-links--navopen': open }"
        v-click-outside="close"
      >
        <button class="lg:hidden absolute right-3" @click="open = !open">
          <Icon name="ic:round-close" size="24px" />
        </button>
        <ul
          class="flex lg:hidden flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-8"
        >
          <li @click="open = !open"><nuxt-link to="/">Home</nuxt-link></li>
          <li @click="open = !open">
            <nuxt-link to="/#about">About Us</nuxt-link>
          </li>
          <li @click="open = !open">
            <nuxt-link to="/#services">Services</nuxt-link>
          </li>
          <!-- <li @click="open = !open">
            <nuxt-link to="#projects">Industries Served</nuxt-link>
          </li>
          <li @click="open = !open">
            <nuxt-link to="#">Blog</nuxt-link>
          </li> -->
          <li @click="open = !open" class="mt-6 lg:mt-0">
            <nuxt-link
              to="#contact"
              class="py-4 px-8 bg-pink rounded-lg leading-none text-white"
              >Get in touch
              <Icon
                name="mdi:arrow-down"
                color="#FFF"
                size="20"
                class="ml-1 mb-0.5"
              />
            </nuxt-link>
          </li>
        </ul>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const scrolled = ref(false);
const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", handleScroll);
}
</script>

<style lang="scss" scoped>
.header-shadow {
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

    @media screen and (min-width: 1024px) {
      display: none;
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
      background-color: $light-pink;
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
