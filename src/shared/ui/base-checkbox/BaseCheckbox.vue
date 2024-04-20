<template>
  <div
    class="flex items-center gap-2 cursor-pointer select-none"
    @click="update"
  >
    <div
      class="size-4 rounded flex items-center justify-center ring-1 ring-neutral-200"
      :class="[isChecked ? 'bg-[#1253a2]' : 'bg-white']"
    >
      <img src="@/shared/assets/check.svg" class="size-[10px]" />
    </div>
    <span>
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps<{
  modelValue: any[];
  label: string;
  value: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const isChecked = ref(false);
onMounted(() => {
  isChecked.value = props.modelValue.includes(props.value);
});
const update = () => {
  isChecked.value = !isChecked.value;
  const updated = isChecked.value
    ? [...props.modelValue, props.value]
    : props.modelValue.filter((val) => val !== props.value);

  emit("update:modelValue", updated);
};
</script>

<style scoped></style>
