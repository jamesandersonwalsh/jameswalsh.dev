import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  globalCss: {
    body: {
      bg: 'gray.950',
      color: 'gray.200',
      WebkitFontSmoothing: 'antialiased',
    },
    h1: {
      fontWeight: 'bolder',
      fontSize: '4xl',
      WebkitFontSmoothing: 'antialiased',
      color: 'gray.200',
    },
    h2: {
      fontWeight: 'semibold',
      WebkitFontSmoothing: 'antialiased',
      fontSize: {
        mdTo2xl: '3xl',
        smDown: 'xl',
      },
      color: 'gray.200',
    },
    h3: {
      fontWeight: 'medium',
      fontSize: '2xl',
      WebkitFontSmoothing: 'antialiased',
      color: 'gray.200',
    },
    p: {
      color: 'gray.300',
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
