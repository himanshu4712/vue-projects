<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg" :style="{ width: width }">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
      </div>

      <div class="card-body">
        <div>
          <div
            v-for="(hero, index) in dcHeroes"
            :key="hero"
            class="d-flex justify-content-between align-items-center mb-1"
          >
            <div class="text-capitalize">{{ index + 1 }}. {{ hero }}</div>
            <button class="btn btn-danger btn-sm" @click="removeHero(index)">
              x
            </button>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <form @submit.prevent="addHero" method="get">
          <div class="input-group">
            <input
              ref="dcHeroesRef"
              type="text"
              class="form-control add-hero"
              name="add_hero"
              v-model="newHero"
              placeholder="Type Here..."
            />
            <button
              type="submit"
              class="btn btn-success px-4 py-2 text-white"
              :disabled="!isFilled"
            >
              ADD HERO
            </button>
          </div>
        </form>
        <p>Count: : {{ heroesCount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DCHeroes",
  components: {},
  data() {
    return {
      title: "DC Heroes",
      // attribute: "value",
      newHero: "",
      dcHeroes: ["supergirl", "flash", "arrow", "batman", "superman"],
      width: "500px",
      isDisabled: true,
    };
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.unshift(this.newHero);
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index);
    },
  },
  computed: {
    isFilled() {
      return this.newHero;
    },
    heroesCount() {
      return this.dcHeroes.length;
    },
  },
  mounted() {
    this.$refs.dcHeroesRef.focus();
  },
};
</script>

<style scoped>
.dimension {
  width: 500px;
  height: 700px;
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
