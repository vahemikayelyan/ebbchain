<template>
  <div class="w-full border-b border-gray-100 bg-white">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4"
    >
      <!-- Logo / Brand -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <BrandIcon />
        <span class="text-xl font-bold tracking-tight">CarroCash</span>
      </NuxtLink>

      <!-- Search (center on desktop) -->
      <div class="flex-1 hidden md:flex justify-center">
        <div class="flex w-full max-w-lg mx-auto">
          <!-- Input -->
          <input
            type="text"
            placeholder="Search stores, categories, coupons…"
            class="!rounded-r-none !border-r-0 input-soft w-full"
            fdprocessedid="3h0vs9"
          />

          <!-- Button -->
          <button
            type="submit"
            class="flex items-center justify-center bg-carrot-500 hover:bg-carrot-600 text-white rounded-r-md transition px-4"
            fdprocessedid="tsjed"
          >
            <!-- Search Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Auth -->
      <div class="ml-auto flex items-center gap-3">
        <template v-if="!loggedIn">
          <NuxtLink to="/login" class="auth-link"> Log in </NuxtLink>
          <NuxtLink to="/join" class="btn-primary">Join now</NuxtLink>
        </template>
        <button v-else @click="handleLogout" class="auth-link">Sign out</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");

const handleLogout = async () => {
  await signOut({ callbackUrl: "/login" });
};
</script>

<style scoped>
.auth-link {
  @apply text-gray-600 hover:text-gray-800 font-medium hover:underline hover:underline-offset-4 transition;
}
</style>
