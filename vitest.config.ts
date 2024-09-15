import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    setupFiles: './vitest-setup.ts',
    environment: 'happy-dom',
    exclude: ['e2e/**', 'node_modules/**', '.next/**'],
  },
})
