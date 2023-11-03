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
  globalCss: {},
  emitPackage: true,
  outdir: 'styled-system',

  layers: {
    base: 'panda_base',
    recipes: 'panda_recipes',
    reset: 'panda_reset',
    tokens: 'panda_tokens',
    utilities: 'panda_utilities',
  },
})
