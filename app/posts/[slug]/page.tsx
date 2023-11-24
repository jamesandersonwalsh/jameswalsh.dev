import { formatDistanceToNow } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'

import { fetchAllPosts, fetchPostBySlug, getPreviousPost } from '../fetch-posts'

import { Tag } from './tag'

import { Time } from '@/components/custom/time'
import { components } from '@/components/mdx-components'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography'
import { calculateTimeToRead, cn } from '@/lib/utils'

export const generateStaticParams = async () => fetchAllPosts().map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = fetchPostBySlug(params.slug)
  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`)
  }

  return {
    title: post.title,
    description: post.brief,
    publisher: 'James Walsh',
    creator: 'James Walsh',
    authors: [{ url: 'https://jameswalsh.dev', name: 'James Walsh' }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.brief,
      images: [post.coverImage],
      type: 'article',
      tags: post.tags,
      publishedTime: post.publishedAt,
      locale: 'en_us',
    },
  }
}

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  const post = fetchPostBySlug(params.slug)
  const previousPost = getPreviousPost(params.slug)

  return (
    <div className="py-10 md:px-24">
      <AspectRatio ratio={16 / 9}>
        <Image src={post.coverImage} alt="Article cover image" className="rounded-xl" priority fill />
      </AspectRatio>
      <TypographyH1>{post.title}</TypographyH1>
      <div className="flex w-full flex-col gap-4">
        <span className="flex flex-row gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </span>
        <span className="flex flex-row text-lg font-medium">
          <Time dateTime={post.publishedAt} />
          <span className="ml-2 flex flex-row gap-1">
            —&nbsp;{calculateTimeToRead(post.content)}&nbsp;min read&nbsp;(
            {formatDistanceToNow(new Date(post.publishedAt))} ago)
          </span>
        </span>
      </div>
      <article className="mt-8">
        <Suspense
          fallback={
            <>
              <TypographyH1 className="animate-pulse">Loading...</TypographyH1>
            </>
          }
        >
          <MDXRemote source={post.content} components={components} />
        </Suspense>
      </article>
      <div className="border-color mt-8 flex w-full flex-row justify-between gap-6 border-t pt-8">
        <Link href="/posts" className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
          <ChevronLeft width={16} height={16} />
          &nbsp;All posts
        </Link>
        {!!previousPost && (
          <Link href={`/posts/${previousPost.slug}`} className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
            <ChevronRight width={16} height={16} />
            &nbsp;Next
          </Link>
        )}
      </div>
    </div>
  )
}
