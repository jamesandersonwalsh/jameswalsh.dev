import { ClockIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { css } from 'styled-system/css'
import { hstack, stack, container } from 'styled-system/patterns'

import fetchPosts from '../fetchPosts'

import { Post } from '@/.contentlayer/generated'
import { calculateTimeToRead } from '@/helpers'
import { Badge } from '@ui/Badge'
import { Button } from '@ui/Button'
import { PageLayout } from '@ui/Layouts'
import { mdxComponents } from '@ui/mdx-components'
import { TimeFormat } from '@ui/TimeFormat'

const allPosts = fetchPosts()

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    description: post.brief,
    openGraph: {
      description: post.brief,
      images: [post.coverImage],
    },
  }
}

const pageContainer = css({
  px: {
    mdTo2xl: '6rem',
  },
  py: '2rem',
})
const coverImageContainer = container({
  width: '100%',
  height: {
    mdTo2xl: '400px',
    smDown: '240px',
  },
})
const coverImage = css({
  objectFit: 'cover',
  borderRadius: 'lg',
  mb: '2rem',
})
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
  color: 'primaryBg',
  borderRadius: 'md',
})

const buttonCTAs = hstack({
  gap: 6,
  borderTop: '1px solid',
  borderTopColor: 'slate.600',
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

  if (postIndex === allPosts.length - 1) return undefined

  return allPosts[postIndex + 1]
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)
  const previousPost = getPreviousPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className={pageContainer}>
      <div className={coverImageContainer}>
        <Image
          src={post.coverImage}
          alt="Article cover image"
          sizes="(max-width: 640px) 240px, (max-width:1536px) 400px"
          className={coverImage}
          priority
          fill
        />
      </div>
      <PageLayout title={post.title}>
        <div className={postMetaStyles}>
          <span className={timestampStyles}>
            <CalendarDaysIcon className={calendar} width={24} height={24} />
            <TimeFormat dateTime={post.publishedAt} />
            <span className={hstack({ gap: 1, ml: '0.5rem' })}>
              <ClockIcon width={24} height={24} />
              {calculateTimeToRead(post.body.raw)}&nbsp;min read
            </span>
          </span>
          <span className={hstack({ gap: 2 })}>
            {post.tags.map((tag) => (
              <Badge key={tag} text={tag} />
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
