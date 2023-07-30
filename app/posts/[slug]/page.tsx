import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    // TODO: description: post.description
  }
}

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  // TODO: move this into action potentially?
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article>
      <div>
        <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
        <h1>{post.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}
