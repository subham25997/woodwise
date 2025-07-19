<template>
  <BContainer class="py-5 ps-3 ps-lg-0 pe-3" fluid>
    <MiniTitle title="Our Story" />
    <MainTitle
      title="From Humble Beginnings to Sustainable Solutions"
      class="text-center mb-5"
    />
    <BRow>
      <!-- Card Column -->
      <BCol
        cols="12"
        lg="6"
        class="mt-3 mt-md-0 mb-lg-0 mb-3"
      >
        <BTransition name="fade-slide-left" appear>
          <BCard class="border-0 shadow-0 h-100 story-card ps-5 pe-3 pt-lg-4" body-class="p-0">
            <BListGroup flush class="my-3">
              <BListGroupItem
                v-for="(item, i) in storyItems"
                :key="i"
                class="d-flex align-items-start border-0 bg-transparent px-3 py-3"
              >
                <span
                  class="d-flex align-items-center justify-content-center icon-circle me-4 mt-2 mt-md-1 flex-shrink-0 bg-light"
                >
                  <span class="fs-4">{{ item.icon }}</span>
                </span>
                <span class="text-white">
                  <strong class="text-white d-block">{{ item.title }}</strong>
                  {{ item.text }}
                </span>
              </BListGroupItem>
            </BListGroup>
          </BCard>
        </BTransition>
      </BCol>

      <!-- Image Column -->
      <BCol
        cols="12"
        lg="6"
        class="position-relative mb-4 mb-md-0 h-100"
      >
        <div class="d-inline-block position-relative w-100 our-story-img-wrapper">
          <BImg src="/OurStory.jpg" alt="Our Story" class="w-100 our-story-img" />
          <!-- Badge Desktop -->
          <div class="position-absolute d-flex our-story-badge">
            <span
              class="d-flex flex-column align-items-center p-4 text-white bg-brown border border-2 border-white badge-no-radius"
            >
              <i class="bi bi-tree-fill me-2"></i> Rooted Since
              <h1 class="display-4">2010</h1>
            </span>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import MiniTitle from "../headings/MiniTitle.vue";
import MainTitle from "../headings/MainTitle.vue";

const storyItems = [
  {
    icon: "🌱",
    title: "Reclaimed Wood:",
    text: "We give new life to reclaimed wood, reducing waste and honoring tradition.",
  },
  {
    icon: "🪵",
    title: "Handcrafted:",
    text: "Each creation is made with care and respect for the environment.",
  },
  {
    icon: "🤝",
    title: "Trust & Quality:",
    text: "We value transparency, quality, and long-lasting relationships.",
  },
  {
    icon: "🌳",
    title: "Sustainability:",
    text: "Committed to practices that benefit people and the planet.",
  },
  {
    icon: "✨",
    title: "Innovation:",
    text: "Creativity drives us to craft unique, meaningful pieces.",
  },
];
</script>

<style scoped>
.story-card {
  background: #8b5c2a;
  border-radius: 0 !important;
}

.icon-circle {
  width: 44px;
  height: 44px;
  background: #fff;
  color: rgb(139, 92, 42);
  font-size: 1.5rem;
  border-radius: 50%;
}

.bg-brown {
  background: rgb(139, 92, 42) !important;
}

.our-story-img-wrapper {
  top: 0;
}

.our-story-img {
  border-radius: 0 !important;
}

.our-story-badge {
  bottom: -2px;
  left: -2px;
  z-index: 2;
}

.badge-no-radius {
  border-radius: 0 !important;
}

@media (max-width: 767.98px) {
  .story-card {
    margin-bottom: 1.5rem;
  }
}

</style>
