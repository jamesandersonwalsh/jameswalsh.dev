import { PropsWithChildren } from 'react'
import { css, cva } from 'styled-system/css'
import { hstack, flex } from 'styled-system/patterns'

const card = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2xl',
    p: '1.25rem',
    color: 'text',
  },
  variants: {
    visual: {
      solid: {
        bg: 'elevatedBg',
      },
      ghost: {
        _hover: {
          bg: 'elevatedBg',
          boxShadow: 'xs',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'borderColorLight',
        boxShadow: 'sm',
      },
    },
  },
})

type CardProps = {
  // FEAT - Create & use Card variants for every single card-like UX on the site.
  variant?: 'solid' | 'outline' | 'ghost'
  as?: 'section' | 'a'
  href?: string
} & PropsWithChildren

export function Card({ variant = 'outline', as = 'section', children }: CardProps) {
  return as === 'section' ? (
    <section className={card({ visual: variant })}>{children}</section>
  ) : (
    <a className={card({ visual: variant })}>{children}</a>
  )
}

const cardHeader = hstack({
  gap: 3,
})
const cardH3 = css({
  fontSize: 'md',
  fontWeight: 'semibold',
})

type HeaderProps = {
  icon?: React.ReactNode
} & PropsWithChildren
function Header({ children, icon }: HeaderProps) {
  return (
    <div className={cardHeader}>
      {icon}
      <h3 className={cardH3}>{children}</h3>
    </div>
  )
}

const cardBody = css({
  mt: '1rem',
  fontSize: 'sm',
})
function Body({ children }: PropsWithChildren) {
  return <div className={cardBody}>{children}</div>
}

const cardFooter = flex({
  height: '100%',
  fontSize: 'xs',
  alignItems: 'end',
  mt: '1rem',
})
function Footer({ children }: PropsWithChildren) {
  return <div className={cardFooter}>{children}</div>
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer
