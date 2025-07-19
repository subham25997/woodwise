<!-- Reusable component that takes code snippets as props. It can be used to display code examples in documentation. The code snippets can be copied by clicking on the copy button -->
<template>
  <BContainer>
    <BRow>
      <BCol>
        <BCard body-class="p-2" class="mb-4 pb-3">
          <BTabs pills content-class="mt-3">
            <BTab title="Preview" active class="px-3">
              <slot />
            </BTab>
            <BTab title="Code" class="px-3">
              <pre><code>{{ codeSnippet }}</code></pre>
              <BButton variant="primary" size="sm" @click="copyCode">Copy</BButton>
            </BTab>
          </BTabs>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
<script lang="ts" setup>
const props = defineProps({
  codeSnippet: {
    type: String,
    required: true,
  },
});

const copyCode = () => {
  navigator.clipboard
    .writeText(props.codeSnippet)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying code: ", err);
    });
};
</script>
