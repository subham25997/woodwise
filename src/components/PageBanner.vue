<template>
  <div class="position-relative w-100">
    <BImg src="/banner.jpg" class="w-100" alt="Banner Image" />
    <div class="banner--text w-100">
      <h1 class="text-white displays-1 mb-0">{{ bannerText }}</h1>
      <i class="mdi mdi-arrow-down text-white" style="font-size: 2rem"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  bannerText: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss">
.banner--text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
}
</style>
