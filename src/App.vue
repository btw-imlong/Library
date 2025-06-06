<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white">
      <router-link class="mr-4" to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
