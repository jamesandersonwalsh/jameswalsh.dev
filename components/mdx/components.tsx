import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import Image, { ImageProps } from 'next/image'

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
const orderedListStyles = css({
  listStyle: 'auto',
  py: '1rem',
  ml: '1rem',
})
const unorderedListStyles = css({
  listStyle: 'circle',
  py: '1rem',
  ml: '1rem',
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

export const components = {
  img: ({ src, height, width, alt, ...rest }: ImageProps) => (
    // layout="responsive" makes the image fill the container width wise - I find it looks nicer for blog posts
    <Image
      layout="responsive"
      src={src}
      height={height}
      width={width}
      alt={alt}
      {...rest}
    />
  ),
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
}
