import { container, circle, vstack } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Image from 'next/image'

const AVATAR_SIZE = 120

const mainStyles = container()
const introSectionStyles = vstack({
  gap: 12,
  alignItems: 'start',
  maxWidth: '60vw',
})

export default function Home() {
  return (
    <div className={mainStyles}>
      <section className={introSectionStyles}>
        <Image
          src="/profile.jpg"
          className={circle({ size: AVATAR_SIZE, border: '2px solid white' })}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="picture of James"
        />
        <h1>
          Experienced Full Stack JavaScript Engineer, Developer Advocate, &
          Design System Enthusiast.
        </h1>
        <p>
          Hey, I&apos;m James and I whisper commands at computers. I am a full
          stack engineer who particularly loves frontend web development. Over
          the last decade I&apos;ve been a part of shipping new products to
          market, scaling Node.js applications, building beautiful UI Design
          Systems, and working on cross-functional teams with other talented
          people I can learn from. I&apos;m a lean practitioner, developer
          advocate, support iterative enhancement, and I believe strongly that
          no tech talk is complete without memes.
        </p>
      </section>
    </div>
  )
}
