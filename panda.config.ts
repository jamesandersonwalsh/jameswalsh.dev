import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  emitPackage: true,
  outdir: 'styled-system',
})
