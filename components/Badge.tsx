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
        bg: 'blue.900',
        borderColor: 'gray.800',
        color: 'gray.400',
      },
      fuchsia: {
        bg: 'fuchsia.900',
        borderColor: 'fuchsia.800',
        color: 'fuchsia.400',
      },
      violet: {
        bg: 'violet.900',
        borderColor: 'violet.800',
        color: 'violet.400',
      },
      emerald: {
        bg: 'emerald.900',
        borderColor: 'emerald.800',
        color: 'emerald.400',
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
