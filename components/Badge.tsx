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
        bg: 'gray.700',
        borderColor: 'gray.950',
        color: 'gray.300',
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
