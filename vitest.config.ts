import { fileURLToPath } from 'node:url'

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: ['e2e/**', 'node_modules/**', '.next/**'],
  },
})
