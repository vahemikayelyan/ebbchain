<template>
  <section class="max-w-4xl mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold text-yellow-300 mb-4">Affiliate Dashboard</h2>
    <p class="text-gray-400">
      Log in to view your stats, commissions, and referral performance.
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
