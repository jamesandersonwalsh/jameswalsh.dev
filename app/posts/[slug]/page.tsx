import { allPosts } from 'contentlayer/generated'
import { Post } from '@/.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { css } from 'styled-system/css'
import { hstack, stack, flex } from 'styled-system/patterns'

import { TimeFormat } from '@ui/TimeFormat'
import { PageLayout } from '@ui/Layouts'
import { Badge } from '@ui/Badge'
import { mdxComponents } from '@ui/mdx-components'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/Button'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    description: post.brief,
  }
}

const timestampStyles = hstack({
  px: '0.5rem',
  fontWeight: 'medium',
  fontSize: 'lg',
})
const postMetaStyles = stack({
  width: '100%',
  gap: 4,
})
const calendar = css({
  bg: 'blue.700',
  borderRadius: 'md',
})

const buttonCTAs = hstack({
  gap: 6,
  borderTop: '1px solid',
  borderTopColor: 'gray.600',
  width: '100%',
  mt: '2rem',
  pt: '2rem',
})

interface PostPageProps {
  params: { slug: string }
}

function getPostBySlug(slug: string): Post {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return post
}

function getPreviousPost(slug: string): Post | undefined {
  const postIndex = allPosts.findIndex((post) => post._raw.flattenedPath === slug)
  if (postIndex === 0) return undefined

  return allPosts[postIndex - 1]
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  const previousPost = getPreviousPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className={css({ px: '6rem', py: '2rem' })}>
      <PageLayout title={post.title}>
        <div className={postMetaStyles}>
          <span className={timestampStyles}>
            <CalendarDaysIcon className={calendar} width={24} height={24} />
            <TimeFormat dateTime={post.publishedAt} />
          </span>
          <span className={hstack({ gap: 2 })}>
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag.toLowerCase()}</Badge>
            ))}
          </span>
        </div>
        <article>
          <MDXContent components={mdxComponents} />
        </article>
        <div className={buttonCTAs}>
          <Button as="a" href="/posts" variant="secondary">
            <ChevronLeftIcon width={16} height={16} />
            &nbsp;All posts
          </Button>
          {!!previousPost && (
            <Button as="a" href={previousPost.url} variant="secondary">
              Next&nbsp;
              <ChevronRightIcon width={16} height={16} />
            </Button>
          )}
        </div>
      </PageLayout>
    </div>
  )
}
