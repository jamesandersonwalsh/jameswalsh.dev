import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import fetchPosts from './posts/fetchPosts'
import { ReadMore } from './posts/read-more'

import { HANDLE } from '@/components/custom/app-shell/constants'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/helpers'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'James Walsh',
  openGraph: {
    description: 'James Walsh - Software Engineer, developer advocate, UI/UX enthusiast',
    images: ['/portraits/front-profile.webp'],
  },
}

export default function Home() {
  const posts = fetchPosts()

  return (
    <div>
      <div className="mb-10 flex flex-col items-center">
        <div className="flex max-w-prose flex-col items-center gap-2 text-center">
          <TypographyH1 className="text-5xl md:text-6xl">Hey 👋🏻 I&apos;m James</TypographyH1>
          <div>
            <div className="columns-2 gap-4 sm:columns-3">
              <div className="relative">
                <Image
                  src="/portraits/spartan-race.webp"
                  alt="James finishing a Spartan Race"
                  width={160}
                  height={160}
                  className="mb-4 rounded-lg shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/portraits/bridge.webp"
                  alt="Picture of James on a bridge"
                  width={160}
                  height={160}
                  className="mb-4 rounded-lg shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/portraits/shortboard.webp"
                  alt="James playing guitar"
                  width={160}
                  height={160}
                  className="mb-0 aspect-square rounded-lg object-cover object-top shadow-xl sm:mb-4 sm:aspect-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/portraits/aviators.webp"
                  alt="Picture of James in NYC"
                  width={160}
                  height={160}
                  className="mb-4 rounded-lg shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/portraits/southern-utah.webp"
                  alt="James in a national park in southern Utah"
                  width={120}
                  height={120}
                  className="mb-4 w-full rounded-lg shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src="/portraits/guitar.webp"
                  alt="Picture of James Skateboarding"
                  width={160}
                  height={160}
                  className="mb-4 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-fuchsia-600 to-red-400 bg-clip-text text-5xl text-transparent">
            Software Engineer
          </TypographyH2>
          <TypographyP className="text-lg">
            I&apos;m a Full Stack Software Engineer specializing in JavaScript. My career has been defined by embracing
            JavaScript as much as possible. I&apos;ve written a few articles on the subject{' '}
            <Link href="#latest-blog-posts">you can find down below.</Link>
          </TypographyP>
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-indigo-600 to-blue-500 bg-clip-text text-5xl text-transparent">
            UI / UX Enthusiast
          </TypographyH2>
          <TypographyP className="text-lg">
            I care deeply about{' '}
            <b>
              <i>attention to detail</i>
            </b>
            . Whether it&apos;s building component libraries like Podium&apos;s Brickyard Design System, or
            hand-crafting this site, my goal is to bring delight & surprise. The products I&apos;m most proud of have
            been built hand-in-hand on <i>cross-functional</i> teams with talented Product Managers & Designers I can
            learn from.
          </TypographyP>
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-blue-600 to-fuchsia-500 bg-clip-text text-5xl text-transparent">
            Developer Advocate
          </TypographyH2>
          <TypographyP className="text-lg">
            Over the last decade I&apos;ve been a part of <b>shipping</b> new products to market, <b>scaling</b> web
            services, <b>building</b> developer libraries, & <b>improving</b> developer experience on web platform
            teams.
          </TypographyP>
        </div>
      </div>
      <TypographyH2 id="latest-blog-posts">Read Latest Blog Posts</TypographyH2>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {posts.map((post) => (
          <Link className="col-span-2 h-full" key={post._id} href={post.url}>
            <Card className="h-full transition ease-in-out hover:scale-105">
              <CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <Image className="rounded-lg" fill src={post.coverImage} alt={`${post.title} cover image`} />
                </AspectRatio>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <span className="flex items-center text-muted-foreground">
                  <Clock width={16} height={16} />
                  &nbsp;
                  {calculateTimeToRead(post.body.raw)}&nbsp;min read
                </span>
                <span>{post.brief}</span>
              </CardContent>
              <CardFooter>
                <ReadMore />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div>
        <Separator className="my-6" />
        <TypographyH2 id="publications">Read Anywhere I Publish</TypographyH2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row gap-4">
            <Image src="/logos/blog/hey-world.png" className="rounded-md" width={28} height={28} alt="Hey World Logo" />
            <CardTitle>Hey World</CardTitle>
          </CardHeader>
          <CardContent>
            Checkout my non-technical blog on HEY. Use the link below to get posts directly to your email,&nbsp;
            <i>or grab the RSS feed</i>.
          </CardContent>
          <CardFooter>
            <Link href="https://world.hey.com/jameswalsh" className={cn(buttonVariants(), 'w-full')}>
              <b>View</b>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row gap-4">
            <Image src="/logos/blog/hashnode.png" className="rounded-md" width={28} height={28} alt="Hashnode Logo" />
            <CardTitle>Hashnode</CardTitle>
          </CardHeader>
          <CardContent>
            Blog posts on this website are cross-posted to Hashnode. Get notified when I publish a new article.
          </CardContent>
          <CardFooter>
            <Link href="https://jameswalsh.hashnode.dev/newsletter" className={cn(buttonVariants(), 'w-full')}>
              <b>Subscribe</b>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row gap-4">
            <Image src="/logos/blog/dev-to.png" className="rounded-md" width={28} height={28} alt="DEV.TO Logo" />
            <CardTitle>DEV.TO</CardTitle>
          </CardHeader>
          <CardContent>
            DEV.to is my all-time favorite blogging community. You can also find these posts over there. Follow for
            more!
          </CardContent>
          <CardFooter>
            <Link href={`https://dev.to/${HANDLE}`} className={cn(buttonVariants(), 'w-full')}>
              <b>Follow</b>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
