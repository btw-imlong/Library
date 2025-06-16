<!-- App.vue or MainLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar at the top -->
    <Navbar />

    <!-- Main layout: Sidebar + Routed content -->
    <div class="flex flex-1">
      <!-- Sidebar/Dashboard -->
      <dashboard class="shrink-0" />

      <!-- Routed Page Content -->
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./layout/navbar.vue";
import dashboard from "./layout/dashboard.vue";
</script>
