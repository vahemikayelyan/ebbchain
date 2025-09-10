<template>
  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold">🔥 Featured Deals</h2>
      <p class="mt-2 text-gray-600">Don’t miss these top cashback offers</p>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="deal in deals" :key="deal.title" class="card p-6">
          <img :src="deal.logo" :alt="deal.title" class="h-12 mx-auto mb-4" />
          <h3 class="font-semibold text-lg">{{ deal.title }}</h3>
          <p class="text-gray-600">{{ deal.offer }}</p>
          <NuxtLink :to="deal.link" class="btn-primary mt-4">Shop now</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const deals = [
  {
    title: "Nike",
    logo: "/logos/nike.svg",
    offer: "5% cashback + 20% off sale",
    link: "/partners/nike",
  },
  {
    title: "Amazon",
    logo: "/logos/amazon.svg",
    offer: "Up to 10% cashback on gadgets",
    link: "/partners/amazon",
  },
  {
    title: "Best Buy",
    logo: "/logos/bestbuy.svg",
    offer: "3% cashback + Tech Deals",
    link: "/partners/bestbuy",
  },
];
</script>
