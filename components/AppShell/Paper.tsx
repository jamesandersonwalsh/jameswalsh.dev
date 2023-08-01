import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'

const paper = container({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'inherit',
  minHeight: '100vh',
  p: {
    mdTo2xl: '2rem',
    smDown: '0.5rem',
  },
  lgTo2xl: {
    maxWidth: '1024px',
  },
  lg: {
    width: '80vw',
  },
  md: {
    width: '90vw',
  },
  sm: {
    width: '100vw',
  },
})

export function Paper({ children }: PropsWithChildren) {
  return <div className={paper}>{children}</div>
}
