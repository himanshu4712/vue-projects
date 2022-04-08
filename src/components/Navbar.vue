<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue 3 Projects</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div
          class="
            d-flex
            justify-content-between
            row
            w-100
            flex-lg-row flex-column
          "
        >
          <ul class="navbar-nav mb-2 mb-lg-0 col-lg-6 p-0">
            <li v-for="link in linksList" :key="link" class="nav-item">
              <router-link
                :to="link.to"
                class="nav-link"
                :class="$route.name === link.name ? 'active' : ''"
                >{{ link.title }}
              </router-link>
            </li>
          </ul>

          <div class="d-flex w-40 col-lg-6 justify-content-end p-0">
            <button v-if="loggedIn" type="button" class="btn btn-info me-5" @click="logout">
              Logout
            </button>
            <button v-else type="button" class="btn btn-info me-5" @click="$emit('open-login-modal')">
              Login
            </button>            

            <form class="d-flex">
              <input
                class="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success login" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import firebase from "../utilities/firebase";
export default {
  name: "Navbar",
  components: {},
   props: {
    loggedIn: Boolean,
  },
  data() {
    return {
      linksList: [
        { title: "Home", to: "/", name: "home" },
        { title: "DC Heroes", to: "/dc-heroes", name: "dcHeroes" },
        { title: "Calendar", to: "/calendar", name: "calendar" },
        { title: "Markdown", to: "/markdown", name: "markdown" },
        { title: "Slider", to: "/slider", name: "slider" },
        { title: "Calculator", to: "/calculator", name: "calculator" },
      ],
    };
  },
  methods: {
    logout() {
      const auth = getAuth(firebase);
      signOut(auth)
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
    },
  },
  emits: ["open-login-modal"],
};
</script>

<style scoped>
/* @import "~bootstrap/dist/css/bootstrap.css"; */
.btn:focus {
  outline: none !important;
}

.nav-link:hover {
  color: orange !important;
}

.active {
  color: orange !important;
}

input:focus {
  outline: none !important;
  box-shadow: none;
}
</style>

