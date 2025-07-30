// middleware/guest.ts
export default defineNuxtRouteMiddleware(() => {
  const { status } = useAuth();

  if (status.value === "authenticated") {
    return navigateTo("/dashboard");
  }
});
