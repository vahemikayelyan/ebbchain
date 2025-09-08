<template>
  <header class="bg-white shadow sticky top-0 z-30">
    <nav
      class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
    >
      <!-- Logo/Brand -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-1.5 font-bold text-indigo-700 text-xl"
      >
        <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
        <span>EbbChain</span>
      </NuxtLink>

      <!-- Hamburger (mobile) -->
      <button
        @click="showMenu = !showMenu"
        type="button"
        class="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        aria-label="Toggle menu"
      >
        <component
          :is="showMenu ? CloseIcon : MenuIcon"
          class="h-6 w-6 text-gray-700"
        />
      </button>

      <!-- Main Navigation -->
      <div
        :class="[
          'sm:flex sm:items-center sm:space-x-4',
          showMenu
            ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md rounded-b-md px-4 py-4 sm:static sm:flex-row sm:w-auto sm:shadow-none sm:rounded-none sm:px-0 sm:py-0'
            : 'hidden sm:flex',
        ]"
      >
        <!-- Static Links -->
        <NuxtLink
          to="/categories"
          class="nav-link"
          exact-active-class="active-link"
          @click="closeMenu"
          >Categories</NuxtLink
        >
        <NuxtLink
          to="/partners"
          class="nav-link"
          exact-active-class="active-link"
          @click="closeMenu"
          >Partners</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="nav-link"
          exact-active-class="active-link"
          @click="closeMenu"
          >About</NuxtLink
        >

        <!-- Auth Actions -->
        <NuxtLink
          v-if="!loggedIn"
          to="/signin"
          class="nav-link"
          @click="closeMenu"
        >
          <button
            type="button"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Sign in
          </button>
        </NuxtLink>
        <button
          v-else
          @click="handleLogout"
          class="text-red-600 hover:text-red-700 font-medium px-3 py-1 transition"
        >
          Sign out
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import CloseIcon from "./CloseIcon.vue";
import MenuIcon from "./MenuIcon.vue";

const { status, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");
const showMenu = ref(false);

const closeMenu = () => {
  showMenu.value = false;
};

const handleLogout = async () => {
  await signOut({ callbackUrl: "/signin" });
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-indigo-600 font-medium transition px-2 py-1 rounded-lg whitespace-nowrap;
}
.active-link {
  @apply text-indigo-600 underline underline-offset-4;
}
</style>
