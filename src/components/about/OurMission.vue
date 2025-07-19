<template>
  <BContainer>
    <BRow>
      <BCol cols="12" lg="7" class="d-flex flex-column mb-4 pt-4 pt-md-0">
        <MiniTitle title="Our Mission" />
        <MainTitle
          title="Dedicated to excellence and innovation"
          class="mb-4 text-start w-100"
        />
        <p class="mb-4 text-justify">
          Our mission is to provide the best service to our customers. We strive to exceed
          expectations and deliver exceptional value. We are dedicated to continuous
          improvement and innovation, ensuring that we stay ahead of the curve in our
          industry. Our team is passionate about what we do, and we are committed to
          building long-lasting relationships with our customers.
        </p>

        <BRow>
          <BCol cols="12" md="6" class="mt-1 mb-2 fw-medium">
            <i class="mdi mdi-checkbox-marked-outline checkbox--icon"></i>
            <span class="fs-6 ms-3">Best Service to Customers</span>
          </BCol>
          <BCol cols="12" md="6" class="mt-1 mb-2 fw-medium">
            <i class="mdi mdi-checkbox-marked-outline checkbox--icon"></i>
            <span class="fs-6 ms-3">Continuous Innovation</span>
          </BCol>
          <BCol cols="12" md="6" class="mt-1 mb-2 fw-medium">
            <i class="mdi mdi-checkbox-marked-outline checkbox--icon"></i>
            <span class="fs-6 ms-3">Exceeding Expectations</span>
          </BCol>
          <BCol cols="12" md="6" class="mt-1 mb-2 fw-medium">
            <i class="mdi mdi-checkbox-marked-outline checkbox--icon"></i>
            <span class="fs-6 ms-3">Strong Relationships</span>
          </BCol>
        </BRow>
      </BCol>
      <BCol cols="12" lg="5" class="d-flex justify-content-center mt-2">
        <img
          src="/mission.jpg"
          alt="Our Mission"
          class="rounded-0"
          style="width: 100%; max-width: 600px"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>
<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";
</script>
<style lang="scss" scoped>
.checkbox--icon {
  color: rgb(249, 149, 74);
}
</style>
