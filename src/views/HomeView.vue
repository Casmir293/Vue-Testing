<script setup lang="ts">
import Child from "@/components/Child.vue";
import { ref } from "vue";

const msg = ref("Hello World!");

const updateGreetings = () => {
  msg.value = "I'm learning Vitest!";
};
</script>

<template>
  <main>
    <h1>{{ msg }}</h1>
    <Child @greetings="updateGreetings" />
  </main>
</template>
