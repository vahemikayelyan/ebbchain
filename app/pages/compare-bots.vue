<template>
  <div class="bg-white min-h-screen text-gray-900">
    <section class="bg-gray-900 text-white py-10 px-4 text-center">
      <h1 class="text-4xl font-bold mb-2">Compare Crypto Trading Bots</h1>
      <p class="text-lg">
        Understand key differences between the most popular automated trading
        platforms.
      </p>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      <BotCard
        v-for="(bot, index) in bots"
        :key="index"
        :name="bot.name"
        :logo="bot.logo"
        :features="bot.features"
      />
    </section>
  </div>
</template>

<script setup>
import BotCard from "~/components/BotCard.vue";

const bots = [
  {
    name: "Binance Bot",
    logo: "/images/binance-logo.svg",
    features: {
      fees: "0.1%",
      assets: "300+",
      api: true,
      strategies: ["Grid Trading", "Futures", "Auto-Invest"],
    },
  },
  {
    name: "Coinbase Bot",
    logo: "/images/coinbase-logo.svg",
    features: {
      fees: "0.5%",
      assets: "150+",
      api: true,
      strategies: ["Spot Trading", "Dollar-Cost Averaging"],
    },
  },
  {
    name: "Crypto.com Bot",
    logo: "/images/crypto-com-logo.svg",
    features: {
      fees: "0.075%",
      assets: "250+",
      api: true,
      strategies: ["AI Bot", "Portfolio Rebalancing"],
    },
  },
];
</script>
