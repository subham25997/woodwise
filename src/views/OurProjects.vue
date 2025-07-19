<template>
  <LazyLoad>
    <section>
      <PageBanner banner-text="Recent Projects" />
    </section>
    <section>
      <RecentProjects />
    </section>
    <section>
      <Pricing />
    </section>
    <section class="pt-4 pb-3" style="background-color: rgb(54, 39, 22)">
      <Testimonials />
    </section>
    <section>
      <WorkingProcess theme="light" />
    </section>
  </LazyLoad>
</template>
<script setup lang="ts">
import PageBanner from "../components/PageBanner.vue";
import RecentProjects from "../components/projects/RecentProjects.vue";
import LazyLoad from "../components/utility/LazyLoad.vue";
import Testimonials from "../components/home/Testimonials.vue";
import WorkingProcess from "../components/about/WorkingProcess.vue";
import Pricing from "../components/projects/Pricing.vue";
</script>
