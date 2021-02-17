<template>
    <button
        type="button"
        aria-pressed="false"
        @click="toggleTheme"
        :class="isDarkTheme ? 'bg-gray-400' : 'bg-gray-200'"
        class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ring-2 ring-gray-200"
      >
        <span class="sr-only">Use setting</span>
        <span
          :class="
            isDarkTheme ? 'translate-x-5 bg-gray-900' : 'translate-x-0 bg-white'
          "
          class="pointer-events-none translate-x-0 relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
        >
          <span
            :class="
              isDarkTheme
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200'
            "
            class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            aria-hidden="true"
          >
            <font-awesome-icon
              size="xs"
              :icon="isDarkTheme ? ['fas', 'moon'] : ['far', 'moon']"
              :class="isDarkTheme ? 'text-yellow-300' : 'text-gray-300'"
            />
          </span>
        </span>
      </button>
</template>

<script>
export default {
  data: () => ({
    isDarkTheme: false,
  }),
  mounted() {
    if ( this.$store.state.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ) {
      this.isDarkTheme = true;
      document.documentElement.classList.add("dark");
    }
    else {
      this.isDarkTheme = false;
      document.documentElement.classList.remove("dark");
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
      this.isDarkTheme = !this.isDarkTheme;
      this.checkTheme();
    },
    checkTheme() {
      if (this.isDarkTheme) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      } 
      else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
