<template>
  <div>
    <div class="relative py-16 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <p class="text-cranberry-600 dark:text-cranberry-400 font-semibold uppercase text-lg">Work</p>
          <h2
            class="mt-3 sm:mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            <vue-typed-js
            class="relative justify-center min-h-em1"
            :strings="pageTitleStrings"
            :typeSpeed="20"
            :showCursor="false"
            :contentType="'html'"
            >
              <span class="typing"></span>
            </vue-typed-js>
          </h2>
          <p
            class="mt-3 max-w-2xl mx-auto sm:mt-4 text-xl text-gray-600 dark:text-gray-200"
          >
            Browse some work samples to learn more about my approach.
          </p>
        </div>
        <div
          class="mt-16 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div v-for="project of projects" :key="project.slug">
            <NuxtLink
              :to="{ name: 'work-slug', params: { slug: project.slug } }"
              class="group flex flex-col rounded-xl shadow-md hover:shadow-lg overflow-hidden"
            >
              <div class="flex-shrink-0">
                <img
                  class="w-full"
                  :alt="project.alt"
                  :src="
                    require(`~/assets/img/${project.img}?{sizes:[480, 600],format:'webp'}`)
                  "
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <div class="text-sm font-medium text-cranberry-600">
                    <p>
                      <font-awesome-icon
                        :icon="project.faIconClass"
                      ></font-awesome-icon
                      ><span class="pl-2">{{ project.format }}</span>
                    </p>
                  </div>
                  <div class="justify-between mt-2 text-xl font-semibold text-gray-900">
                    <span>
                    {{ project.title }}
                  </span>
                  <font-awesome-icon class="opacity-0 group-hover:opacity-100 float-right pt-1"
                        :icon="['fas', 'external-link-alt']"
                      ></font-awesome-icon
                      >
                  </div>
                  <p class="mt-2 text-base text-gray-500">
                    <time :datetime="project.publishDate">
                      {{ formatDate(project.publishDate) }}
                    </time>
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        pageTitleStrings: ["Check out my work<span class='text-cranberry'>.</span>"]
      }
    },
  head: {
    title: "Work - instruct.design",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Browse some work samples to learn more about my approach",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Browse some work samples to learn more about my approach",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Work",
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
    link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://instruct.design/work`,
        },
      ],
  },
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only([
        "title",
        "description",
        "format",
        "faIconClass",
        "img",
        "slug",
        "publishDate",
        "alt",
      ])
      .sortBy("publishDate", "desc")
      .fetch();

    return {
      projects,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>