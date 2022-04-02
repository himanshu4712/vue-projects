<template>
  <div class="container">
     <h2 class="card-title text-center display-4">
        {{ title.toUpperCase() }}
      </h2>
  </div>
</template>

<script>

export default {
  name:"HomeView",
  components: {},
  data() {
    return {
      title: "Welcome to Vue 3 Projects",
    }
  }
};
</script>

<style scoped>

</style>
