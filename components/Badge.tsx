import { cva } from 'styled-system/css'

const badge = cva({
  base: {
    borderRadius: 'md',
    px: '4px',
    py: '2px',
    borderWidth: '1px',
    boxShadow: 'sm',
    fontSize: 'sm',
    fontWeight: 'semibold',
  },
  variants: {
    visual: {
      blue: {
        _dark: {
          bg: 'blue.900',
          borderColor: 'slate.800',
          color: 'blue.400',
        },
        base: {
          bg: 'blue.600',
          borderColor: 'blue.500',
          color: 'blue.200',
        },
      },
      fuchsia: {
        _dark: {
          bg: 'fuchsia.900',
          borderColor: 'fuchsia.800',
          color: 'fuchsia.400',
        },
        base: {
          bg: 'fuchsia.600',
          borderColor: 'fuchsia.500',
          color: 'fuchsia.200',
        },
      },
      violet: {
        _dark: {
          bg: 'violet.900',
          borderColor: 'violet.800',
          color: 'violet.400',
        },
        base: {
          bg: 'violet.600',
          borderColor: 'violet.500',
          color: 'violet.200',
        },
      },
      emerald: {
        _dark: {
          bg: 'emerald.900',
          borderColor: 'emerald.800',
          color: 'emerald.400',
        },
        base: {
          bg: 'emerald.600',
          borderColor: 'emerald.500',
          color: 'emerald.200',
        },
      },
    },
  },
})
const COLOR_OPTS: BadgeColorOptions[] = ['emerald', 'fuchsia', 'blue', 'violet']

type BadgeColorOptions = 'blue' | 'fuchsia' | 'violet' | 'emerald'

interface BadgeProps {
  text: string
}
export function Badge({ text }: BadgeProps) {
  const hashString = (str: string) => {
    return str
      .split('')
      .map((char) => char.charCodeAt(0))
      .reduce((a, b) => a + b, 0)
  }

  const textToColor = (str: string) => COLOR_OPTS[hashString(str) % COLOR_OPTS.length]

  return <span className={badge({ visual: textToColor(text) })}>#{text}</span>
}
