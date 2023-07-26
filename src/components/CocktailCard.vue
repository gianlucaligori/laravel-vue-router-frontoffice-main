<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <link rel="stylesheet" href="https://use.typekit.net/mbt4tna.css" />
  <link rel="stylesheet" href="https://use.typekit.net/kid2tin.css" />

  <div class="minip mt-5">
    <div class="mg">
      <div class="clr"></div>
      <div class="group">
        <span>{{ cocktail.strAlcoholic }}</span>
      </div>
    </div>
    <img :src="cocktail.strDrinkThumb" class="av card-img-top" />

    <div class="info border border-dark">
      <h5 class="card-title">{{ cocktail.strDrink }}</h5>
      <span class="deets">
        {{ cocktail.strCategory }}
      </span>
    </div>

    <router-link
      :to="{ name: 'cocktails.show', params: { cocktail: cocktail.id } }"
      class="btn plot mt-auto border border-black"
      >View more</router-link
    >
  </div>
</template>

<style>
body {
  background: var(--bg);

  /*COLORS*/
  --bg: #738376;
  --firstColor: #59583a;
  --secondColor: #b54426;
  --thirdColor: #dcb06f;
  --button: #dcb06f;

  /*FONTS*/
  --mono: "source-code-pro";
  --display: "lust-sans";
}

.minip {
  width: 300px;
  height: 450px;
  margin: auto;
  background: var(--thirdColor);
  /*CAMBIARE*/
  position: relative;
  /* box-shadow: 0px 0px 5px var(--firstColor); */
  /*CAMBIARE*/
}

.minip .mg {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: 250px 50px;
  grid-template-rows: 100px 150px;
  grid-template-areas:
    "clr group"
    "clr .....";
  transition: grid-template-columns 0.3s linear, grid-template-rows 0.3s linear;
}

.minip:hover .mg {
  grid-template-columns: 150px 150px;
  grid-template-rows: 50px 300px;
  transition: grid-template-columns 0.3s linear, grid-template-rows 0.3s linear;
}

.minip .mg .clr {
  grid-area: clr;
  background: var(--secondColor);
}

.minip .mg .group {
  font: 10px/10px var(--mono);
  text-transform: uppercase;
  letter-spacing: 1px;
  writing-mode: vertical-lr;
  display: flex;
  align-items: center;
  justify-content: center;
}

.minip .mg .group span {
  display: block;
  transform: rotate(180deg);
  transition: transform 0.3s linear;
}

.minip:hover .mg .group span {
  transform: rotate(270deg);
  transition: transform 0.3s linear;
}

.minip .av {
  width: 210px;
  height: 350px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  /* background: var(--firstColor); */
  background-position: top center;
  background-size: cover;
  transition: width 0.3s linear, height 0.3s linear;
}

.minip:hover .av {
  width: 270px;
  height: 400px;
  transition: width 0.3s linear, height 0.3s linear;
}

.minip .info {
  width: 160px;
  max-height: 100px;
  padding: 25px;
  position: absolute;
  bottom: 100px;
  left: 0px;
  background: var(--button);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: flex-start;
  transition: bottom 0.3s linear;
}

.minip:hover .info {
  bottom: 50px;
  transition: bottom 0.3s linear;
}

.minip .info h5 {
  display: block;
  font: 200 25px/30px var(--display);
  text-indent: -25px;
  letter-spacing: 1px;
  margin: 0px 0px 10px 25px;
}

.minip .info .deets {
  font: 10px/15px var(--mono);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.minip a.plot {
  width: 110px;
  height: 30px;
  position: absolute;
  bottom: 85px;
  left: 85px;
  background: var(--firstColor);
  font: 10px/10px var(--mono);
  text-transform: uppercase;
  color: var(--button);
  text-decoration: none;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.3s linear;
}

.minip:hover a.plot {
  bottom: 35px;
  transition: bottom 0.3s linear;
}
</style>
