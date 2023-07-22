'use client'

import { PropsWithChildren } from 'react'
import { flex, divider } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const accordion = flex({
  width: '100%',
  flexDir: 'column',
  my: '1rem',
})
export function Accordion({ children }: PropsWithChildren) {
  return <div className={accordion}>{children}</div>
}

const accordionItem = css({
  height: '100%',
})

type AccordionItemProps = PropsWithChildren
function Item({ children }: AccordionItemProps) {
  return (
    <>
      <div className={accordionItem}>{children}</div>
      <div
        className={divider({ orientation: 'horizontal', color: 'slate.500' })}
      />
    </>
  )
}

const h2 = css({
  fontSize: 'xl',
  py: '1rem',
})
const button = flex({
  flexDir: 'row',
  width: '100%',
  color: 'slate.300',
  justifyContent: 'space-between',
  alignItems: 'center',
  _hover: {
    cursor: 'pointer',
  },
})
type AccordionButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren
function Button({ children, ...rest }: AccordionButtonProps) {
  return (
    <h2 className={h2}>
      <button className={button} aria-controls="accordion-panel-:rl" {...rest}>
        <div>{children}</div>
        <ChevronDownIcon width={24} height={24} />
      </button>
    </h2>
  )
}

const panel = css({
  p: '1rem',
})
export type AccordionPanelProps = {
  isVisible?: boolean
} & PropsWithChildren
function Panel({ isVisible = false, children }: AccordionPanelProps) {
  if (!isVisible) return

  return (
    <div className={panel} aria-expanded="true">
      {children}
    </div>
  )
}

Accordion.Item = Item
Accordion.Button = Button
Accordion.Panel = Panel
