import { PropsWithChildren } from 'react'
import { grid, gridItem, stack } from 'styled-system/patterns'

const timeline = stack({
  width: '100%',
  gap: 10,
  px: '1.5rem',
  mt: '1.5rem',
  borderInlineStart: '1px solid',
  borderInlineStartColor: 'gray.500',
})
export function Timeline({ children }: PropsWithChildren) {
  return <ol className={timeline}>{children}</ol>
}

const item = grid({
  columns: {
    mdTo2xl: 4,
    sm: 1,
  },
})
function Item({ children }: PropsWithChildren) {
  return <li className={item}>{children}</li>
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
