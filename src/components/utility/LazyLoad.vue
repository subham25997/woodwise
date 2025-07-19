<template>
  <div class="lazy-load">
    <transition-group name="fade" tag="div">
      <div
        v-for="(section, idx) in sections"
        :key="idx"
        :ref="(el) => setSectionRef(el, idx)"
        v-intersect="onIntersect(idx)"
        class="fade-section"
        :class="section.props?.class"
      >
        <component :is="section" />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, useSlots } from "vue";

const slots = useSlots();
const sections = slots.default ? slots.default() : [];
const visibleSections = ref(sections.map(() => false));
const sectionRefs = ref<HTMLElement[]>([]);

import type { ComponentPublicInstance } from "vue";

function setSectionRef(el: Element | ComponentPublicInstance | null, idx: number) {
  let domEl = el;
  // If it's a Vue component instance, get its root element
  if (el && !(el instanceof HTMLElement) && (el as ComponentPublicInstance).$el) {
    domEl = (el as ComponentPublicInstance).$el;
  }
  if (domEl instanceof HTMLElement) sectionRefs.value[idx] = domEl;
}

onMounted(async () => {
  await nextTick();
  sectionRefs.value.forEach((el, idx) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visibleSections.value[idx] = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });
});


// Intersection Observer directive
function onIntersect(idx: number) {
  console.log("Intersecting section:", idx);
  return (isVisible: boolean) => {
    if (isVisible) {
      visibleSections.value[idx] = true;
      const el = sectionRefs.value[idx];
      console.log("Element:", el);
      if (el && !el.classList.contains("fade-section-enter-active")) {
        el.classList.add("fade-section-enter-active");
        el.classList.add("visible");
        el.classList.remove("fade-section");
      }
    }
  };
}

// Register directive
import { useIntersectionObserver } from "@vueuse/core";
const vIntersect = {
  mounted(el: HTMLElement, binding: any) {
    useIntersectionObserver(
      el,
      ([entry]: IntersectionObserverEntry[]) => binding.value(entry.isIntersecting),
      { threshold: 0.2 }
    );
  },
};
defineExpose({ vIntersect });
</script>


<style>

.fade-section img,
.fade-section p,
.fade-section a,
.fade-section i,
.fade-section h1,
.fade-section h2,
.fade-section h3,
.fade-section h4,
.fade-section h5,
.fade-section h6
 {
  opacity: 0 !important;
  transform: scalex(1.05) !important;
  transition: opacity 1.5s cubic-bezier(.4,0,.2,1), transform 1.5s cubic-bezier(.4,0,.2,1);
}
.fade-section-enter-active img,
.fade-section-enter-active p,
.fade-section-enter-active a,
.fade-section-enter-active i,
.fade-section-enter-active h1,
.fade-section-enter-active h2,
.fade-section-enter-active h3,
.fade-section-enter-active h4,
.fade-section-enter-active h5,
.fade-section-enter-active h6,
.fade-section-leave-active img,
.fade-section-leave-active p,
.fade-section-leave-active a,
.fade-section-leave-active i,
.fade-section-leave-active h1,
.fade-section-leave-active h2,
.fade-section-leave-active h3,
.fade-section-leave-active h4,
.fade-section-leave-active h5,
.fade-section-leave-active h6 {
  transition: opacity 1.5s, transform 1.5s;
}
.fade-section.visible img,
.fade-section.visible p,
.fade-section.visible a,
.fade-section.visible i,
.fade-section.visible h1,
.fade-section.visible h2,
.fade-section.visible h3,
.fade-section.visible h4,
.fade-section.visible h5,
.fade-section.visible h6
 {
  opacity: 1;
  transform: scalex(1);
}
</style>
