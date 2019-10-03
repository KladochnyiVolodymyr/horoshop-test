import VueRouter from "vue-router";
import AllDesigns from "./components/AllDesigns";
import EditDesign from "./components/EditDesign";

export default new VueRouter({
  routes: [
    {
      path: "/edit/:id",
      component: EditDesign
    },
    {
      path: "/add",
      component: EditDesign
    },
    {
      path: "/",
      component: AllDesigns
    }
  ],
  mode: "history"
});
