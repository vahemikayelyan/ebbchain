<template>
  <nav class="w-full bg-orange-500 sticky top-0 z-40 md:shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Mobile toggle -->
        <button
          class="md:hidden text-white px-3 py-2 rounded border bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
          @click="open = !open"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex text-white">
          <NuxtLink
            v-for="(item, idx) in menuItems"
            :to="item.to"
            :key="item.to"
            class="hover:bg-orange-600 transition-colors duration-200 px-6 py-3"
            active-class="bg-orange-600"
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
    <div v-if="open" class="md:hidden border-t border-orange-700 text-white">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="block hover:bg-orange-600 transition-colors duration-200 px-6 py-2"
        active-class="bg-orange-600"
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
