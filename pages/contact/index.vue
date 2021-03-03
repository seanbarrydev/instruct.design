<template>
  <div>
    <section class="w-full px-8 py-16">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-top md:flex-row">
          <div
            class="relative md:top-40 w-full space-y-5 md:w-3/5 md:pr-16 text-gray-900 dark:text-white text-center md:text-left"
          >
            <p
              class="text-cranberry-600 dark:text-cranberry-400 font-semibold uppercase text-lg"
            >
              Contact
            </p>
            <h2 class="text-4xl font-extrabold sm:text-5xl tracking-tight">
              <vue-typed-js
                class="relative justify-center md:justify-start min-h-em1"
                :strings="pageTitleStrings"
                :typeSpeed="20"
                :showCursor="false"
                :contentType="'html'"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-200 md:pr-16">
              Are you ready to engage your learners and leave a lasting impact?
              Let's build something meaningful together.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>
<style>
</style>

<script>
module.exports = {
  data() {
    return {
      pageTitleStrings: ["Let's build<span class='text-cranberry'>.</span>"],
    };
  },
  head: {
    title: "Contact - instruct.design",
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
        hid: "og:site_name",
        name: "og:site_name",
        content: "instruct.design",
      },
    ],
    link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://instruct.design/contact`,
        },
      ],
  },
};
</script>