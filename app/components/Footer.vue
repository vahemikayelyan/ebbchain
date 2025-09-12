<template>
  <footer>
    <!-- Top Section -->
    <section class="bg-carrot-100">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      >
        <!-- Column 1: Subscription -->
        <div class="text-center md:text-left">
          <h2 class="text-lg font-bold uppercase">Stay in loop</h2>
          <form class="mt-2 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="input-soft w-full"
            />
            <button type="submit" class="btn-primary">Subscribe</button>
          </form>
        </div>

        <!-- Column 2: Email -->
        <address class="flex items-center justify-center space-x-3 not-italic">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 4h20v16H2V4zm10 7l8-5H4l8 5z" />
            </svg>
          </div>
          <div class="text-left">
            <p class="text-xs uppercase text-gray-600 font-medium">Email Us</p>
            <a
              href="mailto:sales@sdbullion.com"
              class="text-base font-semibold text-gray-900 hover:text-carrot-600"
            >
              sales@sdbullion.com
            </a>
          </div>
        </address>

        <!-- Column 3: Social Icons -->
        <div class="flex justify-center md:justify-start space-x-4">
          <SocialNetworks />
        </div>
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="bg-[#fffaf6]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Links Grid -->
        <div
          class="border-t border-gray-100 py-10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2">
              <BrandIcon />
              <span class="font-semibold">CarroCash</span>
            </div>
            <p class="text-sm text-gray-600 mt-3 max-w-xs">
              A carrot-colored affiliate cashback template for modern teams and
              solo creators.
            </p>
          </div>

          <!-- Menus -->
          <div v-for="section in footerLinks" :key="section.title">
            <h4 class="font-semibold">{{ section.title }}</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li v-for="link in section.links" :key="link.text">
                <NuxtLink :to="link.href">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-100 text-center text-sm py-6">
          © {{ new Date().getFullYear() }} CarroCash. All rights reserved.
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
const footerLinks = [
  {
    title: "Explore",
    links: [
      { text: "Categories", href: "/categories" },
      { text: "Stores", href: "/stores" },
      { text: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy", href: "/privacy" },
      { text: "Terms", href: "/terms" },
      { text: "Help", href: "/help" },
    ],
  },
];
</script>
