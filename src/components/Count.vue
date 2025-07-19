<template>
  <div ref="elementRef">
    <h2 class="display-5 fw-medium mb-1" style="color: rgb(249, 149, 74)">
      {{ animatedCount }}
    </h2>
    <p class="fw-medium fs-6 mb-1">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const animatedCount = ref(0);
const elementRef = ref<HTMLElement | null>(null);

const animateCount = () => {
  let start = 0;
  const duration = 1500; // Animation duration in ms
  const increment = props.count / (duration / 16); // Increment per frame (assuming ~60fps)

  const step = () => {
    start += increment;
    if (start >= props.count) {
      animatedCount.value = props.count;
    } else {
      animatedCount.value = Math.floor(start);
      requestAnimationFrame(step);
    }
  };

  step();
};

const handleScroll = () => {
  if (!elementRef.value) return;

  const rect = elementRef.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // Check if the element is partially visible
    animateCount();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger the check in case the component is already in view
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
