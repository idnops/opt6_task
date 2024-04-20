<template>
  <div
    class="flex items-center gap-2 cursor-pointer select-none"
    @click="update"
  >
    <div
      class="size-4 rounded flex items-center justify-center ring-1 ring-neutral-200"
      :class="[checked ? 'bg-[#1253a2]' : 'bg-white']"
    >
      <img src="@/shared/assets/check.svg" class="size-[10px]" />
    </div>
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  modelValue: any[];
  label: string;
  value: any;
}>();

const emit = defineEmits(["update:modelValue"]);
const checked = ref(false);

const update = () => {
  checked.value = !checked.value;

  const updated = checked.value
    ? [...props.modelValue, props.value]
    : props.modelValue.filter((val) => val !== props.value);

  emit("update:modelValue", updated);
};
</script>

<style scoped></style>
