<template>
  <BContainer :style="{ minHeight: minHeight }" class="pt-5 pb-6">
    <BRow class="pb-3">
      <BCol cols="12" class="text-center mb-4">
        <MiniTitle title="ABOUT WOODWISE" />
      </BCol>
      <BCol cols="12" md="6" lg="7">
        <MainTitle title="Crafting Quality Woodwork for Over 15 Years" />
        <p>
          At WoodWise, we bring over 15 years of passion and precision to every project we
          undertake. From elegant handcrafted furniture to functional kitchen cabinets and
          durable structural woodwork, our focus has always been on delivering lasting
          quality. We take pride in our craftsmanship, using only the finest materials and
          techniques to ensure that every piece we create is not just a product, but a work
          of art. 
        </p>
        <BRow>
          <BCol cols="6" md="6" class="mb-2">
            <Count title="Projects Completed" :count="500" />
          </BCol>
          <BCol cols="6" md="6" class="mb-2">
            <Count title="Happy Customers" :count="150" />
          </BCol>
        </BRow>
        <div class="pt-4">
          <BButton class="fs-6 mb-4" variant="primary" size="lg" to="/about">
            KNOW MORE
          </BButton>
        </div>
      </BCol>
      <BCol
        cols="12"
        md="6"
        lg="5"
        class="d-flex justify-content-center position-relative px-4"
      >
        <BImg src="/carpenter.jpg" height="190px" class="mb-3 crossed-img-1" />
        <BImg src="/carpentry.jpg" height="190px" class="mt-3 mb-5 crossed-img-2" />
      </BCol>
    </BRow>
  </BContainer>
</template>
<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";

import { ref, onMounted, onUnmounted } from "vue";

const minHeight = ref("550px");

const updateMinHeight = () => {
  if (window.innerWidth < 370) {
    minHeight.value = "1095px";
  } else if (window.innerWidth < 460) {
    minHeight.value = "1000px";
  } else if (window.innerWidth < 768) {
    minHeight.value = "950px";
  } else {
    minHeight.value = "550px";
  }
};

onMounted(() => {
  updateMinHeight();
  window.addEventListener("resize", updateMinHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMinHeight);
});
</script>
<style scoped lang="scss">
.crossed-img-1 {
  width: 60%;
  position: relative;
  top: 15px;
  left: 10%;
  z-index: 2;
  border: 1px solid #fff;
}

.crossed-img-2 {
  width: 60%;
  position: relative;
  top: 130px;
  left: -10%;
  z-index: 1;
  border: 1px solid #fff;
}
</style>
