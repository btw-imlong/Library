<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white flex items-center justify-between">
      <!-- Left: Logo + Name -->
      <router-link class="flex items-center space-x-3" to="/">
        <img :src="img" alt="Library Logo" class="h-8 w-8" />
        <span class="text-sm md:text-lg font-semibold"
          >Library Management System</span
        >
      </router-link>

      <!-- Right: Admin Info (hidden on small screens) -->
      <div class="hidden md:flex items-center space-x-3">
        <img :src="user" alt="Admin Icon" class="h-8 w-8" />
        <span class="text-lg font-semibold">Welcome, Admin</span>
      </div>

      <!-- Mobile Sidebar Toggle -->
      <button
        class="block md:hidden focus:outline-none"
        @click="$emit('toggle-sidebar')"
        aria-label="Toggle Sidebar"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup>
import img from "../img/navbar_pic.png";
import user from "../img/icon/image copy.png";
</script>
