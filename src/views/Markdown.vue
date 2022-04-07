<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg card-dimension">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
      </div>

      <div class="card-body">
        <div class="d-flex h-100">
          <div class="w-50 border-sm">
            <textarea ref="markdownRef"
              class="w-100 h-100"
              v-bind:value="text"
              @input="(event) => {updateText(event)}"
              placeholder="Type Here..."
            ></textarea>
          </div>
          <div class="w-50 border bg-light">{{ markedText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import DOMPurify from "dompurify";
import debounce from "../utilities/mixins/debounce";
export default {
  name: "Markdown",
  mixins: [debounce],
  data() {
    return {
      title: "Markdown",
      text: "",
    };
  },
  methods: {
    updateText(e) {
        const func = () => this.text = e.target.value;
        this.debounce(func, 500);
    },
  },
  computed: {
    markedText() {
      return DOMPurify.sanitize(marked(this.text));
    },
  },
  mounted() {
    this.$refs.markdownRef.focus();
  },
};
</script>

<style scoped>
.card-dimension {
  width: 980px;
  height: 580px;
}

.inner-card-body {
  height: 100%;
}

textarea {
  height: 100%;
}
</style>