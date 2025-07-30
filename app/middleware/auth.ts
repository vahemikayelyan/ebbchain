// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const { status } = useAuth();

  if (status.value !== "authenticated") {
    return navigateTo(`/signin?redirect=${encodeURIComponent(to.fullPath)}`);
  }
});
