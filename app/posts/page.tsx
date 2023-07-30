import { grid, gridItem } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Link from 'next/link'
import { compareDesc } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'

import { PageLayout } from '@ui/Layouts'
import { TimeFormat } from '@ui/TimeFormat'
import { UnorderedList } from '@/components/List'

const articleListContainer = css({
  px: '1.5rem',
  mt: '1.5rem',
  borderInlineStart: '1px solid',
  borderInlineStartColor: 'slate.500',
})
const article = grid({
  columns: {
    mdTo2xl: 4,
    sm: 1,
  },
  gap: 2,
})
const articleBodyStyles = gridItem({
  colSpan: {
    mdTo2xl: 3,
    sm: 1,
  },
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
      <div className={articleListContainer}>
        <UnorderedList>
          {posts.map((post) => (
            <UnorderedList.ListItem key={post.title}>
              <article className={article}>
                <TimeFormat size="sm" dateTime={post.publishedAt} />
                <Link href={post.url} className={articleBodyStyles}>
                  <h2 className={articleTitleStyles}>{post.title}</h2>
                  <p className={articleBriefStyles}>{post.brief}</p>
                  <div className={linkBlurb} aria-hidden="true">
                    Read Full Article&nbsp;{`>`}
                  </div>
                </Link>
              </article>
            </UnorderedList.ListItem>
          ))}
        </UnorderedList>
      </div>
    </PageLayout>
  )
}
