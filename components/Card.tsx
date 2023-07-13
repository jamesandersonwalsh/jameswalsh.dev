import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { hstack, stack, flex } from 'styled-system/patterns'

const cardStyles = stack({
  borderRadius: '2xl',
  borderWidth: '2px',
  borderColor: 'slate.800',
  boxShadow: 'sm',
  p: '1.25rem',
  color: 'slate.300',
})

export function Card({ children }: PropsWithChildren) {
  return <section className={cardStyles}>{children}</section>
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
})
function Footer({ children }: PropsWithChildren) {
  return <div className={footerStyles}>{children}</div>
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer
