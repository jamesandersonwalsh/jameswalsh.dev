import { ArrowDown, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PhotoGrid } from './photo-grid'
import fetchPosts from './posts/fetchPosts'
import { ReadMore } from './posts/read-more'

import { AnimationOnScroll } from '@/components/custom/animate-on-scroll'
import { HANDLE } from '@/components/custom/app-shell/constants'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/helpers'
import { cn } from '@/lib/utils'

export default function Home() {
  const posts = fetchPosts()

  return (
    <>
      <div className="mb-10 flex flex-col items-center">
        <div className="flex max-w-prose flex-col items-center gap-2 text-center">
          <TypographyH1 className="my-6 text-4xl md:my-3 md:text-6xl">Hey 👋🏻 I&apos;m James</TypographyH1>
          <TypographyP className="my-3 text-lg">
            I&apos;m a full-stack Software Engineer, UI/UX enthusiast, full time tinkerer, & self-proclaimed developer
            advocate.
          </TypographyP>
          <TypographyP className="mb-4 text-lg">
            I currently work as a Staff Software Engineer focusing on creating web platform tools. In my free-time
            I&apos;m also an indie developer, gamer, & developer blogger. You can read my&nbsp;
            <Link href="#latest-blog-posts" className="inline-flex underline underline-offset-1">
              articles&nbsp;down below&nbsp;
              <ArrowDown />
            </Link>
          </TypographyP>
          <PhotoGrid />
          <AnimationOnScroll
            classNameInView="ease duration-300 delay-75 opacity-100 translate-y-5"
            classNameNotInView="opacity-0 translate-y-0"
          >
            <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-fuchsia-600 to-red-400 bg-clip-text text-5xl text-transparent">
              Software Engineer
            </TypographyH2>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="ease duration-300 delay-75 opacity-100 translate-y-4"
            classNameNotInView="opacity-0 translate-y-0"
          >
            <TypographyP className="text-lg">
              Over the last decade I&apos;ve been a part of bringing new products to market, building design system
              component libraries, scaling web services, & building developer tools. My career has been defined by
              embracing the JavaScript Eecosystem as much as possible.
            </TypographyP>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="ease duration-300 delay-75 opacity-100 translate-y-5"
            classNameNotInView="opacity-0 translate-y-0"
          >
            <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-indigo-600 to-blue-500 bg-clip-text text-5xl text-transparent">
              UI / UX Enthusiast
            </TypographyH2>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="ease duration-300 delay-75 opacity-100 translate-y-4"
            classNameNotInView="opacity-0"
          >
            <TypographyP className="text-lg">
              I care deeply about <i>attention to detail</i>. Whether it&apos;s on the job, a side-hustle, or
              hand-crafting this site, my goal is awalys to bring delight & surprise. The products I&apos;m most proud
              of have been built hand-in-hand on <i>cross-functional</i> teams with talented Product Managers &
              Designers that I can learn from.
            </TypographyP>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="ease duration-300 delay-75 opacity-100 translate-y-5"
            classNameNotInView="opacity-0 translate-y-0"
          >
            <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-blue-600 to-fuchsia-500 bg-clip-text text-5xl text-transparent">
              Developer Advocate
            </TypographyH2>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="ease fade-in duration-500 delay-75 opacity-100 translate-y-4"
            classNameNotInView="opacity-0 translate-y-0"
          >
            <TypographyP className="text-lg">
              The more software I write, the more I&apos;ve come to believe a few core principles. Go slow to go fast.
              Ship with quality baked in. Focus on customer outcomes more than daily output. Create tools and
              infrastructure that help engineers around you fall into the pit of success.
            </TypographyP>
          </AnimationOnScroll>
        </div>
      </div>
      <TypographyH2 id="latest-blog-posts">Read Latest Blog Posts</TypographyH2>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {posts.map((post) => (
          <Link className="col-span-2 h-full" key={post._id} href={post.url}>
            <Card className="ease h-full transition hover:scale-105">
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
    </>
  )
}
