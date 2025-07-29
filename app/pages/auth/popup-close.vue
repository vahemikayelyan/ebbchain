<template>
  <div class="text-center p-10">
    <p class="text-lg">You are now logged in.</p>
    <p>This window will close shortly...</p>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  // Notify opener
  if (window.opener) {
    window.opener.postMessage({ type: "auth-success" }, window.location.origin);
    window.close();
  }
});
</script>
