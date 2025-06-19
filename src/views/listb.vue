<template>
  <div class="border p-6 w-[1100px] h-[320px] mx-auto mt-10">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-model="form.id_card"
        type="text"
        name="id_book"
        placeholder="id_book"
        class="border p-2 w-full rounded"
      />
      <input
        v-model="form.name"
        type="text"
        name="name"
        placeholder="Book name"
        class="border p-2 w-full rounded"
      />
      <input
        v-model="form.class"
        type="text"
        name="class"
        placeholder="class"
        class="border p-2 w-full rounded"
      />
      <div class="text-right">
        <button
          type="submit"
          class="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
          @click="handleSubmit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id_card: "",
        name: "",
        class: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form);
    },
  },
};
</script>
