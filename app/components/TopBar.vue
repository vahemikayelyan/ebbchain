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
          />
          <!-- Button -->
          <button
            type="submit"
            class="flex items-center justify-center bg-carrot-500 hover:bg-carrot-600 text-white rounded-r-md transition px-4"
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
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Auth -->
      <div class="ml-auto flex items-center gap-3 relative">
        <template v-if="!loggedIn">
          <NuxtLink to="/login" class="auth-link">Log in</NuxtLink>
          <NuxtLink to="/join" class="btn-primary">Join now</NuxtLink>
        </template>

        <!-- Dropdown Menu -->
        <div
          v-else
          class="relative"
          v-click-outside="() => (dropdownOpen = false)"
        >
          <!-- Trigger -->
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              :src="user.avatar"
              alt="Profile"
              class="w-8 h-8 rounded-full border"
              referrerpolicy="no-referrer"
            />
            <span class="hidden sm:block font-medium">{{ user.name }}</span>
            <svg
              class="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Menu -->
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div class="py-2" v-on:click="() => (dropdownOpen = false)">
              <NuxtLink to="/profile" class="menu-item">Profile</NuxtLink>
              <NuxtLink to="/settings" class="menu-item">Settings</NuxtLink>
              <NuxtLink to="/wallet" class="menu-item">Wallet</NuxtLink>
              <NuxtLink to="/activity" class="menu-item">Activity</NuxtLink>
              <NuxtLink to="/saved-stores" class="menu-item"
                >Saved Stores</NuxtLink
              >
              <div class="border-t my-2"></div>
              <NuxtLink to="/help" class="menu-item">Help / Support</NuxtLink>
              <button
                @click="handleLogout"
                class="menu-item w-full font-semibold text-left"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, data, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");
const dropdownOpen = ref(false);

// Build user object from session
const user = computed(() => {
  const userData = data.value?.user;

  if (userData) {
    return {
      name: userData.name,
      avatar:
        userData.image ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          userData.name || "Guest"
        )}`,
    };
  }

  return {
    name: "Guest",
    avatar: "https://ui-avatars.com/api/?name=Guest",
  };
});

const handleLogout = async () => {
  await signOut({ callbackUrl: "/login" });
};
</script>

<style scoped>
.auth-link {
  @apply text-gray-600 hover:text-gray-800 font-medium hover:underline hover:underline-offset-4 transition;
}
.menu-item {
  @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100;
}
.menu-item.router-link-active {
  @apply bg-gray-100;
}
</style>
