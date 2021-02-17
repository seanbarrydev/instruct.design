<template>
  <div class="flex text-center justify-between text-xs sm:text-base max-w-7xl mx-auto">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'work-slug', params: { slug: prev.slug } }"
      class="ml-4 mb-4 sm:ml-8 sm:mb-8 block rounded-md text-gray-500 dark:text-gray-300 hover:text-cranberry-600 dark:hover:text-cranberry-300"
    >
    <font-awesome-icon class="mr-2" :icon="['fas','arrow-left']"></font-awesome-icon>
      <span>{{ prev.title }}</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'work-slug', params: { slug: next.slug } }"
      class="mr-4 mb-4 sm:mr-8 sm:mb-8 block rounded-md text-gray-500 dark:text-gray-300 hover:text-cranberry-600 dark:hover:text-cranberry-300"
    >
      <span>{{ next.title }}</span>
      <font-awesome-icon class="ml-2"  :icon="['fas','arrow-right']"></font-awesome-icon>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>