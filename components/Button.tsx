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
    borderWidth: '1px',
    width: '100%',
    fontWeight: 'semibold',
    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      primary: {
        bg: 'primaryBg',
        borderColor: 'blue.600',
        color: 'primaryText',
        _hover: {
          bg: 'primaryHoverBg',
          color: 'primaryTextLight',
        },
      },
      secondary: {
        bg: 'secondaryBg',
        borderColor: 'blue.800',
        color: 'secondaryText',
        _hover: {
          bg: 'secondaryHoverBg',
          color: 'secondaryTextLight',
        },
      },
      outline: {
        borderColor: 'tertiaryBorder',
        color: 'tertiaryText',
        bg: 'transparent',
        boxShadow: 'none',
        _hover: {
          bg: 'tertiaryHoverBg',
          color: 'tertiaryTextLight',
        },
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
  variant?: 'primary' | 'secondary' | 'outline'
  as?: 'a' | 'button'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean
} & PropsWithChildren

export function Button({ variant = 'primary', as = 'button', size = 'md', ...rest }: ButtonProps) {
  return as === 'button' ? (
    <button className={button({ visual: variant, size })} {...rest} />
  ) : (
    <a className={button({ visual: variant, size })} {...rest} />
  )
}
