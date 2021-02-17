<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search projects"
    />
    <ul v-if="projects.length">
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="{ name: 'work-slug', params: { slug: project.slug } }">
          {{ project.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchQuery: '',
        projects: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.projects = []
          return
        }
        this.projects = await this.$content('projects')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>