import { PropsWithChildren } from 'react'
import { css, cva } from 'styled-system/css'
import { hstack, flex } from 'styled-system/patterns'

const card = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2xl',
    p: '1.25rem',
    color: 'slate.300',
  },
  variants: {
    visual: {
      solid: {
        bg: 'slate.800',
      },
      ghost: {
        _hover: {
          bg: 'slate.800',
        },
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'slate.800',
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

export function Card({
  variant = 'outline',
  as = 'section',
  children,
}: CardProps) {
  return as === 'section' ? (
    <section className={card({ visual: variant })}>{children}</section>
  ) : (
    <a className={card({ visual: variant })}>{children}</a>
  )
}

const cardHeaderStyles = hstack({
  gap: 3,
})
const h3Styles = css({
  fontSize: 'md',
  fontWeight: 'semibold',
})

type HeaderProps = {
  icon?: React.ReactNode
} & PropsWithChildren
function Header({ children, icon }: HeaderProps) {
  return (
    <div className={cardHeaderStyles}>
      {icon}
      <h3 className={h3Styles}>{children}</h3>
    </div>
  )
}

const cardBodyStyles = css({
  mt: '1rem',
  fontSize: 'sm',
})
function Body({ children }: PropsWithChildren) {
  return <div className={cardBodyStyles}>{children}</div>
}

const footerStyles = flex({
  height: '100%',
  fontSize: 'xs',
  alignItems: 'end',
  mt: '1rem',
})
function Footer({ children }: PropsWithChildren) {
  return <div className={footerStyles}>{children}</div>
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer
