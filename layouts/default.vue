<template>
  <div>
    <Nav />
    <div class="min-h-screen bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
      <Nuxt />
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
</style>
