<template>
  <section ref="el" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
        Most popular stores
      </h2>
      <p class="mt-3 text-gray-600">
        Member favorites with generous rewards and fast payouts.
      </p>
    </div>

    <div class="text-center md:text-right mt-4">
      <NuxtLink to="/partners" class="btn-outline">View all stores</NuxtLink>
    </div>

    <div
      :class="[
        'mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition duration-700',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ]"
    >
      <StoreCard v-for="s in stores" :key="s.name" :store="s" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useInView } from "~/composables/useInView";

const { el, isInView } = useInView<HTMLDivElement>();
const stores = [
  { name: "Amazon", logo: "/logos/amazon.svg", blurb: "Everything you love." },
  {
    name: "Walmart",
    logo: "/logos/walmart.svg",
    blurb: "Low prices, big savings.",
  },
  { name: "Target", logo: "/logos/target.svg", blurb: "Style + value." },
  { name: "Nike", logo: "/logos/nike.svg", blurb: "Gear up & go." },
  { name: "Best Buy", logo: "/logos/bestbuy.svg", blurb: "Tech deals." },
  { name: "eBay", logo: "/logos/ebay.svg", blurb: "Bid or buy." },
];
</script>
