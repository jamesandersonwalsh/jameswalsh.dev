import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ReadMore } from './posts/read-more'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { fetchPublishedPosts } from '@/lib/posts'
import { calculateTimeToRead } from '@/lib/utils'

export default function Home() {
  const posts = fetchPublishedPosts()

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
            I&apos;m currently building developer tools to create rich web experiences. Im interested in full-stack
            front-end focused frameworks like{' '}
            <code className="gray-300 rounded-sm bg-gray-600 px-2 py-0.5 text-sm">Next.js</code>,
            <code className="gray-300 rounded-sm bg-gray-600 px-2 py-0.5 text-sm">Remix</code>, &{' '}
            <code className="gray-300 rounded-sm bg-gray-600 px-2 py-0.5 text-sm">Sveltekit</code>. I&apos;m writing
            blog posts about the things I&apos;m learning along the way. In my free-time I&apos;m also an indie
            developer, gamer, & blogger.
          </TypographyP>
          <PhotoGrid />
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-fuchsia-600 to-red-400 bg-clip-text text-5xl text-transparent">
            Software Engineer
          </TypographyH2>
          <TypographyP className="text-lg">
            Over the last decade I&apos;ve been a part of bringing new products to market, building design system
            component libraries, scaling web services, & building developer tools. My career has been defined by
            embracing the JavaScript Ecosystem as much as possible.
          </TypographyP>
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-indigo-600 to-blue-500 bg-clip-text text-5xl text-transparent">
            UI / UX Enthusiast
          </TypographyH2>
          <TypographyP className="text-lg">
            I care deeply about <i>attention to detail</i>. Whether it&apos;s on the job, a side-hustle, or
            hand-crafting this site, my goal is awalys to bring delight & surprise. The products I&apos;m most proud of
            have been built hand-in-hand on <i>cross-functional</i> teams with talented Product Managers & Designers
            that I can learn from.
          </TypographyP>
          <TypographyH2 className="inline-block bg-gradient-to-r from-primary via-blue-600 to-fuchsia-500 bg-clip-text text-5xl text-transparent">
            Developer Advocate
          </TypographyH2>
          <TypographyP className="text-lg">
            As I&apos;ve written more software, I&apos;ve come to believe a few core principles. Go slow to go fast.
            Ship with quality baked-in. Focus on customer outcomes more than technical output. Create tools that help
            engineers around you do their jobs.
          </TypographyP>
        </div>
      </div>
      <TypographyH2 id="latest-blog-posts">Read Latest Blog Posts</TypographyH2>
      <section className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {posts.map((post) => (
          <Link className="col-span-2 h-full" key={post._id} href={post.url}>
            <Card className="ease h-full transition hover:scale-105">
              <CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <Image className="rounded-lg" fill src={post.thumbnail} alt={`${post.title} cover image`} />
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
      </section>
    </>
  )
}

function PhotoGrid() {
  return (
    <div className="h-[648px] columns-2 gap-4 sm:h-auto sm:columns-3">
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/spartan-race.webp"
          alt="James finishing a Spartan Race"
          width={160}
          height={160}
          className="mb-4 rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 md:h-72">
        <Image
          src="/portraits/bridge.webp"
          alt="Picture of James on a bridge"
          width={160}
          height={160}
          className="mb-4 rounded-lg shadow-xl"
        />
      </div>
      <div className="relate mb-0 h-40 sm:mb-4 sm:h-72">
        <Image
          src="/portraits/shortboard.webp"
          alt="James playing guitar"
          width={160}
          height={160}
          className="aspect-square rounded-lg object-cover object-top shadow-xl sm:aspect-auto"
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/aviators.webp"
          alt="Picture of James in NYC"
          width={160}
          height={160}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 h-40">
        <Image
          src="/portraits/southern-utah.webp"
          alt="James in a national park in southern Utah"
          width={120}
          height={120}
          className="w-full rounded-lg shadow-xl"
        />
      </div>
      <div className="relative mb-4 h-72">
        <Image
          src="/portraits/guitar.webp"
          alt="Picture of James Skateboarding"
          width={160}
          height={160}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  )
}
