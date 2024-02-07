import { compareDesc, isFuture } from 'date-fns'
import { notFound } from 'next/navigation'

import { Post, allPosts } from 'contentlayer/generated'

export { allPosts } from 'contentlayer/generated'

export function fetchPublishedPosts(): Post[] {
  return allPosts.filter(isPostReleased).sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

export function isPostReleased(post: Post): boolean {
  const isPublished = post.status === 'published'
  const isReleased = !isFuture(new Date(post.publishedAt))

  return isPublished && isReleased
}

export function fetchPostBySlug(slug: string): Post {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    notFound()
  }

  return post
}

export function fetchPreviousPost(slug: string): Post | undefined {
  const publishedPosts = fetchPublishedPosts()
  const postIndex = publishedPosts.findIndex((post) => post._raw.flattenedPath === slug)

  if (postIndex === publishedPosts.length - 1) return undefined

  return publishedPosts[postIndex + 1]
}
