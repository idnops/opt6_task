<template>
  <div class="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.07)] rounded-[10px]">
    <div class="p-[9px] pr-[15px] flex justify-end">
      <slot name="actions" />
    </div>
    <table class="w-full" ref="tableRef">
      <thead class="border-y border-[#eeeff1] text-left">
        <tr>
          <th
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px] w-20"
          ></th>
          <th
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px] w-20"
          ></th>
          <th
            v-for="th in headers"
            :key="th"
            class="first:border-none last:border-none border-x border-collapse border-[#eeeff1] py-[14px] px-[10px] select-none relative"
            @mouseup="end"
          >
            {{ th }}
            <div
              class="absolute w-1 right-0 top-0 cursor-col-resize border-r border-transparent hover:border-[#bcbcbc]"
              :style="{ height: tableHeight + 'px' }"
              @mousedown="start"
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
import { onMounted, onUpdated, ref } from "vue";
import { useTableResize } from "@/shared/lib";

defineProps<{
  data: string[];
  headers: string[];
}>();

const tableRef = ref<HTMLTableElement | null>(null);
const tableHeight = ref<number | undefined>(0);
const { start, end } = useTableResize(tableRef);

onUpdated(() => {
  tableHeight.value = tableRef.value?.offsetHeight;
});

onMounted(() => {
  tableHeight.value = tableRef.value?.offsetHeight;
});
</script>

<style scoped></style>
