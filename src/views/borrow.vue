<script setup>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImxpYmVyaWFuIiwiaWF0IjoxNzUwNzM1MzEzfQ._aPCMT_iEq_Izy6s5q9CZv7BrwANN0cb1idQYwIz8-8";

const allBorrows = ref([]);
const filteredBorrows = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const totalPages = ref(1);
let debounceTimeout = null;

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return `${date.toISOString().slice(0, 10)} ${date
    .toTimeString()
    .slice(0, 5)}`; // YYYY-MM-DD HH:mm
};

const fetchBorrows = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/borrows?page=${currentPage.value}&limit=${itemsPerPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    allBorrows.value = res.data.borrows.map((item) => ({
      studentId: item.id_card,
      bookId: item.book_id || item.title,
      author: item.full_name,
      borrowDate: formatDateTime(item.borrow_date),
      returnDate: formatDateTime(item.return_date),
    }));

    filteredBorrows.value = [...allBorrows.value];
    totalPages.value = res.data.totalPages;
  } catch (error) {
    console.error("Error fetching borrows:", error);
    alert("⚠️ Unauthorized or fetch error. Please check your token and API.");
  }
};

onMounted(fetchBorrows);

// Search functionality with debounce
watch(searchQuery, (val) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = val.toLowerCase();
    filteredBorrows.value = allBorrows.value.filter(
      (item) =>
        item.studentId.toLowerCase().includes(query) ||
        item.bookId.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );
    currentPage.value = 1;
  }, 300);
});

const paginatedBorrows = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBorrows.value.slice(start, start + itemsPerPage);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchBorrows();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchBorrows();
  }
};

const handleEdit = (borrow) => {
  alert(`📝 Edit borrow for ${borrow.studentId}`);
};

const handleDelete = (borrow) => {
  if (confirm(`❌ Delete borrow record for ${borrow.studentId}?`)) {
    alert(`Deleted! (You can now implement DELETE API here)`);
  }
};
</script>

<template>
  <div
    class="animate-fade bg-gradient-to-b from-indigo-100 via-emerald-50 to-white min-h-screen py-12 px-6"
  >
    <div
      class="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md p-10 transition-all duration-700"
    >
      <div class="mb-8 text-center">
        <h1 class="text-5xl font-bold text-indigo-700">📚 Borrow Books</h1>
        <p class="text-gray-500 mt-2">Manage and track borrow records.</p>
      </div>

      <!-- Controls -->
      <div
        class="flex flex-wrap justify-between items-center gap-4 mb-6 animate-fade-in-up"
      >
        <router-link to="/addstudent">
          <button
            class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition duration-300"
          >
            ➕ Add New Student
          </button>
        </router-link>
      </div>

      <!-- Table -->
      <div
        class="overflow-hidden rounded-xl shadow-lg bg-white animate-fade-in-up"
      >
        <table class="min-w-full text-left">
          <thead class="bg-indigo-200 text-indigo-800 text-md">
            <tr>
              <th class="px-6 py-4">Student ID</th>
              <th class="px-6 py-4">Book ID</th>
              <th class="px-6 py-4">Author</th>
              <th class="px-6 py-4">Borrow Date</th>
              <th class="px-6 py-4">Return Date</th>
              <th class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              v-for="(borrow, index) in paginatedBorrows"
              :key="borrow.studentId + borrow.bookId"
              class="border-t transition-all duration-500 ease-in-out hover:bg-indigo-50 opacity-0 animate-slide-in"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <td class="px-6 py-4 font-medium">{{ borrow.studentId }}</td>
              <td class="px-6 py-4">{{ borrow.bookId }}</td>
              <td class="px-6 py-4">{{ borrow.author }}</td>
              <td class="px-6 py-4">{{ borrow.borrowDate }}</td>
              <td class="px-6 py-4">{{ borrow.returnDate }}</td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="handleEdit(borrow)"
                  class="bg-yellow-300 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  @click="handleDelete(borrow)"
                  class="bg-red-400 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr v-if="paginatedBorrows.length === 0">
              <td colspan="6" class="text-center text-gray-500 py-6">
                No results found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div
        class="flex justify-between items-center mt-6 text-sm text-gray-600 max-w-5xl mx-auto"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ← Prev
        </button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next →
        </button>
      </div>
    </div>
  </div>
</template>

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
