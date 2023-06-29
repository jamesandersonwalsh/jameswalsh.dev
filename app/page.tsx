import { container, circle } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Image from 'next/image'

const mainStyles = container()

const nameSectionStyles = css({
  textAlign: 'start',
})
export default function Home() {
  return (
    <div className={mainStyles}>
      <section className={nameSectionStyles}>
        <h1>Hi 👋🏻 I&apos;m James</h1>
        <Image
          src="/profile.jpg"
          className={circle({ size: 360, border: '2px solid white' })}
          width={360}
          height={360}
          alt="picture of James"
        />
        <h2>Full Stack JavaScript Engineer & Experienced Web Enthusiast</h2>
      </section>
    </div>
  )
}
