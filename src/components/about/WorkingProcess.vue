<template>
  <BContainer class="py-5">
    <MiniTitle title="Our Process" />
    <MainTitle
      class="text-center mb-5"
      :class="theme === 'light' ? '' : 'text-white'"
      title="Crafting Excellence, Step by Step"
    />
    <BRow>
      <BCol
        cols="12"
        md="6"
        lg="3"
        v-for="(step, index) in workingProcess"
        :key="step.title"
        class="mb-4"
      >
        <BCard class="working-process--card">
          <BAvatar class="bg-white working-process--step-avatar" :style="{ border: theme === 'light' ? '4px solid #684928' : 'none'}" size="60">
            <h1 class="working-process--step-number mb-0">{{ index + 1 }}</h1>
          </BAvatar>
          <h5 class="working-process--main-title fs-5 text-white text-center mb-3">
            {{ step.title }}
          </h5>
          <p class="working-process--description text-light text-center">
            {{ step.description }}
          </p>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";

const { theme } = defineProps<{
  theme?: "light" | "dark";
}>();

const workingProcess = [
  {
    title: "Wood Selection",
    description:
      "We carefully choose premium quality wood, ensuring durability and a flawless finish for every project.",
  },
  {
    title: "Precision Cutting",
    description:
      "Our skilled craftsmen cut the wood to exact specifications, maintaining accuracy and minimizing waste.",
  },
  {
    title: "Expert Assembly",
    description:
      "Each piece is meticulously assembled using advanced techniques to ensure strength and stability.",
  },
  {
    title: "Finishing & Quality Check",
    description:
      "We apply fine finishes and conduct thorough inspections to guarantee a beautiful, long-lasting product.",
  },
];
</script>

<style>
.working-process--card {
  border: 2px solid #fff;
  min-height: 220px;
  background: rgb(104, 73, 40);
  padding-top: 30px;
  margin-top: 20px;
}

.working-process--step-number {
  color: #684928;
  display: flex;
  align-items: center;
  justify-content: center;
}

.working-process--step-avatar {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
}
</style>
