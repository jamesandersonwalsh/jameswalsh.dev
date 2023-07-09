import { PageLayout } from '@/components/AppShell/PageLayout'
import { fetchBlogPostBySlug } from './actions'
import format from 'date-fns/format'
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogPostPageProps = {
  params: { slug: string }
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPostBySlug(params.slug)

  return (
    <PageLayout title={post.title}>
      <article>
        <time dateTime={post.dateAdded}>
          {format(new Date(post.dateAdded), 'LLLL dd, yyyy')}
        </time>
        <MDXRemote source={post.contentMarkdown} />
      </article>
    </PageLayout>
  )
}
