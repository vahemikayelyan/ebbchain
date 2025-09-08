<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10"
  >
    <div
      class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-6"
    >
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Wallet-to-Wallet Transfer
      </h2>

      <p class="text-center text-sm text-gray-500 dark:text-gray-400">
        Status:
        <span
          v-if="isInitialized"
          :class="{
            'text-red-500': status === 'disconnected',
            'text-yellow-500': status === 'connecting',
            'text-green-500': status === 'connected',
          }"
        >
          {{ status }}
        </span>
      </p>

      <div v-if="accounts.length">
        <label
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Choose Wallet</label
        >
        <select
          v-model="selectedAddress"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option v-for="acc in accounts" :key="acc" :value="acc">
            {{ acc.slice(0, 6) }}...{{ acc.slice(-4) }}
          </option>
        </select>
      </div>

      <div>
        <label
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Recipient Address</label
        >
        <input
          v-model="recipient"
          type="text"
          placeholder="0x..."
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >Amount (ETH)</label
        >
        <input
          v-model="amount"
          type="number"
          min="0"
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div class="flex flex-col gap-3">
        <button
          v-if="status !== 'connected'"
          @click="connectWallet"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Connect Wallet
        </button>

        <button
          v-else
          @click="disconnectWallet"
          class="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg"
        >
          Disconnect Wallet
        </button>

        <button
          @click="handleSend"
          :disabled="
            !selectedAddress || !recipient || !amount || status !== 'connected'
          "
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
        >
          Send ETH
        </button>

        <a
          href="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#connected-sites"
          target="_blank"
          class="text-center text-xs text-blue-500 underline hover:text-blue-700"
        >
          Manually disconnect this site in MetaMask
        </a>
      </div>

      <p
        v-if="txHash"
        class="text-sm text-green-600 dark:text-green-400 text-center break-all"
      >
        Transaction sent:
        <a
          :href="`https://etherscan.io/tx/${txHash}`"
          target="_blank"
          class="underline hover:text-green-800"
        >
          {{ txHash }}
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
const recipient = ref("");
const amount = ref("");
const txHash = ref("");
const selectedAddress = ref<string>("");
const isInitialized = ref(false);

const {
  connectWallet,
  autoConnectWallet,
  disconnectWallet,
  sendETH,
  address: walletAddress,
  accounts,
  status,
} = useWallet();

onMounted(async () => {
  await autoConnectWallet();
  isInitialized.value = true;
});

watch(accounts, (acc) => {
  if (acc.length && !selectedAddress.value) {
    const firstAcc = acc[0];
    if (firstAcc) {
      selectedAddress.value = firstAcc;
    }
  }
});

const handleSend = async () => {
  try {
    const tx = await sendETH(recipient.value, amount.value);
    txHash.value = tx.hash;
  } catch (e) {
    alert(e instanceof Error ? e.message : "Error sending ETH");
  }
};
</script>
