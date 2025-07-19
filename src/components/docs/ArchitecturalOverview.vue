<template>
  <b-container class="py-4">
    <b-row>
      <b-col>
        <MainTitle title="WoodWise Architectural Overview" class="mb-4" />
        <b-card class="mb-4">
          <h2>Overview</h2>
          <p>
            <strong>Woodwise</strong> is a modern web application built using
            <b>Vue 3</b>, <b>Vite</b>, and <b>BootstrapVue Next</b>. It features a modular
            structure, responsive design, and fast development workflow.
          </p>
        </b-card>

        <b-card class="mb-4">
          <h2>Tech Stack</h2>
          <b-list-group>
            <b-list-group-item
              ><b>Vue 3</b> — Progressive JavaScript framework for building user
              interfaces.</b-list-group-item
            >
            <b-list-group-item
              ><b>Vite</b> — Next-generation frontend tooling for fast builds and hot
              module replacement.</b-list-group-item
            >
            <b-list-group-item
              ><b>BootstrapVue Next</b> — Bootstrap 5 components for Vue
              3.</b-list-group-item
            >
            <b-list-group-item
              ><b>Bootstrap</b> — CSS framework for responsive design.</b-list-group-item
            >
            <b-list-group-item
              ><b>Swiper</b> — Touch slider/carousel library.</b-list-group-item
            >
            <b-list-group-item
              ><b>TypeScript</b> — Typed JavaScript for reliability and
              maintainability.</b-list-group-item
            >
          </b-list-group>
        </b-card>

        <b-card class="mb-4">
          <h2>Directory Structure</h2>
          <b-card class="structure mb-2">
            <pre class="mb-0">
    woodwise/
    ├── src/
    │   ├── plugins/
    │   │   └── bootstrap.ts      # BootstrapVue Next plugin setup
    │   ├── vite-env.d.ts         # TypeScript definitions for Vite and Swiper
    │   ├── components/           # Vue components (e.g., NavBar, etc.)
    │   ├── views/                # Page-level Vue components
    │   ├── assets/               # Static assets (images, fonts, etc.)
    │   ├── App.vue               # Root Vue component
    │   ├── main.ts               # App entry point, plugin registration
    ├── package.json              # Project dependencies and scripts
    ├── vite.config.ts            # Vite configuration
                        </pre
            >
          </b-card>
        </b-card>

        <b-card class="mb-4">
          <h2>Plugin Registration</h2>
          <b-list-group>
            <b-list-group-item>
              <b>BootstrapVue Next</b> is registered globally via
              <code>bootstrap.ts</code> and used in <code>main.ts</code>.
            </b-list-group-item>
            <b-list-group-item>
              CSS for Bootstrap and BootstrapVue Next is imported for consistent styling.
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card class="mb-4">
          <h2>TypeScript Support</h2>
          <b-list-group>
            <b-list-group-item>
              <code>vite-env.d.ts</code> provides type definitions for Vite and Swiper
              modules.
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card class="mb-4">
          <h2>Component Usage</h2>
          <b-list-group>
            <b-list-group-item>
              UI components (e.g., Navbar) are built using BootstrapVue Next.
            </b-list-group-item>
            <b-list-group-item>
              Custom components are organized in the <code>components/</code> directory.
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card class="mb-4">
          <h2>Build & Development</h2>
          <b-list-group>
            <b-list-group-item>
              <b>Vite</b> handles development server, hot module replacement, and
              optimized builds.
            </b-list-group-item>
            <b-list-group-item>
              <b>npm scripts</b> in <code>package.json</code> for development (<code
                >npm run dev</code
              >), build (<code>npm run build</code>), and preview (<code
                >npm run preview</code
              >).
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card>
          <h2>Key Features</h2>
          <b-list-group>
            <b-list-group-item>Modern, maintainable codebase</b-list-group-item>
            <b-list-group-item>Responsive UI with Bootstrap</b-list-group-item>
            <b-list-group-item>Fast development workflow</b-list-group-item>
            <b-list-group-item>TypeScript for reliability</b-list-group-item>
            <b-list-group-item>Easy plugin/component integration</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import MainTitle from '../headings/MainTitle.vue';

</script>
