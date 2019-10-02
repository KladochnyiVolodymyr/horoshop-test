import VueRouter from "vue-router";
import AllDesigns from "./components/AllDesigns";
import AddNew from "./components/AddNew";

export default new VueRouter({
  routes: [
    {
      path: "/edit/:id",
      component: AddNew
    },
    {
      path: "/add",
      component: AddNew
    },
    {
      path: "/",
      component: AllDesigns
    }
  ],
  mode: "history"
});
