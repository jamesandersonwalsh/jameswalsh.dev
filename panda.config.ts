import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    semanticTokens: {
      colors: {
        bg: { value: { base: '{colors.slate.50}', _dark: '{colors.slate.950}' } },
        elevatedBg: { value: { base: '{colors.slate.100}', _dark: '{colors.slate.900}' } },
        elevatedHover: { value: { base: '{colors.slate.100}', _dark: '{colors.slate.800}' } },

        borderColorLight: { value: { base: '{colors.slate.300}', _dark: '{colors.slate.800}' } },
        borderColorMd: { value: { base: '{colors.slate.400}', _dark: '{colors.slate.700}' } },

        heading: { value: { base: '{colors.slate.800}', _dark: '{colors.slate.200}' } },
        text: { value: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' } },

        primaryBg: { value: { base: '{colors.blue.600}', _dark: '{colors.blue.700}' } },
        primaryHoverBg: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.600}' } },
        primaryText: { value: { base: '{colors.blue.200}', _dark: '{colors.blue.200}' } },
        primaryTextLight: { value: { base: '{colors.blue.100}', _dark: '{colors.blue.100}' } },

        secondaryBg: { value: { base: '{colors.blue.800}', _dark: '{colors.blue.950}' } },
        secondaryText: { value: { base: '{colors.blue.200}', _dark: '{colors.blue.300}' } },
        secondaryHoverBg: { value: { base: '{colors.blue.700}', _dark: '{colors.blue.900}' } },
        secondaryTextLight: { value: { base: '{colors.blue.100}', _dark: '{colors.blue.400}' } },

        tertiaryBorder: { value: { base: '{colors.slate.300}', _dark: '{colors.slate.700}' } },
        tertiaryText: { value: { base: '{colors.slate.700}', _dark: '{colors.slate.300}' } },
        tertiaryHoverBg: { value: { base: '{colors.slate.100}', _dark: '{colors.slate.800}' } },
        tertiaryTextLight: { value: { base: '{colors.slate.500}', _dark: '{colors.slate.400}' } },
      },
    },
  },
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
    blueTheme: '[data-theme=blue] &',
  },
  globalCss: {
    body: {
      bg: 'bg',
      WebkitFontSmoothing: 'antialiased',
    },
    h1: {
      fontWeight: 'bolder',
      fontSize: '4xl',
      WebkitFontSmoothing: 'antialiased',
      color: 'heading',
    },
    h2: {
      fontWeight: 'semibold',
      color: 'heading',
      WebkitFontSmoothing: 'antialiased',
      fontSize: {
        mdTo2xl: '3xl',
        smDown: 'xl',
      },
    },
    h3: {
      fontWeight: 'medium',
      color: 'heading',
      fontSize: '2xl',
      WebkitFontSmoothing: 'antialiased',
    },
    p: {
      color: 'text',
      WebkitFontSmoothing: 'antialiased',
    },
    b: {
      WebkitFontSmoothing: 'antialiased',
      color: 'text',
      fontStyle: 'bold',
    },
    i: {
      WebkitFontSmoothing: 'antialiased',
      color: 'text',
      fontStyle: 'italic',
    },
  },
  emitPackage: true,
  outdir: 'styled-system',
})
