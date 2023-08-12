import { PropsWithChildren } from 'react'
import { cva } from 'styled-system/css'

const overlay = cva({
  base: {
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  variants: {
    visual: {
      visible: {
        visibility: 'visible',
      },
      hidden: {
        visibility: 'hidden',
      },
    },
  },
})

type OverlayProps = {
  isOpen: boolean
} & PropsWithChildren
export function Overlay({ children, isOpen }: OverlayProps) {
  const variant = isOpen ? 'visible' : 'hidden'
  return <div className={overlay({ visual: variant })}>{children}</div>
}
