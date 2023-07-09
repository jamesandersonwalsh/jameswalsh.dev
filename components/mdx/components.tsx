import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'

const h1Styles = css({
  fontSize: '3xl',
  py: '2rem',
})
const h2Styles = css({
  fontSize: '2xl',
  py: '2rem',
})
const h3Styles = css({
  fontSize: 'xl',
  py: '2rem',
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
}
