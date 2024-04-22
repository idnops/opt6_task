<template>
  <div class="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.07)] rounded-[10px]">
    <div class="p-[9px] pr-[15px] flex justify-end">
      <slot name="actions" />
    </div>
    <table class="w-full" ref="tableRef">
      <thead class="border-y border-[#eeeff1] text-left">
        <tr>
          <th
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px]"
          ></th>
          <th
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px]"
          ></th>
          <th
            v-for="th in headers"
            :key="th"
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px] select-none relative"
            @mouseup="handleResizeEnd"
          >
            {{ th }}
            <div
              class="absolute w-px right-0 top-0 cursor-col-resize hover:bg-[#bcbcbc]"
              :class="`h-[${tableHeight}px]`"
              @mousedown="handleResizeStart"
            ></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr, index) in data" :key="tr">
          <td class="flex justify-center">
            <button
              class="flex items-center justify-center py-[15px] px-[10px] gap-[5px]"
            >
              <img src="@/shared/assets/burger.svg" class="w-[11px] h-[12px]" />
              <span>{{ index + 1 }}</span>
            </button>
          </td>
          <td class="text-center">
            <button
              class="flex items-center justify-center py-[15px] px-[10px]"
            >
              <img src="@/shared/assets/dots.svg" class="h-[13px]" />
            </button>
          </td>
          <td v-for="td in tr" :key="td" class="px-[10px] py-[14px]">
            {{ td }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

defineProps<{
  data: string[];
  headers: string[];
}>();

const tableRef = ref<HTMLElement | null>(null);
const currentCol = ref<HTMLElement | null>(null);
const currentColWidth = ref(0);

const tableHeight = computed(() => {
  return tableRef.value?.offsetHeight;
});

const pageX = ref(0);

const handleResizeStart = (e: Event) => {
  (e.target as HTMLElement).classList.add("bg-[#bcbcbc]");
  currentCol.value = (e.target as HTMLElement).parentElement;
  currentCol.value?.classList.add("cursor-col-resize");
  currentColWidth.value = currentCol.value!.offsetWidth;
  pageX.value = (e as MouseEvent).pageX;
};
const handleResizeEnd = (e: Event) => {
  (e.target as HTMLElement).classList.remove("bg-[#bcbcbc]");
  currentCol.value = null;
};

onMounted(() => {
  document.addEventListener("mousemove", (e: MouseEvent) => {
    if (currentCol.value) {
      currentCol.value.style.width =
        currentColWidth.value + e.pageX - pageX.value + "px";
    }
  });
});
</script>

<style scoped></style>
