export function useInView<T extends Element>(
  options?: IntersectionObserverInit
) {
  const el = ref<T | null>(null);
  const isInView = ref(false);

  let observer: IntersectionObserver | null = null;

  const stop = () => {
    if (observer && el.value) observer.unobserve(el.value);
    observer = null;
  };

  onMounted(() => {
    if (!el.value) return;
    observer = new IntersectionObserver(
      (entries) => {
        isInView.value = entries.some((e) => e.isIntersecting);
        if (isInView.value && observer && el.value)
          observer.unobserve(el.value);
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px", ...(options || {}) }
    );

    observer.observe(el.value);
  });

  onBeforeUnmount(stop);
  //useEventListener(window, "beforeunload", stop);

  return { el, isInView };
}
