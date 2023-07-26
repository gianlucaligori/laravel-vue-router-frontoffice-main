<script>
import axios from "axios";
import { store } from "../store";
import page404 from "./page404.vue";

export default {
  components: {
    page404,
  },
  data() {
    return {
      cocktail: null,
      store,
      is404: false,
    };
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/cocktails/" + this.$route.params.cocktail)
      .then((response) => {
        if (response.data.success) {
          this.cocktail = response.data.results;
        } else {
          // this.$router.push({ name: "page404" });
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <page404 v-if="is404" />
  <template v-if="cocktail">
    <!-- <main class="main">
      <div class="cards">
        <article class="card">
          <div class="image">
            <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          </div>
          <div class="card__content">
            <h2 class="card_title">{{ cocktail.strDrink }} <span class="pipe">|</span> {{ cocktail.strAlcoholic }} </h2>
            <p>{{ cocktail.strInstructionsIT }}</p>
          </div>
        </article>
      </div>
    </main> -->


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="container">

      <div class="product-details">
        <h1 class="text-center">{{ cocktail.strDrink }} <span>|</span> {{ cocktail.strAlcoholic }}</h1>
        <p class="information text-center px-5 mt-4">{{ cocktail.strInstructionsIT }}</p>
      </div>

      <div class="product-image">
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      </div>

    </div>



  </template>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap');


body {
  background: var(--bg);

  /*COLORS*/
  --bg: #738376;
  --firstColor: #59583a;
  --secondColor: #b54426;
  --thirdColor: #dcb06f;
  --button: #dcb06f;

  /*FONTS*/
  --mono: 'source-code-pro';
  --display: 'lust-sans';
}

#container {
  background: var(--thirdColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  max-height: 500px;
  max-width: 1000px;
  margin: 5rem auto;
}

#container .product-details h1 {
  font-family: 'Bebas Neue', cursive;
  color: var(--secondColor);
  margin: 0;
}


#container .product-details>p {
  font-family: 'EB Garamond', serif;
  text-align: center;
  color: var(--firstColor);

}

.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 45%;
}

#container img {
  width: 100%;
  height: 100%;
}
</style>
