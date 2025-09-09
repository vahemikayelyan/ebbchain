<template>
  <section class="py-16 max-w-xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-6">Join the Program</h2>
    <form class="bg-white shadow rounded-lg p-6 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        class="w-full border rounded px-4 py-2"
      />
      <input
        type="email"
        placeholder="Email Address"
        class="w-full border rounded px-4 py-2"
      />
      <input
        type="url"
        placeholder="Website or Platform"
        class="w-full border rounded px-4 py-2"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
      >
        Sign Up
      </button>
    </form>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});
</script>
