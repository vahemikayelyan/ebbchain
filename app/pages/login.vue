<template>
  <main class="p-4">
    <div v-if="loggedIn">
      <p>Welcome, {{ user?.name }}!</p>
      <p>email: {{ user?.email }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <GoogleLoginButton />
      <p>You are not logged in.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data, status, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");
const user = computed(() => data.value?.user);

const logout = async () => {
  await signOut();
};
</script>
