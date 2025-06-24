<template>
  <div
    class="min-h-screen bg-gradient-to-br from-emerald-100 to-indigo-100 flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-4xl bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12"
    >
      <h1
        class="text-3xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10"
      >
        🎓 Create Student
      </h1>

      <form
        @submit.prevent="handleSubmit"
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <!-- Full Name -->
        <div class="relative">
          <input
            v-model="form.full_name"
            type="text"
            id="full_name"
            required
            placeholder=" "
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          />
          <label
            for="full_name"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            Full Name
          </label>
        </div>

        <!-- Student ID -->
        <div class="relative">
          <input
            v-model="form.student_id"
            type="text"
            id="student_id"
            required
            placeholder=" "
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          />
          <label
            for="student_id"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            Student ID
          </label>
        </div>

        <!-- Email -->
        <div class="relative">
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            placeholder=" "
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          />
          <label
            for="email"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            Email
          </label>
        </div>

        <!-- Grade -->
        <div class="relative">
          <input
            v-model="form.grade"
            type="text"
            id="grade"
            required
            placeholder=" "
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          />
          <label
            for="grade"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            Class / Grade
          </label>
        </div>

        <!-- Submit button -->
        <div class="col-span-1 md:col-span-2 mt-4 text-center">
          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition duration-300"
            :disabled="loading"
          >
            {{ loading ? "Submitting..." : "Submit" }}
          </button>
        </div>
      </form>

      <!-- Feedback -->
      <div class="text-center mt-6">
        <p v-if="successMessage" class="text-green-600 font-semibold">
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="text-red-500 font-semibold">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  full_name: "",
  student_id: "",
  email: "",
  grade: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function handleSubmit() {
  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found. Please login.");

    await axios.post("http://localhost:3000/api/students", form.value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    successMessage.value = "✅ Student created successfully!";
    form.value = { full_name: "", student_id: "", email: "", grade: "" };
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message || "❌ Failed to create student.";
  } finally {
    loading.value = false;
  }
}
</script>
