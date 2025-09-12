<template>
  <button
    @click="signInWithGoogle"
    class="w-full flex items-center justify-center border border-gray-300 text-gray-800 bg-white py-2 rounded-md hover:bg-gray-50 transition"
  >
    <img src="/assets/icons/google.svg" alt="Google" class="w-5 h-5 mr-2" />
    Continue with Google
  </button>
</template>

<script setup lang="ts">
const signInWithGoogle = async () => {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  // Where to send the user after login success
  const redirectAfterLogin = "/dashboard";
  const callbackUrl = "/auth/popup-close";

  // Get CSRF token from Nuxt Auth
  const csrfRes = await fetch("/api/auth/csrf");
  const { csrfToken } = await csrfRes.json();

  // Build form
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(
    callbackUrl
  )}`;
  form.target = "GoogleLoginPopup";

  // Hidden CSRF field
  const csrfInput = document.createElement("input");
  csrfInput.type = "hidden";
  csrfInput.name = "csrfToken";
  csrfInput.value = csrfToken;
  form.appendChild(csrfInput);

  // Hidden callback field
  const cbInput = document.createElement("input");
  cbInput.type = "hidden";
  cbInput.name = "callbackUrl";
  cbInput.value = callbackUrl;
  form.appendChild(cbInput);

  document.body.appendChild(form);

  // Open popup
  const popup = window.open(
    "",
    "GoogleLoginPopup",
    `width=${width},height=${height},top=${top},left=${left},popup=yes`
  );

  if (!popup) {
    alert("Popup blocked. Please allow popups for this site.");
    return;
  }

  // Submit into popup
  form.submit();
  document.body.removeChild(form);

  // Listen for message from popup-close.vue
  window.addEventListener("message", function onMessage(event) {
    if (event.origin !== window.location.origin) return;
    if (event.data === "auth-success") {
      window.removeEventListener("message", onMessage);
      window.location.href = redirectAfterLogin; // ✅ redirect main app
    }
  });
};
</script>
