import { PropsWithChildren } from 'react'
import { grid, gridItem, stack } from 'styled-system/patterns'

const timeline = stack({
  gap: 10,
  px: '1.5rem',
  mt: '1.5rem',
  borderInlineStart: '1px solid',
  borderInlineStartColor: 'slate.500',
})
export function Timeline({ children }: PropsWithChildren) {
  return <div className={timeline}>{children}</div>
}

const item = grid({
  columns: {
    mdTo2xl: 4,
    sm: 1,
  },
})
function Item({ children }: PropsWithChildren) {
  return <section className={item}>{children}</section>
}

const leftElement = gridItem({
  colSpan: 1,
})
function LeftElement({ children }: PropsWithChildren) {
  return <div className={leftElement}>{children}</div>
}

const rightElement = gridItem({
  display: 'flex',
  justifyContent: 'center',
  colSpan: {
    mdTo2xl: 3,
    sm: 1,
  },
})
function RightElement({ children }: PropsWithChildren) {
  return <div className={rightElement}>{children}</div>
}

Timeline.Item = Item
Timeline.LeftElement = LeftElement
Timeline.RightElement = RightElement
