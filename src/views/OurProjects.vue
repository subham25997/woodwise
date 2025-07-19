<template>
  <LazyLoad>
    <section>
      <PageBanner banner-text="Recent Projects" />
    </section>
    <section class="pb-3">
      <RecentProjects />
    </section>
    <section class="pt-4 pb-3" style="background-color: rgb(54, 39, 22);">
      <Testimonials />
    </section>
    <section>
      <WorkingProcess theme="light"/>
    </section>
  </LazyLoad>
</template>
<script setup lang="ts">
import PageBanner from "../components/PageBanner.vue";
import RecentProjects from "../components/home/RecentProjects.vue";
import LazyLoad from "../components/utility/LazyLoad.vue";
import Testimonials from "../components/home/Testimonials.vue";
import WorkingProcess from "../components/about/WorkingProcess.vue";
</script>
