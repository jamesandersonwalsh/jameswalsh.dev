import { PropsWithChildren } from 'react'
import { grid, gridItem } from 'styled-system/patterns'

const footer = grid({
  gap: 8,
  columns: {
    mdTo2xl: 2,
    smDown: 1,
  },
  borderTopWidth: '1px',
  borderTopColor: 'gray.800',
  minH: '8rem',
  alignItems: 'center',
  p: '2rem',
})

export function Footer({ children }: PropsWithChildren) {
  return <footer className={footer}>{children}</footer>
}

const leftElement = gridItem({
  display: 'flex',
  justifyContent: {
    mdTo2xl: 'flex-start',
    smDown: 'center',
  },
  color: 'gray.400',
})
const rightElement = gridItem({
  display: 'flex',
  justifyContent: {
    mdTo2xl: 'flex-end',
    smDown: 'center',
  },
  color: 'gray.400',
})
function LeftElement({ children }: PropsWithChildren) {
  return <div className={leftElement}>{children}</div>
}
function RightElement({ children }: PropsWithChildren) {
  return <div className={rightElement}>{children}</div>
}

Footer.LeftElement = LeftElement
Footer.RightElement = RightElement
