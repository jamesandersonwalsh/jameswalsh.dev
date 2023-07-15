import { PropsWithChildren } from 'react'

export function OrderedList({ children }: PropsWithChildren) {
  return <ol>{children}</ol>
}

export function UnorderedList({ children }: PropsWithChildren) {
  return <ul>{children}</ul>
}

export function ListItem({ children }: PropsWithChildren) {
  return <ul>{children}</ul>
}
