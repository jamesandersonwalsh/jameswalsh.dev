import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'

const cardStyles = css({
  borderRadius: 'lg',
  borderWidth: '1px',
  borderColor: 'slate.600',
  padding: '1.5rem',
  color: 'slate.300',
})

export function Card({ children }: PropsWithChildren) {
  return <section className={cardStyles}>{children}</section>
}

const cardHeaderStyles = hstack({
  gap: 3,
})

type HeaderProps = {
  icon?: React.ReactNode
} & PropsWithChildren
function Header({ children, icon }: HeaderProps) {
  return (
    <div className={cardHeaderStyles}>
      {icon}
      <h3>{children}</h3>
    </div>
  )
}

const cardBodyStyles = css({
  marginTop: '1rem',
})
function Body({ children }: PropsWithChildren) {
  return <div className={cardBodyStyles}>{children}</div>
}

Card.Header = Header
Card.Body = Body
