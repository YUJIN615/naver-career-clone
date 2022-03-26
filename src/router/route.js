import { createWebHistory, createRouter } from "vue-router";
import Main from "../pages/Main.vue";
import Recruit from "../pages/Recruit.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Main,
  },
  {
    path: "/home/recruit",
    component: Recruit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
