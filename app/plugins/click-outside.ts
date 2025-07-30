const clickOutsideDirective = {
  mounted(el: HTMLElement, binding: any) {
    if (!import.meta.client) return;

    const handler = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };

    (el as any).__clickOutsideHandler__ = handler;
    document.addEventListener("click", handler);
  },

  unmounted(el: HTMLElement) {
    if (!import.meta.client) return;

    const handler = (el as any).__clickOutsideHandler__;
    if (handler) {
      document.removeEventListener("click", handler);
      delete (el as any).__clickOutsideHandler__;
    }
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", clickOutsideDirective);
});
