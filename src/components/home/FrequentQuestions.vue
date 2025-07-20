<template>
  <BContainer class="py-5 px-3">
    <MiniTitle title="Frequently Asked Questions" />
    <MainTitle title="Your Questions, Our Answers" class="text-center" />

   <BRow class="mt-4 pt-2">
   <BCol class="ps-0" cols="12" lg="6">
    <BAccordion flush v-model="accordion">
      <BAccordionItem
      class="mb-2 border-0"
      v-for="(faq, index) in questions"
      :key="index"
      :id="'faq-' + index"
      >
      <template #title>
        {{ faq.question }}
      </template>
      <div class="text-muted">
        {{ faq.answer }}
      </div>
      </BAccordionItem>
    </BAccordion>
   </BCol>
   <BCol cols="12" lg="6">
   <BForm
      id="ContactForm"
      class="bg-white px-5 pt-5 pb-4 rounded-0"
      @submit.prevent
    >
      <BFormGroup class="mb-3" label="Name" label-for="name">
        <BFormInput class="input-field" size="lg" autocomplete="off" id="name" v-model="name" required />
      </BFormGroup>
      <BFormGroup class="mb-3" label="Email" label-for="email">
        <BFormInput class="input-field" size="lg" autocomplete="off" id="email" type="email" v-model="email" required />
      </BFormGroup>
      <BFormGroup class="mb-3" label="Question" label-for="question">
        <BFormTextarea class="input-field" autocomplete="off" id="question" v-model="question" rows="3" required />
      </BFormGroup>
      <div class="py-3">
      <BButton type="submit" variant="primary">POST YOUR QUESTION</BButton>
      </div>
    </BForm>
   </BCol>
   </BRow>
  </BContainer>
</template>
<script setup lang="ts">
import { ref } from "vue";
const accordion = ref('faq-0');
const name = ref("");
const email = ref("");
const question = ref("");
const questions = [
  {
    question: "What types of wood do you use for your projects?",
    answer:
      "We use a variety of high-quality woods, including oak, maple, and cherry, depending on the project requirements.",
  },
  {
    question: "Do you offer custom designs?",
    answer:
      "Yes, we specialize in custom designs tailored to your specific needs and preferences.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline varies based on the complexity of the project. We provide estimates during the consultation.",
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a one-year warranty on all our workmanship and materials.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Absolutely! We have a portfolio showcasing our past projects, which we can share during the consultation.",
  },
  {
    question: "Do you provide delivery and installation services?",
    answer:
      "Yes, we offer delivery and installation services for all our projects to ensure everything is set up correctly.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies based on the project scope and materials used. We provide detailed quotes after the initial consultation.",
  },
  
];
</script>
<style>

.input-field {
  padding: 12px 24px;
  min-height: 50px;
  border-radius: 0;
  border: none;
  background: rgba(248,249,250);
  transition: border-color 0.2s;
}

.input-field:focus {
  border-color: #8b5c2b;
  background: #fff;
  box-shadow: 0 0 0 2px #c8a97e;
}

.accordion-item .accordion-button {
  background-color: #fff !important;
}
</style>
