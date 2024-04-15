<template>
  <div class="flex">
    <div>
      <Sidebar />
    </div>

    <div class="p-[25px]">
      <Header title="Проведение ТО и мелкий ремонт" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";
</script>

<style scoped></style>
