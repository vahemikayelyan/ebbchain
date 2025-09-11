// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const { status } = useAuth();

  if (status.value !== "authenticated") {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`);
  }
});
