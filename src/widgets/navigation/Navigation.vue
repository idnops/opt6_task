import { title } from 'process';
<template>
  <div class="flex justify-between">
    <BaseTabGroup v-model="tabs">
      <BaseTabItem title="Общее"></BaseTabItem>
      <BaseTabItem title="Товары">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
        incidunt! At exercitationem mollitia est, aut tempore nesciunt. Eligendi
        quo blanditiis nam tenetur cumque numquam placeat ullam, non, quis
        reiciendis doloribus autem, corporis temporibus obcaecati officiis
        culpa. Reiciendis fuga sit cupiditate.
      </BaseTabItem>
      <BaseTabItem title="Доп.Расходы"> </BaseTabItem>
    </BaseTabGroup>
    <TableSettingsMenu />
  </div>
</template>

<script setup lang="ts">
import { TableSettingsMenu } from "@/features";
import { BaseTabGroup, BaseTabItem } from "@/shared/ui/base-tab-group";
import { ref } from "vue";

const tabs = ref("Общее");
</script>

<style scoped></style>
