import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Details from "./views/Details.vue";
import Catch from "./views/Catch.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // name: "home",
      component: Home
    },
    {
      path: "/about/:id",
      // name: "about",
      component: About
    },
    {
      path: "/details",
      // name: "about",
      component: Details
    },
    {
      path: "*",
      component: Catch
    }
  ]
});
