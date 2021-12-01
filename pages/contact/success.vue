<template>
  <div class="py-20">
    <div class="px-4 py-10 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 sm:py-16 md:py-24">
      <h2
        class="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl"
      >
        <vue-typed-js
            class="relative justify-center min-h-em1"
            :strings="pageTitleStrings"
            :typeSpeed="30"
            :showCursor="false"
            :contentType="'html'"
            >
              <span class="typing"></span>
            </vue-typed-js>
      </h2>
      <p
        class="max-w-md mx-auto mt-3 text-lg text-gray-500 dark:text-gray-200 md:mt-5 sm:text-xl md:text-2xl md:max-w-3xl"
      >I've received your message and will be in touch soon! 😊
      </p>
      <div class="flex justify-center mt-8">
        <div class="inline-flex rounded-md shadow">
          <router-link exact
            to="/"
            class="text-xl font-bold inline-flex items-center justify-center px-3 py-4 border border-transparent text-white bg-cranberry-600 hover:bg-cranberry-700 rounded-md"
          >
            Go Home
          </router-link>
        </div>
        <div class="inline-flex ml-3">
          <router-link exact
            to="/contact"
            class="text-xl font-bold inline-flex items-center justify-center px-3 py-4 border border-transparent text-gray-500 bg-gray-200 hover:bg-gray-300  hover:text-gray-600 rounded-md"
          >
            Submit another form
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
module.exports = {
  data() {
      return {
        pageTitleStrings: ["Let's build<span class='text-cranberry'>.</span>"]
      }
    },
  head: {
    title: 'Contact - instruct.design',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Let's build something meaningful together",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Let's build something meaningful together",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Contact",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/instruct-design.jpg",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "instruct.design",
      },
    ],
  }
}
</script>