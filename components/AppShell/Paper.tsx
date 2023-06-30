import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'

const paperStyles = container({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'slate.900',
  minHeight: '100vh',
  padding: '2rem',
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
  paddingTop: '2rem',
})

export function Paper({ children }: PropsWithChildren) {
  return <div className={paperStyles}>{children}</div>
}
