<template>
  <div
    class="bg-gray-50 shadow-xl/20 flex flex-row justify-evenly inset-shadow-sm py-10"
  >
    <img :src="imgSrc" alt="User Image" class="h-15 w-15" />
    <div class="space-y-3 text-center text-lg font-semibold">
      <h1 class="text-xl">{{ userName }}</h1>
      <h1 class="text-gray-500">{{ userScore }}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  userName: String,
  userScore: [String, Number],
});
</script>
