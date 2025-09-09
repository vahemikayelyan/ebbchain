<template>
  <div
    class="card p-4 flex flex-col items-center text-center hover:shadow-lg transition group"
  >
    <div class="h-12 flex items-center">
      <img
        :src="store.logo"
        :alt="store.name + ' logo'"
        class="h-8 w-auto"
        @error="fallback"
      />
    </div>
    <div class="mt-3 font-medium">{{ store.name }}</div>
    <p class="text-xs text-gray-500 mt-1">{{ store.blurb }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  store: { name: string; logo: string; blurb: string };
}>();

function fallback(e: Event) {
  const t = e.target as HTMLImageElement;
  t.replaceWith(
    Object.assign(document.createElement("div"), {
      className: "text-sm font-semibold text-gray-700",
      innerText: props.store.name,
    })
  );
}
</script>
