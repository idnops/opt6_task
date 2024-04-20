<template>
  <div class="flex flex-col w-full">
    <div class="flex gap-5">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="font-semibold"
        @click="toggleTab(tab)"
        :class="[tab === activeTab.title ? 'text-black' : 'text-[#1253a2]']"
      >
        {{ tab }}
      </button>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, useSlots } from "vue";
const slots = useSlots();

const tabs = computed(() => {
  return slots.default!().map((slot) => slot.props?.title);
});

const activeTab = reactive<{
  title: string | null;
}>({
  title: null,
});

provide("activeTab", activeTab);

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const toggleTab = (val: any) => {
  emit("update:modelValue", 5);
  activeTab.title = val;
};
</script>

<style scoped></style>
