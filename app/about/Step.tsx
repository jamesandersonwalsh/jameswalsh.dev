import { PropsWithChildren } from 'react'
import { gridItem, hstack, grid, circle } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const stepper = grid({
  columns: 4,
  gap: 6,
  my: '1rem',
  alignItems: 'baseline',
})
export function Step({ children }: PropsWithChildren) {
  return <section className={stepper}>{children}</section>
}

const info = gridItem({
  colSpan: 3,
})

function Info({ children }: PropsWithChildren) {
  return (
    <div className={info}>
      <p>{children}</p>
    </div>
  )
}

const description = hstack()
const step = circle({
  bg: 'slate.800',
  borderWidth: '1px',
  borderColor: 'slate.600',
  color: 'slate.300',
  fontSize: 'lg',
  h: 12,
  w: 12,
})

type StepDescriptiopProps = {
  number: number
  title: string
}
function Description({ number, title }: StepDescriptiopProps) {
  return (
    <div className={description}>
      <div className={step}>{number}</div>
      <h2>{title}</h2>
    </div>
  )
}

Step.Description = Description
Step.Info = Info
