import { PageLayout } from '@ui/Layouts'
import Image from 'next/image'
import { css } from 'styled-system/css'
import AboutMeAccordion from './AboutMeAccordion'

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
  width: '100%',
  textAlign: 'left',
})

export default function AboutPage() {
  return (
    <>
      <Image
        src="/portraits/side-profile.jpeg"
        alt="Picture of James Side Profile"
        width={320}
        height={320}
        className={sideProfile}
        priority
      />
      <PageLayout.Title align="left">Hey, I&apos;m James.</PageLayout.Title>
      <PageLayout.Content>
        <h2 className={h2}>
          I live in Salt Lake City, where I write code & enjoy the Great
          Outdoors.
        </h2>
        <AboutMeAccordion />
      </PageLayout.Content>
    </>
  )
}
