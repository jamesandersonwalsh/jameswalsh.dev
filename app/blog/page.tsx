import { vstack, grid, gridItem } from 'styled-system/patterns'
import { PageLayout } from '@/components/AppShell/PageLayout'
import { css } from 'styled-system/css'
import { fetchBlogPosts } from './actions'
import format from 'date-fns/format'

const articleListStyles = vstack({
  gap: 14,
  px: '1.5rem',
  borderInlineStart: '1px solid',
  borderInlineStartColor: 'slate.500',
  writingMode: 'horizontal-tb',
})
const articleStyles = grid({
  columns: 4,
  gap: 2,
})
const timeStyles = css({
  textWrap: 'nowrap',
  fontSize: 'sm',
})
const articleBodyStyles = gridItem({
  colSpan: 3,
  background: 'slate.800',
  p: '1rem',
  borderRadius: 'lg',
  _hover: {
    cursor: 'pointer',
  },
})
const articleTitleStyles = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
})
const articleBriefStyles = css({
  paddingTop: '1rem',
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
              <div className={articleBodyStyles}>
                <h2 className={articleTitleStyles}>{post.title}</h2>
                <p className={articleBriefStyles}>{post.brief}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </PageLayout>
  )
}
