import { vstack, grid, gridItem } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import Link from 'next/link'

import { PageLayout } from '@ui/Layouts'
import { fetchBlogPosts } from './actions'
import { TimeFormat } from '@ui/TimeFormat'

const articleListStyles = vstack({
  gap: 14,
  px: '1.5rem',
  mt: '1.5rem',
  borderInlineStart: '1px solid',
  borderInlineStartColor: 'slate.500',
  writingMode: 'horizontal-tb',
})
const articleStyles = grid({
  columns: {
    mdTo2xl: 4,
    sm: 1,
  },
  gap: 2,
})
const timeStyles = css({
  textWrap: 'nowrap',
  fontSize: 'sm',
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

export const metadata = {
  title: 'Articles - James Walsh',
  description: `Articles I've written`,
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  return (
    <PageLayout title="Articles about web dev, design, & JavaScript.">
      <ol className={articleListStyles}>
        {posts.map((post) => (
          <li key={post.slug}>
            <article className={articleStyles}>
              <TimeFormat className={timeStyles} dateTime={post.dateAdded} />
              <Link href={`posts/${post.slug}`} className={articleBodyStyles}>
                <h2 className={articleTitleStyles}>{post.title}</h2>
                <p className={articleBriefStyles}>{post.brief}</p>
                <div className={linkBlurb} aria-hidden="true">
                  Read Full Article&nbsp;{`>`}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ol>
    </PageLayout>
  )
}
