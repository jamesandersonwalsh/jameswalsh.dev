import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'

const overLayStyles = css({
  backdropFilter: 'blur(1px)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9, //TODO: refactor this to use a different stacking context
})

type OverlayProps = {
  isOpen: boolean
} & PropsWithChildren
export function Overlay({ children, isOpen }: OverlayProps) {
  return <>{isOpen && <div className={overLayStyles}>{children}</div>}</>
}
