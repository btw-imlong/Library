import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Login from "../auth/login.vue";
import StudentPage from "../views/student.vue";
import Borrow from "../views/borrow.vue";
import Book from "../views/book.vue";
import AddBook from "../views/addbook.vue";
import listb from "@/views/listb.vue";
import Addstudent from "../views/addstudent.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/addbook", name: "AddBook", component: AddBook },
  { path: "/addstudent", name: "AddStudent", component: Addstudent },
  { path: "/login", name: "About", component: Login },
  { path: "/borrow", name: "Borrow", component: Borrow },
  { path: "/book", name: "Book", component: Book },
  { path: "/listb", name: "Listb", component: listb },
  { path: "/student", name: "StudentPage", component: StudentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
