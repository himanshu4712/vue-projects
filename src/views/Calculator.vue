<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-lg dimension overflow-hidden">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
      </div>

      <div class="card-body bg-light row mx-auto w-100"> 
        <div class="result border shadow-sm d-flex-flex-column">
          <p class="text-end" style="height:100px">{{ currentNum }}</p>
          <div class="result_new">
              <small v-show="selectedOperation" class="text-start">{{ previousNum }}{{ selectedOperation }}{{ currentNum }}</small>
          </div>
        </div>
        <div class="col-12 text-center">
          <button @click="buttonPressed('1')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            1
          </button>
          <button @click="buttonPressed('2')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            2
          </button>
          <button @click="buttonPressed('3')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            3
          </button>
           <button @click="buttonPressed('+')" class="btn btn-light border mt-2 shadow-md bg-light">
            +
          </button>
        </div>
        <div class="col-12 text-center">
          <button @click="buttonPressed('4')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            4
          </button>
          <button @click="buttonPressed('5')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            5
          </button>
          <button @click="buttonPressed('6')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            6
          </button>
          <button @click="buttonPressed('-')" class="btn btn-light border mt-2 shadow-md bg-light">
            -
          </button>
        </div>
        <div class="col-12 text-center">
          <button @click="buttonPressed('7')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            7
          </button>
          <button @click="buttonPressed('8')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            8
          </button>
          <button @click="buttonPressed('9')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            9
          </button>
          <button @click="buttonPressed('*')" class="btn btn-light border mt-2 shadow-md bg-light">
            *
          </button>
        </div>
        <div class="col-12 text-center">
            <button @click="buttonPressed('c')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            C
          </button>
          <button @click="buttonPressed('0')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            0
          </button>          
          <button @click="buttonPressed('=')" class="btn btn-light border mt-2 me-2 shadow-md bg-light">
            =
          </button>
          <button @click="buttonPressed('/')" class="btn btn-light border mt-2 shadow-md bg-light">
            /
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "Calculator",
  components: {},
  setup() {
    const title = "calculator";
    const operations = ['+', '-', '*', '/'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const currentNum = ref("");
    const previousNum = ref("");
    const selectedOperation = ref("");

    onMounted(() => {
        window.addEventListener("keydown", handleKeyDown);
    });

    onUnmounted(() => {
        window.removeEventListener("keydown", handleKeyDown);
    });

    const handleKeyDown = (e) => buttonPressed(e.key);

    const buttonPressed = (value) => {
        if (value === "=" || value === "Enter") {
            calculate();
        } else if(value === "c") {
            clear();
        } else if(operations.includes(value)) {
            applyOperation(value);
        } else if(numbers.includes(value)) {
            appendNumber(value);
        }
    };

    const calculate = () => {
        if (selectedOperation.value === "+") {
            currentNum.value =  +previousNum.value + +currentNum.value;
        } else if (selectedOperation.value === "-") {
            currentNum.value =  previousNum.value - currentNum.value;
        } else if (selectedOperation.value === "*") {
            currentNum.value =  previousNum.value * currentNum.value;
        } else if (selectedOperation.value === "/") {
            currentNum.value =  previousNum.value / currentNum.value;
        };

        previousNum.value = "";
        selectedOperation.value = "";
    };

    const clear = () => {
        currentNum.value = "";
        previousNum.value = "";
        selectedOperation.value = "";
    };

    const applyOperation = (value) => {
      calculate();
        previousNum.value = currentNum.value;
        currentNum.value = "";
        selectedOperation.value = value;
    };

    const appendNumber = (value) => currentNum.value = currentNum.value + value;

    return { title, currentNum, previousNum, currentNum, selectedOperation, buttonPressed, handleKeyDown };
  },
};
</script>

<style scoped>
.dimension {
  width: 360px;
  /* height: 700px; */
}

.result {
    /* font-weight: 300; */
    font-size: 50px;
    height: 150px !important;
    overflow-x: hidden !important;
    /* width: 95%; */
}

.result_new {
    /* font-weight: 300; */
    font-size: 14px;
    /* height: 20px !important; */
    /* width: 95%; */
}

.btn {
    font-weight: 500 !important;
    font-size: 30px !important;
    width: 69px;
    height: 69px;
}

.btn:focus,
a:focus {
  outline: none !important;
}

.btn:hover {
    background-color: #3d3131 !important;
    color: azure;
}

input:focus {
  outline: none !important;
  box-shadow: none;
}

.card-body {
  font-family: "Viga", sans-serif !important;
}
</style>