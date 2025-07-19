<template>
    <h2 class="display-5 fw-semibold mb-3">{{ title }}</h2>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>