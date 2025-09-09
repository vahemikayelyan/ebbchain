<template>
  <NuxtLink
    to="/categories"
    class="card p-4 hover:shadow-lg transition flex flex-col items-center text-center min-h-[120px]"
  >
    <div class="text-3xl">{{ icon }}</div>
    <div class="mt-2 font-medium">{{ title }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ icon: string; title: string }>();
</script>
