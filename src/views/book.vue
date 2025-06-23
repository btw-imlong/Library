<template>
  <div class="flex h-screen font-sans">
    <!-- Main Content -->
    <main class="flex-1 p-8 bg-white">
      <!-- Header -->
      <div class="flex justify-end mb-6">
        <button
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded"
        >
          New
        </button>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-100 rounded-md overflow-hidden">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="py-3 px-4 text-left">No</th>
              <th class="py-3 px-4 text-left">Name</th>
              <th class="py-3 px-4 text-left">ID</th>
              <th class="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in paginatedUsers"
              :key="index"
              :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
              class="border-b border-gray-300"
            >
              <td class="py-2 px-4">{{ startIndex + index + 1 }}</td>
              <td class="py-2 px-4">{{ user.name }}</td>
              <td class="py-2 px-4">{{ user.id }}</td>
              <td class="py-2 px-4">
                <button
                  class="bg-yellow-400 hover:bg-yellow-300 text-black text-sm py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded ml-8"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="flex justify-end mb-6 gap-4">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'text-black font-bold py-2 px-6 rounded mt-6 border',
              currentPage === page ? 'bg-blue-900 text-white' : '',
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const usersData = [
  { name: "War and Peace ", id: "012032" },
  { name: "Boy with one name", id: "201034" },
  { name: "The Friend", id: "909871" },
  { name: "My Brother", id: "209394" },
  { name: "Lucky Boy", id: "304566" },
  { name: "Last of her name", id: "067046" },
  { name: "Call me by your name", id: "002789" },
  { name: "Rememeber her name", id: "089076" },
];

const itemsPerPage = 8;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(usersData.length / itemsPerPage));
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const paginatedUsers = computed(() =>
  usersData.slice(startIndex.value, startIndex.value + itemsPerPage)
);
</script>
