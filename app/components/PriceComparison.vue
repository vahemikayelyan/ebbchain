<template>
  <div class="overflow-x-auto bg-white shadow rounded-lg">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-100 text-left">
        <tr>
          <th class="px-4 py-2">Exchange</th>
          <th class="px-4 py-2">BTC Price</th>
          <th class="px-4 py-2">ETH Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(exchange, index) in prices" :key="index" class="border-t">
          <td class="px-4 py-3 font-medium">{{ exchange.name }}</td>
          <td class="px-4 py-3">${{ exchange.btc.toLocaleString() }}</td>
          <td class="px-4 py-3">${{ exchange.eth.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const prices = [
  { name: "Binance", btc: 62850, eth: 3525 },
  { name: "Coinbase", btc: 62930, eth: 3532 },
  { name: "Crypto.com", btc: 62700, eth: 3510 },
];
</script>
