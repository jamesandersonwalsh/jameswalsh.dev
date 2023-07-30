import { allPosts } from 'contentlayer/generated'
import { Post } from '@/.contentlayer/generated'

import { css } from 'styled-system/css'
import { hstack, stack } from 'styled-system/patterns'
import { TimeFormat } from '@ui/TimeFormat'
import { PageLayout } from '@ui/Layouts'
import { Badge } from '@ui/Badge'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    description: post.brief,
  }
}

const timestampStyles = css({
  // REFACTOR - These timestamp borders should be componentized.
  borderInlineStart: '2px solid',
  borderInlineStartColor: 'slate.500',
  px: '0.5rem',
  fontWeight: 'medium',
  fontSize: 'lg',
})
const postMetaStyles = stack({
  width: '100%',
  gap: 4,
})

interface PostPageProps {
  params: { slug: string }
}

function getPostBySlug(slug: string): Post {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return post
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  return (
    <PageLayout title={post.title}>
      <div className={postMetaStyles}>
        <span className={timestampStyles}>
          <TimeFormat dateTime={post.publishedAt} />
        </span>
        <span className={hstack({ gap: 2 })}>
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag.toLowerCase()}</Badge>
          ))}
        </span>
      </div>
      <article dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </PageLayout>
  )
}
