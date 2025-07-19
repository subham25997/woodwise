<template>
  <BContainer>
    <MainTitle title="Colors" class="mb-4" />
    <BRow>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Color Usage</h4>
          WoodWise uses BootstrapVue Next color utility classes based on Bootstrap 5.
          These classes can be applied to text, backgrounds, borders, and more.
          <p>Below are some examples of how to apply different color utilities:</p>
        </BCard>
      </BCol>

      <!-- Text Colors -->
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Text Colors</h2>
          <CodeSnippet codeSnippet="<p class='text-primary'>Primary text</p>">
            <p class="text-primary">Primary text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-secondary'>Secondary text</p>">
            <p class="text-secondary">Secondary text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-success'>Success text</p>">
            <p class="text-success">Success text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-danger'>Danger text</p>">
            <p class="text-danger">Danger text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-warning'>Warning text</p>">
            <p class="text-warning">Warning text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-info'>Info text</p>">
            <p class="text-info">Info text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-light bg-dark p-2'>Light text</p>">
            <p class="text-light bg-dark p-2">Light text</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-dark'>Dark text</p>">
            <p class="text-dark">Dark text</p>
          </CodeSnippet>
        </BCard>
      </BCol>

      <!-- Background Colors -->
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Background Colors</h2>
          <CodeSnippet codeSnippet="<div class='bg-primary text-white p-2'>Primary background</div>">
            <div class="bg-primary text-white p-2">Primary background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-secondary text-white p-2'>Secondary background</div>">
            <div class="bg-secondary text-white p-2">Secondary background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-success text-white p-2'>Success background</div>">
            <div class="bg-success text-white p-2">Success background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-danger text-white p-2'>Danger background</div>">
            <div class="bg-danger text-white p-2">Danger background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-warning text-dark p-2'>Warning background</div>">
            <div class="bg-warning text-dark p-2">Warning background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-info text-white p-2'>Info background</div>">
            <div class="bg-info text-white p-2">Info background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-light text-dark p-2'>Light background</div>">
            <div class="bg-light text-dark p-2">Light background</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='bg-dark text-white p-2'>Dark background</div>">
            <div class="bg-dark text-white p-2">Dark background</div>
          </CodeSnippet>
        </BCard>
      </BCol>

      <!-- Border Colors -->
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Border Colors</h2>
          <CodeSnippet codeSnippet="<div class='border border-primary p-2'>Primary border</div>">
            <div class="border border-primary p-2">Primary border</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='border border-success p-2'>Success border</div>">
            <div class="border border-success p-2">Success border</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='border border-danger p-2'>Danger border</div>">
            <div class="border border-danger p-2">Danger border</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='border border-warning p-2'>Warning border</div>">
            <div class="border border-warning p-2">Warning border</div>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<div class='border border-info p-2'>Info border</div>">
            <div class="border border-info p-2">Info border</div>
          </CodeSnippet>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
<script lang="ts" setup>
import MainTitle from "../headings/MainTitle.vue";
import CodeSnippet from "./CodeSnippet.vue";
</script>