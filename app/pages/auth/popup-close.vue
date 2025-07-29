<template>
  <p>Logging you in...</p>
</template>

<script setup lang="ts">
onMounted(() => {
  if (window.opener) {
    window.opener.postMessage("auth-success", window.location.origin);
    window.close();
  }
});
</script>
