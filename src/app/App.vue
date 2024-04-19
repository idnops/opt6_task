<template>
  <div class="flex">
    <div>
      <Sidebar />
    </div>

    <div class="flex flex-col p-[25px]">
      <div class="mb-[25px]">
        <Header title="Проведение ТО и мелкий ремонт" />
      </div>

      <Navigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";
import { Navigation } from "@/widgets";
</script>

<style scoped></style>
