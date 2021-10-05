<template>
  <div class="px-4 py-24 overflow-hidden lg:relative lg:py-48">
    <div
      class="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-24"
    >
      <div class="text-center lg:text-left sm:max-w-xl mx-auto">
        <h1
          translate="no"
          class="relative flex w-auto text-xl lg:text-2xl font-extrabold justify-center lg:justify-start"
        >
          instruct<span class="text-cranberry">.</span>design
        </h1>
        <div class="mt-6">
          <h2 class="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Building meaningful learning experiences<span class="text-cranberry"
              >.</span
            >
          </h2>
          <div class="mt-6 lg:hidden">
            <picture>
              <source srcset="/sean-typing-animated-373-optimized-still.webp" />
              <source srcset="~/assets/img/sean-chair-light-logo-v1.png" />
              <img
                src="
                require(`~/assets/img/sean-chair-light-logo-v1.png?{sizes:[480, 600],format:'webp'}`)
              "
                class="relative z-10 mx-auto"
                alt="3d character with laptop"
              />
            </picture>

            <div
              class="hidden sm:block border-b border-gray-300 dark:border-gray-500 transform -translate-y-28"
            ></div>
          </div>
          <p class="my-6 text-xl text-gray-600 dark:text-gray-200">
            Hi, I'm Sean. I design lasting experiences in an ever-changing
            world.
          </p>
        </div>
        <div
          class="mt-6 max-w-min sm:flex mx-auto lg:mx-0 justify-center lg:justify-start"
        >
          <NuxtLink
            to="/about"
            class="font-bold bg-cranberry-600 hover:bg-cranberry-700 text-xl block rounded-md border border-transparent px-5 py-3 text-white"
          >
            Explore
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="hidden lg:block mx-auto max-w-3xl px-6">
      <div class="absolute mt-12 py-16 inset-y-0 right-0 w-1/2 mb-16">
        <!-- plain backdrop -->
        <div
          class="animate__animated animate__slideInRight absolute inset-y-0 bg-white dark:bg-gray-600 rounded-l-3xl left-28 right-0 w-full"
        ></div>
        <!-- dot backdrop -->

        <svg
          class="animate__animated animate__slideInRight absolute top-8 m-0 left-10"
          width="2160"
          height="400"
          fill="none"
          viewBox="0 0 2160 400"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="2"
                class="text-gray-300 dark:text-gray-500"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="2160"
            height="400"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          />
        </svg>
        <!-- character container -->
        <div
          id="animationContainer"
          class="animate__animated animate__slideInRight animate__delay-1s relative -mr-40 sm:mx-auto max-w-none h-full pl-12"
        >
          <picture>
            <source srcset="/sean-typing-animated-373-optimized-still.webp" />
            <source srcset="~/assets/img/sean-chair-light-logo-v1.png" />
            <img
              src="
                require(`~/assets/img/sean-chair-light-logo-v1.png?{sizes:[480, 600],format:'webp'}`)
              "
              class="object-cover h-96 lg:h-full mx-auto 2xl:pr-80"
              alt="3d character with laptop"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      pageTitleStrings: [
        "Building meaningful learning experiences<span class='text-cranberry'>.</span>",
      ],
      theme: null,
    };
  },
  computed: {
    currentTheme() {
      return this.$store.state.theme;
    },
  },
  watch: {
    currentTheme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.documentElement.classList.remove("dark")
        : document.documentElement.classList.add("dark");
    },
  },
  head: {
    title: "instruct.design",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Building meaningful learning experiences",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Building meaningful learning experiences",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "instruct.design",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "instruct.design",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "instructional design, learning experience design, curriculum development, learning, training, ad tech, digital media, digital marketing, graphic design, web development, product management, product marketing, sean barry",
      },
    ],
  },
};
</script>
  
  <style>
:root {
  --animate-delay: 0.2s;
}
</style>