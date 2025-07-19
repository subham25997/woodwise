<template>
  <LazyLoad>
    <section>
      <PageBanner banner-text="Our Services" />
    </section>

    <section class="bg-light">
      <OurServices main-heading-color="#000" />
    </section>

    <section class="bg-light">
      <BContainer style="background: rgb(54, 39, 22)">
        <Testimonials />
      </BContainer>
      <div
        class="pb-5"
        style="background: rgb(54, 39, 22); border-top: thin solid #eee"
      >
        <HorizontalSlider text-color="#fff" />
      </div>
      <div class="bg-white">
        <AboutCount />
      </div>
    </section>

    <section class="pb-3" style="margin-top: -50px">
      <RecentProjects />
    </section>
  </LazyLoad>
</template>

<script setup lang="ts">
import PageBanner from "../components/PageBanner.vue";
import LazyLoad from "../components/utility/LazyLoad.vue";
import OurServices from "../components/home/OurServices.vue";
import RecentProjects from "../components/home/RecentProjects.vue";
import Testimonials from "../components/home/Testimonials.vue";
import AboutCount from "../components/about/AboutCount.vue";
import HorizontalSlider from "../components/home/HorizontalSlider.vue";
</script>

<style scoped></style>
