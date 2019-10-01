import VueRouter from "vue-router";
import AllDesigns from "./components/AllDesigns";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: AllDesigns
    }
  ],
  mode: "history"
});
