<template>
  <div class="text-center text-3xl md:text-5xl font-bold mt-8">
    <h1>Add Book Details</h1>
  </div>

  <div class="mt-10 space-y-8">
    <div
      class="flex flex-col md:flex-row md:gap-32 justify-center items-center"
    >
      <div class="relative w-11/12 md:w-80">
        <input
          type="text"
          id="book_title"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="book_title"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Book Title</label
        >
      </div>

      <div class="relative w-11/12 md:w-80 mt-8 md:mt-0">
        <input
          type="text"
          id="authors"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="authors"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Authors</label
        >
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row md:gap-32 justify-center items-center"
    >
      <!-- ISBN -->
      <div class="relative w-11/12 md:w-80">
        <input
          type="text"
          id="isbn"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="isbn"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >ISBN</label
        >
      </div>

      <div class="relative w-11/12 md:w-80 mt-8 md:mt-0">
        <input
          type="text"
          id="published_date"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="published_date"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Published Date</label
        >
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row md:gap-32 justify-center items-center"
    >
      <div class="relative w-11/12 md:w-80">
        <input
          type="text"
          id="genre"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="genre"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Genre</label
        >
      </div>

      <div class="relative w-11/12 md:w-80 mt-8 md:mt-0">
        <input
          type="text"
          id="quantity"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="quantity"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Quantity</label
        >
      </div>
    </div>
  </div>

  <div
    class="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-118 mt-20"
  >
    <button
      class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-10 rounded"
    >
      Cancel
    </button>
    <button
      class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded"
    >
      Save Book
    </button>
  </div>
</template>
