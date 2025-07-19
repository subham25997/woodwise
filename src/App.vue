<template>
  <NavBar />
  <main style="overflow-x: hidden;">
    <router-view />
  </main>
  <LazyLoad>
    <section>
      <AppFooter />
    </section>
  </LazyLoad>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import LazyLoad from "./components/utility/LazyLoad.vue";
</script>
