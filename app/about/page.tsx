import Image from 'next/image'
import Link from 'next/link'

import AboutMeAccordion from './AboutMeAccordion'

import { ListItem, UnorderedList } from '@/components/custom/list'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

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
          className="rounded-full"
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
          className="rounded-full"
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
          className="rounded-full"
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
          className="rounded-full"
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
        className="mb-8 mr-auto rounded-lg"
        priority
      />
      <TypographyH1>Hey, I&apos;m James.</TypographyH1>
      <TypographyH2>I live in Salt Lake City, where I write code & enjoy the Great Outdoors.</TypographyH2>
      <div className="grid grid-cols-12 gap-10">
        <section className="col-span-12 md:col-span-7">
          <TypographyH3>Get to know me</TypographyH3>
          <AboutMeAccordion />
        </section>
        <section className="col-span-12 md:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>See what I&apos;ve published</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Get notified when I publish new posts, unsubscribe any time. My blog is hosted here, & published to
                Hashnode & DEV.to.
              </TypographyP>
            </CardContent>
            <CardFooter>
              <Link href="/#publications" className={cn('w-full', buttonVariants())}>
                Subscribe
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How I made this site</CardTitle>
            </CardHeader>
            <CardContent>
              This site was built with Next.js, Typescript, & Contentlayer. In addition, all these styles are
              hand-crafted using PandaCSS. Use the link below to checkout the source code.
            </CardContent>
            <CardFooter>
              <Link
                href="https://github.com/jamesandersonwalsh/portfolio"
                download
                className={cn('w-full', buttonVariants())}
              >
                Visit Github
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Work</CardTitle>
            </CardHeader>
            <CardContent>
              <UnorderedList>
                {cvItems.map((cvItem) => (
                  <ListItem key={cvItem.company}>
                    {cvItem.image}
                    <dl className="flex w-full flex-wrap gap-2">
                      <dt className="hidden">Company</dt>
                      <dd className="w-full font-semibold">{cvItem.company}</dd>
                      <dt className="hidden">Role</dt>
                      <dd className="text-xs">{cvItem.role}</dd>
                      <dt className="hidden">Date</dt>
                      <dd className="font-lighter ml-auto text-xs">
                        <time dateTime={cvItem.startDate}>{cvItem.startDate}</time>
                        <span aria-hidden="true"> — </span>
                        <time dateTime={cvItem.startDate}>{cvItem.endDate}</time>
                      </dd>
                    </dl>
                  </ListItem>
                ))}
                <ListItem>
                  <Link href="resume.pdf" className={cn('w-full', buttonVariants())}>
                    Download CV
                  </Link>
                </ListItem>
              </UnorderedList>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
