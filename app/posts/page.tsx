import { css } from 'styled-system/css'
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'

import { PageLayout } from '@ui/Layouts'
import { TimeFormat } from '@ui/TimeFormat'
import { Timeline } from '@ui/Timeline'

const articleBody = css({
  width: '100%',
  bg: 'slate.800',
  _hover: {
    bg: 'slate.700',
  },
  p: '1rem',
  borderRadius: 'lg',
})
const articleTitleStyles = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
})
const articleBriefStyles = css({
  pt: '1rem',
  fontSize: 'md',
})
const linkBlurb = css({
  mt: '1rem',
})

function getAllPosts(): Post[] {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
  return posts
}

export const metadata = {
  title: 'Articles - James Walsh',
  description: `Articles I've written`,
}

export default function PostsIndexPage() {
  const posts = getAllPosts()

  return (
    <PageLayout title="Articles about web dev, design, & JavaScript.">
      <Timeline>
        {posts.map((post) => (
          <Timeline.Item key={post.title}>
            <Timeline.LeftElement>
              <TimeFormat size="sm" dateTime={post.publishedAt} />
            </Timeline.LeftElement>
            <Timeline.RightElement>
              <Link href={post.url} className={articleBody}>
                <h2 className={articleTitleStyles}>{post.title}</h2>
                <p className={articleBriefStyles}>{post.brief}</p>
                <div className={linkBlurb} aria-hidden="true">
                  Read Full Article&nbsp;{`>`}
                </div>
              </Link>
            </Timeline.RightElement>
          </Timeline.Item>
        ))}
      </Timeline>
    </PageLayout>
  )
}
