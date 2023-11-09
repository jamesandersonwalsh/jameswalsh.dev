import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import fetchPosts from './fetchPosts'
import { ReadMore } from './read-more'

import { Time } from '@/components/custom/time'
import { Timeline, TimelineItem, TimelineLeftElement, TimelineRightElement } from '@/components/custom/timeline'
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
      <TypographyH1>Articles about web development.</TypographyH1>
      <Timeline>
        {posts.map((post) => (
          <TimelineItem key={post.title}>
            <TimelineLeftElement>
              <div className="ml-4">
                <Time size="md" dateTime={post.publishedAt} />
              </div>
            </TimelineLeftElement>
            <TimelineRightElement>
              <Link href={post.url} className="w-full">
                <Card>
                  <CardHeader>
                    <AspectRatio ratio={16 / 9}>
                      <Image className="rounded-lg" fill src={post.coverImage} alt={`${post.title} cover image`} />
                    </AspectRatio>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="mb-4 flex items-center">
                      <Clock width={24} height={24} />
                      &nbsp;
                      {calculateTimeToRead(post.body.raw)}&nbsp;min read
                    </span>
                    <TypographyP>{post.brief}</TypographyP>
                  </CardContent>
                  <CardFooter>
                    <ReadMore />
                  </CardFooter>
                </Card>
              </Link>
            </TimelineRightElement>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
