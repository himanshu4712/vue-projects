<template>
  <div class="container">

    <div class="card mx-auto mt-5 shadow-lg card-dimension">
      <div class="card-header bg-info">
        <h2 class="card-title text-center display-4">
          {{ title.toUpperCase() }}
        </h2>
        <div class="d-flex justify-content-between px-4">
          <button class="btn btn-secondary text-uppercase" @click="prev">Prev</button>
          <button class="btn btn-secondary text-uppercase" @click="next">Next</button>
        </div>
      </div>

      <div class="card-body">
        <div class="d-flex justify-content-between mb-3 px-4">
          <h3 class="text-center text-uppercase">{{ currentMonthName }}</h3>
          <h3 class="text-center text-uppercase">{{ currentYear }}</h3>
        </div>
        
        <div class="d-flex justify-content-center">
          <h4
            v-for="day in days"
            :key="day"
            class="text-uppercase text-center"
          >
            {{ day }}
          </h4>
        </div>

        <div class="d-flex flex-wrap text-center">
          <p v-for="num in startDay()" :key="num" class="py-1"></p>
          <p v-for="num in daysInMonths()" :key="num" class="py-1">{{ num }}</p>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      title: "Calendar",
      days: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getUTCFullYear(),
      monthsInYear: new Date().getUTCMonth(),
    };
  },
  methods: {
    daysInMonths() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }   
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }      
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});
    }
  }
};
</script>

<style scoped>
.card-dimension {
  width: 700px;
}

h4,
p {
  width: 14.28%;
}

p {
  font-size: 20px;
}

button {
  font-weight: 600;
  font-size: 18px;
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