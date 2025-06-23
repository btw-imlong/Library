<template>
  <div class="flex h-screen font-sans">
    <!-- Main Content -->
    <main class="flex-1 p-8 bg-white">
      <!-- Header -->
      <div class="flex justify-end mb-6">
        <button
          class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded"
        >
          New
        </button>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-100 rounded-md overflow-hidden">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="py-3 px-4 text-left">No</th>
              <th class="py-3 px-4 text-left">Name</th>
              <th class="py-3 px-4 text-left">ID</th>
              <th class="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 7" :key="n" class="border-b border-gray-300">
              <td class="py-2 px-4">{{ n }}</td>
              <td class="py-2 px-4">Thida</td>
              <td class="py-2 px-4">12345</td>
              <td class="py-2 px-4">
                <button
                  class="bg-yellow-400 hover:bg-yellow-300 text-black text-sm py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded ml-8"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-end mb-6 gap-4">
          <button class="text-black font-bold py-2 px-6 rounded mt-6 border">
            1
          </button>
          <button class="text-black font-bold py-2 px-6 rounded mt-6 border">
            2
          </button>
          <button class="text-black font-bold py-2 px-6 rounded mt-6 border">
            3
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
