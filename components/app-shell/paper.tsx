import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'

export function Paper({ children }: PropsWithChildren) {
  return (
    <div
      className={container({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        p: {
          md: '2rem',
          sm: '1rem',
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
      })}
    >
      {children}
    </div>
  )
}
