import { DetailedHTMLProps, LiHTMLAttributes, PropsWithChildren } from 'react'
import { vstack, hstack } from 'styled-system/patterns'

const orderedList = vstack({
  listStyle: 'auto',
  gap: 6,
})
export function OrderedList({ children, ...rest }: PropsWithChildren) {
  return (
    <ol className={orderedList} {...rest}>
      {children}
    </ol>
  )
}

const unorderedList = vstack({
  gap: 6,
})
export function UnorderedList({ children, ...rest }: PropsWithChildren) {
  return (
    <ul className={unorderedList} {...rest}>
      {children}
    </ul>
  )
}

type ListItemProps = {
  type?: 'vertical' | 'horizontal'
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export function ListItem({ type = 'horizontal', ...rest }: ListItemProps) {
  const className =
    type === 'horizontal'
      ? hstack({
          width: '100%',
        })
      : vstack({ width: '100%', alignItems: 'baseline' })

  return <li className={className} {...rest} />
}

OrderedList.ListItem = ListItem
UnorderedList.ListItem = ListItem
