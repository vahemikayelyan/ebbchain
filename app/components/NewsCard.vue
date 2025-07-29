<template>
  <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
    <h4 class="text-lg font-semibold mb-2">{{ title }}</h4>
    <p class="text-sm text-gray-600 mb-3">{{ summary }}</p>
    <span class="text-xs text-gray-400">{{ date }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  summary: String,
  date: String,
});
</script>
