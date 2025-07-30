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
  try {
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    // 🔁 1. Extract `redirect` from current URL (or fallback)
    const urlParams = new URLSearchParams(window.location.search);
    const redirectAfterLogin = urlParams.get("redirect") || "/dashboard";

    // The popup will close to this route (handled internally)
    const callbackUrl = "/auth/popup-close";

    // 2. Get CSRF token
    const csrfRes = await fetch("/api/auth/csrf");
    const { csrfToken } = await csrfRes.json();

    // 3. Create form to sign in with Google
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(
      callbackUrl
    )}`;
    form.target = "GoogleLoginPopup";

    // Add CSRF token
    const csrfInput = document.createElement("input");
    csrfInput.type = "hidden";
    csrfInput.name = "csrfToken";
    csrfInput.value = csrfToken;
    form.appendChild(csrfInput);

    // Also include callbackUrl explicitly
    const cbInput = document.createElement("input");
    cbInput.type = "hidden";
    cbInput.name = "callbackUrl";
    cbInput.value = callbackUrl;
    form.appendChild(cbInput);

    // Append form
    document.body.appendChild(form);

    // 4. Open popup
    const popup = window.open(
      "",
      "GoogleLoginPopup",
      `width=${width},height=${height},top=${top},left=${left},popup=yes`
    );

    if (!popup) {
      alert("Popup blocked");
      return;
    }

    // 5. Submit the form into the popup
    form.submit();
    document.body.removeChild(form);

    // 6. Wait for auth success
    window.addEventListener("message", function onMessage(event) {
      if (event.origin !== window.location.origin) return;
      if (event.data === "auth-success") {
        window.removeEventListener("message", onMessage);

        // ✅ Redirect user to their original target
        window.location.href = redirectAfterLogin;
      }
    });
  } catch (err) {
    console.error("Google login failed:", err);
    alert("Login failed");
  }
};
</script>
