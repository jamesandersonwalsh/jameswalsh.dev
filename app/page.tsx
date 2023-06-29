import { circle, vstack, hstack } from 'styled-system/patterns'
import Image from 'next/image'
import Link from 'next/link'

const AVATAR_SIZE = 104

const introSectionStyles = vstack({
  gap: 10,
  alignItems: 'start',
  maxWidth: '60vw',
})
const socialLInksStyles = hstack({
  gap: 5,
})

export default function Home() {
  return (
    <div>
      <section className={introSectionStyles}>
        <Image
          src="/profile.jpg"
          className={circle({ size: AVATAR_SIZE })}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="Picture of James"
        />
        <h1>Full Stack JavaScript Engineer.</h1>
        <div id="social-links" className={socialLInksStyles}>
          <Link href="https://github.com/jimmywalsh">
            <Image src="/github.svg" width={24} height={24} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jamesandersonwalsh/">
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="LinkedIn Icon"
            />
          </Link>
          <Link href="https://www.instagram.com/jimmy.a.walsh/">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Instagram Icon"
            />
          </Link>
          <Link href="https://discordapp.com/users/jimmywalsh">
            <Image
              src="/discord.svg"
              width={24}
              height={24}
              alt="Discord Icon"
            />
          </Link>
          <Link href="mailto:jamesandersonwalsh@gmail.com">
            <Image src="/gmail.svg" width={24} height={24} alt="Gmail Icon" />
          </Link>
        </div>
        <p>
          Hey, I&apos;m James & I whisper commands at computers. I am a full
          stack engineer who loves frontend web development. Over the last
          decade I&apos;ve been a part of shipping new products to market,
          scaling Node.js applications, building beautiful UI Design Systems, &
          working on cross-functional teams with other talented people I can
          learn from. I&apos;m a lean practitioner, self-proclaimed developer
          advocate, andd support iterative enhancement. I believe strongly that
          no tech talk is complete without memes.
        </p>
      </section>
    </div>
  )
}
