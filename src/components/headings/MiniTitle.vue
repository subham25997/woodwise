<template>
  <div class="text-center mb-3">
    <div class="d-inline-flex align-items-center">
      <div
        :style="{ background: color }"
        class="mini-title--before flex-shrink-1 flex-grow-0"
      ></div>
      <h5
        class="fs-6 text-center mb-0 mini--title flex-shrink-1 flex-grow-0"
        :style="{ color: color }"
      >
        {{ title }}
      </h5>
      <div
        :style="{ background: color }"
        class="mini-title--after flex-shrink-1 flex-grow-0"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    default: "rgb(249, 149, 74)",
  },
});
</script>
<style scoped lang="scss">
.mini-title--after,
.mini-title--before {
  width: 50px;
  height: 2px;
  display: inline-block;
  margin: 0 8px;
}
</style>
