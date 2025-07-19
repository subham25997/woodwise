<template>
  <BContainer class="pb-5">
    <MiniTitle title="Pricing" />
    <MainTitle title="Affordable Plans for Everyone" class="text-center mb-4" />
    <BRow no-gutters>
      <BCol
        cols="12"
        md="3"
        sm="6"
        v-for="item in pricingItems"
        :key="item.title"
        class="p-2"
      >
        <BImg
          class="img-fluid"
          :src="item.image"
          :alt="item.image"
          style="height: 240px"
        />
        <h4 class="fs-4 fw-medium pt-3 text-center"><span class="text-muted me-1">{{ item.title }}</span> ({{ item.price }})</h4>
      </BCol>
    </BRow>
  </BContainer>
</template>
<script setup lang="ts">
import { BContainer, BRow } from "bootstrap-vue-next";
import MiniTitle from "../headings/MiniTitle.vue";
import MainTitle from "../headings/MainTitle.vue";

const pricingItems = [
  {
    title: "Kitchen Cabinetry",
    price: "$50.00",
    image: "/Cabinetry.jpg",
  },
  {
    title: "Meeting Set",
    price: "$20.00",
    image: "/office.jpg",
  },
  {
    title: "Sofa Set",
    price: "$20.00",
    image: "/Renovation.jpg",
  },
  {
    title: "Library Set",
    price: "$20.00",
    image: "/library.jpg",
  },
];
</script>
