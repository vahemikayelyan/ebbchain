<template>
  <div class="bg-white text-gray-900">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center py-12 px-4"
    >
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">
          Stay Ahead with AI-Curated Daily Crypto News
        </h2>
        <p class="text-lg mb-6">
          Delivered fresh by ChatGPT every morning. Stay informed. Trade
          smarter.
        </p>
        <SubscribeForm />
      </div>
    </section>

    <!-- News Feed -->
    <section class="py-10 px-4 max-w-6xl mx-auto">
      <h3 class="text-2xl font-semibold mb-6">Latest News</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <NewsCard
          v-for="(item, index) in news"
          :key="index"
          :title="item.title"
          :summary="item.summary"
          :date="item.date"
        />
      </div>
    </section>

    <!-- Price Comparison -->
    <section class="bg-gray-50 py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-2xl font-semibold mb-6">Compare Exchange Prices</h3>
        <PriceComparison />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 px-4 text-center">
      <p class="text-sm">&copy; 2025 CryptoPulse. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const news = [
  {
    title: "Bitcoin Jumps 3% as ETF Approval Nears",
    summary:
      "Markets are reacting to rumors of ETF approval in the US. Analysts suggest momentum may continue.",
    date: "July 26, 2025",
  },
  {
    title: "Coinbase Integrates Layer 2 for Faster Trading",
    summary:
      "Coinbase now supports Layer 2 networks, making transactions faster and cheaper for users.",
    date: "July 26, 2025",
  },
  {
    title: "Crypto.com Launches New AI Trading Bot",
    summary:
      "Crypto.com's latest innovation allows AI-driven portfolio balancing in volatile markets.",
    date: "July 26, 2025",
  },
];
</script>
