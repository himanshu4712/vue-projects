<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg card-dimension">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
      </div>

      <div
        class="card-body d-flex flex-wrap position-relative overflow-hidden p-0"
        style="height: 580px"
      >
        <div
          class="position-absolute w-100"
          v-for="(img, index) in images"
          :key="img"
        >
          <transition name="fade">
            <img
              v-if="currentSlide === index"
              :src="'/images/' + img"
              :alt="img"
              class="w-100"
            />
          </transition>
        </div>

        <div class="position-absolute bottom-0 w-100" style="max-height: 420px">
          >
          <div
            class="
              position-absolute
              bottom-0
              d-flex
              justify-content-center
              w-100
            "
            style="height: 25px"
          >
            <div
              role="button" v-for="(img, index) in images" :key="img"
              :class="currentSlide === index ? 'bg-info' : 'bg-white'"
              class="rounded-circle cursor-pointer mx-1 shadow-md"
              style="width: 15px; height: 15px"
              @click="makeActive(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  components: {},
  data() {
    return {
      title: "Slider",
      images: [
        "image_1.png",
        "image_2.jpg",
        "image_3.jpg",
        "image_4.jpg",
        "image_5.jpg",
      ],
      currentSlide: 0,
      interval: "",
      randomImage: null,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  computed: {},
  mounted() {
    this.randomImage = this.images.length - 1;
    this.interval = setInterval(() => {
      this.currentSlide =
        this.currentSlide === this.randomImage ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.card-dimension {
  max-width: 980px;
  max-height: 580px;
}

.inner-card-body {
  height: 100%;
}

textarea {
  height: 100%;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease-in-out;
}

.fade-enter-from {
  opacity: 0.6;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0.6;
  transform: translateX(-100%);
}
</style>
