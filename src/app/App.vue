<template>
  <div class="p-16 flex gap-5">
    <BaseMenu
      :offset="6"
      :position="n % 2 === 0 ? 'bottom' : 'top'"
      :snap="n % 3 === 0 ? 'left' : 'right'"
      v-for="n in 6"
      :key="n"
    >
      <template #activator="{ toggle }"
        ><button @click="toggle" class="px-8 py-2 ring-1 rounded-full">
          button - {{ n }}
        </button>
      </template>
      <template v-slot:default>
        <div class="p-4 bg-neutral-800 w-64 text-white rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque?
        </div>
      </template>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { BaseMenu } from "@/shared/ui";
</script>

<style scoped></style>
