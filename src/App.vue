<template>
  <main >
    <Navbar @open-login-modal="isLoginOpen = true" :loggedIn="isLoggedIn" />
    <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
    <RouterView />
  </main>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar.vue";
import LoginModal from './components/LoginModal.vue';
export default {
  name: "App",
  components: {
    Navbar,
    LoginModal,
  }, 
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },
  methods: {

  },
  mounted() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        console.log(user);
      } else {
        this.isLoggedIn = false;
        this.authUser = {};

      }
    });
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&family=Raleway&family=Roboto+Condensed&family=Roboto&family=Caveat&family=Croissant+One&family=Mulish&Montserrat&family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Viga&family=Kaushan+Script&family=Open+Sans&family=Sacramento&family=Pacifico&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background: url("/images/background.jpg") center center no-repeat fixed;
}

</style>
