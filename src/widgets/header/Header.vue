<template>
  <h1 class="text-[30px] text-black font-semibold">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
</script>
