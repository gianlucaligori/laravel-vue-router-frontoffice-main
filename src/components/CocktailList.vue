<script>
import axios from "axios";
import CocktailCard from "./CocktailCard.vue";
import CocktailsFilter from "./CocktailsFilter.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      arrCocktails: [],
      arrCategories: [],
      categoryId: null,
    };
  },
  components: {
    CocktailCard,
    CocktailsFilter,
  },
  methods: {
    getCocktails() {
      axios
        .get(this.store.baseUrl + "api/cocktails", {
          params: { category: this.categoryId },
        })
        .then((response) => {
          this.arrCocktails = response.data.results;
        });
    },
    getCategories() {
      axios.get(this.store.baseUrl + "api/category").then((response) => {
        this.arrCategories = response.data;
        console.log(this.arrCategories);
      });
    },
    manageChangeCategory(categoryId) {
      this.categoryId = categoryId;
      this.getCocktails();
    },
  },
  created() {
    this.getCocktails();
    this.getCategories();
  },
};
</script>

<template>
  <CocktailsFilter
    :categories="arrCategories"
    @changeCategory="manageChangeCategory($event)"
  />
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
    <div class="col" v-for="cocktail in arrCocktails" :key="cocktail.id">
      <CocktailCard :cocktail="cocktail" />
    </div>
  </div>
</template>

<style></style>
