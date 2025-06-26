<template>
  <div
    class="p-6 bg-gradient-to-b from-indigo-100 via-emerald-50 to-white min-h-screen"
  >
    <section class="mb-8">
      <h1 class="text-3xl font-extrabold text-indigo-700 mb-1">
        Welcome to Dashboard
      </h1>
      <p class="text-gray-600">
        <router-link to="" class="text-indigo-600 hover:underline"
          >Admin /</router-link
        >
        Dashboard
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <Card :imgSrc="myImage" userName="Total Books" :userScore="100" />
      <Card :imgSrc="img" userName="Total Student" :userScore="10" />
      <Card :imgSrc="pic" userName="borrowed not returned" :userScore="5" />
      <Card :imgSrc="person" userName="Returned" :userScore="5" />
    </div>

    <div class="space-y-16 max-w-7xl mx-auto">
      <!-- Student Detail Table -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-bold text-indigo-700 mb-6">Student Detail</h2>
        <table
          class="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden"
        >
          <thead class="bg-indigo-600 text-white">
            <tr>
              <th class="p-3 border border-indigo-500">Student ID</th>
              <th class="p-3 border border-indigo-500">Name</th>
              <th class="p-3 border border-indigo-500">Gender</th>
              <th class="p-3 border border-indigo-500">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in students"
              :key="student.id"
              class="text-center hover:bg-indigo-50 transition"
            >
              <td class="p-3 border border-indigo-300 font-medium">
                {{ student.id_card || student.student_id || student.id }}
              </td>
              <td class="p-3 border border-indigo-300">
                {{ student.full_name || student.name }}
              </td>
              <td class="p-3 border border-indigo-300">
                {{ student.gender || "-" }}
              </td>
              <td class="p-3 border border-indigo-300">
                {{ student.class || "-" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Book Detail Table -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-bold text-indigo-700 mb-6">Book Detail</h2>
        <table
          class="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden"
        >
          <thead class="bg-indigo-600 text-white">
            <tr>
              <th class="p-3 border border-indigo-500">Book ID</th>
              <th class="p-3 border border-indigo-500">Title</th>
              <th class="p-3 border border-indigo-500">Author</th>
              <th class="p-3 border border-indigo-500">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in books"
              :key="book.id"
              class="text-center hover:bg-indigo-50 transition"
            >
              <td class="p-3 border border-indigo-300 font-medium">
                {{ book.id }}
              </td>
              <td class="p-3 border border-indigo-300">{{ book.title }}</td>
              <td class="p-3 border border-indigo-300">
                {{ book.author_name || book.author }}
              </td>
              <td class="p-3 border border-indigo-300">
                <span
                  :class="{
                    'text-green-600 font-semibold': book.status === 'Available',
                    'text-red-600 font-semibold': book.status === 'Borrowed',
                  }"
                >
                  {{ book.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Card from "../components/weight-card.vue";
import pic from "../img/people.png";
import img from "../img/book.png";
import person from "../img/person.png";
import myImage from "../img/navbar_pic.png";

const students = ref([]);
const books = ref([]);

const fetchStudents = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await axios.get("http://localhost:3000/api/students", {
      headers: { Authorization: `Bearer ${token}` },
    });

    students.value = res.data.students || res.data || [];
  } catch (err) {
    console.error("Failed to fetch students:", err.message);
  }
};

const fetchBooks = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await axios.get("http://localhost:3000/api/books", {
      headers: { Authorization: `Bearer ${token}` },
    });

    books.value = res.data.books || res.data || [];
  } catch (err) {
    console.error("Failed to fetch books:", err.message);
  }
};

onMounted(() => {
  fetchStudents();
  fetchBooks();
});
</script>
