import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { stack } from 'styled-system/patterns'

const h1Styles = css({
  fontSize: '4xl',
  py: '2rem',
})
const h2Styles = css({
  fontSize: '3xl',
  fontWeight: 'bolder',
  py: '1.5rem',
})
const h3Styles = css({
  fontSize: '2xl',
  fontWeight: 'bolder',
  py: '1rem',
})
const listStyles = {
  gap: 6,
  py: '1rem',
  ml: '1rem',
}
const orderedListStyles = stack({
  ...listStyles,
  listStyle: 'auto',
})
const unorderedListStyles = stack({
  ...listStyles,
  listStyle: 'circle',
})
const pStyles = css({
  fontSize: 'lg',
})
const blockquoteStyles = css({
  borderInlineStart: '3px solid',
  borderInlineStartColor: 'slate.500',
  my: '1rem',
  px: '1.25rem',
})
const inlineCodeStyles = css({
  bg: 'neutral.700',
  color: 'neutral.300',
  borderRadius: 'sm',
  py: '1px',
  px: '4px',
})

export const components = {
  h1: (props: PropsWithChildren) => (
    <h1 {...props} className={h1Styles}>
      {props.children}
    </h1>
  ),
  h2: (props: PropsWithChildren) => (
    <h2 {...props} className={h2Styles}>
      {props.children}
    </h2>
  ),
  h3: (props: PropsWithChildren) => (
    <h3 {...props} className={h3Styles}>
      {props.children}
    </h3>
  ),
  p: (props: PropsWithChildren) => (
    <p {...props} className={pStyles}>
      {props.children}
    </p>
  ),
  ol: (props: PropsWithChildren) => (
    <ol {...props} className={orderedListStyles}>
      {props.children}
    </ol>
  ),
  ul: (props: PropsWithChildren) => (
    <ul {...props} className={unorderedListStyles}>
      {props.children}
    </ul>
  ),
  blockquote: (props: PropsWithChildren) => (
    <blockquote {...props} className={blockquoteStyles}>
      {props.children}
    </blockquote>
  ),
  code: (props: PropsWithChildren) => (
    <code className={inlineCodeStyles} {...props}>
      {props.children}
    </code>
  ),
}
