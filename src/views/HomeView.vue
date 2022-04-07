<template>
  <div class="container">
    <div class="mx-auto mt-4">
      <h2 class="text-center display-5">
        {{ title.toUpperCase() }}
      </h2>
    </div>
      
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
  h2 {
    /* Prefix required. Even Firefox only supports the -webkit- prefix */
    /* -webkit-text-stroke-width: 0.8px; */
    /* -webkit-text-stroke-color: #000000; */
    color: #ffffff;
    font-weight: 400;
    font-family: 'Viga', sans-serif;
  }
</style>
