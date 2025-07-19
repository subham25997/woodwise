<template>
  <BContainer class="about-count--container">
    <BRow>
      <BCol
        class="mb-4"
        v-for="(count, index) in counts"
        :key="index"
        lg="3"
        md="6"
        sm="12"
      >
        <BCard class="shadow border-0 rounded-0 px-3" >
          <div class="d-flex justify-space-between w-100">
            <div class="flex-grow-1">
              <Count :count="count.number" :title="count.text" />
            </div>
            <i class="mdi fs-2 opacity-75 position-absolute end-0 top-0 mx-4 my-3" :class="count.icon"></i>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
<script setup lang="ts">
import Count from "../Count.vue";
const counts = [
  { number: 500, text: "Projects Completed", icon: "mdi-checkbox-marked-circle-outline" },
  { number: 150, text: "Happy Clients", icon: "mdi-account-multiple-check" },
  { number: 50, text: "Awards Won", icon: "mdi-medal" },
  { number: 100, text: "Team Members", icon: "mdi-account-group " },
];
</script>
<style scoped lang="scss">
.about-count--container {
  padding: 0 16px;
  position: relative;
  top: -40px;
}

@media screen and (max-width: 769px) {
  .about-count--container {
    top: 15px;
  }
}
</style>
