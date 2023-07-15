import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'

const paper = container({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'slate.900',
  minHeight: '100vh',
  padding: {
    mdTo2xl: '2rem',
    smDown: '0.5rem',
  },
  borderWidth: '1px',
  borderColor: 'slate.800',
  xl: {
    width: '70vw',
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
