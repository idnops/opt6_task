import { title } from 'process';
<template>
  <div class="flex">
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
  </div>
  <BaseMenu :offset="5" position="bottom" snap="right">
    <template #activator="{ toggle }">
      <button class="rounded-full size-5 bg-red-400" @click="toggle"></button>
    </template>
    <template #default>
      <div class="bg-neutral-200 p-4">
        <span>123</span>
      </div>
    </template>
  </BaseMenu>
</template>

<script setup lang="ts">
import { BaseMenu } from "@/shared/ui";
import { BaseTabGroup, BaseTabItem } from "@/shared/ui/base-tab-group";
import { ref } from "vue";

const tabs = ref("Общее");
</script>

<style scoped></style>
