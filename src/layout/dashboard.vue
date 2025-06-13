<template>
  <div class="w-1/5 bg-blue-700 h-auto overflow-hidden">
    <div>
      <section class="text-center p-6">
        <h1 class="text-4xl font-bold text-white">Dash Board</h1>
      </section>
      <div class="flex flex-col gap-2">
        <section
          class="flex hover:bg-white text-white hover:text-black border-b-2 items-end px-6 p-3 transition duration-300 space-x-8"
        >
          <img :src="home" alt="" class="h-8 w-8" />
          <h1 class="text-xl font-medium">Dash Board</h1>
        </section>
        <section
          class="flex hover:bg-white text-white hover:text-black border-b-2 items-end px-6 p-3 transition duration-300 space-x-8"
        >
          <img :src="stu" alt="" class="h-8 w-8" />
          <h1 class="text-xl font-medium">Manage Student</h1>
        </section>
        <section
          class="flex hover:bg-white text-white hover:text-black border-b-2 items-end px-6 p-3 transition duration-300 space-x-8"
        >
          <img :src="book" alt="" class="h-8 w-8" />
          <h1 class="text-xl font-medium">Manage Book</h1>
        </section>
        <section
          class="flex hover:bg-white text-white hover:text-black border-b-2 items-end px-6 p-3 transition duration-300 space-x-8"
        >
          <img :src="shopping" alt="" class="h-8 w-8" />
          <h1 class="text-xl font-medium">Return Book</h1>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import home from "../img/icon/home.png";
import stu from "../img/icon/image.png";
import book from "../img/icon/image copy 2.png";
import shopping from "../img/icon/image copy 3.png";
</script>
