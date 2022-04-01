<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&family=Raleway&family=Roboto+Condensed&family=Roboto&family=Caveat&family=Croissant+One&family=Mulish&Montserrat&family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Viga&family=Kaushan+Script&family=Open+Sans&family=Sacramento&family=Pacifico&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: #b9b4b4 !important;
}

</style>
