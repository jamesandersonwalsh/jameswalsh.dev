import { Briefcase, Info, Newspaper, TerminalSquare } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import AboutMe from './about-me'
import PhotoGrid from './photo-grid'
import WorkHistory from './work-history'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About - James Walsh',
  description: `Learn more about me.`,
}

export default function AboutPage() {
  return (
    <>
      <div className="flex max-w-prose flex-col items-center gap-2 text-center">
        <TypographyH1 className="my-6 text-4xl md:my-3">Hey 👋🏻 I&apos;m James</TypographyH1>
        <PhotoGrid />
        <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-fuchsia-600 to-red-400 bg-clip-text text-5xl text-transparent">
          Software Engineer
        </TypographyH2>
        <TypographyP className="text-lg">
          Over the last decade I&apos;ve been a part of bringing new products to market, building design system
          component libraries, scaling web services, & building developer tools. My career has been defined by embracing
          the JavaScript Ecosystem as much as possible.
        </TypographyP>
        <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-indigo-600 to-blue-500 bg-clip-text text-5xl text-transparent">
          UI / UX Enthusiast
        </TypographyH2>
        <TypographyP className="text-lg">
          I care deeply about <i>attention to detail</i>. Whether it&apos;s on the job, a side-hustle, or hand-crafting
          this site, my goal is to bring delight & surprise. The products I&apos;m most proud of have been built
          hand-in-hand on <i>cross-functional</i> teams with talented Product Managers & Designers that I can learn
          from.
        </TypographyP>
        <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-blue-600 to-fuchsia-500 bg-clip-text text-5xl text-transparent">
          Developer Advocate
        </TypographyH2>
        <TypographyP className="mb-6 text-lg">
          As I&apos;ve written more software, I&apos;ve come to believe a few core principles. Go slow to go fast. Ship
          with quality baked-in. Focus on customer outcomes more than technical output. Create tools that help engineers
          around you do their jobs.
        </TypographyP>
      </div>
      <Separator />
      <div className="mt-8 grid grid-cols-12 gap-10">
        <div className="col-span-12 flex flex-col justify-start md:col-span-7">
          <TypographyP className="my-3 break-normal text-xl">
            I live in Utah where I write software & enjoy the outdoors.
          </TypographyP>
          <TypographyP className="my-3 break-normal text-xl">
            In my free-time I love tinkering with home automations, riding my mountain bike & playing video games.
          </TypographyP>
          <TypographyP className="my-3 break-normal text-xl">
            I&apos;m a coffee nut. From Espresso, French-Press, to Pour Over, some of my favorite moments in life are
            looking out at a crisp morning with a hot cup in my hand.
          </TypographyP>
        </div>
        <Image
          src="/portraits/side-profile.webp"
          alt="Picture of James Side Profile"
          width={416}
          height={416}
          className="col-span-12 mb-8 mr-auto rounded-lg shadow-xl md:col-span-5 md:rotate-3"
          priority
        />
        <section className="col-span-12 flex flex-col gap-8 md:col-span-7">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row gap-4">
                <Info />
                Get to Know Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AboutMe />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row gap-4">
              <Briefcase />
              <CardTitle>My Career</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkHistory />
            </CardContent>
          </Card>
        </section>
        <section className="col-span-12 flex flex-col gap-8 md:col-span-5">
          <Card>
            <CardHeader className="flex flex-row items-baseline gap-2">
              <Newspaper />
              <CardTitle>Read My Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP>
                Get notified when I publish new posts, unsubscribe any time. My blog is hosted here, & published to
                Hashnode & DEV.to.
              </TypographyP>
            </CardContent>
            <CardFooter>
              <Link href="/#publications" className={cn('w-full', buttonVariants())}>
                <b>Subscribe</b>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-baseline gap-2">
              <TerminalSquare />
              <CardTitle>How I Built This</CardTitle>
            </CardHeader>
            <CardContent>
              This site was built with Next.js, Typescript, & TailwindCSS. Use the link below to checkout the source
              code.
            </CardContent>
            <CardFooter>
              <Link
                href="https://github.com/jamesandersonwalsh/portfolio"
                download
                className={cn('w-full', buttonVariants())}
              >
                <b>Visit Github</b>
              </Link>
            </CardFooter>
          </Card>
        </section>
      </div>
    </>
  )
}
