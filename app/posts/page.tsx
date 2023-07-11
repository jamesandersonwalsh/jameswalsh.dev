import { vstack, grid, gridItem } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import format from 'date-fns/format'
import Link from 'next/link'

import { PageLayout } from '@ui/AppShell'
import { fetchBlogPosts } from './actions'

const articleListStyles = vstack({
  gap: 14,
  px: '1.5rem',
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
  background: 'slate.800',
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

export const metadata = {
  title: 'James Walsh | Blog',
  description: `Articles I've written`,
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  return (
    <PageLayout title="Explore my blog">
      <ol className={articleListStyles}>
        {posts.map((post) => (
          <li key={post.slug}>
            <article className={articleStyles}>
              <time className={timeStyles} dateTime={post.dateAdded}>
                {format(new Date(post.dateAdded), 'LLLL dd, yyyy')}
              </time>
              <Link href={`posts/${post.slug}`} className={articleBodyStyles}>
                <h2 className={articleTitleStyles}>{post.title}</h2>
                <p className={articleBriefStyles}>{post.brief}</p>
                <div aria-hidden="true"> Read Full Article</div>
              </Link>
            </article>
          </li>
        ))}
      </ol>
    </PageLayout>
  )
}
