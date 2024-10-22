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
        statements: 65,
        branches: 60,
        functions: 65,
        lines: 65,
      },
      exclude: [
        'components/ui/**', // ignore shadcn directory
        'app/posthog.ts',
        'app/PostHogPageView.tsx',
        './**/mdx-content.tsx', // ignore next-mdx-remote component
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
