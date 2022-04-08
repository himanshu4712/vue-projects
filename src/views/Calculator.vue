<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg dimension">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
      </div>

      <div class="card-body">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  components: {},
  setup() {
    const title = "calculator";

    return { title, };
  },
};
</script>

<style scoped>

.dimension {
  width: 500px;
  /* height: 700px; */
}

.btn:focus,
a:focus {
  outline: none !important;
}

input:focus {
  outline: none !important;
  box-shadow: none;
}

.card-body {
  font-family: "Viga", sans-serif !important;
}

</style>