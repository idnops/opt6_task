<template>
  <div class="relative w-max" ref="menu">
    <slot name="activator" :toggle="toggleMenu"></slot>

    <div class="absolute z-50" :style="menuPosition">
      <slot name="default" v-if="isOpen"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { randomNumber } from "@/shared/lib";
import { BaseMenuType } from "./types";

const { offset, position, snap } = defineProps<BaseMenuType>();

const menu = ref<HTMLElement | null>(null);
const menuOffsetWidth = ref(0);
const isOpen = ref(false);
const menuId = randomNumber(1000, 4000);

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};

const handleOutsideClick = (e: Event): void => {
  if (!(e.target as HTMLElement).closest(`#menu-${menuId}`)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  menuOffsetWidth.value = (menu.value as HTMLElement).offsetWidth;
  (menu.value as HTMLElement).setAttribute("id", `menu-${menuId.toString()}`);
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});

const menuPosition = computed(() => {
  return {
    [position === "bottom" ? "top" : "bottom"]: `calc(100% + ${offset}px)`,
    [snap]: `calc(100% - ${menuOffsetWidth.value}px`,
  };
});
</script>

<style scoped></style>
