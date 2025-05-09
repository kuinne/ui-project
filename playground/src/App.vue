<script setup lang="ts">
import { Button } from "@kuinne/ui-components";
import { formatDate } from "@kuinne/ui-utils";
</script>

<template>
  <div>
    <Button size="large">{{ formatDate(new Date(), "YYYY年MM月DD日") }}</Button>
  </div>
</template>

<style scoped></style>
