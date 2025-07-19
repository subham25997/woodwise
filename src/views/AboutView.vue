<template>
  <LazyLoad>
    <section>
      <PageBanner banner-text="About Us" />
    </section>
    <section>
      <AboutCount />
    </section>
    <section class="pb-4">
      <OurMission />
    </section>
    <section style="background: rgb(104, 73, 40)">
      <WorkingProcess />
    </section>
    <section>
      <OurStory />
    </section>
  </LazyLoad>
</template>
<script setup lang="ts">

import PageBanner from "../components/PageBanner.vue";
import AboutCount from "../components/about/AboutCount.vue";
import OurMission from "../components/about/OurMission.vue";
import OurStory from "../components/about/OurStory.vue";
import WorkingProcess from "../components/about/WorkingProcess.vue";
import LazyLoad from "../components/utility/LazyLoad.vue";
</script>
