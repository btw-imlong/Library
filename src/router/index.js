import { createRouter, createWebHistory } from "vue-router";
import StudentPage from "../views/StudentPage.vue";

const routes = [
  {
    path: "/student",
    name: "StudentPage",
    component: StudentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
