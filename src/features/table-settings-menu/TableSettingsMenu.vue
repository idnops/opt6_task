<template>
  <BaseMenu :offset="5" position="bottom" snap="right">
    <template #activator="{ toggle }">
      <button @click="toggle">
        <img src="@/shared/assets/cog.svg" alt="" />
      </button>
    </template>

    <template #default>
      <div
        class="rounded-[5px] overflow-hidden bg-white"
        style="
          box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
        "
      >
        <ul class="text-sm">
          <li
            class="hover:bg-[#eef3f8] py-[7px] px-[10px] cursor-pointer flex justify-between items-center"
          >
            <span> Отображение столбцов </span>
            <img
              src="@/shared/assets/arrow-right.svg"
              alt=""
              class="ml-[9px] h-[9px]"
            />
          </li>
          <li
            class="hover:bg-[#eef3f8] py-[7px] px-[10px] cursor-pointer flex justify-between items-center"
          >
            <span> Порядок столбцов </span>
            <img
              src="@/shared/assets/arrow-right.svg"
              alt=""
              class="ml-[9px] h-[9px]"
            />
          </li>
        </ul>
      </div>
    </template>
  </BaseMenu>
</template>

<script setup lang="ts">
import { BaseMenu } from "@/shared/ui";
</script>

<style scoped></style>
