<template>
  <div
    class="animate-fade bg-gradient-to-b from-indigo-100 via-emerald-50 to-white min-h-screen py-12 px-6"
  >
    <div
      class="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md p-10 transition-all duration-700"
    >
      <div class="mb-8 text-center">
        <h1 class="text-5xl font-bold text-indigo-700">📚 Library Books</h1>
        <p class="text-gray-500 mt-2">
          Manage and explore your book collection.
        </p>
      </div>

      <!-- Filters -->
      <div
        class="flex flex-wrap justify-between items-center gap-4 mb-6 animate-fade-in-up"
      >
        <router-link to="/addbook">
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition duration-300"
          >
            ➕ Add New Book
          </button>
        </router-link>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by title or ID..."
          class="px-4 py-2 w-72 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <select
          v-model="selectedCategory"
          class="px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <!-- Table -->
      <div
        class="overflow-hidden rounded-xl shadow-lg bg-white animate-fade-in-up"
      >
        <table class="min-w-full text-left">
          <thead class="bg-indigo-200 text-indigo-800 text-md">
            <tr>
              <th class="px-6 py-4">Book ID</th>
              <th class="px-6 py-4">Title</th>
              <th class="px-6 py-4">Author</th>
              <th class="px-6 py-4">Category</th>
              <th class="px-6 py-4">Quantity</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              v-for="(book, index) in sortedBooks"
              :key="book.id"
              class="border-t transition-all duration-500 ease-in-out hover:bg-indigo-50 opacity-0 animate-slide-in"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <td class="px-6 py-4 font-medium">{{ book.id }}</td>
              <td class="px-6 py-4">{{ book.title }}</td>
              <td class="px-6 py-4">{{ book.author_name }}</td>
              <td class="px-6 py-4">{{ book.category }}</td>
              <td class="px-6 py-4">{{ book.quantity }}</td>
            </tr>

            <tr v-if="sortedBooks.length === 0">
              <td colspan="5" class="text-center text-gray-500 py-6">
                No books found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";

const books = ref([]);
const filteredBooks = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("");
let debounceTimeout = null;

async function fetchBooks() {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found. Please login.");

    const res = await axios.get("http://localhost:3000/api/books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    books.value = res.data.books;
    filteredBooks.value = [...books.value];
  } catch (err) {
    console.error("Failed to fetch books:", err.message);
  }
}

onMounted(fetchBooks);

const categories = computed(() => {
  const cats = books.value.map((b) => b.category);
  return [...new Set(cats)].filter((c) => c);
});

function applyFilters() {
  const query = searchQuery.value.toLowerCase();
  const category = selectedCategory.value;

  filteredBooks.value = books.value.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(query) ||
      book.id.toString().toLowerCase().includes(query);

    const matchesCategory = category === "" || book.category === category;

    return matchesQuery && matchesCategory;
  });
}

watch(searchQuery, () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    applyFilters();
  }, 300);
});

watch(selectedCategory, () => {
  applyFilters();
});

const sortedBooks = computed(() => {
  return [...filteredBooks.value].sort((a, b) => a.quantity - b.quantity);
});
</script>

<style scoped>
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade {
  animation: fade 0.8s ease-out;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-in {
  animation: slide-in 0.4s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade 0.6s ease-out both;
}
</style>
