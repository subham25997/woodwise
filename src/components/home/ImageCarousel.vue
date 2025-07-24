<template>
  <BCarousel controls indicators ride="carousel" :img-height="carouselImgHeight" :loop="true">
    <BCarouselSlide img-src="/carousel1.jpg" />
    <BCarouselSlide img-src="/carousel3.jpg" />
    <BCarouselSlide img-src="/carousel2.jpg" />
  </BCarousel>
  <div
    class="position-absolute top-0 start-0 bottom-0 w-100 d-flex justify-content-center align-items-center text-center text-white bg-translucent"
  >
    <div class="p-5">
      <MainTitle title="Custom Woodwork That Lasts a Lifetime" class="text-white" />
      <p class="fs-5 text-white mb-4">Expert carpentry for homes, offices &amp; more</p>
      <BButton variant="light" size="lg" to="/services">
        EXPLORE NOW
      </BButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import MainTitle from "../headings/MainTitle.vue";
const carouselImgHeight = computed(() => {
  return window.innerWidth < 768 ? "300px" : "625px";
});
</script>
<style scoped>
.bg-translucent {
  background-color: rgba(57, 36, 20, 0.5) !important;
}
</style>
