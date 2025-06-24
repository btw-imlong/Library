<template>
  <div
    class="animate-fade bg-gradient-to-b from-indigo-100 via-emerald-50 to-white min-h-screen py-12 px-6"
  >
    <div
      class="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md p-10 transition-all duration-700"
    >
      <div class="mb-8 text-center">
        <h1 class="text-5xl font-bold text-indigo-700">🎓 Students</h1>
        <p class="text-gray-500 mt-2">Manage and explore student records.</p>
      </div>

      <!-- Filters (optional, can add later if needed) -->
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
              <th class="px-6 py-4">No</th>
              <th class="px-6 py-4">Name</th>
              <th class="px-6 py-4">Student ID</th>
              <th class="px-6 py-4"></th>
              <th class="px-6 py-4">Class</th>
              <th class="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              v-for="(student, index) in sortedStudents"
              :key="student.id"
              class="border-t transition-all duration-500 ease-in-out hover:bg-indigo-50 opacity-0 animate-slide-in"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ student.full_name }}</td>
              <td class="px-6 py-4">{{ student.id_card }}</td>
              <td class="px-6 py-4">{{ student.email }}</td>
              <td class="px-6 py-4">{{ student.class }}</td>
              <td class="px-6 py-4">{{ student.grade }}</td>
            </tr>

            <tr v-if="sortedStudents.length === 0">
              <td colspan="6" class="text-center text-gray-500 py-6">
                No students found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const students = ref([]);

async function fetchStudents() {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await axios.get("http://localhost:3000/api/students", {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Map API response to consistent property names
    students.value = res.data.students.map((s) => ({
      id: s.id,
      full_name: s.full_name || s.name || "",
      id_card: s.id_card || s.student_id || "",
      email: s.email || "",
      class: s.class || "", // Adjust if your API uses a different key for class
      grade: s.grade || "",
    }));
  } catch (err) {
    console.error("Failed to fetch students:", err.message);
  }
}

onMounted(fetchStudents);

const sortedStudents = computed(() => {
  return [...students.value].sort((a, b) =>
    a.full_name.localeCompare(b.full_name)
  );
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
