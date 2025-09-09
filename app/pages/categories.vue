<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <header class="flex items-end justify-between">
      <div>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
          All Categories
        </h1>
        <p class="text-gray-600 mt-2">
          Browse our growing list of store categories.
        </p>
      </div>
      <div class="hidden md:block w-full max-w-md">
        <input
          type="search"
          class="input-soft w-full"
          placeholder="Filter categories…"
          v-model="q"
        />
      </div>
    </header>

    <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <CategoryCard
        v-for="c in filtered"
        :key="c.title"
        :icon="c.icon"
        :title="c.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const q = ref("");
const base = [
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
  { icon: "📚", title: "Books & Media" },
  { icon: "👔", title: "Men's Fashion" },
  { icon: "👗", title: "Women's Fashion" },
  { icon: "🧥", title: "Outdoor & Apparel" },
  { icon: "🛠️", title: "DIY & Tools" },
  { icon: "🐶", title: "Pets" },
  { icon: "🍽️", title: "Kitchen & Dining" },
  { icon: "🧼", title: "Health & Household" },
];

const filtered = computed(() =>
  base.filter((c) => c.title.toLowerCase().includes(q.value.toLowerCase()))
);
</script>
