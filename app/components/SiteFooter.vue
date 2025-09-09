<template>
  <footer class="bg-[#fffaf6] border-t border-gray-100">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-4 gap-6"
    >
      <div>
        <div class="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fb6d14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2l2.8 6h6.2l-5 3.9 1.9 6.1L12 15l-5.9 3 1.9-6.1-5-3.9h6.2L12 2z"
            />
          </svg>
          <span class="font-semibold">CarroCash</span>
        </div>
        <p class="text-sm text-gray-600 mt-3 max-w-xs">
          A carrot‑colored affiliate cashback template for modern teams and solo
          creators.
        </p>
      </div>
      <div>
        <h4 class="font-semibold">Explore</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><NuxtLink to="/categories">Categories</NuxtLink></li>
          <li><NuxtLink to="/partners">Partners</NuxtLink></li>
          <li><NuxtLink to="/how-it-works">How It Works</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold">Company</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold">Legal</h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
          <li><NuxtLink to="/terms">Terms</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-100 text-center text-sm py-6">
      © {{ new Date().getFullYear() }} CarroCash. All rights reserved.
    </div>
  </footer>
</template>
