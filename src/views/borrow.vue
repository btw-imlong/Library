<template>
  <div class="flex h-screen font-sans">
    <!-- Main Content -->
    <main class="flex-1 p-8 bg-white">
      <!-- Header -->
      <div class="flex justify-end mb-6">
        <button
          @click="showForm = !showForm"
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded"
        >
          New
        </button>
      </div>

      <!-- Borrow Form (Toggle) -->
      <div v-if="showForm" class="mb-8 p-6 bg-gray-50 border rounded space-y-4">
        <div>
          <label class="block font-medium mb-1">Student Name</label>
          <select v-model="selectedStudent" class="w-full p-2 border rounded">
            <option disabled value="">-- Choose Student --</option>
            <option
              v-for="student in students"
              :key="student.id"
              :value="student.name"
            >
              {{ student.name }}
            </option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1">Book Title</label>
          <select v-model="selectedBook" class="w-full p-2 border rounded">
            <option disabled value="">-- Choose Book --</option>
            <option v-for="book in books" :key="book.id" :value="book.title">
              {{ book.title }}
            </option>
          </select>
        </div>

        <button
          @click="borrowBook"
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          :disabled="!selectedStudent || !selectedBook"
        >
          Borrow
        </button>
      </div>

      <!-- Borrow Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-100 rounded-md overflow-hidden">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="py-3 px-4 text-left">No</th>
              <th class="py-3 px-4 text-left">Student</th>
              <th class="py-3 px-4 text-left">Book</th>
              <th class="py-3 px-4 text-left">Status</th>
              <th class="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(borrow, index) in borrowedBooks"
              :key="borrow.id"
              class="border-b border-gray-300"
            >
              <td class="py-2 px-4">{{ index + 1 }}</td>
              <td class="py-2 px-4">{{ borrow.student }}</td>
              <td class="py-2 px-4">{{ borrow.book }}</td>
              <td class="py-2 px-4 text-red-600 font-semibold">Borrowed</td>
              <td class="py-2 px-4">
                <button
                  class="bg-yellow-400 hover:bg-yellow-300 text-black text-sm py-1 px-3 rounded"
                  @click="editBorrow(borrow.id)"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded ml-8"
                  @click="deleteBorrow(borrow.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination (static example) -->
        <div class="flex justify-end gap-4 mt-6">
          <button class="text-black font-bold py-2 px-6 rounded border">
            1
          </button>
          <button class="text-black font-bold py-2 px-6 rounded border">
            2
          </button>
          <button class="text-black font-bold py-2 px-6 rounded border">
            3
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);
const selectedStudent = ref("");
const selectedBook = ref("");

const students = [
  { id: 1, name: "Sokchea" },
  { id: 2, name: "Sophea" },
  { id: 3, name: "Dara" },
];

const books = [
  { id: 1, title: "Intro to Vue" },
  { id: 2, title: "Mastering JS" },
  { id: 3, title: "Learn HTML" },
];

const borrowedBooks = ref([]);

function borrowBook() {
  const newEntry = {
    id: Date.now(),
    student: selectedStudent.value,
    book: selectedBook.value,
  };

  borrowedBooks.value.push(newEntry);
  selectedStudent.value = "";
  selectedBook.value = "";
  showForm.value = false;
}

function deleteBorrow(id) {
  borrowedBooks.value = borrowedBooks.value.filter((b) => b.id !== id);
}

function editBorrow(id) {
  const entry = borrowedBooks.value.find((b) => b.id === id);
  if (entry) {
    selectedStudent.value = entry.student;
    selectedBook.value = entry.book;
    showForm.value = true;
    deleteBorrow(id);
  }
}
</script>
