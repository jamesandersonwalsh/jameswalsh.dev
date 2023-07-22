import { PropsWithChildren } from 'react'
import { flex, stack, divider } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const accordion = stack({
  width: '100%',
  flexDir: 'column',
  my: '1rem',
})
export function Accordion({ children }: PropsWithChildren) {
  return <div className={accordion}>{children}</div>
}

const accordionItem = css({
  height: '3rem',
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

const h2 = flex({
  fontSize: 'xl',
  height: '100%',
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
function Button({ children }: PropsWithChildren) {
  return (
    <h2 className={h2}>
      <button className={button} aria-controls="accordion-panel-:rl">
        <div>{children}</div>
        <ChevronDownIcon width={24} height={24} />
      </button>
    </h2>
  )
}

type AccordionPanelProps = {
  isVisible?: boolean
} & PropsWithChildren
function Panel({ isVisible = false, children }: AccordionPanelProps) {
  if (!isVisible) return

  //  TODO: add aria expanded here.
  return <div role="region">{children}</div>
}

Accordion.Item = Item
Accordion.Button = Button
Accordion.Panel = Panel
