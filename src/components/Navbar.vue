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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="link in linksList" :key="link" class="nav-item">
            <router-link
              :to="link.to"
              class="nav-link"
              :class="$route.name === link.name ? 'active' : ''"
              >{{ link.title }}
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      linksList: [
        {title: "Home", to: "/", name: "home"},
        {title: "DC Heroes", to: "/dc-heroes", name: "dcHeroes"},
        {title: "Calendar", to: "/calendar", name: "calendar"},
        {title: "Markdown", to: "/markdown", name: "markdown"},
      ],
    };
  },
};
</script>

<style scoped>
/* @import "~bootstrap/dist/css/bootstrap.css"; */
.btn:focus,
a:focus {
  outline: none;
}

input:focus {
  outline: none !important;
  box-shadow: none;
}
</style>

