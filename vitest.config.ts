import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json'],
      thresholds: {
        lines: 35,
        branches: 50,
        functions: 30,
        statements: 35,
      },
      exclude: [
        'components/ui/**', // ignore shadcn directory
        'app/posthog.ts',
        'app/PostHogPageView.tsx',
        '*.config.*',
        './**/constants.*',
        ...coverageConfigDefaults.exclude,
      ],
    },
    setupFiles: './vitest-setup.ts',
    environment: 'happy-dom',
    exclude: ['e2e/**', 'node_modules/**', '.next/**'],
  },
})
