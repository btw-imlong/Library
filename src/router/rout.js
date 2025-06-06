import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/student.vue";
import Login from "../auth/login.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
