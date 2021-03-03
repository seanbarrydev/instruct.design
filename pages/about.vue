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
          class="relative md:bg-white md:dark:bg-gray-600 rounded-xl my-2 md:my-6"
        >
          <div>
            <div class="max-w-7xl mx-auto md:py-8 px-4 sm:px-6 md:px-8">
              <p
                class="text-lg sm:text-xl md:text-2xl border-b-2 border-gray-300 dark:border-gray-500 pb-6"
              >
                I design lasting experiences in an ever-changing world.
              </p>
              <div
                class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
              >
                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'chalkboard-teacher']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">Tech Training</div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Instructor-led training on evolving tech topics like
                      digital media and data management
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'graduation-cap']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">
                      Curriculum Planning
                    </div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Outcomes-based approach to designing meaningful learning
                      experiences
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'palette']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">Graphic Design</div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Guided by tried and true design principles, inspired by
                      creativity and fun
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'laptop-code']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">
                      Front-end Development
                    </div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Building people-focused solutions, currently enjoying
                      <a
                        rel="noopener noreferrer"
                        class="underline"
                        href="https://nuxtjs.org/"
                        target="_blank"
                        >Nuxt</a
                      >
                      +
                      <a
                        rel="noopener noreferrer"
                        class="underline"
                        href="https://tailwindcss.com/"
                        target="_blank"
                        >Tailwind</a
                      >
                      +
                      <a
                        rel="noopener noreferrer"
                        class="underline"
                        href="https://www.netlify.com/"
                        target="_blank"
                        >Netlify</a
                      >
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'cogs']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">
                      Program Management
                    </div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Balance planning with execution to drive results today
                      while building for tomorrow
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'photo-video']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">
                      Media Production
                    </div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Video, audio, imagery, text &mdash; media is a language
                      for sharing your thoughts and ideas
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'chart-line']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">Web Analytics</div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Leverage data-driven insights to understand your audience
                      and leave a lasting impact
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <font-awesome-icon
                    class="text-xl text-cranberry dark:text-cranberry-400 pt-1"
                    :icon="['fas', 'hands-helping']"
                  ></font-awesome-icon>
                  <div class="ml-3">
                    <div class="text-xl leading-6 font-bold">
                      Customer Success
                    </div>
                    <div class="mt-2 text-base text-gray-600 dark:text-gray-200">
                      Give your customers the skills they need to form a
                      meaningful and lasting relationship
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 sm:mt-16 max-w-lg flex mx-auto justify-center">
                <NuxtLink
                  to="/work"
                  class="font-bold bg-cranberry-600 hover:bg-cranberry-700 text-xl block rounded-md border border-transparent px-5 py-3 text-white"
                >
                  Browse My Work
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "About - instruct.design",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "I design lasting experiences in an ever-changing world",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "I design lasting experiences in an ever-changing world",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "About",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "instruct.design",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://instruct.design/about`,
      },
    ],
  },
};
</script>