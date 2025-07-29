<template>
  <div
    class="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition"
  >
    <div class="flex items-center gap-4 mb-4">
      <img :src="logo" alt="Logo" class="w-10 h-10 object-contain" />
      <h3 class="text-xl font-semibold">{{ name }}</h3>
    </div>
    <ul class="text-sm text-gray-700 space-y-2">
      <li><strong>Fees:</strong> {{ features.fees }}</li>
      <li><strong>Supported Assets:</strong> {{ features.assets }}</li>
      <li>
        <strong>API Support:</strong> {{ features.api ? "✅ Yes" : "❌ No" }}
      </li>
      <li>
        <strong>Strategies:</strong>
        <ul class="list-disc list-inside ml-3">
          <li v-for="(s, i) in features.strategies" :key="i">{{ s }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  logo: String,
  features: Object,
});
</script>
