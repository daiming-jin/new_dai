import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login/login.vue";
import user from "../views/user/user.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: login,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
