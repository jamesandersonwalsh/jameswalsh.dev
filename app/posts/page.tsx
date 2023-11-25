import Image from 'next/image'
import Link from 'next/link'

import fetchPosts from './fetch-posts'
import { ReadMore } from './read-more'

import { Time } from '@/components/custom/time'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/helpers'

export const metadata = {
  title: 'Articles - James Walsh',
  description: `Articles I've written`,
}

export default function PostsIndexPage() {
  const posts = fetchPosts()

  return (
    <>
      <TypographyH1>Latest Blog Posts</TypographyH1>
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8">
        {posts.map((post) => (
          <Link key={post.title} href={post.url} className="col-span-4 w-full">
            <Card className="h-full">
              <CardHeader className="gap-6">
                <AspectRatio ratio={16 / 9}>
                  <Image className="rounded-lg" fill src={post.coverImage} alt={`${post.title} cover image`} />
                </AspectRatio>
                <CardTitle>{post.title}</CardTitle>
                <span className="text-muted-foreground">
                  <Time dateTime={post.publishedAt} />
                  &nbsp;—&nbsp;{calculateTimeToRead(post.body.raw)}&nbsp;min read
                </span>
              </CardHeader>
              <CardContent>
                <TypographyP>{post.brief}</TypographyP>
              </CardContent>
              <CardFooter>
                <ReadMore />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
