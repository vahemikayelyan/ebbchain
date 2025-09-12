<template>
  <section class="relative overflow-hidden bg-[beige]">
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-4 pb-4 md:pb-28 grid md:grid-cols-2 md:items-center"
    >
      <!-- LEFT column -->
      <div class="max-w-2xl">
        <div class="flex items-center gap-8 mb-4">
          <p
            class="text-sm font-medium px-3 py-1 rounded-full bg-carrot-100 text-carrot-800 border border-carrot-700"
          >
            Follow us on social networks
          </p>

          <!-- Social icons (sit under navbar, not overlapping) -->
          <div class="z-10 flex items-center gap-3">
            <SocialNetworks />
          </div>
        </div>

        <h1 class="font-extrabold leading-[0.95] tracking-tight text-gray-900">
          <span class="block text-[clamp(2.5rem,6vw,4.75rem)]"
            >Join us to earn</span
          >
          <span class="block text-[clamp(2.5rem,6vw,4.75rem)]"
            >cashback at
            <span class="text-carrot-600">300+ US stores</span></span
          >
        </h1>

        <p class="mt-6 text-lg text-gray-700">
          CarroCash makes saving feel effortless. Shop your favorite retailers,
          activate offers, and watch your balance grow—then cash out when you’re
          ready.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <NuxtLink to="/join" class="btn-primary">Join now</NuxtLink>
          <NuxtLink to="/how-it-works" class="btn-outline"
            >How it works</NuxtLink
          >
        </div>
      </div>

      <!-- RIGHT: Big SVG Cart -->
      <div class="relative md:-mt-2">
        <div
          class="absolute -top-6 -left-6 w-40 h-40 bg-carrot-100 rounded-full blur-2xl opacity-70"
        ></div>
        <svg
          viewBox="0 0 512 512"
          class="relative w-full h-auto drop-shadow"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="grad" x1="0" x2="1">
              <stop offset="0%" stop-color="#ff9144" />
              <stop offset="100%" stop-color="#fb6d14" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            d="M160 400a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm224 32a32 32 0 1 0-32-32 32 32 0 0 0 32 32ZM152.4 320h217.2a40 40 0 0 0 38.6-29l45.8-153.8A16 16 0 0 0 438.8 120H132l-8.4-32A32 32 0 0 0 92.3 64H48a16 16 0 0 0 0 32h32.8l58.7 223.4A40 40 0 0 0 152.4 320Z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
