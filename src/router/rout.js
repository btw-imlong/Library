import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Login from "../auth/login.vue";
import StudentPage from "../views/student.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/student", name: "StudentPage", component: StudentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
