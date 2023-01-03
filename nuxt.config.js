import tailwindTypography from "@tailwindcss/typography";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "instructional design, sean barry, training, curriculum, graphic design, web development, analytics, customer education, product management, digital media, marketing",
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "instruct.design",
      },
      { property: "og:site_name", content: "instruct.design" },
      { hid: "og:type", property: "og:type", content: "website" },
      /*
      {
        hid: "og:url",
        property: "og:url",
        content: "https://instruct.design",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "instruct.design",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Building meaningful learning experiences",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/instruct-design.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "627" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://instruct.design",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "instruct.design",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Building meaningful learning experiences",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/id-square.jpg",
      },
      { name: "twitter:label1", content: "Created by" },
      { name: "twitter:data1", content: "Sean Barry" },
      */
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://instruct.design",
      },
    ],
    script: [
      {
        hid: "GA-4 script tag",
        src: "https://www.googletagmanager.com/gtag/js?id=G-NZW4FDQ4WL",
        async: true,
      },
      {
        hid: "GA-4 tracking",
        innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-NZW4FDQ4WL');",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["animate.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://www.npmjs.com/package/v-click-outside
    { src: "@/plugins/vClickOutside", ssr: false },
    "~/plugins/vueTyped.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
    "@nuxtjs/pwa",
    "@nuxtjs/fontawesome",
    "@nuxt/content",
    "@aceforth/nuxt-optimized-images",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt pwa configuration (https://pwa.nuxtjs.org/meta)
  pwa: {
    meta: {
      theme_color: "#d74d79",
    },
  },

  // Used for image optimizer module (https://marquez.co/docs/nuxt-optimized-images/)
  optimizedImages: {
    adapter: require("responsive-loader/sharp"),
    optimizeImages: true,
    optimizeImagesInDev: false,
    responsive: {
      sizes: [480, 600, 720, 840, 960, 1080, 1200, 1440, 1680, 1800, 2400],
    },
  },

  // Deploy Nuxt on Netlify (https://nuxtjs.org/faq/netlify-deployment/)
  target: "static",
  generate: {
    fallback: true,
  },

  // Customize loading bar (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading/)
  loading: {
    color: "#999999",
  },

  googleAnalytics: {
    id: "UA-189676115-1",
  },

  // https://www.npmjs.com/package/@nuxtjs/fontawesome
  fontawesome: {
    icons: {
      solid: [
        "faMoon",
        "faVideo",
        "faLaptop",
        "faGraduationCap",
        "faLaptopCode",
        "faDesktop",
        "faBook",
        "faPodcast",
        "faPenAlt",
        "faTabletAlt",
        "faChalkboardTeacher",
        "faArrowLeft",
        "faArrowRight",
        "faHashtag",
        "faChartLine",
        "faPalette",
        "faHandsHelping",
        "faCogs",
        "faPhotoVideo",
        "faExternalLinkAlt",
      ],
      regular: ["faMoon"],
    },
  },

  // https://content.nuxtjs.org/configuration/
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
      remarkPlugins: ["remark-emoji"],
      remarkExternalLinks: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },

  // https://tailwindcss.nuxtjs.org/tailwind-config/
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },

  // https://sitemap.nuxtjs.org/
  sitemap: {
    hostname: "https://instruct.design",
    exclude: ["/contact/success"],
    routes: [
      "/work/yahoo-dsp-certification",
      "/work/campaign-manager",
      "/work/amobee-u",
      "/work/ccpa-irr-elearning",
      "/work/cadreon-explained",
      "/work/gdpr-guide",
      "/work/media-metrics-elearning",
      "/work/ipg-campaign-workflow",
      "/work/audience-data-elearning",
      "/work/audience-management",
    ],
  },
};
