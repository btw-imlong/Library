<template>
  <div class="relative min-h-screen text-white overflow-hidden">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/50 z-10"></div>

    <!-- Main Content -->
    <div
      class="relative z-20 px-6 py-12 flex flex-col items-center justify-center"
    >
      <div
        class="max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <!-- Welcome Section -->
        <div class="flex flex-col items-center text-center gap-6">
          <img
            class="w-64 h-64 object-cover rounded-full"
            :src="img"
            alt="Library"
          />
          <p class="text-2xl font-semibold leading-relaxed">
            Welcome to our library<br />
            Right now you can login as a librarian
          </p>
        </div>

        <!-- Login Form -->
        <div
          class="bg-white/30 rounded-2xl backdrop-blur-md text-black w-full max-w-md p-8 space-y-10"
        >
          <h1 class="text-3xl font-semibold text-center text-slate-900">
            Library Management System
          </h1>
          <h2 class="text-2xl font-semibold text-center text-black/80">
            Librarian Login Form
          </h2>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Username -->
            <div>
              <label class="block text-lg font-medium mb-2" for="username">
                Username
              </label>
              <input
                v-model="username"
                type="text"
                id="username"
                placeholder="liberian1"
                class="w-full px-6 py-3 rounded-2xl bg-neutral-100 border border-black text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-lg font-medium mb-2" for="password">
                Password
              </label>
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="••••••••"
                class="w-full px-6 py-3 rounded-2xl bg-neutral-100 border border-black text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <!-- Error Message -->
            <p
              v-if="errorMessage"
              class="text-red-600 text-center font-semibold"
            >
              {{ errorMessage }}
            </p>

            <!-- Actions -->
            <div class="flex justify-between items-center mt-8">
              <button
                type="submit"
                class="bg-yellow-400 text-black font-semibold text-sm px-6 py-3 rounded-2xl hover:bg-yellow-300 transition duration-200"
              >
                Login
              </button>
              <a
                href="#"
                class="text-blue-900 text-sm font-semibold hover:underline"
              >
                Forget your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// Assets
import videoFile from "../img/700_F_1464249674_ezN3nyNaBVMmq4yVqDZxMNA6RDkzkYWl_ST.mp4";
import img from "../img/image.png";

const videoSrc = videoFile;
const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      username: username.value,
      password: password.value,
    });

    // ✅ Save the token to localStorage
    const token = response.data.token;
    localStorage.setItem("token", token);

    // ✅ Redirect to books page (adjust if your route is different)
    router.push("/book");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Login failed. Please try again.";
    }
  }
};
</script>
