import {
  ArrowDownTrayIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  InboxArrowDownIcon,
  LinkIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { css, cx } from 'styled-system/css'
import { wrap, stack, grid, gridItem, circle } from 'styled-system/patterns'

import AboutMeAccordion from './AboutMeAccordion'

import { UnorderedList } from '@/components/List'
import { Button } from '@ui/Button'
import { Card } from '@ui/Card'
import { PageLayout } from '@ui/Layouts'

const sideProfile = css({
  mr: 'auto',
  mb: '2rem',
  borderRadius: 'lg',
})
const h2 = css({
  width: '100%',
  textAlign: 'left',
})
const h3 = css({
  fontWeight: 'semibold',
  mb: '2rem',
})
const companyLogo = circle()
const columnGrid = grid({
  mt: '4rem',
  gap: 10,
  columns: 12,
})
const column = stack({
  gap: 6,
})
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
const buttonIcon = css({
  mr: '16px',
})

export const metadata = {
  title: 'About - James Walsh',
  description: `Learn more about me.`,
}

interface CVItem {
  image: React.ReactNode
  company: string
  role: string
  startDate: string
  endDate: string
}

export default function AboutPage() {
  const cvItems: CVItem[] = [
    {
      image: (
        <Image
          src="/logos/employers/vasion.png"
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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

  return (
    <>
      <Image
        src="/portraits/side-profile.webp"
        alt="Picture of James Side Profile"
        width={320}
        height={320}
        className={sideProfile}
        priority
      />
      <PageLayout.Title align="left">Hey, I&apos;m James.</PageLayout.Title>
      <PageLayout.Content>
        <h2 className={h2}>I live in Salt Lake City, where I write code & enjoy the Great Outdoors.</h2>
        <div className={columnGrid}>
          <section
            className={gridItem({
              colSpan: {
                md: 7,
                sm: 12,
                smDown: 12,
              },
            })}
          >
            <h3 className={h3}>Get to know me</h3>
            <AboutMeAccordion />
          </section>
          <section
            className={cx(
              column,
              gridItem({
                colSpan: {
                  md: 5,
                  sm: 12,
                  smDown: 12,
                },
              }),
            )}
          >
            <Card variant="outline">
              <Card.Header icon={<NewspaperIcon width={24} height={24} />}>See what I&apos;ve published</Card.Header>
              <Card.Body>
                <p className={blogPostDescriptor}>
                  Get notified when I publish new posts, unsubscribe any time. My blog is hosted here, & published to
                  Hashnode & DEV.to.
                </p>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline" as="a" href="/#publications">
                  <InboxArrowDownIcon className={buttonIcon} width={24} height={24} />
                  Subscribe
                </Button>
              </Card.Footer>
            </Card>
            <Card variant="outline">
              <Card.Header icon={<CodeBracketIcon width={24} height={24} />}>How I made this site</Card.Header>
              <Card.Body>
                This site was built with Next.js, Typescript, & Contentlayer. In addition, all these styles are
                hand-crafted using PandaCSS. Use the link below to checkout the source code.
              </Card.Body>
              <Card.Footer>
                <Button variant="secondary" as="a" href="https://github.com/jamesandersonwalsh/portfolio" download>
                  <LinkIcon className={buttonIcon} width={24} height={24} />
                  Visit Github
                </Button>
              </Card.Footer>
            </Card>
            <Card variant="outline">
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
                    <Button variant="secondary" as="a" href="resume.pdf" download>
                      <ArrowDownTrayIcon className={buttonIcon} width={24} height={24} />
                      Download CV
                    </Button>
                  </UnorderedList.ListItem>
                </UnorderedList>
              </Card.Body>
            </Card>
          </section>
        </div>
      </PageLayout.Content>
    </>
  )
}
