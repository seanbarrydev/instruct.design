<template>
  <div>
    <Nav />
    <div class="content-area flex items-center justify-center  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
      <div class="min-w-full">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.content-area {
  min-height: calc(100vh - 200px);
}

@media screen and (min-width: 1024px) {
  .content-area {
    min-height: calc(100vh - 148px);
  }
}
</style>
