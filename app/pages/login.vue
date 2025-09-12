<template>
  <main class="bg-gray-100 flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <!-- Logo -->
      <div class="flex justify-center"><BrandIcon /></div>

      <div class="space-y-5 mt-3">
        <!-- Heading -->
        <h1 class="text-center text-2xl font-semibold text-gray-900">
          Sign in to CarroCash
        </h1>

        <!-- Email/Password Form -->
        <form @submit.prevent="handleSignIn" class="space-y-4">
          <!-- Email -->
          <div>
            <label class="block text-md text-gray-700 mb-1" for="email"
              >Email</label
            >
            <input
              id="email"
              type="email"
              v-model="email"
              class="w-full input-soft"
              placeholder="you@example.com"
              autocomplete="email"
              required
            />
            <p v-if="errors.email" class="text-xs text-red-600 mt-1">
              {{ errors.email }}
            </p>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-md text-gray-700 mb-1" for="password"
              >Password</label
            >
            <div class="relative">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="w-full input-soft pr-10"
                placeholder="Your password"
                required
              />

              <!-- Toggle Button -->
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                tabindex="-1"
              >
                <svg
                  v-if="showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.978 9.978 0 012.169-3.592m2.83-2.83A9.978 9.978 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.978 9.978 0 01-4.22 5.408M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3l18 18"
                  />
                </svg>
              </button>
            </div>

            <p v-if="errors.password" class="text-xs text-red-600 mt-1">
              {{ errors.password }}
            </p>
          </div>

          <!-- API error -->
          <p v-if="errors.api" class="text-xs text-red-600">
            {{ errors.api }}
          </p>

          <!-- Sign In Button -->
          <button type="submit" class="w-full btn-primary">
            <span v-if="isLoading" class="flex items-center">
              <svg
                class="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Signing In...
            </span>
            <span v-else>Sign In</span>
          </button>

          <!-- Forgot Password -->
          <div class="text-center">
            <NuxtLink
              class="text-sm font-semibold text-gray-600 hover:underline"
            >
              Forgot password?
            </NuxtLink>
          </div>
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
          New to CarroCash?
          <NuxtLink to="/join" class="text-carrot-600 hover:underline"
            >Join now</NuxtLink
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
const { signIn } = useAuth();

definePageMeta({
  middleware: "guest",
});

const email = ref("");
const password = ref("");
const isLoading = ref(false);
const showPassword = ref(false);

const errors = reactive({
  email: "",
  password: "",
  api: "",
});

const validateEmail = (val) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(val);
};

const validatePassword = (val) => {
  return val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val);
};

const handleSignIn = async () => {
  if (isLoading.value) return;

  errors.email = "";
  errors.password = "";
  errors.api = "";

  if (!validateEmail(email.value)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!validatePassword(password.value)) {
    errors.password =
      "Password must be at least 8 characters, include one uppercase letter and one number.";
  }

  if (errors.email || errors.password) {
    return;
  }

  try {
    isLoading.value = true;

    const result = await signIn("credentials", {
      email: email.value,
      password: password.value,
      redirect: false, // 👈 prevents unwanted redirect on failure
    });

    if (result?.error) {
      errors.api = "Invalid email or password.";
      return; // stay on login
    }

    // ✅ Login successful
    await navigateTo("/dashboard");
  } catch (err) {
    console.error("Login error:", err);
    errors.api = "Something went wrong. Please try again.";
  } finally {
    isLoading.value = false; // 👈 always reset spinner
  }
};
</script>
