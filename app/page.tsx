import {
  circle,
  vstack,
  hstack,
  divider,
  grid,
  wrap,
  stack,
} from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { BriefcaseIcon } from '@heroicons/react/24/solid'

const AVATAR_SIZE = 104
const SOCIAL_ICON_SIZE = 24

const introSectionStyles = vstack({
  gap: 10,
  alignItems: 'start',
})
const socialLInksStyles = hstack({
  gap: 5,
})
const dividerStyles = divider({
  color: 'slate.600',
})
const twoColumnGridStyles = grid({
  marginTop: '4rem',
  gap: 2,
  columns: 2,
})

const cvListStyles = stack({
  gap: 4,
})
const cvListItemStyles = hstack({
  gap: 4,
})
const companyLogoStyles = circle()
const dlStyles = wrap({
  gap: 1,
  width: '100%',
})
const dtStyles = css({
  display: 'none',
})
const ddBoldStyles = css({
  fontWeight: 'semibold',
  width: 'full',
  fontSize: 'md',
})
const ddLightStyles = css({
  fontWeight: 'lighter',
  fontSize: 'xs',
})
const ddDateStyles = css({
  marginLeft: 'auto',
  fontSize: 'xs',
  fontWeight: 'lighter',
})

interface CVItem {
  image: React.ReactNode
  company: string
  role: string
  startDate: string
  endDate: string
}

export default function Home() {
  const cvItems: CVItem[] = [
    {
      image: (
        <Image
          src="/vasion-logo.png"
          width={36}
          height={36}
          alt="Vasion company logo"
          className={companyLogoStyles}
        />
      ),
      company: 'Vasion',
      role: 'Staff Software Engineer',
      startDate: '2022',
      endDate: 'Present',
    },
    {
      image: (
        <Image
          src="/podium-logo.jpg"
          width={36}
          height={36}
          alt="Podium company logo"
          className={companyLogoStyles}
        />
      ),
      company: 'Podium',
      role: 'Sr Software Engineer',
      startDate: '2021',
      endDate: '2022',
    },
    {
      image: (
        <Image
          src="/pluralsight-logo.png"
          width={36}
          height={36}
          alt="Pluralsight company logo"
          className={companyLogoStyles}
        />
      ),
      company: 'Pluralsight',
      role: 'Full Stack Software Engineer',
      startDate: '2016',
      endDate: '2020',
    },
    {
      image: (
        <Image
          src="/maersk-logo.jpg"
          width={36}
          height={36}
          alt="Maersk company logo"
          className={companyLogoStyles}
        />
      ),
      company: 'Maersk',
      role: 'Software Engineer',
      startDate: '2014',
      endDate: '2016',
    },
  ]

  return (
    <div>
      <section className={introSectionStyles}>
        <Image
          src="/profile.jpg"
          className={circle({ size: AVATAR_SIZE })}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="James profile picture"
        />
        <h1>Full Stack JavaScript Engineer.</h1>
        <div id="social-links" className={socialLInksStyles}>
          <Link href="https://github.com/jimmywalsh">
            <Image
              src="/github.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/jamesandersonwalsh/">
            <Image
              src="/linkedin.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="LinkedIn Icon"
            />
          </Link>
          <Link href="https://www.instagram.com/jimmy.a.walsh/">
            <Image
              src="/instagram.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Instagram Icon"
            />
          </Link>
          <Link href="https://discordapp.com/users/jimmywalsh">
            <Image
              src="/discord.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Discord Icon"
            />
          </Link>
          <Link href="mailto:jamesandersonwalsh@gmail.com">
            <Image
              src="/gmail.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Gmail Icon"
            />
          </Link>
        </div>
        <hr className={dividerStyles} />
        <p>
          Hey, I&apos;m James & I&apos;m a full stack engineer who loves
          frontend web development. Over the last decade I&apos;ve been a part
          of shipping new products to market, scaling Node.js applications,
          building beautiful UI Design Systems, & working on cross-functional
          teams with other talented people I can learn from. I&apos;m a design
          system enthusiast, & self-proclaimed developer advocate. I believe
          that no tech talk is complete without memes.
        </p>
      </section>
      <br />
      <div className={twoColumnGridStyles}>
        <div>Articles Placeholder</div>
        <div>
          <Card>
            <Card.Header icon={<BriefcaseIcon width={24} height={24} />}>
              Work
            </Card.Header>
            <Card.Body>
              <ol className={cvListStyles}>
                {cvItems.map((cvItem) => (
                  <li key={cvItem.company} className={cvListItemStyles}>
                    {cvItem.image}
                    <dl className={dlStyles}>
                      <dt className={dtStyles}>Company</dt>
                      <dd className={ddBoldStyles}>{cvItem.company}</dd>
                      <dt className={dtStyles}>Role</dt>
                      <dd className={ddLightStyles}>{cvItem.role}</dd>
                      <dt className={dtStyles}>Date</dt>
                      <dd className={ddDateStyles}>
                        <time dateTime={cvItem.startDate}>
                          {cvItem.startDate}
                        </time>
                        <span aria-hidden="true"> — </span>
                        <time dateTime={cvItem.startDate}>
                          {cvItem.endDate}
                        </time>
                      </dd>
                    </dl>
                  </li>
                ))}
              </ol>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
