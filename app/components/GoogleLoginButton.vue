<template>
  <button class="button" @click="loginWithGoogle">Continue with Google</button>
</template>

<script setup lang="ts">
const loginWithGoogle = async () => {
  try {
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const callbackUrl = "/auth/popup-close";

    // 1. Get CSRF token
    const csrfRes = await fetch("/api/auth/csrf");
    const { csrfToken } = await csrfRes.json();

    // 2. Create form
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(
      callbackUrl
    )}`;
    form.target = "GoogleLoginPopup";

    // 3. Add hidden inputs
    const csrfInput = document.createElement("input");
    csrfInput.type = "hidden";
    csrfInput.name = "csrfToken";
    csrfInput.value = csrfToken;
    form.appendChild(csrfInput);

    const cbInput = document.createElement("input");
    cbInput.type = "hidden";
    cbInput.name = "callbackUrl";
    cbInput.value = callbackUrl;
    form.appendChild(cbInput);

    document.body.appendChild(form);

    // ✅ 4. Open centered popup
    const popup = window.open(
      "", // URL is set by the form submission
      "GoogleLoginPopup",
      `width=${width},height=${height},top=${top},left=${left},popup=yes`
    );

    if (!popup) {
      alert("Popup blocked");
      return;
    }

    // 5. Submit form into popup
    form.submit();
    document.body.removeChild(form);

    // 6. Listen for postMessage
    window.addEventListener("message", function onMessage(event) {
      if (event.origin !== window.location.origin) return;
      if (event.data === "auth-success") {
        window.removeEventListener("message", onMessage);
        window.location.reload();
      }
    });
  } catch (err) {
    console.error("Google login failed:", err);
    alert("Login failed");
  }
};
</script>
