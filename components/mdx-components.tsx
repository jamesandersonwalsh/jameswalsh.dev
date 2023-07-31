import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { stack } from 'styled-system/patterns'

const img = css({
  borderRadius: 'lg',
  my: '1rem',
  maxH: '800px',
  maxW: '800px',
})
const h1 = css({
  py: '2rem',
})
const h2 = css({
  fontWeight: 'bolder',
  py: '1rem',
})
const h3 = css({
  fontWeight: 'bolder',
  py: '1rem',
})

const list = {
  gap: 2,
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
  borderInlineStartColor: 'zinc.500',
  my: '1rem',
  px: '1.25rem',
})
const pre = css({
  borderRadius: 'lg',
  bg: 'zinc.800',
  p: 2,
  my: 2,
})
const code = css({
  fontSize: 'md',
  bg: 'zinc.800',
  py: '2px',
  px: '4px',
  borderRadius: 'md',
})
const a = css({
  color: 'blue.500',
  _hover: {
    textDecoration: 'underline',
    color: 'blue.600',
  },
})

export const mdxComponents = {
  img: (props: PropsWithChildren) => (
    <img {...props} className={img}>
      {props.children}
    </img>
  ),
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
  pre: (props: PropsWithChildren) => (
    <pre className={pre} {...props}>
      {props.children}
    </pre>
  ),
  code: (props: PropsWithChildren) => (
    <code className={code} {...props}>
      {props.children}
    </code>
  ),
  a: (props: PropsWithChildren) => (
    <a className={a} {...props}>
      {props.children}
    </a>
  ),
}
