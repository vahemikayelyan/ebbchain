<template>
  <footer class="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-5">
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-gray-500 dark:text-gray-400 text-sm"
    >
      <!-- Left: Copyright + Legal -->
      <div
        class="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1"
      >
        <p>© {{ year }} EbbChain. All rights reserved.</p>
        <NuxtLink to="/terms" class="hover:underline">Terms</NuxtLink>
        <NuxtLink to="/privacy" class="hover:underline">Privacy</NuxtLink>
      </div>

      <!-- Right: Social Icons -->
      <div class="flex items-center justify-center sm:justify-end space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-indigo-600 transition"
          aria-label="Twitter"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.34 8.35 8.35 0 0 1-2.68 1.02 4.2 4.2 0 0 0-7.16 3.83A11.92 11.92 0 0 1 3.1 4.64a4.2 4.2 0 0 0 1.3 5.61A4.2 4.2 0 0 1 2.8 9v.05a4.2 4.2 0 0 0 3.36 4.12 4.2 4.2 0 0 1-1.89.07 4.2 4.2 0 0 0 3.92 2.91A8.44 8.44 0 0 1 2 19.54 11.9 11.9 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.7 0-.18-.01-.35-.02-.53A8.18 8.18 0 0 0 22.46 6Z"
            />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-indigo-600 transition"
          aria-label="GitHub"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.59 2.35 1.13 2.92.86.1-.67.35-1.13.63-1.39-2.22-.26-4.56-1.15-4.56-5.13 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.07a9.6 9.6 0 0 1 5.1 0c1.95-1.35 2.8-1.07 2.8-1.07.55 1.4.2 2.44.1 2.7.64.73 1.03 1.66 1.03 2.8 0 4-2.35 4.87-4.58 5.13.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.5A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            />
          </svg>
        </a>
        <a
          href="mailto:hello@cryptoaffiliates.com"
          class="hover:text-indigo-600 transition"
          aria-label="Email"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.4-.5a.5.5 0 0 0-.4.5v.511l8 5.422 8-5.422V4.5a.5.5 0 0 0-.5-.5H4.4ZM20 7.089l-7.45 5.047a1 1 0 0 1-1.1 0L4 7.09V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.089Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
