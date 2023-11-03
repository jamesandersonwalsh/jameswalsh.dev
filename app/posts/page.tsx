import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { container, flex } from 'styled-system/patterns'

import { ArticleCTA } from './ArticleCTA'
import fetchPosts from './fetchPosts'

import { Timeline } from '@/components/deprecated/timeline'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Time } from '@/components/ui/time'
import { TypographyH1 } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/helpers'

const coverImageSmallContainer = container({
  height: '120px',
  width: '264px',
  marginInline: 0,
  my: '1rem',
})
const coverImageSmall = css({
  objectFit: 'cover',
  borderRadius: 'md',
})
const articleBriefStyles = css({
  fontSize: 'md',
})

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
          <Timeline.Item key={post.title}>
            <Timeline.LeftElement>
              <div className={css({ ml: '1rem' })}>
                <Time size="sm" dateTime={post.publishedAt} />
              </div>
            </Timeline.LeftElement>
            <Timeline.RightElement>
              <Link href={post.url} className={css({ width: '100%' })}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className={flex({ alignItems: 'center', mb: '1rem' })}>
                      <Clock width={24} height={24} />
                      &nbsp;
                      {calculateTimeToRead(post.body.raw)}&nbsp;min read
                    </span>
                    <p className={articleBriefStyles}>{post.brief}</p>
                    <div className={coverImageSmallContainer}>
                      <Image className={coverImageSmall} src={post.coverImage} alt={`${post.title} cover image`} fill />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ArticleCTA />
                  </CardFooter>
                </Card>
              </Link>
            </Timeline.RightElement>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}
