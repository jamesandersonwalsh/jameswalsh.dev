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
import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import { PageLayout } from '@ui/Layouts'
import { Button } from '@ui/Button'

const AVATAR_SIZE = 120
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

const rightStack = stack({
  gap: 6,
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
const blogPostDescriptor = css({
  fontSize: 'sm',
  fontWeight: 'normal',
  mb: '1rem',
})
const blogLinks = hstack({
  gap: 4,
})
const blogLogoStyles = css({
  borderRadius: 'md',
  mr: '16px',
})
const cvLogoStyles = css({
  mr: '16px',
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
          className={circle()}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="James profile picture"
          unoptimized
        />
        <PageLayout.Title>
          Software engineer. Self-proclaimed developer advocate. UI/UX
          enthusiast.
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
          Hey, I&apos;m James! I&apos;m a Full Stack Javascript Engineer who
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
        <div className={rightStack}>
          <Card>
            <Card.Header icon={<NewspaperIcon width={24} height={24} />}>
              See what I&apos;ve published
            </Card.Header>
            <Card.Body>
              <p className={blogPostDescriptor}>
                Get notified when I publish new tech-related articles,
                unsubscribe at any time. My blog is hosted with Hashnode & made
                available via RSS.
              </p>
              <div className={blogLinks}>
                <Button
                  variant="primary"
                  as="a"
                  href="https://jameswalsh.hashnode.dev/newsletter"
                >
                  <Image
                    src="/hashnode-logo.png"
                    width={28}
                    height={28}
                    alt="hashnode-logo"
                    className={blogLogoStyles}
                  />
                  Hashnode
                </Button>
                <Button as="a" href={`https://dev.to/${HANDLE}`}>
                  <Image
                    src="/dev-to-logo.png"
                    width={28}
                    height={28}
                    alt="dev-to-logo"
                    className={blogLogoStyles}
                  />
                  Dev.to
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header icon={<EnvelopeIcon width={24} height={24} />}>
              Subscribe to my Substack
            </Card.Header>
            <Card.Body>
              <p className={blogPostDescriptor}>
                I am launching a non-technical publication on Substack. Stay
                tuned for more info! &nbsp;<i>(coming soon)</i>
              </p>
              <Button as="a" href="https://aboveandbelow.substack.com">
                <Image
                  src="/substack-logo.png"
                  width={28}
                  height={28}
                  alt="hashnode-logo"
                  className={blogLogoStyles}
                />
                Substack
              </Button>
            </Card.Body>
          </Card>
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
                <li>
                  <Button variant="primary" as="a" href="resume.docx" download>
                    <ArrowDownTrayIcon
                      className={cvLogoStyles}
                      width={24}
                      height={24}
                    />
                    Download full CV
                  </Button>
                </li>
              </ol>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
