<template>
  <nav class="w-full bg-carrot-500 sticky top-0 z-40 md:shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-2 md:py-0">
        <!-- Mobile toggle -->
        <button
          class="md:hidden text-white px-[.65rem] py-2 rounded border bg-carrot-600 hover:bg-carrot-700 transition-colors duration-200"
          @click="open = !open"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex text-white">
          <NuxtLink
            v-for="(item, idx) in menuItems"
            :to="item.to"
            :key="item.to"
            class="hover:bg-carrot-600 transition-colors duration-200 px-6 py-3"
            active-class="bg-carrot-600"
            :class="
              idx !== menuItems.length - 1 ? 'border-r border-white/50' : ''
            "
          >
            <span>{{ item.label }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="open"
      @click="open = false"
      class="md:hidden border-t border-carrot-300 text-white"
    >
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="block hover:bg-carrot-600 transition-colors duration-200 px-6 py-3"
        active-class="bg-carrot-600"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const open = ref(false);

const menuItems = [
  { label: "Categories", to: "/categories" },
  { label: "Partners", to: "/partners" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Trending Deals", to: "/deals" },
  { label: "Blog", to: "/blog" },
];
</script>
