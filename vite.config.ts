import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
    vue()
  ],
})
