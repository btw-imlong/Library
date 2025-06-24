<template>
  <div class="text-center text-3xl md:text-5xl font-bold mt-8">
    <h1>Create Students</h1>
  </div>

  <div class="p-4 md:p-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-10 md:gap-y-10 w-full"
    >
      <div class="relative">
        <input
          type="text"
          id="full_name"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="full_name"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Full Name</label
        >
      </div>

      <div class="relative">
        <input
          type="text"
          id="student_id"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="student_id"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Student ID</label
        >
      </div>

      <div class="relative">
        <input
          type="text"
          id="email"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="email"
          class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >Email</label
        >
      </div>

      <div>
        <div>
          <div class="relative">
            <select
              id="Class/Grande"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value="" disabled selected hidden></option>

              <option>WMAD</option>
              <option>Sales</option>
              <option>Accounting</option>
              <option>Cook</option>
              <option>Cocktail Shaker</option>
            </select>
            <label
              for="category"
              class="absolute text-sm text-gray-500 duration-300 transform scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-2 left-2"
              >Class/Grande</label
            >
          </div>
          ﻿
        </div>
      </div>
    </div>
  </div>

  <!-- Submit Button Centered -->
  <div class="flex justify-center mt-10 ml-[700px]">
    <button
      class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded"
    >
      Submit
    </button>
  </div>
</template>
