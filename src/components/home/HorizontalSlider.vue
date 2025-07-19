<template>
  <div class="slider-container">
    <div class="slider-content">
      <h5 class="slider-item" :style="{ color: textColor }">
        We have all types of timbers for your needs:
      </h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Teak</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Oak</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Mahogany</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Walnut</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Cherry</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Maple</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Birch</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Ash</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Cedar</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Pine</h5>
      <i class="mdi mdi-tree mdi-24px ms-3 bullet-icon"></i>
      <h5 class="slider-item" :style="{ color: textColor }">Spruce</h5>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  textColor: {
    type: String,
    default: "#000000dd",
  },
});
</script>
<style lang="scss" scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  padding: 30px 0 30px;
}

.slider-content {
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll 20s linear infinite;
  transform: translateX(0);
}

.slider-item {
  display: inline-block;
  padding: 0 20px 0 16px;
  font-size: 24px;
  font-weight: 500 !important;
}

.bullet-icon {
  color: rgb(249, 149, 74);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    transform: translateX(-100%);
    opacity: 0;
  }
  51% {
    transform: translateX(100%);
    opacity: 0;
  }
  52% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
