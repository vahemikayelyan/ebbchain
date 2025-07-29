// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const { data } = useAuth();
  const user = computed(() => data.value?.user);

  if (!user.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
