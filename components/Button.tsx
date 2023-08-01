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
        bg: 'blue.700',
        borderColor: 'blue.600',
        color: 'blue.200',
        _hover: {
          bg: 'blue.600',
          color: 'blue.100',
        },
      },
      secondary: {
        bg: 'blue.950',
        borderColor: 'blue.800',
        color: 'blue.300',
        _hover: {
          bg: 'blue.900',
          color: 'blue.200',
        },
      },
      outline: {
        borderColor: 'gray.700',
        color: 'gray.200',
        bg: 'transparent',
        _hover: {
          bg: 'gray.800',
          color: 'gray.50',
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
