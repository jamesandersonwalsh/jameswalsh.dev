import { PageLayout } from '@/components/AppShell/PageLayout'
import { fetchBlogPostBySlug } from './actions'
import format from 'date-fns/format'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import { components } from '@/components/mdx/components'

type BlogPostPageProps = {
  params: { slug: string }
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
