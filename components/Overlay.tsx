import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'

const overlay = css({
  backdropFilter: 'blur(1px)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9, // FIX - Refactor Overlay to use a different stacking context rather than z-index: 9.
})

type OverlayProps = {
  isOpen: boolean
} & PropsWithChildren
export function Overlay({ children, isOpen }: OverlayProps) {
  return <>{isOpen && <div className={overlay}>{children}</div>}</>
}
