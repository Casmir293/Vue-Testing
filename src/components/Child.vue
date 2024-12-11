<template>
  <button @click="emit('greetings')">Click Me!</button>
</template>

<script setup lang="ts">
const emit = defineEmits(["greetings"]);
</script>
