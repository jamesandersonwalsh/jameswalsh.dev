import { PageLayout } from '@ui/Layouts'
import Image from 'next/image'
import { css } from 'styled-system/css'

export const metadata = {
  title: 'James Walsh | About',
  description: `Learn more about me.`,
}

const sideProfile = css({
  mr: 'auto',
  mb: '2rem',
  borderRadius: 'lg',
})
const h2 = css({
  fontSize: '2xl',
})

export default function AboutPage() {
  return (
    <>
      <Image
        src="/portraits/side-profile.jpeg"
        alt="Picture of James Side Profile"
        width={360}
        height={360}
        className={sideProfile}
      />
      <PageLayout.Title>Hey, I&apos;m James Walsh.</PageLayout.Title>
      <PageLayout.Content>
        <h2 className={h2}>
          I live in Salt Lake City, where I write code & enjoy the Great
          Outdoors.
        </h2>
      </PageLayout.Content>
    </>
  )
}
