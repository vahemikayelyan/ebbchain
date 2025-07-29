<template>
  <button class="button" @click="loginWithGoogle">Continue with Google</button>
</template>

<script setup lang="ts">
const { signIn } = useAuth();

const loginWithGoogle = async () => {
  await signIn("google");
};
</script>
