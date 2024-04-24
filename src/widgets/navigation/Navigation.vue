import { title } from 'process';
<template>
  <div class="flex justify-between">
    <BaseTabGroup v-model="tabs">
      <template #actions>
        <TableSettingsMenu />
      </template>
      <BaseTabItem title="Общее"></BaseTabItem>
      <BaseTabItem title="Товары">
        <ProductTable />
      </BaseTabItem>
      <BaseTabItem title="Доп.Расходы"> </BaseTabItem>
    </BaseTabGroup>
  </div>
</template>

<script setup lang="ts">
import { TableSettingsMenu } from "@/features";
import { BaseTabGroup, BaseTabItem } from "@/shared/ui/base-tab-group";
import { ProductTable } from "@/features";
import { ref } from "vue";

const tabs = ref("Товары");
</script>

<style scoped></style>
