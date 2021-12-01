<template>
<iframe src="/Sean-Barry-Resume.pdf"></iframe>
</template>
<script>
export default {
  head: {
    title: "Sean Barry's Resume",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Sean Barry's Resume",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Sean Barry's Resume",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Sean Barry's Resume",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "instruct.design",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/instruct-design.jpg",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://instruct.design/resume`,
      },
    ],
  },
};
</script>
<style>
iframe {
    width: 100%;
    height: 100vh;
}
</style>