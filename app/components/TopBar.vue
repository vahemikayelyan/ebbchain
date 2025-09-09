<template>
  <div class="w-full border-b border-gray-100 bg-white">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4"
    >
      <!-- Logo / Brand -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l2.8 6h6.2l-5 3.9 1.9 6.1L12 15l-5.9 3 1.9-6.1-5-3.9h6.2L12 2z"
            fill="#fb6d14"
          />
        </svg>
        <span class="text-xl font-bold tracking-tight">CarroCash</span>
      </NuxtLink>

      <!-- Search (center on desktop) -->
      <div class="flex-1 hidden md:flex justify-center">
        <div class="relative w-full max-w-2xl">
          <input
            type="search"
            placeholder="Search stores, categories, coupons…"
            class="input-soft w-full pr-12"
            aria-label="Search"
          />
          <button
            class="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-carrot-500 text-white hover:bg-carrot-600"
          >
            <span class="sr-only">Search</span>
            🔎
          </button>
        </div>
      </div>

      <!-- Auth -->
      <div class="ml-auto flex items-center gap-3">
        <NuxtLink to="/login" class="text-sm text-gray-600 hover:text-gray-900"
          >Log in</NuxtLink
        >
        <NuxtLink to="/join" class="btn-primary text-sm">Join</NuxtLink>
      </div>
    </div>
  </div>
</template>
