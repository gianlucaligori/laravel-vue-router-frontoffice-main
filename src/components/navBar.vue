<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-2">
    <div class="container-fluid">
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
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link active text-light"
              aria-current="page"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'cocktails.index' }"
              class="nav-link text-light"
              >COCKTAILS</router-link
            >
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link text-light"
              >ABOUT</router-link
            >
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link text-light"
              >CONTACT US</router-link
            >
          </li>
        </ul>

        <div>
          <img src="../assets/images/logoNav.jpg" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 100px;
}

img {
  max-width: 80px;
  border-radius: 80px;
  object-fit: cover;
  object-position: center;
}
</style>
