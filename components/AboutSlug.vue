<template>
  <div class="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <AvatarIntro />
      <div class="relative">
        <svg
          class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
            width="404"
            height="384"
            fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
          />
        </svg>
        <div
          class="relative md:bg-white md:dark:bg-gray-600 md:px-6 md:p-6 rounded-xl my-2 md:my-6"
        >
          <div class="flex">
            <NuxtLink
              to="/about"
              class="pb-4 block rounded-md text-gray-500 dark:text-gray-300 hover:text-cranberry-600 dark:hover:text-cranberry-300"
            >
              <font-awesome-icon
                class="mr-2"
                :icon="['fas', 'arrow-left']"
              ></font-awesome-icon>
              <span class="uppercase">About</span>
            </NuxtLink>
          </div>
          <div class="flex sm:text-xl md:text-3xl lg:text-4xl font-bold">
            {{ aboutPage.title }}
          </div>
          <div class="text-xl about-blurb space-y-4 md:space-y-6">
            <SeanAuthor />
            <div
              class="border-b-2 border-gray-300 dark:border-gray-400 w-full"
            ></div>
            <nav
              class="border-b-2 border-gray-300 dark:border-gray-400 pb-6 mb-6"
            >
              <h1 class="font-bold text-xl pb-2">Sections:</h1>
              <ul class="text-gray-600 dark:text-gray-200 pl-4">
                <li v-for="link of aboutPage.toc" :key="link.id">
                  <NuxtLink :to="`#${link.id}`" class="group">
                    <font-awesome-icon
                      class="pr-2 text-xl"
                      :icon="['fas', 'hashtag']"
                    >
                    </font-awesome-icon>
                    <span class="group-hover:underline">
                      {{ link.text }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <div class="story-content space-y-4">
              <nuxt-content class="pb-4" :document="aboutPage" />
              <div
                class="border-b-2 border-gray-300 dark:border-gray-400 w-full"
              ></div>
              <about-nav :prev="prev" :next="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
</style>