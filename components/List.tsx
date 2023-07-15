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

const listItem = hstack({
  width: '100%',
})

type ListItemProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
export function ListItem(props: ListItemProps) {
  return <li className={listItem} {...props} />
}

OrderedList.ListItem = listItem
UnorderedList.ListItem = ListItem
