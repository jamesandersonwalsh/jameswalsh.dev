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
      WebkitFontSmoothing: 'antialiased',
    },
    h1: {
      fontWeight: 'bolder',
      fontSize: '4xl',
      WebkitFontSmoothing: 'antialiased',
      color: 'slate.200',
    },
    h2: {
      fontWeight: 'semibold',
      WebkitFontSmoothing: 'antialiased',
      fontSize: {
        mdTo2xl: '3xl',
        smDown: 'xl',
      },
      color: 'slate.200',
    },
    h3: {
      fontWeight: 'medium',
      fontSize: '2xl',
      WebkitFontSmoothing: 'antialiased',
      color: 'slate.200',
    },
    p: {
      color: 'slate.300',
      WebkitFontSmoothing: 'antialiased',
    },
    b: {
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'bold',
    },
    i: {
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'italic',
    },
  },
  emitPackage: true,
  outdir: 'styled-system',
})
