<!-- App.vue or MainLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar at the top -->
    <Navbar v-if="!hideLayout" />

    <!-- Main layout: Sidebar + Routed content -->
    <div class="flex flex-1">
      <!-- Sidebar/Dashboard -->
      <dashboard class="shrink-0" v-if="!hideLayout" />

      <!-- Routed Page Content -->
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

import Navbar from "./layout/navbar.vue";
import dashboard from "./layout/dashboard.vue";

const route = useRoute();

const hideLayout = computed(() => {
  const hiddenPaths = ["/login"]; // Add more paths if needed
  return hiddenPaths.includes(route.path);
});
</script>
