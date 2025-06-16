<!-- components/UserTable.vue -->
<template>
  <div class="p-4">
    <div class="text-right mb-2">
      <button class="bg-yellow-400 text-black font-bold px-4 py-2 rounded">
        New
      </button>
    </div>
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-blue-900 text-white">
          <th class="p-2">No</th>
          <th class="p-2">Name</th>
          <th class="p-2">ID</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in paginatedUsers"
          :key="index"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
        >
          <td class="p-2 text-center">{{ startIndex + index + 1 }}</td>
          <td class="p-2 text-center">{{ user.name }}</td>
          <td class="p-2 text-center">{{ user.id }}</td>
          <td class="p-2 text-center">
            <button
              class="bg-yellow-400 text-black font-semibold px-3 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              class="bg-red-500 text-white font-semibold px-3 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="flex justify-center space-x-2 mt-4">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'border px-3 py-1',
          currentPage === page ? 'bg-blue-900 text-white' : '',
        ]"
      >
        {{ page }}
      </button>
    </div> -->
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
