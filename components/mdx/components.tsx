import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { stack } from 'styled-system/patterns'

const h1 = css({
  py: '2rem',
})
const h2 = css({
  fontWeight: 'bolder',
  py: '1.5rem',
})
const h3 = css({
  fontWeight: 'bolder',
  py: '1rem',
})

const list = {
  gap: 6,
  py: '1rem',
  ml: '1rem',
}
const orderedList = stack({
  ...list,
  listStyle: 'auto',
})
const unorderedList = stack({
  ...list,
  listStyle: 'circle',
})
const p = css({
  fontSize: 'lg',
})
const blockquote = css({
  borderInlineStart: '3px solid',
  borderInlineStartColor: 'slate.500',
  my: '1rem',
  px: '1.25rem',
})
const inlineCode = css({
  bg: 'neutral.700',
  color: 'neutral.300',
  borderRadius: 'sm',
  py: '1px',
  px: '4px',
})

export const components = {
  // FIX - Process img for MD/MDX.
  h1: (props: PropsWithChildren) => (
    <h1 {...props} className={h1}>
      {props.children}
    </h1>
  ),
  h2: (props: PropsWithChildren) => (
    <h2 {...props} className={h2}>
      {props.children}
    </h2>
  ),
  h3: (props: PropsWithChildren) => (
    <h3 {...props} className={h3}>
      {props.children}
    </h3>
  ),
  p: (props: PropsWithChildren) => (
    <p {...props} className={p}>
      {props.children}
    </p>
  ),
  ol: (props: PropsWithChildren) => (
    <ol {...props} className={orderedList}>
      {props.children}
    </ol>
  ),
  ul: (props: PropsWithChildren) => (
    <ul {...props} className={unorderedList}>
      {props.children}
    </ul>
  ),
  blockquote: (props: PropsWithChildren) => (
    <blockquote {...props} className={blockquote}>
      {props.children}
    </blockquote>
  ),
  code: (props: PropsWithChildren) => (
    <code className={inlineCode} {...props}>
      {props.children}
    </code>
  ),
}
