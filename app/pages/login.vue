<template>
  <main class="bg-gray-100 flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <!-- Logo -->
      <div class="flex justify-center"><BrandIcon /></div>

      <div class="space-y-6 mt-3">
        <!-- Heading -->
        <h1 class="text-center text-2xl font-semibold text-gray-900">
          Sign in to CarroCash
        </h1>

        <!-- Email/Password Form -->
        <form @submit.prevent="handleSignIn" class="space-y-4">
          <div>
            <label class="block text-md text-gray-700 mb-1" for="email"
              >Email</label
            >
            <input
              id="email"
              type="email"
              v-model="email"
              required
              class="w-full input-soft"
              placeholder="you@example.com"
              autocomplete="email"
            />
          </div>
          <div>
            <label class="block text-md text-gray-700 mb-1" for="password"
              >Password</label
            >
            <input
              id="password"
              type="password"
              v-model="password"
              required
              class="w-full input-soft"
              placeholder="Your password"
            />
          </div>
          <button type="submit" class="w-full btn-primary">Sign In</button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4">
          <hr class="flex-1 border-gray-300" />
          <span class="text-gray-400 text-sm">or</span>
          <hr class="flex-1 border-gray-300" />
        </div>

        <!-- OAuth Buttons -->
        <div class="space-y-3">
          <GoogleLoginButton />
          <button
            @click="signInWithGitHub"
            class="w-full flex items-center justify-center border border-gray-300 text-gray-800 bg-white py-2 rounded-md hover:bg-gray-50 transition"
          >
            <svg
              class="w-5 h-5 mr-2 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.59 2.35 1.13 2.92.86.1-.67.35-1.13.63-1.39-2.22-.26-4.56-1.15-4.56-5.13 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.8 1.07a9.6 9.6 0 0 1 5.1 0c1.95-1.35 2.8-1.07 2.8-1.07.55 1.4.2 2.44.1 2.7.64.73 1.03 1.66 1.03 2.8 0 4-2.35 4.87-4.58 5.13.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.5A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              />
            </svg>
            Continue with GitHub
          </button>
        </div>

        <!-- Footer -->
        <p class="text-center text-sm text-gray-600 font-semibold">
          New to EbbChain?
          <NuxtLink to="/join" class="text-carrot-600 hover:underline"
            >Create an account</NuxtLink
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
});

const email = ref("");
const password = ref("");

const handleSignIn = () => {
  // handle sign in logic (email/password)
};

const signInWithGitHub = () => {
  // handle GitHub OAuth sign in
};
</script>
