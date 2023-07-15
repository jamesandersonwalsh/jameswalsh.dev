import 'highlight.js/styles/github-dark.css'

import { PageLayout } from '@ui/Layouts'
import { fetchBlogPostBySlug } from './actions'
import format from 'date-fns/format'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import { components } from '@ui/mdx/components'
import { css } from 'styled-system/css'

type BlogPostPageProps = {
  params: { slug: string }
}

const timestampStyles = css({
  fontWeight: 'medium',
  fontSize: 'lg',
})

export async function generateMetadata({ params }: BlogPostPageProps) {
  const slugAsSentance = params.slug
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

  return {
    title: `${slugAsSentance} - James Walsh`,
    description: 'Article written by James Walsh, published on Hashnode.',
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug)

  const { content } = await compileMDX<{ title: string }>({
    source: post.contentMarkdown,
    components,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
        format: 'md',
      },
    },
  })

  return (
    <PageLayout title={post.title}>
      <article>
        <span className={timestampStyles}>
          Published on{' '}
          <time dateTime={post.dateAdded}>
            {format(new Date(post.dateAdded), 'LLLL dd, yyyy')}
          </time>
        </span>
        {content}
      </article>
    </PageLayout>
  )
}
