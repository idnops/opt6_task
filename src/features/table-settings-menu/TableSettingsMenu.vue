<template>
  <BaseMenu :offset="5" position="bottom" snap="right">
    <template #activator="{ toggle }">
      <button @click="toggle">
        <img src="@/shared/assets/cog.svg" alt="" />
      </button>
    </template>

    <template #default>
      <div
        class="rounded-[5px] overflow-hidden bg-white text-sm"
        style="
          box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
        "
      >
        <ul v-show="settings">
          <li
            class="hover:bg-[#eef3f8] py-[7px] px-[10px] cursor-pointer flex justify-between items-center"
            @click="settings = !settings"
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
        <div v-show="!settings">
          <ul>
            <li
              class="hover:bg-[#eef3f8] py-[7px] px-[10px] cursor-pointer flex justify-between items-center"
              @click="settings = !settings"
            >
              <img
                src="@/shared/assets/arrow-right.svg"
                alt=""
                class="mr-[9px] h-[9px] rotate-180"
              />
              <span> Отображение столбцов </span>
            </li>
          </ul>
          <div>
            <BaseCheckbox
              v-for="option in options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
              class="py-[7px] px-[10px]"
              v-model="selected"
            />
          </div>
        </div>
      </div>
    </template>
  </BaseMenu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BaseCheckbox, BaseMenu } from "@/shared/ui";

const settings = ref(true);
const selected = ref([]);
const options = ref([
  { label: "name", value: "name" },
  { label: "price", value: "price" },
  { label: "amount", value: "amount" },
]);
</script>

<style scoped></style>
