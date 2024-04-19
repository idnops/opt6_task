<template>
  <div>
    <slot v-if="isActive" />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";

const activeTab = inject<{
  title: string | null;
}>("activeTab");
const isActive = computed(() => {
  return props.title === activeTab?.title;
});

const props = defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
