<script>
import navBar from "./components/navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>

<template>
  <navBar></navBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import "./style/general.scss";
</style>
