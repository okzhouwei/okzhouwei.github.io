import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/color",
    name: "color",
    component: () => import("../views/ColorView.vue"),
  },
  {
    path: "/tag",
    name: "tag",
    component: () => import("../views/TagView.vue"),
  },
  {
    path: "/progress",
    name: "progress",
    component: () => import("../views/ProgressView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
