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
        bg: 'indigo.700',
        borderColor: 'indigo.600',
        color: 'indigo.200',
        _hover: {
          bg: 'indigo.600',
          color: 'indigo.100',
        },
      },
      secondary: {
        bg: 'indigo.950',
        borderColor: 'indigo.800',
        color: 'indigo.300',
        _hover: {
          bg: 'indigo.900',
          color: 'indigo.200',
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
