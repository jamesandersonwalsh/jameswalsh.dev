import { ArrowDown, Briefcase, Newspaper, TerminalSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import AboutMe from './about-me'
import WorkHistory from './work-history'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1, TypographyH3, TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'About - James Walsh',
  description: `Learn more about me.`,
}

export default function AboutPage() {
  return (
    <>
      <div className="mt-8 grid grid-cols-12 gap-10">
        <div className="col-span-12 flex flex-col justify-end gap-6 md:col-span-7">
          <TypographyH1>Hey, I&apos;m James 👋🏻.</TypographyH1>
          <TypographyH3 className="break-normal">
            I live in Utah where I write code & enjoy the great outdoors.
          </TypographyH3>
        </div>
        <Image
          src="/portraits/side-profile.webp"
          alt="Picture of James Side Profile"
          width={320}
          height={320}
          className="col-span-12 mb-8 mr-auto rotate-3 rounded-lg shadow-xl md:col-span-5"
          priority
        />
        <section className="col-span-12 md:col-span-7">
          <TypographyH3 className="flex flex-row items-center gap-2">
            Get to know more about me <ArrowDown />
          </TypographyH3>
          <AboutMe />
        </section>
        <section className="col-span-12 flex flex-col gap-8 md:col-span-5">
          <Card>
            <CardHeader className="flex flex-row items-baseline gap-2">
              <Newspaper />
              <CardTitle>Read my posts</CardTitle>
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
              This site was built with Next.js, Typescript, & Contentlayer. In addition, all these styles are
              hand-crafted using PandaCSS. Use the link below to checkout the source code.
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
          <Card>
            <CardHeader className="flex flex-row items-baseline gap-2">
              <Briefcase />
              <CardTitle>Career</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkHistory />
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
