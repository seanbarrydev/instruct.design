<template>
  <nav
    v-click-outside="closeMobileMenu"
    class="sticky top-0 w-full px-8 bg-white body-font dark:bg-gray-600 z-20 border-b-2 border-cranberry"
  >
    <div
      class="container flex items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
    >
      <div class="flex items-center md:hidden">
        <button
          @click="toggleMobileMenu"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
          :class="{ 'bg-gray-100 dark:bg-gray-700': mobileMenuOpen }"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!mobileMenuOpen"
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <NuxtLink
        to="/"
        class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none text-gray-900 dark:text-white"
      >
        i
        <transition name="wipe"><span class="hidden md:block" v-if="scrollPosition<50">nstruct</span></transition>
        <span class="text-cranberry">.</span>
        d
        <transition name="wipe"><span class="hidden md:block" v-if="scrollPosition<50">esign</span></transition>
      </NuxtLink>
      <div
        class="hidden md:flex top-0 left-0 z-0 text-gray-900 dark:text-white items-center justify-center w-full h-full py-5 -ml-0 space-x-7 text-base md:-ml-5 md:py-0 md:absolute"
      >
        <NuxtLink
          to="/about"
          class="relative font-normal leading-6 uppercase nav-link"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/work"
          class="relative font-normal leading-6 uppercase nav-link"
        >
          Work
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="relative font-normal leading-6 uppercase nav-link"
        >
          Contact
        </NuxtLink>
      </div>
      <ThemeToggler />
    </div>
    <transition name="slide">
      <div v-if="mobileMenuOpen">
        <div
          class="block md:hidden border-t-2 border-gray-300 dark:border-gray-500"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 uppercase">
            <NuxtLink to="/about" class="nav-link-mobile">About</NuxtLink>
            <NuxtLink to="/work" class="nav-link-mobile">Work</NuxtLink>
            <NuxtLink to="/contact" class="nav-link-mobile">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data: () => ({
    mobileMenuOpen: false,
    scrollPosition: null,
  }),
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
};
</script>

<style>
.slide-enter-active,
.wipe-enter-active {
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active,
.wipe-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.wipe-enter-to,
.wipe-leave {
  max-width: 100%;
  overflow: hidden;
  opacity: 1;
}
.wipe-enter,
.wipe-leave-to {
  overflow: hidden;
  max-width: 0;
    opacity: 0;
}
</style>