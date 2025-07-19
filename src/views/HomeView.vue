<template>
  <LazyLoad>
    <section fluid class="bg-white p-0 position-relative">
      <ImageCarousel />
    </section>
    <section fluid class="p-0 position-relative">
      <AboutUs />
    </section>

    <section fluid class="p-0 position-relative" style="background: rgb(104, 73, 40)">
      <OurServices />
    </section>
    <section fluid class="p-0 position-relative">
      <RecentProjects />
    </section>
    <section fluid class="p-0 position-relative">
      <ChooseUs />
    </section>
    <section
      fluid
      class="p-0 position-relative"
    >
      <HorizontalSlider />
    </section>
    <section fluid class="p-0 position-relative" style="background-color: #362716">
      <Testimonials />
    </section>
    <section fluid class="bg-light">
      <WorkingProcess theme="light" />
    </section>
    <section fluid class="p-0 position-relative">
      <OurTeam />
    </section>
    <section fluid class="p-0 position-relative bg-light">
      <FrequentQuestions />
    </section>
  </LazyLoad>
</template>
<script setup lang="ts">
import AboutUs from "../components/home/AboutUs.vue";
import ChooseUs from "../components/home/ChooseUs.vue";
import HorizontalSlider from "../components/home/HorizontalSlider.vue";
import ImageCarousel from "../components/home/ImageCarousel.vue";
import OurServices from "../components/home/OurServices.vue";
import OurTeam from "../components/home/OurTeam.vue";
import Testimonials from "../components/home/Testimonials.vue";
import RecentProjects from "../components/home/RecentProjects.vue";
import FrequentQuestions from "../components/home/FrequentQuestions.vue";
import WorkingProcess from "../components/about/WorkingProcess.vue";
</script>
