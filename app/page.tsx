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
import { Card } from '@ui/Card'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { PageLayout } from '@ui/Layouts'

const AVATAR_SIZE = 128
const SOCIAL_ICON_SIZE = 24
const HANDLE = 'jamesandersonwalsh'

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
const columnGridStyles = grid({
  mt: '4rem',
  gap: 2,
  columns: {
    mdTo2xl: 2,
    sm: 1,
  },
})

const cvListStyles = stack({
  gap: 6,
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
  fontWeight: 'normal',
  fontSize: 'xs',
})
const ddDateStyles = css({
  ml: {
    mdTo2xl: 'auto',
    smDown: '0',
  },
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
      role: 'Senior Software Engineer',
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
        <PageLayout.Title>
          Software engineer. UI platform enthusiast. Self-proclaimed developer
          advocate. 🤙
        </PageLayout.Title>
        <div id="social-links" className={socialLInksStyles}>
          <Link href={`https://github.com/${HANDLE}`}>
            <Image
              src="/github.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Github Icon"
            />
          </Link>
          <Link
            href={`https://www.linkedin.com/in/jamesandersonwalsh/${HANDLE}`}
          >
            <Image
              src="/linkedin.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="LinkedIn Icon"
            />
          </Link>
          <Link href={`https://www.instagram.com/${HANDLE}`}>
            <Image
              src="/instagram.svg"
              width={SOCIAL_ICON_SIZE}
              height={SOCIAL_ICON_SIZE}
              alt="Instagram Icon"
            />
          </Link>
          <Link href={`https://discordapp.com/users/${HANDLE}`}>
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
        <p className={css({ fontSize: 'lg' })}>
          Hey, I&apos;m James! & I&apos;m a Full Stack Javascript Engineer who
          loves frontend web development. Over the last decade I&apos;ve been a
          part of shipping new products to market, scaling Node.js applications,
          building beautiful Design Systems, & working on cross-functional teams
          with other talented people I can learn from. I believe that no tech
          talk is complete without memes.
        </p>
      </section>
      <br />
      <div className={columnGridStyles}>
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
