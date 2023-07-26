import { createRouter, createWebHistory } from "vue-router";

//importare i componenti delle pagine
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppCocktail from "./pages/AppCocktail.vue";
import Cocktailshow from "./pages/Cocktailshow.vue";
import AppContact from "./pages/AppContact.vue";
import page404 from "./pages/page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },

    {
      path: "/cocktails",
      name: "cocktails.index",
      component: AppCocktail,
    },

    {
      path: "/cocktails/:cocktail",
      name: "cocktails.show",
      component: Cocktailshow,
    },

    {
      path: "/contact",
      name: "contact",
      component: AppContact,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: page404,
    },
  ],
});

export { router };
