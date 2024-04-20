<template>
  <BaseTable :headers="headers" :data="data">
    <template #actions>
      <TableSettingsMenu />
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import { BaseTable } from "@/shared/ui";
import { TableSettingsMenu } from "@/features";
import { ref } from "vue";

const headers = ref([
  "Наименование единицы",
  "Цена",
  "Кол-во",
  "Название товара",
  "Итого",
]);

const data = ref([
  {
    unit: "product name 1",
    price: "10",
    amount: "14",
    unitname: "product name",
    total: "12",
  },
  {
    unit: "product name 2",
    price: "10",
    amount: "15",
    name: "product name",
    total: "12",
  },
  {
    unit: "product name 3",
    price: "10",
    amount: "17",
    name: "product name",
    total: "12",
  },
]);
</script>

<style scoped></style>
