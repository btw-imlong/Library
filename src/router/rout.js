import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/student.vue";
import Login from "../auth/login.vue";
import Book from "../views/book.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: Login },
  { path: "/book", name: "Book", component: Book },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
