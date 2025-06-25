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

        <!-- ID Card -->
        <div class="relative">
          <input
            v-model="form.id_card"
            type="text"
            id="id_card"
            required
            placeholder=" "
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          />
          <label
            for="id_card"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            ID Card
          </label>
        </div>

        <!-- Student Class -->
        <div class="relative">
          <select
            v-model="form.student_class"
            id="student_class"
            required
            class="block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 peer"
          >
            <option value="" disabled hidden>Select Class</option>
            <option>wmad</option>
            <option>accounting</option>
            <option>sales</option>
            <option>cocktail sharker</option>
            <option>makating</option>
          </select>
          <label
            for="student_class"
            class="absolute text-sm text-gray-500 bg-white px-1 transition-all duration-300 transform scale-75 top-1.5 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-1.5"
          >
            Class
          </label>
        </div>

        <!-- Submit Button -->
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
import { ref, onMounted } from "vue";
import axios from "axios";

const form = ref({
  full_name: "",
  id_card: "",
  student_class: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Set token header on mount
onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    errorMessage.value = "⚠️ No token found. Please login.";
  }
});

async function handleSubmit() {
  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    await axios.post("http://localhost:3000/api/students", form.value);
    successMessage.value = "✅ Student created successfully!";
    form.value = { full_name: "", id_card: "", student_class: "" };
  } catch (err) {
    console.error("Submit Error:", err.response?.data || err.message);
    errorMessage.value =
      err.response?.data?.message || "❌ Failed to create student.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Add custom styling if needed */
</style>
