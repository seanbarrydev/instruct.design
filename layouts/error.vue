<template>
  <section
    class="py-20 sm:py-24 md:py-36 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 min-h-screen"
  >
    <div
      class="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16"
    >
      <div
        v-if="error.statusCode == 404"
        class="flex flex-wrap items-center -mx-3"
      >
        <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div class="w-full text-center">
            <h2
              class="mb-4 text-4xl font-bold md:text-6xl lg:text-8xl font-heading"
            >
              Woops!
            </h2>
            <p
              class="mb-4 text-2xl lg:text-3xl font-normal text-gray-700 dark:text-gray-200 xl:mb-6"
            >
              That page wasn't found.
            </p>
            <button class="inline-flex rounded-md shadow">
              <router-link
                exact
                to="/"
                class="text-xl font-bold inline-flex items-center justify-center px-3 py-4 border border-transparent text-white bg-cranberry-600 hover:bg-cranberry-700 rounded-md"
              >
                Go Home
              </router-link>
            </button>
          </div>
        </div>
        <div
          class="w-3/4 mx-auto px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"
        >
          <img
            class="mx-auto sm:max-w-sm lg:max-w-full"
            src="~/assets/img/404-graphic-v1.png?{sizes:[480, 600],format:'webp'}"
            alt="feature image"
          />
        </div>
      </div>
      <div v-else class="flex flex-wrap items-center -mx-3">
        <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div class="w-full text-center">
            <h2
              class="mb-4 text-4xl font-bold md:text-6xl lg:text-8xl font-heading"
            >
              Woops!
            </h2>
            <p class="mb-4 text-2xl lg:text-3xl font-normal xl:mb-6">
              There was an error: {{error.statusCode}} {{error.message}}
            </p>
            <button class="inline-flex rounded-md shadow">
              <router-link
                exact
                to="/"
                class="font-bold bg-cranberry-600  hover:bg-cranberry-700 text-xl block rounded-md border border-transparent px-5 py-3 text-white"
              >
                Go Home
              </router-link>
            </button>
          </div>
        </div>
        <div
          class="w-3/4 mx-auto px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"
        >
          <img
            class="mx-auto sm:max-w-sm lg:max-w-full"
            src="~/assets/img/general-error-graphic-v1.png?{sizes:[480, 600],format:'webp'}"
            alt="feature image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
</style>

<script>
export default {
  head() {
    return {
      title: 'Error'
    }
  },
  props: ["error"],
};
</script>