import { circle, vstack, hstack, divider, grid, wrap, stack } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@ui/Card'
import { ArrowDownTrayIcon, BriefcaseIcon, EnvelopeIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { PageLayout } from '@ui/Layouts'
import { Button } from '@ui/Button'
import { UnorderedList } from '@ui/List'

const AVATAR_SIZE = 120
const HANDLE = 'jamesandersonwalsh'

const introSection = vstack({
  gap: 10,
  alignItems: 'start',
})
const socialLinkStack = hstack({
  gap: 5,
})
const pageDivider = divider({
  color: 'gray.600',
})
const columnGrid = grid({
  mt: '4rem',
  gap: 6,
  columns: {
    mdTo2xl: 2,
    sm: 1,
  },
})
const column = stack({
  gap: 6,
})
const companyLogo = circle()
const dl = wrap({
  gap: 2,
  width: '100%',
})
const dt = css({
  display: 'none',
})
const ddBold = css({
  fontWeight: 'semibold',
  width: 'full',
  fontSize: 'md',
})
const ddLight = css({
  fontWeight: 'normal',
  fontSize: 'xs',
})
const ddDate = css({
  ml: 'auto',
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
const blogLogo = css({
  borderRadius: 'md',
  mr: '16px',
})
const cvLogo = css({
  mr: '16px',
})

interface CVItem {
  image: React.ReactNode
  company: string
  role: string
  startDate: string
  endDate: string
}
interface SocialLink {
  name: string
  href: string
  imgSrc: string
}

export default function Home() {
  const cvItems: CVItem[] = [
    {
      image: (
        <Image
          src="/logos/employers/vasion.png"
          width={36}
          height={36}
          alt="Vasion company logo"
          className={companyLogo}
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
          src="/logos/employers/podium.jpg"
          width={36}
          height={36}
          alt="Podium company logo"
          className={companyLogo}
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
          src="/logos/employers/pluralsight.png"
          width={36}
          height={36}
          alt="Pluralsight company logo"
          className={companyLogo}
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
          src="/logos/employers/maersk.jpg"
          width={36}
          height={36}
          alt="Maersk company logo"
          className={companyLogo}
        />
      ),
      company: 'Maersk',
      role: 'Software Engineer',
      startDate: '2014',
      endDate: '2016',
    },
  ]
  const socialLinks: SocialLink[] = [
    {
      name: 'Github',
      href: `https://github.com/${HANDLE}`,
      imgSrc: '/logos/tech/github.svg',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/in/${HANDLE}`,
      imgSrc: '/logos/social/linkedin.svg',
    },
    {
      name: 'Discord',
      href: `https://discordapp.com/users/${HANDLE}`,
      imgSrc: `/logos/social/discord.svg`,
    },
    {
      name: 'Email',
      href: `mailto:jamesandersonwalsh@gmail.com`,
      imgSrc: `/logos/social/gmail.svg`,
    },
  ]

  return (
    <div>
      <section className={introSection}>
        <Image
          src="/portraits/front-profile.jpg"
          className={circle()}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="James profile picture"
          unoptimized
        />
        <PageLayout.Title>Software engineer. Self-proclaimed developer advocate. UI/UX enthusiast.</PageLayout.Title>
        <div id="social-links" className={socialLinkStack}>
          {socialLinks.map(({ name, href, imgSrc }) => (
            <Link key={name} href={href}>
              <Image src={imgSrc} width={24} height={24} alt={`${name} Icon`} />
            </Link>
          ))}
        </div>
        <hr className={pageDivider} />
        <p className={css({ fontSize: 'lg' })}>
          Hey, I&apos;m James! I&apos;m a Full Stack Javascript Engineer who loves frontend web development. Over the
          last decade I&apos;ve been a part of shipping new products to market, scaling Node.js applications, building
          beautiful Design Systems, & working on cross-functional teams with other talented people I can learn from. I
          believe that no tech talk is complete without memes.
        </p>
      </section>
      <br />
      <div className={columnGrid}>
        <div className={column}>
          <Card variant="solid">
            <Card.Header icon={<NewspaperIcon width={24} height={24} />}>See what I&apos;ve published</Card.Header>
            <Card.Body>
              <p className={blogPostDescriptor}>
                Get notified when I publish new posts, unsubscribe at any time. My blog is hosted here, & published to
                both Hashnode & DEV.to.
              </p>
              <div className={blogLinks}>
                <Button variant="outline" as="a" href="https://jameswalsh.hashnode.dev/newsletter">
                  <Image
                    src="/logos/blog/hashnode.png"
                    width={28}
                    height={28}
                    alt="hashnode-logo"
                    className={blogLogo}
                  />
                  Hashnode
                </Button>
                <Button variant="outline" as="a" href={`https://dev.to/${HANDLE}`}>
                  <Image src="/logos/blog/dev-to.png" width={28} height={28} alt="dev-to-logo" className={blogLogo} />
                  Dev
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card variant="solid">
            <Card.Header icon={<EnvelopeIcon width={24} height={24} />}>
              Subscribe on Substack (coming soon)
            </Card.Header>
            <Card.Body>
              <p className={blogPostDescriptor}>
                Sign up for my newsletter on substack where I publish non-technical articles. Coming soon!
              </p>
              <Button variant="outline" as="a" href="https://aboveandbelow.substack.com">
                <Image src="/logos/blog/substack.png" width={28} height={28} alt="hashnode-logo" className={blogLogo} />
                Substack
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className={column}>
          <Card variant="solid">
            <Card.Header icon={<BriefcaseIcon width={24} height={24} />}>Work</Card.Header>
            <Card.Body>
              <UnorderedList>
                {cvItems.map((cvItem) => (
                  <UnorderedList.ListItem key={cvItem.company}>
                    {cvItem.image}
                    <dl className={dl}>
                      <dt className={dt}>Company</dt>
                      <dd className={ddBold}>{cvItem.company}</dd>
                      <dt className={dt}>Role</dt>
                      <dd className={ddLight}>{cvItem.role}</dd>
                      <dt className={dt}>Date</dt>
                      <dd className={ddDate}>
                        <time dateTime={cvItem.startDate}>{cvItem.startDate}</time>
                        <span aria-hidden="true"> — </span>
                        <time dateTime={cvItem.startDate}>{cvItem.endDate}</time>
                      </dd>
                    </dl>
                  </UnorderedList.ListItem>
                ))}
                <UnorderedList.ListItem>
                  <Button variant="primary" as="a" href="resume.docx" download>
                    <ArrowDownTrayIcon className={cvLogo} width={24} height={24} />
                    Download full CV
                  </Button>
                </UnorderedList.ListItem>
              </UnorderedList>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
