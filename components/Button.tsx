import { PropsWithChildren } from 'react'
import { cva } from 'styled-system/css'

const button = cva({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'lg',
    boxShadow: 'lg',
    width: '100%',
    fontWeight: 'semibold',
    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      primary: {
        bg: 'slate.800',
        color: 'slate.300',
        _hover: {
          bg: 'slate.700',
          color: 'slate.100',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'slate.700',
        bg: 'transparent',
      },
    },
    size: {
      sm: { padding: '0.25rem', fontSize: 'sm' },
      md: { padding: '0.7rem', fontSize: 'md' },
      lg: { padding: '1rem', fontSize: '24px' },
    },
  },
})

type ButtonProps = {
  variant?: 'primary' | 'outline'
  as?: 'a' | 'button'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean
} & PropsWithChildren

export function Button({
  variant = 'primary',
  as = 'button',
  size = 'md',
  ...rest
}: ButtonProps) {
  return as === 'button' ? (
    <button className={button({ visual: variant, size })} {...rest} />
  ) : (
    <a className={button({ visual: variant, size })} {...rest} />
  )
}
