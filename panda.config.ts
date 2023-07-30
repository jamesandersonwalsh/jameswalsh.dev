import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  globalCss: {
    body: {
      bg: 'slate.950',
      color: 'slate.200',
    },
    h1: {
      fontWeight: 'bolder',
      fontSize: '4xl',
      color: 'slate.200',
    },
    h2: {
      fontWeight: 'semibold',
      fontSize: {
        mdTo2xl: '3xl',
        smDown: 'xl',
      },
      color: 'slate.200',
    },
    h3: {
      fontWeight: 'medium',
      fontSize: '2xl',
      color: 'slate.200',
    },
    p: {
      color: 'slate.300',
    },
    b: {
      fontStyle: 'bold',
    },
    i: {
      fontStyle: 'italic',
    },
  },
  outdir: 'styled-system',
})
