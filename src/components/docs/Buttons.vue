<template>
  <BContainer>
    <MainTitle title="Buttons" class="mb-4" />
    <BRow>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Button Variants</h4>
          <p>
            BootstrapVue Next supports various button styles using different
            <code>variant</code> props. Common variants include:
            <code>primary</code>, <code>secondary</code>, <code>success</code>,
            <code>danger</code>, <code>warning</code>, <code>info</code>,
            <code>light</code>, and <code>dark</code>.
          </p>
          <CodeSnippet codeSnippet="<BButton variant='primary'>Primary</BButton>">
            <BButton variant="primary">Primary</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='secondary'>Secondary</BButton>">
            <BButton variant="secondary">Secondary</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='success'>Success</BButton>">
            <BButton variant="success">Success</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='danger'>Danger</BButton>">
            <BButton variant="danger">Danger</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='warning'>Warning</BButton>">
            <BButton variant="warning">Warning</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='info'>Info</BButton>">
            <BButton variant="info">Info</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='light'>Light</BButton>">
            <BButton variant="light">Light</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton variant='dark'>Dark</BButton>">
            <BButton variant="dark">Dark</BButton>
          </CodeSnippet>
        </BCard>
      </BCol>

      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Button Sizes</h4>
          <p>Use the <code>size</code> prop to set different button sizes.</p>
          <CodeSnippet codeSnippet="<BButton size='sm'>Small</BButton>">
            <BButton size="sm">Small</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton>Default</BButton>">
            <BButton>Default</BButton>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<BButton size='lg'>Large</BButton>">
            <BButton size="lg">Large</BButton>
          </CodeSnippet>
        </BCard>
      </BCol>

      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Disabled Buttons</h4>
          <p>Use the <code>disabled</code> prop to disable buttons.</p>
          <CodeSnippet codeSnippet="<BButton disabled variant='primary'>Disabled</BButton>">
            <BButton disabled variant="primary">Disabled</BButton>
          </CodeSnippet>
        </BCard>
      </BCol>

      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Button Tags</h4>
          <p>
            Buttons can be rendered as different HTML elements using the
            <code>tag</code> prop (e.g., <code>&lt;a&gt;</code> for links).
          </p>
          <CodeSnippet
            codeSnippet="<BButton tag='a' href='https://bootstrap-vue.org' target='_blank' variant='info'>
  Link Button
</BButton>"
          >
            <BButton
              tag="a"
              href="https://bootstrap-vue.org"
              target="_blank"
              variant="info"
            >
              Link Button
            </BButton>
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