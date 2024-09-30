import Vue from "vue";
import VueRouter from "vue-router";
import loginPage from "../pages/loginPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.VITE_BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: loginPage,
    },
  ],
});

export default router;
