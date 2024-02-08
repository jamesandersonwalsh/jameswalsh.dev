import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchPublishedPosts } from './posts/actions'
import { ReadMore } from './posts/read-more'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/lib/utils'

export default async function Home() {
  const posts = await fetchPublishedPosts()

  return (
    <>
      <div className="mb-10 flex flex-col items-center">
        <div className="flex max-w-prose flex-col items-center gap-2 text-center">
          <TypographyH1>
            <span className="inline-block bg-gradient-to-r from-primary via-fuchsia-600 to-red-400 bg-clip-text text-5xl text-transparent">
              Hey 👋🏻
            </span>
            &nbsp;I&apos;m James.
          </TypographyH1>

          <TypographyP className="my-3 text-lg">
            I&apos;m a full-stack Software Engineer, UI/UX enthusiast, full-time tinkerer, & self-proclaimed developer
            advocate.
          </TypographyP>
          <TypographyP className="mb-4 text-lg">
            I&apos;m currently building rich frontend-focused experiences using full-stack web frameworks like{' '}
            <code className="gray-300 rounded-sm bg-gray-600 px-2 py-0.5 text-sm">Next.js</code>, &{' '}
            <code className="gray-300 rounded-sm bg-gray-600 px-2 py-0.5 text-sm">Remix</code>. I&apos;m writing blog
            posts about the things I&apos;m learning every step along the way.
          </TypographyP>
        </div>
      </div>
      <TypographyH2 id="latest-blog-posts">Latest Posts</TypographyH2>
      <section className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {posts.map((post) => (
          <Link className="col-span-2 h-full" key={post.slug} href={`/posts/${post.slug}`}>
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
                  {calculateTimeToRead(post.source)}&nbsp;min read
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
      <TypographyH2 id="latest-blog-posts">Subscribe</TypographyH2>
      <TypographyP className="mb-6 max-w-lg tracking-tight">
        Want to get notified direct to your email? I&apos;ve got you covered. My goal with this newsletter is to share
        exciting content with other web devs. My newsletter will deliver a brief synopsis of new content I&apos;ve
        published right when it goes live. It&apos;s always high quality, with zero noise.
      </TypographyP>
      <form className="flex w-full max-w-lg items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </form>
    </>
  )
}
