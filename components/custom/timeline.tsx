import { PropsWithChildren } from 'react'
import { grid, gridItem, stack } from 'styled-system/patterns'

export function Timeline({ children }: PropsWithChildren) {
  return (
    <ol
      className={stack({
        width: '100%',
        gap: 12,
        px: '1.5rem',
        mt: '1.5rem',
        borderInlineStart: '1px solid',
        borderInlineStartColor: 'slate.500',
      })}
    >
      {children}
    </ol>
  )
}

export function TimelineItem({ children }: PropsWithChildren) {
  return (
    <li
      className={grid({
        columns: {
          md: 4,
          sm: 1,
        },
      })}
    >
      {children}
    </li>
  )
}

export function TimelineLeftElement({ children }: PropsWithChildren) {
  return (
    <div
      className={gridItem({
        colSpan: 1,
        mt: '1rem',
      })}
    >
      {children}
    </div>
  )
}

export function TimelineRightElement({ children }: PropsWithChildren) {
  return (
    <div
      className={gridItem({
        display: 'flex',
        justifyContent: 'center',
        colSpan: {
          md: 3,
          sm: 1,
        },
      })}
    >
      {children}
    </div>
  )
}
