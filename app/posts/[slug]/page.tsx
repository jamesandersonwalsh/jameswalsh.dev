import { formatDistanceToNow } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Tag } from './tag'

import { mdxComponents } from '@/components/mdx-components'
import { Time } from '@/components/time'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography'
import { fetchPublishedPosts, fetchPostBySlug, fetchPreviousPost } from '@/lib/posts'
import { calculateTimeToRead, cn } from '@/lib/utils'

export const generateStaticParams = async () => fetchPublishedPosts().map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = fetchPostBySlug(params.slug)

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
      images: [post.thumbnail],
      type: 'article',
      tags: post.tags,
      publishedTime: post.publishedAt,
      locale: 'en_us',
    },
  }
}

export interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  const post = fetchPostBySlug(params.slug)
  const previousPost = fetchPreviousPost(params.slug)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="py-10">
      <AspectRatio ratio={16 / 9}>
        <Image src={post.thumbnail} alt="Article cover image" className="rounded-xl border-2" priority fill />
      </AspectRatio>
      <TypographyH1>{post.title}</TypographyH1>
      <div className="flex w-full flex-col gap-4">
        <span className="flex flex-row flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </span>
        <span className="flex flex-row text-lg font-medium">
          <Time dateTime={post.publishedAt} />
          <span className="ml-2 flex flex-row gap-1 text-sm md:text-lg">
            —&nbsp;{calculateTimeToRead(post.body.raw)}&nbsp;min read&nbsp;(
            {formatDistanceToNow(new Date(post.publishedAt))} ago)
          </span>
        </span>
      </div>
      <article className="mt-8">
        <MDXContent components={mdxComponents} />
      </article>
      <div className="border-color mt-8 flex w-full flex-row justify-between gap-6 border-t pt-8">
        <Link href="/posts" className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
          <ChevronLeft width={16} height={16} />
          &nbsp;All posts
        </Link>
        {!!previousPost && (
          <Link href={previousPost.url} className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
            <ChevronRight width={16} height={16} />
            &nbsp;Next
          </Link>
        )}
      </div>
    </div>
  )
}
