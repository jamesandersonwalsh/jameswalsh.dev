import 'highlight.js/styles/github-dark.css'

import { PageLayout } from '@ui/Layouts'
import { fetchBlogPostBySlug } from './actions'
import format from 'date-fns/format'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import { components } from '@ui/mdx/components'

type BlogPostPageProps = {
  params: { slug: string }
}

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
      },
    },
  })

  return (
    <PageLayout title={post.title}>
      <article>
        Published On{' '}
        <time dateTime={post.dateAdded}>
          {format(new Date(post.dateAdded), 'LLLL dd, yyyy')}
        </time>
        {content}
      </article>
    </PageLayout>
  )
}
