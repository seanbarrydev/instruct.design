<template>
    <p class="mr-4">
      <img class="rounded-md border-2 border-gray-200 dark:border-gray-600 w-full sm:w-3/4 md:w-1/2" :src="artwork.image" :alt="artwork.alt" loading="lazy"/>
    </p>
</template>

<script>
export default {
    props: {
      artwork: {
        type: Object,
        required: true
      }
    }
}
</script>

<style>

</style>