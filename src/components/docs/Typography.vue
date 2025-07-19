<template>
  <BContainer>
    <MainTitle title="Typography" class="mb-4" />
    <BRow>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h4>Headings</h4>
          WoodWise uses BootstrapVue Next for typography. There are two main heading
          components in <q class="fw-bold">src/components/headings</q> folder:
          <ul>
            <li><code>&lt;MainTitle&gt;</code> for main titles</li>
            <li><code>&lt;MiniTitle&gt;</code> for subheadings</li>
          </ul>
          <p>Example usage:</p>
          <CodeSnippet codeSnippet="<MainTitle title='Your Title' />">
            <MainTitle title="Your Title" />
          </CodeSnippet>
          <CodeSnippet codeSnippet="<MiniTitle title='Your Subtitle' />">
            <MiniTitle title="Your Subtitle" />
          </CodeSnippet>

          <p>
            <strong>Note: </strong>WoodWise uses BootstrapVue Next and so you can use
            bootstrap vue next classes to have various text sizes and font weights.
          </p>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Bootstrap Typography</h2>
          <p class="text-muted px-4">Larger headings using display classes.</p>
          <div>
            <CodeSnippet codeSnippet="<h1 class='display-1'>Display 1</h1>">
              <h1 class="display-1">Display 1</h1>
            </CodeSnippet>
            <CodeSnippet codeSnippet="<h1 class='display-2'>Display 2</h1>">
              <h1 class="display-2">Display 2</h1>
            </CodeSnippet>
            <CodeSnippet codeSnippet="<h1 class='display-3'>Display 3</h1>">
              <h1 class="display-3">Display 3</h1>
            </CodeSnippet>
            <CodeSnippet codeSnippet="<h1 class='display-4'>Display 4</h1>">
              <h1 class="display-4">Display 4</h1>
            </CodeSnippet>
            <CodeSnippet codeSnippet="<h1 class='display-5'>Display 5</h1>">
              <h1 class="display-5">Display 5</h1>
            </CodeSnippet>
            <CodeSnippet codeSnippet="<h1 class='display-6'>Display 6</h1>">
              <h1 class="display-6">Display 6</h1>
            </CodeSnippet>
          </div>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Small Headings</h2>
          <CodeSnippet codeSnippet="<h1 class='fs-1'>Font Size 1</h1>">
            <h1 class="fs-1">Font Size 1</h1>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<h1 class='fs-2'>Font Size 2</h1>">
            <h1 class="fs-2">Font Size 2</h1>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<h1 class='fs-3'>Font Size 3</h1>">
            <h1 class="fs-3">Font Size 3</h1>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<h1 class='fs-4'>Font Size 4</h1>">
            <h1 class="fs-4">Font Size 4</h1>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<h1 class='fs-5'>Font Size 5</h1>">
            <h1 class="fs-5">Font Size 5</h1>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<h1 class='fs-6'>Font Size 6</h1>">
            <h1 class="fs-6">Font Size 6</h1>
          </CodeSnippet>

          <h2 class="mb-4 px-4">Lead Text</h2>
          <CodeSnippet codeSnippet="<p class='lead'>This is a lead paragraph.</p>">
            <p class="lead">This is a lead paragraph.</p>
          </CodeSnippet>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Text Muted</h2>
          <CodeSnippet codeSnippet="<p class='text-muted'>This text is muted.</p>">
            <p class="text-muted">This text is muted.</p>
          </CodeSnippet>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Inline Text Elements</h2>
          <CodeSnippet
            codeSnippet="`You can use <mark>mark</mark> to highlight,
        <del>deleted text</del>, <ins>inserted text</ins>,
        <strong>bold</strong>, <em>italic</em>, and <code>inline code</code>.`"
          >
            You can use <mark>mark</mark> to highlight, <del>deleted text</del>,
            <ins>inserted text</ins>, <strong>bold</strong>, <em>italic</em>, and
            <code>inline code</code>.
          </CodeSnippet>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Text Utilities</h2>
          <CodeSnippet codeSnippet="<p class='text-start'>Left aligned text.</p>">
            <p class="text-start">Left aligned text.</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-center'>Center aligned text.</p>">
            <p class="text-center">Center aligned text.</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-end'>Right aligned text.</p>">
            <p class="text-end">Right aligned text.</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-uppercase'>Uppercase</p>">
            <p class="text-uppercase">Uppercase</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-lowercase'>Lowercase</p>">
            <p class="text-lowercase">Lowercase</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-capitalize'>capitalized text</p>">
            <p class="text-capitalize">capitalized text</p>
          </CodeSnippet>
        </BCard>
      </BCol>
      <BCol cols="12" class="mb-4">
        <BCard>
          <h2 class="mb-4 px-4">Text Colors</h2>
          <CodeSnippet codeSnippet="<p class='text-primary'>Primary text color</p>">
            <p class="text-primary">Primary text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-secondary'>Secondary text color</p>">
            <p class="text-secondary">Secondary text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-success'>Success text color</p>">
            <p class="text-success">Success text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-danger'>Danger text color</p>">
            <p class="text-danger">Danger text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-warning'>Warning text color</p>">
            <p class="text-warning">Warning text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-info'>Info text color</p>">
            <p class="text-info">Info text color</p>
          </CodeSnippet>
          <CodeSnippet codeSnippet="<p class='text-light'>Light text color</p>">
            <p class="text-light bg-dark p-3">Light text color</p>
          </CodeSnippet>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>
<script lang="ts" setup>
import MainTitle from "../headings/MainTitle.vue";
import MiniTitle from "../headings/MiniTitle.vue";
import CodeSnippet from "./CodeSnippet.vue";
</script>
