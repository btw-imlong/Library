<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white flex justify-between">
      <router-link class="flex items-center space-x-5" to="/">
        <img :src="img" alt="Library Logo" class="h-8 w-8" />
        <span class="md:text-lg font-semibold">Library Management System</span>
      </router-link>
      <router-link class="flex items-center space-x-5" to="/login">
        <img :src="user" alt="Library Logo" class="h-8 w-8" />
        <span class="text-lg font-semibold md:block hidden">Welcome,Admin</span>
      </router-link>
    </nav>
  </div>
</template>
<script setup>
import img from "../img/navbar_pic.png";
import user from "../img/icon/image copy.png";
</script>
