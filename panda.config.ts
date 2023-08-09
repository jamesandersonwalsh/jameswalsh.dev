import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    keyframes: {
      drawerSlideIn: {
        from: {
          marginLeft: '100%',
        },
        to: {
          marginLeft: '34%',
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: { base: '{colors.zinc.50}', _dark: '{colors.gray.950}' } },
        elevatedBg: { value: { base: '{colors.zinc.100}', _dark: '{colors.gray.900}' } },
        elevatedHover: { value: { base: '{colors.zinc.100}', _dark: '{colors.gray.800}' } },

        borderColorLight: { value: { base: '{colors.zinc.300}', _dark: '{colors.gray.800}' } },
        borderColorMd: { value: { base: '{colors.zinc.400}', _dark: '{colors.gray.700}' } },

        heading: { value: { base: '{colors.zinc.800}', _dark: '{colors.gray.200}' } },
        text: { value: { base: '{colors.zinc.700}', _dark: '{colors.gray.300}' } },

        primaryBg: { value: { base: '{colors.blue.600}', _dark: '{colors.blue.700}' } },
        primaryHoverBg: { value: { base: '{colors.blue.500}', _dark: '{colors.blue.600}' } },
        primaryText: { value: { base: '{colors.blue.200}', _dark: '{colors.blue.200}' } },
        primaryTextLight: { value: { base: '{colors.blue.100}', _dark: '{colors.blue.100}' } },

        secondaryBg: { value: { base: '{colors.blue.800}', _dark: '{colors.blue.950}' } },
        secondaryText: { value: { base: '{colors.blue.200}', _dark: '{colors.blue.300}' } },
        secondaryHoverBg: { value: { base: '{colors.blue.700}', _dark: '{colors.blue.900}' } },
        secondaryTextLight: { value: { base: '{colors.blue.100}', _dark: '{colors.blue.400}' } },

        tertiaryBorder: { value: { base: '{colors.zinc.300}', _dark: '{colors.gray.700}' } },
        tertiaryText: { value: { base: '{colors.zinc.700}', _dark: '{colors.gray.300}' } },
        tertiaryHoverBg: { value: { base: '{colors.zinc.50}', _dark: '{colors.gray.900}' } },
        tertiaryTextLight: { value: { base: '{colors.zinc.500}', _dark: '{colors.gray.400}' } },
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
