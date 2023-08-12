import { css } from 'styled-system/css'
import { container, flex } from 'styled-system/patterns'
import Link from 'next/link'
import Image from 'next/image'

import { PageLayout } from '@ui/Layouts'
import { TimeFormat } from '@ui/TimeFormat'
import { Timeline } from '@ui/Timeline'
import { Card } from '@ui/Card'
import { ArticleCTA } from './ArticleCTA'
import { ClockIcon } from '@heroicons/react/24/outline'
import { calculateTimeToRead } from '@/helpers'
import fetchPosts from './fetchPosts'

const articleTitleStyles = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
})
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
      <PageLayout.Title align="left">Articles about web development.</PageLayout.Title>
      <PageLayout.Content>
        <Timeline>
          {posts.map((post) => (
            <Timeline.Item key={post.title}>
              <Timeline.LeftElement>
                <div className={css({ ml: '1rem' })}>
                  <TimeFormat size="sm" dateTime={post.publishedAt} />
                </div>
              </Timeline.LeftElement>
              <Timeline.RightElement>
                <Link href={post.url} className={css({ width: '100%' })}>
                  <Card variant="ghost">
                    <h2 className={articleTitleStyles}>{post.title}</h2>
                    <Card.Body>
                      <span className={flex({ alignItems: 'center', mb: '1rem' })}>
                        <ClockIcon width={24} height={24} />
                        &nbsp;
                        {calculateTimeToRead(post.body.raw)}&nbsp;min read
                      </span>
                      <p className={articleBriefStyles}>{post.brief}</p>
                      <div className={coverImageSmallContainer}>
                        <Image
                          className={coverImageSmall}
                          src={post.coverImage}
                          alt={`${post.title} cover image`}
                          fill
                        />
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <ArticleCTA />
                    </Card.Footer>
                  </Card>
                </Link>
              </Timeline.RightElement>
            </Timeline.Item>
          ))}
        </Timeline>
      </PageLayout.Content>
    </>
  )
}
