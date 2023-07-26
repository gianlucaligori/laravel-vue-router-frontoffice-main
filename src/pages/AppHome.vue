<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      arrCocktails: [],
    };
  },
  created() {
    axios.get(this.store.baseUrl + "api/cocktails/random").then((response) => {
      this.arrCocktails = response.data.results;
    });
  },
};
</script>

<template>
  <!-- Jumbotron -->
  <div class="container-fluid jumbotron text-center bg-image rounded-3 p-3 mt-4">
    <div class="mask bg-dark m-3">
      <div class="d-flex justify-content-center align-items-center">
        <div class="text-white m-2">
          <h1 class="mb-3">The Cocktail Bar</h1>
          <h4 class="mb-3">Find-out our drinks!</h4>
          <button class="button type1">
            <router-link :to="{ name: 'cocktails.index' }" class="nav-link text-dark">COCKTAILS</router-link> </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<style scoped>
.jumbotron {
  height: 80vh;
  background-image: url('https://cutewallpaper.org/21x/efzi79fd6/Celebrate-diversity-Wallpaper-and-Background-Image-.jpg');
  background-position: 0% 20%;
}

.button {
  height: 50px;
  width: 200px;
  position: relative;
  cursor: pointer;
  border: 2px solid;
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
}



.btn-txt {
  z-index: 1;
  font-weight: 800;
  letter-spacing: 4px;
}

.type1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  background-color: #333;
  border-radius: 30px;
  visibility: hidden;
  height: 10px;
  width: 10px;
  z-index: -1;
}

.button:hover {
  box-shadow: 1px 1px 200px #252525;
  color: #fff;
  border: none;
}

.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}
</style>




<!-- style="
    background-image: url('https://cutewallpaper.org/21x/efzi79fd6/Celebrate-diversity-Wallpaper-and-Background-Image-.jpg');
    height: 90vh; -->