<template>
    <div class="relative z-10 mb-8 md:mb-2">
        <div class="flex text-base max-w-prose lg:max-w-none space-x-8 mb-12">
          <img
            class="flex-items w-32 h-32 rounded-full border-2 border-cranberry p-1"
            :src="require(`~/assets/img/sean-headshot-3d.png?{sizes:[140, 200],format:'webp'}`)"
            alt="sean barry headshot"
          />

          <div class="align-middle">
            <h2
              class="text-cranberry-600 dark:text-cranberry-400 font-semibold uppercase text-lg"
            >
              About
            </h2>
            <p class="mt-2 text-4xl font-extrabold sm:text-5xl tracking-tight min-h-em1">
              <vue-typed-js
            :strings="pageTitleStrings"
            :typeSpeed="20"
            :showCursor="false"
            :contentType="'html'"
            >
              <span class="typing"></span>
            </vue-typed-js>
            </p>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    data() {
      return {
        pageTitleStrings: ["Hi, I'm Sean<span class='text-cranberry'>.</span>"]
      }
    },
  }
</script>