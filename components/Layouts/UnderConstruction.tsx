import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import Image from 'next/image'

const container = vstack()
const h1 = css({
  my: '2rem',
})
const h2 = css({
  fontSize: '2xl',
  my: '2rem',
})
const p = css({
  fontSize: 'lg',
  m: '2rem',
})

export function UnderConstruction() {
  return (
    <div className={container}>
      <h1 className={h1}>This page is under construction 👷🏻‍♂️</h1>
      <Image
        src="/zelda-secret.png"
        width={400}
        height={400}
        alt="Image of Zelda NES Secret Dungeon"
      />
      <h2 className={h2}>
        Woah this is crazy! If you got here it means I sent you a link to my new
        work in progress portfolio site while it&apos;s being rebuilt during the
        summer of 2023.
      </h2>
      <p className={p}>
        I am hard at work constructing this project using Next.js 13, SSR, Panda
        CSS, & Typescript. This is an opportunity for me to learn more about
        server side react out in the wild in a real way. I appreciate you
        stopping by, stay tuned for more info. 😎
      </p>
    </div>
  )
}
