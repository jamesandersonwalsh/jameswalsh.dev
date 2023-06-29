import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'

const paperStyles = container({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'slate.900',
  height: '100vh',
  padding: '2rem',
  xl: {
    width: '60vw',
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
