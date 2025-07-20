<template>
  <div class="container py-5">
    <MiniTitle title="TESTIMONIALS" />
    <MainTitle
      class="text-center mb-4 text-white"
      title="The Craft Speaks — So Do Our Clients."
    />

    <div class="position-relative">
      <!-- MDI Icon Buttons -->
      <div
        class="d-flex justify-content-between mb-3 position-absolute top-50 translate-middle-y"
        style="z-index: 100; left: 25px; right: 25px"
      >
        <BButton variant="light" class="rounded-5 slider--button" id="swiper-prev">
          <i class="mdi mdi-arrow-left mdi-24px"></i>
        </BButton>
        <BButton variant="light" class="rounded-5 slider--button" id="swiper-next">
          <i class="mdi mdi-arrow-right mdi-24px"></i>
        </BButton>
      </div>

      <!-- Swiper -->
      <Swiper
        :modules="[Pagination, Navigation]"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="{
          nextEl: '#swiper-next',
          prevEl: '#swiper-prev',
        }"
        class="testimonial-swiper"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <BCard
            class="text-center pb-5 pt-4"
            style="min-height: 230px; border: none; background-color: #362716"
          >
            <BCardText class="fst-italic text-white">
              "{{ testimonial.message }}"
            </BCardText>
            <h5 class="mt-3 mb-0 text-white">{{ testimonial.name }}</h5>
            <small class="text-white">{{ testimonial.title }}</small>
          </BCard>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import MiniTitle from "../headings/MiniTitle.vue";
import MainTitle from "../headings/MainTitle.vue";

const testimonials = [
  {
    name: "Amit Sharma",
    title: "Homeowner",
    message: "WoodWise transformed my living room with beautiful custom shelves.",
  },
  {
    name: "Riya Verma",
    title: "Interior Designer",
    message: "Their craftsmanship and attention to detail are unmatched.",
  },
  {
    name: "John D.",
    title: "Cafe Owner",
    message: "They built the rustic vibe I was aiming for – excellent work!",
  },
  {
    name: "Priya Singh",
    title: "Homeowner",
    message: "The kitchen remodel exceeded my expectations. Highly recommend!",
  },
  {
    name: "Rahul Mehta",
    title: "Contractor",
    message: "Reliable and skilled team. Always a pleasure to work with them.",
  },
  {
    name: "Sneha Kapoor",
    title: "Architect",
    message: "Their custom woodwork adds a unique touch to every project.",
  },
  {
    name: "Vikram Joshi",
    title: "Homeowner",
    message: "The deck they built is perfect for summer evenings.",
  },
  {
    name: "Anjali Rao",
    title: "Real Estate Agent",
    message: "Their renovations significantly increased the property value.",
  },
  {
    name: "Karan Gupta",
    title: "Business Owner",
    message: "They created a stunning display for my store. Very happy!",
  },
];
</script>

<style lang="scss">
.testimonial-swiper {
  margin: auto;

  .swiper-pagination-bullet {
    background: #ccc;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }
}

.slider--button {
  &:disabled {
    opacity: 0.5 !important;
  }

  i {
    color: #dfdfdf;
  }

  &:hover i {
    color: #362716;
  }
}
</style>
