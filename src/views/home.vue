<template>
  <div class="p-4">
    <section class="p-4 space-y-2">
      <h1 class="text-2xl font-semibold">Welcome to Dashboard</h1>
      <p>
        <router-link to="" class="text-blue-700">Admid /</router-link> Dashboard
      </p>
    </section>
    <div class="grid grid-cols-2 gap-x-30 gap-y-20 p-4">
      <Card :imgSrc="myImage" userName="Logged in user" :userScore="100" />
      <Card :imgSrc="img" userName="Total Book" :userScore="240" />
      <Card :imgSrc="pic" userName="Total Member" :userScore="1234" />
      <Card :imgSrc="person" userName="Logged in user" :userScore="10" />
    </div>

    <div class="p-6 space-y-12">
      <!-- Student Detail Table -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Student Detail</h2>
        <table class="min-w-full border border-gray-300">
          <thead class="bg-blue-500 text-white">
            <tr>
              <th class="p-2 border">Student ID</th>
              <th class="p-2 border">Name</th>
              <th class="p-2 border">Gender</th>
              <th class="p-2 border">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in students"
              :key="student.id"
              class="text-center hover:bg-gray-50"
            >
              <td class="p-2 border">{{ student.id }}</td>
              <td class="p-2 border">{{ student.name }}</td>
              <td class="p-2 border">{{ student.gender }}</td>
              <td class="p-2 border">{{ student.class }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Book Detail Table -->
      <div>
        <h2 class="text-2xl font-bold mb-4">Book Detail</h2>
        <table class="min-w-full border border-gray-300">
          <thead class="bg-blue-500 text-white">
            <tr>
              <th class="p-2 border">Book ID</th>
              <th class="p-2 border">Title</th>
              <th class="p-2 border">Author</th>
              <th class="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in books"
              :key="book.id"
              class="text-center hover:bg-gray-50"
            >
              <td class="p-2 border">{{ book.id }}</td>
              <td class="p-2 border">{{ book.title }}</td>
              <td class="p-2 border">{{ book.author }}</td>
              <td class="p-2 border">{{ book.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
const students = [
  { id: "S001", name: "Sokchea", gender: "Male", class: "10A" },
  { id: "S002", name: "Sophea", gender: "Female", class: "10B" },
  { id: "S003", name: "Vireak", gender: "Male", class: "10A" },
  { id: "S004", name: "Dara", gender: "Male", class: "10C" },
  { id: "S005", name: "Rachana", gender: "Female", class: "10B" },
];

const books = [
  {
    id: "B001",
    title: "Intro to Vue",
    author: "Chan Dara",
    status: "Available",
  },
  { id: "B002", title: "Mastering JS", author: "Sokun", status: "Borrowed" },
  { id: "B003", title: "Learn HTML", author: "Phirun", status: "Available" },
  { id: "B004", title: "CSS Design", author: "Sreypov", status: "Borrowed" },
  {
    id: "B005",
    title: "Tailwind Tips",
    author: "Rothana",
    status: "Available",
  },
];
import Card from "../components/weight-card.vue";
import pic from "../img/people.png";
import img from "../img/book.png";
import person from "../img/person.png";
import myImage from "../img/navbar_pic.png";
</script>
