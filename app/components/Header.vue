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

      <!-- Hamburger button -->
      <button
        @click="showMenu = !showMenu"
        type="button"
        class="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!showMenu"
          class="h-6 w-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navbar Links -->
      <div
        :class="[
          'sm:flex sm:flex-row sm:items-center sm:space-x-3 flex-wrap',
          showMenu
            ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md rounded-b-md px-4 py-4 sm:static sm:w-auto sm:shadow-none sm:rounded-none sm:px-0 sm:py-0'
            : 'hidden',
        ]"
      >
        <NuxtLink
          to="/"
          class="nav-link"
          exact-active-class="active-link"
          @click="showMenu = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="nav-link"
          exact-active-class="active-link"
          @click="showMenu = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/compare-bots"
          class="nav-link"
          exact-active-class="active-link"
          @click="showMenu = false"
        >
          Compare Bots
        </NuxtLink>
        <NuxtLink
          to="/partners"
          class="nav-link"
          exact-active-class="active-link"
          @click="showMenu = false"
        >
          Partners
        </NuxtLink>
        <NuxtLink
          to="/signin"
          class="nav-link"
          exact-active-class="active-link"
          @click="showMenu = false"
        >
          <button
            type="button"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Sign in
          </button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showMenu = ref(false);
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-indigo-600 font-medium transition px-1 py-1 rounded-lg whitespace-nowrap;
}

.active-link {
  @apply text-indigo-600 underline underline-offset-4;
}
</style>
