<template>
  <div>
    <div class="relative py-16 bg-gray-100 dark:bg-gray-700 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <BackToWork class="relative" />
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="pt-4 text-lg max-w-4xl mx-auto">
          <div>
            <span
              class="block max-w-max mx-auto px-2.5 py-0.5 text-base sm:text-lg font-medium dark:text-gray-100"
            >
              <font-awesome-icon
                class="text-cranberry dark:text-cranberry-400"
                :icon="project.faIconClass"
              ></font-awesome-icon
              ><span class="pl-2">{{ project.format }}</span>
            </span>
            <div
              class="my-4 block text-4xl text-center font-extrabold tracking-tight sm:text-5xl"
            >
              <vue-typed-js
                class="relative justify-center min-h-em1"
                :strings="[
                  project.title + `<span class='text-cranberry'>.</span>`,
                ]"
                :typeSpeed="30"
                :showCursor="false"
                :contentType="'html'"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <span
              class="block text-center text-sm sm:text-base text-gray-600 dark:text-gray-200"
              ><time :datetime="project.publishDate">
                {{ formatDate(project.publishDate) }}
              </time></span
            >
          </div>
          <img
            class="mt-8 w-full rounded-xl"
            :alt="project.alt"
            :src="
              require(`~/assets/img/${project.img}?{sizes:[800, 1000],format:'webp'}`)
            "
          />
          <p
            class="mt-8 text-xl text-gray-600 dark:text-gray-200 leading-8 border-b-2 border-t-2 py-3 border-gray-300 dark:border-gray-500"
          >
            {{ project.description }}
          </p>
        </div>
        <div
          class="mt-8 max-w-4xl leading-7 text-lg mx-auto relative md:bg-white dark:bg-gray-600 p-6 rounded-xl"
        >
          <nav
            class="border-b-2 border-gray-300 dark:border-gray-500 pb-6 mb-2"
          >
            <div class="font-bold text-xl pb-2">Sections:</div>
            <ul class="text-gray-600 dark:text-gray-200">
              <li v-for="link of project.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`" class="group">
                  <font-awesome-icon
                    class="pr-2 text-xl text-cranberry dark:text-cranberry-400"
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
          <nuxt-content :document="project" />
          <div class="border-t-2 border-gray-300 dark:border-gray-500 w-full mt-4 mb-8"></div>
          <div class="my-4 max-w-lg flex mx-auto justify-center">
            <NuxtLink
              to="/contact"
              class="font-bold bg-cranberry-600 hover:bg-cranberry-700 text-xl block rounded-md border border-transparent px-5 py-3 text-white"
            >
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    const [prev, next] = await $content("projects")
      .only(["title", "slug"])
      .sortBy("publishDate", "desc")
      .surround(params.slug)
      .fetch();
    return { project, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.project.title + " - instruct.design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.project.description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.project.title,
        },
        {
          property: "project:published_time",
          content: this.project.createdAt,
        },
        {
          property: "project:modified_time",
          content: this.project.updatedAt,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://instruct.design/work/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.project.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.project.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.project.image,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.project.image,
        },
        { property: "og:image:width", content: "800" },
        { property: "og:image:height", content: "534" },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://instruct.design/work/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style>
</style>