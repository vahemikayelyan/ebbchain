<template>
  <div class="flex items-center justify-center h-screen bg-white">
    <svg
      class="animate-spin h-6 w-6 text-gray-500 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <p class="text-gray-600">Finishing sign-in…</p>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  if (window.opener) {
    // Notify parent window that auth succeeded
    window.opener.postMessage("auth-success", window.location.origin);
    window.close();
  } else {
    // Fallback: if opened directly, just go home
    window.location.href = "/";
  }
});
</script>
