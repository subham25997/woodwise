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
          class="img-fluid w-100"
          :src="item.image"
          :alt="item.image"
          style="height: 240px"
        />
        <div class="bg-light p-3">
          <h4 class="fs-5 fw-medium">
            <span class="me-1">{{ item.title }}</span> ({{ item.price }})
          </h4>
          <p class="text-justify text-caption text-muted mb-2">{{ item.description }}</p>
        </div>
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Meeting Set",
    price: "$20.00",
    image: "/office.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sofa Set",
    price: "$20.00",
    image: "/Renovation.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Library Set",
    price: "$20.00",
    image: "/library.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];
</script>
