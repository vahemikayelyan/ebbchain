<template>
  <section class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold">What our members say</h2>
      <p class="mt-2 text-gray-600">Real stories from happy shoppers</p>

      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <div v-for="t in testimonials" :key="t.name" class="card p-6 shadow">
          <p class="text-gray-700 italic">“{{ t.quote }}”</p>
          <div class="mt-4 font-semibold">{{ t.name }}</div>
          <div class="text-sm text-gray-500">{{ t.location }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    quote: "I’ve saved $120 in just 3 months!",
  },
  {
    name: "David P.",
    location: "California, USA",
    quote: "Cashback hits my PayPal like clockwork.",
  },
  {
    name: "Emily R.",
    location: "Texas, USA",
    quote: "Easy to use and lots of stores I shop at daily.",
  },
];
</script>
