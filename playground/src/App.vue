<script setup lang="ts">
import { KButton } from "@kuinne/ui-components";
// import { Button } from "@kuinne/ui";
import { formatDate } from "@kuinne/ui-utils";
</script>

<template>
  <div>
    <k-button size="large">{{
      formatDate(new Date(), "YYYY年MM月DD日")
    }}</k-button>
  </div>
</template>

<style scoped></style>
