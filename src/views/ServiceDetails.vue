<template>
  <PageBanner banner-text="Service Details" />

  <BContainer class="my-5">
    <BRow
      v-for="(service, idx) in services"
      :key="service.title"
      class="mb-4"
      :class="{ 'flex-row-reverse': idx % 2 === 1 && width > 767 }"
    >
      <BCol cols="12" md="5" class="d-flex justify-content-center py-0 px-md-0 px-3 mb-4">
        <div class="image-wrapper h-100">
          <BImg
            :src="service.image"
            :alt="service.title"
            fluid
            class="w-100 h-100 rounded-0"
            style="max-width: 500px; max-height: 320px; object-fit: cover"
          />
        </div>
      </BCol>
      <BCol cols="12" md="7" class="pt-0 pb-3 px-3 d-flex flex-column">
        <div class="d-flex align-items-center mb-3 gap-3">
          <MainTitle :title="service.title" />
        </div>
        <p class="mb-4">{{ service.description }}</p>

        <BRow>
          <BCol
            cols="12"
            md="6"
            class="mt-1 mb-2 fw-medium"
            v-for="(feature, fidx) in service.features"
            :key="fidx"
          >
            <i class="mdi mdi-checkbox-marked-outline checkbox--icon"></i>
            <span class="fs-6 ms-3">{{ feature }}</span>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import PageBanner from "../components/PageBanner.vue";
import MainTitle from "../components/headings/MainTitle.vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const services = [
  {
    title: "Cabinetry",
    image: "/Cabinetry.jpg",
    description:
      "Custom cabinets designed and built to fit your space and style. We use premium materials and expert craftsmanship for lasting beauty. Our cabinetry solutions are tailored to maximize storage, enhance aesthetics, and seamlessly blend with your existing decor, ensuring both functionality and elegance.",
    features: [
      "Tailored designs for kitchens & offices",
      "Wide range of finishes & hardware",
      "Space optimization solutions",
      "Durable, high-quality materials",
    ],
  },
  {
    title: "Structural Woodwork",
    image: "/StructuralWoodwork.jpg",
    description:
      "Expert structural woodwork for homes and businesses, including beams, staircases, and framing. Precision and safety guaranteed. Our team delivers robust and visually appealing wood structures that meet all building codes, adding character and strength to your property.",
    features: [
      "Custom beams & columns",
      "Staircase design & installation",
      "Framing & support structures",
      "Compliance with safety standards",
    ],
  },
  {
    title: "Renovations",
    image: "/Renovation.jpg",
    description:
      "Transform your interiors with our renovation services. We handle everything from planning to finishing touches for a seamless experience. Whether you seek a modern update or a classic restoration, our skilled professionals ensure your vision is realized with meticulous attention to detail and efficient project management.",
    features: [
      "Full-service project management",
      "Modernization & restoration",
      "Efficient timelines",
      "Attention to detail",
    ],
  },
  {
    title: "Custom Installations",
    image: "/CustomFurniture.jpg",
    description:
      "Unique custom installations including furniture, shelving, and decorative woodwork. Bring your vision to life with our expertise. We collaborate closely with you to create personalized pieces that reflect your style, offering creative solutions for both residential and commercial spaces.",
    features: [
      "Bespoke furniture pieces",
      "Creative shelving solutions",
      "Decorative accents",
      "Personalized designs",
    ],
  },
];
</script>

<style scoped>
.checkbox--icon {
  color: rgb(249, 149, 74);
}
</style>
