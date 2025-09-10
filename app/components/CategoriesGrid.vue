<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
        Browse categories
      </h2>
      <p class="mt-3 text-gray-600">Find stores by what you’re shopping for.</p>
    </div>
    <div class="text-center md:text-right mt-4">
      <NuxtLink to="/categories" class="btn-outline"
        >View all categories</NuxtLink
      >
    </div>
    <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <CategoryCard
        v-for="c in categories"
        :key="c.title"
        :icon="c.icon"
        :title="c.title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { icon: "✈️", title: "Travel & Stays" },
  { icon: "🛒", title: "Grocery Stores" },
  { icon: "🛳️", title: "Cruises" },
  { icon: "🚗", title: "Car Rentals" },
  { icon: "🔧", title: "Auto Parts" },
  { icon: "👟", title: "Sportswear" },
  { icon: "💄", title: "Beauty" },
  { icon: "📱", title: "Electronics" },
  { icon: "🏠", title: "Home & Garden" },
  { icon: "👶", title: "Baby & Kids" },
  { icon: "🧳", title: "Luggage" },
  { icon: "🎮", title: "Gaming" },
];
</script>
