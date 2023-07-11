import { css } from 'styled-system/css'

const h1Styles = css({
  fontSize: '3xl',
})
const paragraphStyles = css({
  mt: '2rem',
})

export function UnderConstruction() {
  return (
    <>
      <h1 className={h1Styles}>This page is under construction 👷🏻‍♂️.</h1>
      <p className={paragraphStyles}>
        I am currently in the process of rebuilding my Portfolio Site using
        Next.js 13 + Panda CSS + Typescript. I appreciate you stopping by, stay
        tuned for more info. 😎
      </p>
    </>
  )
}
