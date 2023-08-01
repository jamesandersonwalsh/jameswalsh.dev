import { PropsWithChildren } from 'react'
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
      default: {
        bg: 'blue.900',
        borderColor: 'gray.800',
        color: 'gray.400',
      },
    },
  },
})

type BadgeProps = {
  variant?: 'default'
} & PropsWithChildren

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return <span className={badge({ visual: variant })}>#{children}</span>
}
