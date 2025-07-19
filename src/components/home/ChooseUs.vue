<template>
  <BRow class="mx-0">
    <BCol cols="12" md="5" class="px-0 d-none d-lg-block">
      <BImg
        src="/WhyToChoose.jpg"
        height="450"
        class="left--img w-100"
      />
    </BCol>
    <BCol cols="12" lg="7" class="p-4 px-lg-5">
      <MiniTitle title="WHY CHOOSE US?" class="text-center" />
      <MainTitle
        title="Craftsmanship You Can Trust"
        class="my-4 text-center"
      />

      <BRow class="text-start">
        <BCol cols="12" md="6" class="pt-3">
          <div class="d-flex">
            <div class="d-flex align-items-start pt-3 flex-shrink-1">
              <BImg src="/experience.png" height="50" class="mx-auto" />
            </div>

            <div class="p-3 pb-2">
              <h5 class="fs-5 fw-medium">Experienced and Passionate</h5>
              <p class="mb-2">We deliver tailored carpentry solutions.</p>
            </div>
          </div>
        </BCol>
        <BCol cols="12" md="6" class="pt-3">
        
          <div class="d-flex">
            <div class="d-flex align-items-start pt-3 flex-shrink-1">
              <BImg src="/skilled.png" height="50" class="mx-auto" />
            </div>

            <div class="p-3 pb-2">
              <h5 class="fs-5 fw-medium">Skilled Craftsmen</h5>
              <p class="mb-2">Using premium materials for lasting results.</p>
            </div>
          </div>
        </BCol>
        <BCol cols="12" md="6" class="pt-3">
          <div class="d-flex">
            <div class="d-flex align-items-start pt-3 flex-shrink-1">
              <BImg src="/attention.png" height="50" class="mx-auto" />
            </div>

            <div class="p-3 pb-2">
            <h5 class="fs-5 fw-medium">Attention to Detail</h5>
            <p class="mb-2">From custom furniture to renovations, we focus on every detail.</p>
          </div>
          </div>
          
        </BCol>
        <BCol cols="12" md="6" class="pt-3">
         <div class="d-flex">
            <div class="d-flex align-items-start pt-3 flex-shrink-1">
              <BImg src="/experience.png" height="50" class="mx-auto" />
            </div>

            <div class="p-3 pb-2">
            <h5 class="fs-5 fw-medium">Quality You Can See</h5>
            <p class="mb-2">Choose us and see the difference quality makes.</p>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCol>
  </BRow>
</template>
<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";
</script>

