<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between mr-[15px]">
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
      <slot name="actions" />
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

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const activeTab = reactive<{
  title: string | null;
}>({
  title: props.modelValue,
});

provide("activeTab", activeTab);

const toggleTab = (val: any) => {
  emit("update:modelValue", 5);
  activeTab.title = val;
};
</script>

<style scoped></style>
