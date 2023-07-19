import 'highlight.js/styles/github-dark.css'

import { PageLayout } from '@ui/Layouts'
import { fetchBlogPostBySlug } from './actions'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import { components } from '@ui/mdx/components'
import { css } from 'styled-system/css'
import { hstack, stack, container } from 'styled-system/patterns'
import { TimeFormat } from '@ui/TimeFormat'
import { Badge } from '@ui/Badge'
import Image from 'next/image'

const coverImageContainer = container({
  width: '100%',
  height: {
    mdTo2xl: '400px',
    smDown: '240px',
  },
})
const coverImageStyles = css({
  objectFit: 'cover',
  borderRadius: 'lg',
  mb: '2rem',
})
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

  // FIX - compileMDX does not parse markdown images correctly.
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
    <>
      <div className={coverImageContainer}>
        <Image
          src={post.coverImage}
          alt="Article cover image"
          className={coverImageStyles}
          priority
          fill
        />
      </div>
      <PageLayout title={post.title}>
        <div className={postMetaStyles}>
          <span className={timestampStyles}>
            <TimeFormat dateTime={post.dateAdded} />
          </span>
          <span className={hstack({ gap: 2 })}>
            {post.tags.map((tag) => (
              <Badge key={tag.name}>{tag.name.toLowerCase()}</Badge>
            ))}
          </span>
        </div>
        <article>{content}</article>
      </PageLayout>
    </>
  )
}
