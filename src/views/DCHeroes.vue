<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg dimension">
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
        <form method="get">
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
              type="button" @click="addHero"
              class="btn btn-success px-4 py-2 text-white"
              :disabled="!newHero"
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
import { computed, onMounted, ref } from "vue";
export default {
  name: "DCHeroes",
  components: {},
  setup() {
    const title = "DC Heroes";
    const newHero = ref("");
    const dcHeroes = ref([
      "supergirl", 
      "flash", 
      "arrow", 
      "batman", 
      "superman"
    ]);
    const dcHeroesRef = ref("");
    const isDisabled = true;
    
    onMounted(() => {
      dcHeroesRef.value.focus();
    });

    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    });

    const addHero = () => {
      if (newHero.value !== "") {
        dcHeroes.value.unshift(newHero.value);
        newHero.value = "";
      }
    };

    const removeHero = (index) => {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i !== index);
    };   

    return { title, dcHeroes, newHero, dcHeroesRef, heroesCount, isDisabled, addHero, removeHero };
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
